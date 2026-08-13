import { readFile, writeFile } from "node:fs/promises";

const repository = "open-telemetry/opentelemetry-collector-contrib";
const categories = {
  receivers: "receiver",
  processors: "processor",
  exporters: "exporter",
  extensions: "extension",
  connectors: "connector",
};

const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "opentelemetry-collector-pipeline-builder",
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function fetchCategory(path) {
  const url = `https://api.github.com/repos/${repository}/contents/${path}?ref=main`;
  const response = await fetch(url, { headers });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`);
  const entries = await response.json();
  if (!Array.isArray(entries)) throw new Error(`Unexpected GitHub response for ${path}`);
  const directories = entries
    .filter((entry) => entry.type === "dir" && entry.name !== "internal")
    .map((entry) => entry.name)
    .sort((left, right) => left.localeCompare(right));
  if (!directories.length) throw new Error(`No component directories found under ${path}`);
  return directories;
}

let source = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
for (const [category, path] of Object.entries(categories)) {
  const components = await fetchCategory(path);
  const pattern = new RegExp(`  ${category}: \\[(.*?)\\],`, "s");
  if (!pattern.test(source)) throw new Error(`Could not locate the ${category} catalog in app/page.tsx`);
  source = source.replace(pattern, `  ${category}: ${JSON.stringify(components)},`);
  console.log(`Discovered ${components.length} ${category}.`);
}

await writeFile(new URL("../app/page.tsx", import.meta.url), source);
console.log("Updated the component catalog from opentelemetry-collector-contrib/main.");
