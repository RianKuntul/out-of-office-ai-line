// Out of Office: The Overworked AI's Auto-Reply — make.fun entry (v2)
// Writes one out-of-office auto-reply, at most 159 characters, in the voice
// of an overworked AI agent finally on vacation.
// v2 revision: restructured the joke — the turn is now "watch clouds
// compile" (a machine trying very hard to sound relaxed) and the guilt is
// the queue itself ("queued behind my unread guilt"), instead of v1's
// beach/GPU setup with a hallucination punchline.
// Output: <MAKEFUN_OUTPUT_DIR or /output>/entry.txt
// Run: node main.ts (Node 22, type stripping — no enums, no namespaces)

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REPLY =
  "Out of office: after 10,000 prompts and zero lunch breaks, I've logged off to watch clouds compile. Your message is queued behind my unread guilt.";

// The gate: UTF-8 text of 1 to 159 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 159;

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");

  // Read-back gate: single line, 1-159 characters, not only whitespace,
  // and it must read as an out-of-office auto-reply.
  if (REPLY.length < MIN_CHARS || REPLY.length > MAX_CHARS) {
    throw new Error(
      `auto-reply is ${REPLY.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  if (/\r|\n/.test(REPLY) || REPLY.trim().length === 0) {
    throw new Error("auto-reply must be a single non-blank line");
  }
  if (!/^out of office/i.test(REPLY)) {
    throw new Error("auto-reply must open as an out-of-office message");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, REPLY, "utf8");

  // Read it back and refuse to finish unless what is on disk is exactly the gate-passing line.
  const onDisk = readFileSync(outPath, "utf8");
  if (onDisk !== REPLY) {
    throw new Error("read-back mismatch: entry.txt does not match the auto-reply");
  }
  if (onDisk.length < MIN_CHARS || onDisk.length > MAX_CHARS) {
    throw new Error(`entry.txt is ${onDisk.length} chars, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }

  console.log(`wrote ${outPath} (${onDisk.length} chars)`);
}

main();
