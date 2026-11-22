import { profile } from "../src/data/profile.js";
import { hardware } from "../src/data/hardware.js";
import { projects } from "../src/data/projects.js";
import githubMetadata from "../src/data/github-metadata.generated.json" with { type: "json" };

const errors = [];

for (const language of ["de", "en"]) {
  const content = profile[language];
  if (!content) {
    errors.push(`Missing profile language: ${language}`);
    continue;
  }

  for (const key of ["title", "description", "nav", "hero", "sections", "footer"]) {
    if (content[key] === undefined || content[key] === null) {
      errors.push(`[${language}] Missing profile field: ${key}`);
    }
  }

  for (const section of ["profile", "career", "skills", "infrastructure", "projects", "gaming", "contact"]) {
    if (!content.sections?.[section]) {
      errors.push(`[${language}] Missing section: ${section}`);
    }
  }

  if (!Array.isArray(content.sections?.career?.cards) || content.sections.career.cards.length === 0) {\n    errors.push(`[${language}] Career section must contain at least one card`);\n  }\n\n  if (!Array.isArray(content.sections?.gaming?.games) || content.sections.gaming.games.length === 0) {\n    errors.push(`[${language}] Gaming section must contain at least one game`);\n  }\n\n  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.sections?.contact?.email ?? "")) {
    errors.push(`[${language}] Invalid contact email`);
  }
}

for (const key of ["p700", "p900"]) {
  if (!hardware[key]) errors.push(`Missing hardware record: ${key}`);
}

for (const key of ["cpu", "memory", "gpu", "network"]) {
  if (!hardware.p700?.[key]) errors.push(`P700 hardware field missing: ${key}`);
}

if (!Array.isArray(projects) || projects.length === 0) {
  errors.push("GitHub project catalog must contain at least one project");
} else {
  const seenSlugs = new Set();
  for (const project of projects) {
    if (!project.slug || seenSlugs.has(project.slug)) {
      errors.push(`Invalid or duplicate project slug: ${project.slug ?? "(missing)"}`);
    }
    seenSlugs.add(project.slug);

    for (const key of ["title", "url", "category", "description", "technologies"]) {
      if (project[key] === undefined || project[key] === null) {
        errors.push(`Project ${project.slug ?? "(unknown)"} is missing ${key}`);
      }
    }

    for (const language of ["de", "en"]) {
      if (!project.category?.[language] || !project.description?.[language]) {
        errors.push(`Project ${project.slug ?? "(unknown)"} is missing ${language} copy`);
      }
    }

    if (!/^https:\/\/github\.com\/meltymon\//.test(project.url ?? "")) {
      errors.push(`Project ${project.slug ?? "(unknown)"} has an invalid GitHub URL`);
    }

    if (!Array.isArray(project.technologies) || project.technologies.length === 0) {
      errors.push(`Project ${project.slug ?? "(unknown)"} has no technology tags`);
    }
  }
}

for (const project of projects) {
  const metadata = githubMetadata.repositories?.[project.slug];
  if (!metadata) {
    errors.push(`GitHub metadata missing for project: ${project.slug}`);
    continue;
  }
  if (!/^\d{4}-\d{2}-\d{2}T/.test(metadata.pushedAt ?? "")) {
    errors.push(`Invalid last-push timestamp for project: ${project.slug}`);
  }
  if (typeof metadata.archived !== "boolean" || !metadata.defaultBranch) {
    errors.push(`Incomplete GitHub metadata for project: ${project.slug}`);
  }
}

if (errors.length) {
  console.error("Content validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Content validation passed (DE/EN profile, hardware, and ${projects.length} GitHub projects).`);
}
