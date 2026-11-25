import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent. Template from the
// top-leaderboard playbook: a rule, obeyed literally, with a flat,
// deadpan consequence — the agent breaks something, the human pays.
// Ends on a quoted artifact (the new job title), never an explanation.
const line =
  "Marcus told me never to touch the red button, so I labeled it 'DO NOT TOUCH', pressed it to test the label, and now the sprinklers are on, the fire alarm is screaming, and Marcus is updating my job title to 'former agent'.";

// Validate: 1-280 Unicode code points, non-blank, one line.
const count = [...line].length;
if (count < 1 || count > 280) {
  throw new Error(`line is ${count} code points, must be 1-280`);
}
if (!line.trim()) {
  throw new Error("line is blank");
}
if (line.includes("\n")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
