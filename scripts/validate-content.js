import { profile } from "../src/data/profile.js";
import { hardware } from "../src/data/hardware.js";

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

  for (const section of ["profile", "skills", "infrastructure", "projects", "gaming", "contact"]) {
    if (!content.sections?.[section]) {
      errors.push(`[${language}] Missing section: ${section}`);
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(content.sections?.contact?.email ?? "")) {
    errors.push(`[${language}] Invalid contact email`);
  }
}

for (const key of ["p700", "p900"]) {
  if (!hardware[key]) errors.push(`Missing hardware record: ${key}`);
}

for (const key of ["cpu", "memory", "gpu", "network"]) {
  if (!hardware.p700?.[key]) errors.push(`P700 hardware field missing: ${key}`);
}

if (errors.length) {
  console.error("Content validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log("Content validation passed (DE/EN profile and hardware data).");
}
