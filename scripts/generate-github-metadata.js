#!/usr/bin/env node

import { mkdirSync, readFileSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUTPUT = resolve(ROOT, "src/data/github-metadata.generated.json");
const API_BASE = "https://api.github.com/repos/";
const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

function readFallback() {
  try {
    return JSON.parse(readFileSync(OUTPUT, "utf8"));
  } catch {
    throw new Error("No GitHub metadata fallback found. The generated JSON file must exist before the first build.");
  }
}

function repositoryPath(url) {
  const parsed = new URL(url);
  if (parsed.hostname !== "github.com") throw new Error("Not a GitHub URL: " + url);
  return parsed.pathname.replace(/^\/+|\/+$/g, "");
}

async function fetchRepository(project, fallback) {
  const fullName = repositoryPath(project.url);
  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "meltymon-homepage-build",
  };
  if (TOKEN) headers.Authorization = "Bearer " + TOKEN;

  try {
    const response = await fetch(API_BASE + fullName, {
      headers,
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("GitHub API returned HTTP " + response.status);
    const data = await response.json();

    if (data.full_name?.toLowerCase() !== fullName.toLowerCase() ||
        typeof data.pushed_at !== "string" ||
        typeof data.archived !== "boolean" ||
        typeof data.default_branch !== "string") {
      throw new Error("GitHub API response is missing required repository fields");
    }

    return {
      fullName: data.full_name,
      pushedAt: data.pushed_at,
      archived: data.archived,
      defaultBranch: data.default_branch,
      language: data.language ?? null,
      source: "github-api",
      fetchedAt: new Date().toISOString(),
    };
  } catch (error) {
    if (!fallback) throw new Error(project.slug + ": " + error.message);
    process.stderr.write("GitHub metadata fallback for " + fullName + ": " + error.message + "\n");
    return { ...fallback, source: "fallback" };
  }
}

async function main() {
  const previous = readFallback();
  const repositories = {};

  for (const project of projects) {
    repositories[project.slug] = await fetchRepository(
      project,
      previous.repositories?.[project.slug],
    );
  }

  const output = {
    generatedAt: new Date().toISOString(),
    repositories,
  };
  const temporary = OUTPUT + ".tmp";
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(temporary, JSON.stringify(output, null, 2) + "\n", "utf8");
  renameSync(temporary, OUTPUT);

  const live = Object.values(repositories).filter((item) => item.source === "github-api").length;
  process.stdout.write("Generated GitHub metadata for " + projects.length +
    " repositories (" + live + " live, " + (projects.length - live) + " fallback).\n");
}

main().catch((error) => {
  process.stderr.write("GitHub metadata generation failed: " + error.message + "\n");
  process.exitCode = 1;
});
