#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const OUTPUT_FILE = "src/data/changelog.generated.json";
const REPOSITORY_URL = "https://github.com/meltymon/meltymon.github.io";

function parseArguments(args) {
  const options = { limit: null, write: false, help: false };
  for (let index = 0; index < args.length; index += 1) {
    const argument = args[index];
    if (argument === "--write") options.write = true;
    else if (argument === "--help" || argument === "-h") options.help = true;
    else if (argument === "--limit") {
      const value = Number(args[index + 1]);
      if (!Number.isInteger(value) || value < 1 || value > 5000) {
        throw new Error("--limit expects an integer between 1 and 5000.");
      }
      options.limit = value;
      index += 1;
    } else throw new Error("Unknown argument: " + argument);
  }
  return options;
}

function categoryFor(subject) {
  const match = subject.match(/^([a-z]+)(?:\\([^)]*\\))?(!)?:\\s+/i);
  const type = match?.[1]?.toLowerCase();
  if (["security", "sec", "vuln"].includes(type) || /security|vulnerab|cve/i.test(subject)) return "security";
  if (["feat", "feature"].includes(type)) return "feature";
  if (["fix", "bugfix"].includes(type)) return "fix";
  if (["refactor", "perf", "style", "improve", "ui"].includes(type)) return "improvement";
  if (["docs", "doc", "content"].includes(type)) return "docs";
  if (["test", "build", "ci", "chore", "deps", "release"].includes(type)) return "maintenance";
  if (/\\b(add|implement|introduce|create|support)\\b/i.test(subject)) return "feature";
  if (/\\b(fix|repair|resolve|correct)\\b/i.test(subject)) return "fix";
  if (/\\b(refactor|optim|improv)\\b/i.test(subject)) return "improvement";
  if (/\\b(document|readme|docs)\\b/i.test(subject)) return "docs";
  return "other";
}

function groupEntries(log) {
  const grouped = new Map();
  for (const line of log.split("\\n").filter(Boolean)) {
    const [hash, shortHash, date, subject] = line.split("\\x1f");
    if (!hash || !shortHash || !date || !subject) throw new Error("Could not parse Git log entry: " + line);
    const key = subject.trim();
    const existing = grouped.get(key);
    if (existing) { existing.commitCount += 1; continue; }
    grouped.set(key, {
      hash, shortHash, date, subject, category: categoryFor(subject),
      url: REPOSITORY_URL + "/commit/" + hash, commitCount: 1,
    });
  }
  return [...grouped.values()];
}

function main() {
  const options = parseArguments(process.argv.slice(2));
  if (options.help) {
    process.stdout.write("Usage: node scripts/generate-changelog.js [--limit 1..5000] [--write]\\nDefault: include the complete non-merge Git history.\\n");
    return;
  }
  const root = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
  const args = ["log", "--no-merges"];
  if (options.limit) args.push("--max-count=" + options.limit);
  args.push("--date=short", "--format=%H%x1f%h%x1f%cs%x1f%s");
  const log = execFileSync("git", args, { cwd: root, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 }).trim();
  if (!log) throw new Error("No Git commits found. Run this command inside a repository with commit history.");
  const entries = groupEntries(log);
  const output = { repository: "meltymon/meltymon.github.io", generatedFrom: "git log", entries };
  const json = JSON.stringify(output, null, 2) + "\\n";
  if (!options.write) { process.stdout.write(json); return; }
  const outputPath = resolve(root, OUTPUT_FILE);
  const temporaryPath = outputPath + ".tmp";
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(temporaryPath, json, "utf8");
  renameSync(temporaryPath, outputPath);
  process.stdout.write("Generated " + entries.length + " changelog entries from complete Git history: " + OUTPUT_FILE + "\\n");
}
try { main(); } catch (error) {
  process.stderr.write("Changelog generation failed: " + error.message + "\\n");
  process.exitCode = 1;
}
