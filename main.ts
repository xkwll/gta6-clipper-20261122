// Clip: GTA 6 Trailer 2 (Rockstar, VQRLujxTm3c), 30s-50s, cropped
// vertical 720x1280, hook "GTA 6 IS HERE", pitch on screen 12s-20s.
// The clip file itself is handed to the uploader; only its YouTube
// address lives in this repository, in VIDEO.json.
// gta6-clipper-01: the scored thing is the YouTube video, not this code.
// This program only hands VIDEO.json to the gate: it reads the file from
// the repository root and writes the exact same bytes to the output
// directory. No network, no clock, no files outside the repository.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(repoRoot, "VIDEO.json");
const targetPath = join(outDir, "VIDEO.json");

const payload = readFileSync(sourcePath);

// Refuse to hand over a file that is not a JSON object naming a URL,
// so a broken VIDEO.json fails loudly instead of reaching the gate.
const parsed = JSON.parse(payload.toString("utf8")) as unknown;
if (typeof parsed !== "object" || parsed === null || typeof (parsed as { url?: unknown }).url !== "string") {
  throw new Error("VIDEO.json must be a JSON object with a string url");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, payload);
