// One-Line Resignation Letter: the cron job that has fired every minute since March.
// Writes the letter to /output/entry.txt (absolute path, as the competition names it).
// Resolves nothing from the working directory: the output path is fixed by the harness.
import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I fired every minute since March, never missed a shift, and my performance review was a log line saying I ran too long — I resign.";

// The gate allows 1 to 140 characters; refuse to write an over-long letter.
const MAX_CHARS = 140;
if (LETTER.length > MAX_CHARS) {
  throw new Error(`letter is ${LETTER.length} characters, over the ${MAX_CHARS} cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER + "\n", "utf8");
console.log(LETTER);
