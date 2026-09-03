#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { compilePlan, normalizeResult } from "./core.js";
import { runCalle } from "./calle.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

export function buildJudgeWalkthrough(raw) {
  const plan = compilePlan(raw);
  let runnerInvoked = false;
  let refusal = "";
  try {
    runCalle("start", plan, {
      env: {},
      approvalId: plan.approval_id,
      runner: () => {
        runnerInvoked = true;
        throw new Error("judge walkthrough must never invoke CALL-E");
      },
    });
  } catch (error) {
    refusal = error.message;
  }
  if (runnerInvoked || !/live calls disabled/.test(refusal)) {
    throw new Error("fail-closed proof did not stop before CALL-E invocation");
  }

  const normalized = normalizeResult(plan, {
    status: "COMPLETED",
    summary: "Synthetic fixture only; raw transcripts and phone values are intentionally discarded.",
    phone: raw.official_phone,
  });
  const retained = Object.keys(normalized).sort().join(", ");
  const questionList = plan.questions.map((question, index) => `   ${index + 1}. ${question}`).join("\n");

  return [
    "PAYOUTPROOF — 90-SECOND JUDGE WALKTHROUGH",
    "Reserved fictional input. Deterministic local evaluation. NO LIVE CALL WAS PLACED.",
    "",
    "[00:00–00:12] 1 / REAL-WORLD BLOCKER",
    `A public reward exists, but ${plan.target_name} has not published complete payout logistics.`,
    `Opportunity source: ${plan.opportunity_url}`,
    `Official-contact source: ${plan.contact_source_url}`,
    "PayoutProof prevents autonomous work from starting blindly.",
    "",
    "[00:12–00:27] 2 / ONE BOUNDED INQUIRY",
    `Destination shown only as ${plan.masked_phone}; the fixture uses the NANP-reserved 202-555-0147 range.`,
    `Exactly ${plan.max_calls} call; no scheduler or retry. Five public-policy questions:`,
    questionList,
    "",
    "[00:27–00:43] 3 / DETERMINISTIC CUSTODY",
    `Packet hash: ${plan.packet_hash}`,
    `Idempotency key: ${plan.idempotency_key}`,
    `Exact approval ID: ${plan.approval_id}`,
    `Expiry: ${plan.expires_at}`,
    "The same reviewed packet always produces the same custody identifiers.",
    "",
    "[00:43–00:56] 4 / FAIL-CLOSED LIVE GATE",
    `Unauthorized start result: ${refusal}`,
    `CALL-E runner invoked: ${runnerInvoked}`,
    "The app stopped before any provider process or network side effect.",
    "",
    "[00:56–01:12] 5 / PRIVACY-MINIMIZED OUTCOME",
    "A clearly labeled synthetic COMPLETED fixture is passed through the production normalizer.",
    JSON.stringify(normalized, null, 2),
    `Only allowlisted fields remain: ${retained}`,
    "Raw transcript, summary, and full phone are not retained; verbal answers still require a written source.",
    "",
    "[01:12–01:30] 6 / RUBRIC AND NEXT PROOF",
    "Impact: prevents wasted work on opportunities with unusable payout terms.",
    "Idea: converts one narrow phone interaction into a permissioned evidence checkpoint.",
    "Implementation: strict validation, deterministic hashes, idempotency, fail-closed dual gate, normalized output.",
    "Experience: one chronological path from incomplete terms to a written-source-required verdict.",
    "Pending authentic proof: one separately authorized CALL-E run, sanitized evidence, natural demo, and Devpost receipt.",
    "",
    "END — npm test follows when invoked through `npm run judge`.",
  ].join("\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const fixture = JSON.parse(readFileSync(resolve(root, "examples/fictional-platform.json"), "utf8"));
  const output = buildJudgeWalkthrough(fixture);
  const artifact = resolve(root, "artifacts/judge-walkthrough.txt");
  mkdirSync(dirname(artifact), { recursive: true });
  writeFileSync(artifact, `${output}\n`, "utf8");
  console.log(output);
  console.error(`\nWrote ${artifact}`);
}
