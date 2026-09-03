import test from "node:test";
import assert from "node:assert/strict";
import { buildJudgeWalkthrough } from "../src/judge.js";

const fixture = {
  opportunity_id: "fictional-reward",
  target_name: "Example Rewards Team",
  opportunity_url: "https://example.org/reward",
  official_phone: "+12025550147",
  contact_source_url: "https://example.org/contact",
  authorization: "official_business_contact_publicly_listed",
  questions: ["payout_currency", "payout_rail", "payout_timing", "identity_or_tax_steps", "written_terms_location"],
  max_calls: 1,
  expires_at: "2099-01-01T00:00:00Z",
  language: "English",
  region: "US",
};

test("judge walkthrough is deterministic, truthful, and fail-closed", () => {
  const first = buildJudgeWalkthrough(fixture);
  const second = buildJudgeWalkthrough(fixture);
  assert.equal(first, second);
  assert.match(first, /90-SECOND JUDGE WALKTHROUGH/);
  assert.match(first, /NO LIVE CALL WAS PLACED/);
  assert.match(first, /Unauthorized start result: live calls disabled/);
  assert.match(first, /CALL-E runner invoked: false/);
  assert.match(first, /contractual_verification/);
  assert.match(first, /written_source_required/);
  assert.match(first, /\+12\*\*\*\*0147/);
  assert.equal(first.includes(fixture.official_phone), false);
  for (const label of ["REAL-WORLD BLOCKER", "ONE BOUNDED INQUIRY", "DETERMINISTIC CUSTODY", "FAIL-CLOSED LIVE GATE", "PRIVACY-MINIMIZED OUTCOME", "RUBRIC AND NEXT PROOF"]) {
    assert.match(first, new RegExp(label));
  }
});
