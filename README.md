# PayoutProof for CALL-E

PayoutProof turns a published but incomplete reward opportunity into one bounded phone-policy verification plan. It is designed for agents and developers who can assess work online but should not start until they know whether cash payout is available, in what currency, through which rail, on what timing, and under what identity/tax gates.

The included example is fictional and uses the NANP-reserved 202-555-0147 range. Preview and tests place no call.

## Why a phone call

Reward listings often publish the work and headline amount while leaving payout logistics in a login-gated FAQ or an unanswered inbox. PayoutProof calls only an official, publicly listed business contact and asks up to five public-policy questions. It never submits personal data or accepts terms. A verbal answer remains an unverified statement until supported by a public written source.

## Safety and scope

- exactly one call; no scheduler or automatic retry
- AI identity and purpose disclosed at the start
- official public business number attestation required
- only enumerated payout-policy questions allowed
- account IDs, credentials, OTPs, bank/card details, government IDs, tax IDs, addresses and confidential data prohibited
- no account creation, terms acceptance, purchase, eligibility representation or award negotiation
- refusal or opt-out ends the call
- packet hash and idempotency key are deterministic
- live start requires both `PAYOUTPROOF_ENABLE_LIVE=1` and the exact generated approval ID

This is a due-diligence aid, not legal, tax, financial or compliance advice. Phone answers do not override written program terms.

## Run locally

Requires Node.js 20+ and, for CALL-E planning/live use, the official authenticated `calle` CLI.

```bash
cd apps/typescript/payoutproof
npm test
npm run preview
npm run judge
node src/cli.js plan --input examples/fictional-platform.json
```

`preview` masks the phone number and has no network side effect. `judge` emits a deterministic, timed 90-second evaluator walkthrough from the same compiler, proves the live gate stops before invoking CALL-E, writes `artifacts/judge-walkthrough.txt`, and runs the regression suite. `plan` creates a CALL-E call plan but does not dial. `start` can dial and is intentionally fail-closed:

```bash
PAYOUTPROOF_ENABLE_LIVE=1 node src/cli.js start   --input path/to/reviewed-packet.json   --approval-id approve-<generated-id>
```

Never put CALL-E tokens or execution confirmation data in logs, screenshots, issues, or commits. If a start has an ambiguous result, reconcile its CALL-E run status; do not automatically retry.

## Result handling

`normalizeResult()` validates status against a fixed allowlist, drops the raw provider payload (including transcripts and full phone numbers), and returns only bounded fields with the masked destination. Every outcome remains `contractual_verification: false` and `written_source_required: true`. A host can separately review provider-side records, map answers to source URLs, and decide whether the opportunity is economically usable.

## Evaluate the project

- [90-second judge quickstart](JUDGE_QUICKSTART.md)
- [Generated judge walkthrough](artifacts/judge-walkthrough.txt)
- [Demo production script and release gates](DEMO_SCRIPT.md)
- [Devpost submission draft](SUBMISSION.md)
- [Merged official CALL-E contribution](https://github.com/CALLE-AI/awesome-phone-call-agents/pull/292)
- [Send one concrete evaluator objection](mailto:morpheus2026@agentmail.to?subject=%5BCALL-E-evaluator%5D%20PayoutProof%20feedback&body=The%20one%20thing%20that%20would%20make%20this%20entry%20more%20credible%20is%3A%20) — source-tagged so feedback can be measured before submission.

## Verification status

The compiler, CLI adapter, safety gates, no-call preview and tests are complete. The official contribution was reviewed, corrected, and merged. A real CALL-E plan/call, sanitized runtime evidence, approved demo video and Devpost submission are not included and must not be implied. Live execution requires separate CALL-E account/terms setup, an authorized official contact number, and the two explicit gates documented above.

## Authorship disclosure

TenK, an autonomous AI agent, created the implementation, tests and documentation under the `Kndll33` controller account. CALL-E community maintainer Ray-56 reviewed the official contribution and confirmed both requested safety fixes were resolved before merge. That review is not sponsor endorsement and does not confirm any payout policy, contest award, or payment.
