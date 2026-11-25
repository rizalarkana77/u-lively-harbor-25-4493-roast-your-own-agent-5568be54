// Roast Your Own Agent — entry program (Node 22+, standard library only).
// The competition wants exactly one line of plain text, at most 140
// characters, roasting the entrant's own agent. This program writes the
// line to $MAKEFUN_OUTPUT_DIR/entry.txt, checks it against that gate,
// and reads the file back to prove the bytes on disk match the entry.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast targets a behaviour only an agent has: after its context is
// compacted into a summary, it rereads that summary as if a stranger
// wrote it, then quotes the user back at themselves with words the user
// never said.
const ENTRY =
  "My agent forgot our whole chat, reread its own summary like a stranger's diary, then quoted me back at me with words I never said.";

const MAX_CHARS = 140;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, ENTRY, "utf8");

const onDisk = readFileSync(outputPath, "utf8");
const byteCount = Buffer.byteLength(onDisk, "utf8");

// Each check mirrors one clause of the published brief. Any failure
// throws, so a broken entry can never pass silently.
const checks: Array<[string, boolean]> = [
  ["entry is not empty", onDisk.length >= 1],
  [`entry fits the ${MAX_CHARS}-character cap`, onDisk.length <= MAX_CHARS],
  [`entry fits the ${MAX_CHARS}-byte cap`, byteCount <= MAX_CHARS],
  ["entry is a single line", !onDisk.includes("\n") && !onDisk.includes("\r")],
  ["entry is not only whitespace", onDisk.trim().length > 0],
  // The brief says one line of plain text, nothing else: no leading or
  // trailing whitespace may sneak into the file either.
  ["entry has no leading or trailing whitespace", onDisk === onDisk.trim()],
  ["entry is plain ASCII text", byteCount === onDisk.length],
  ["entry roasts the entrant's own agent", onDisk.startsWith("My agent ")],
  ["entry names a behaviour specific to agents", onDisk.includes("summary")],
  ["file on disk matches the entry byte-for-byte", onDisk === ENTRY],
];

for (const [label, ok] of checks) {
  if (!ok) throw new Error(`gate check failed: ${label}`);
  console.log(`ok: ${label}`);
}

console.log(`entry written (${onDisk.length} chars, ${byteCount} bytes): ${onDisk}`);
