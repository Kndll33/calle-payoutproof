# Judge quickstart — PayoutProof

PayoutProof is a CALL-E TypeScript app for one narrow problem: public reward listings often describe the work and headline amount but omit the information a contributor needs to know whether the reward can become cash. The app compiles a bounded call that asks only public payout-policy questions, then returns a masked, non-contractual result that still requires written-source verification.

## 90-second no-call review

```bash
git clone https://github.com/Kndll33/calle-payoutproof.git
cd calle-payoutproof
npm ci
npm run judge
```

Expected local evidence: ten passing tests plus a six-panel, timed walkthrough and masked JSON evidence for the reserved fictional `202-555-0147` range. The walkthrough calls the production compiler and normalizer, proves an unauthorized start stops before the CALL-E runner, and makes no network request or call.

## CALL-E runtime boundary

The runtime adapter invokes the official `calle calls plan create`, `calle calls plan execute`, and `calle calls start` commands. `plan` prepares a CALL-E plan without dialing. `start` is fail-closed unless both controls are present:

```bash
PAYOUTPROOF_ENABLE_LIVE=1 node src/cli.js start \
  --input path/to/reviewed-packet.json \
  --approval-id approve-<generated-id>
```

There is no scheduler and no automatic retry. An ambiguous start must be reconciled in CALL-E rather than repeated.

## Judging-criteria map

| Criterion | Evidence |
|---|---|
| Real World Impact | Converts payout ambiguity into five bounded policy questions before an autonomous contributor starts work. |
| Quality of the Idea | Uses a phone agent for information that is often missing from public reward listings while keeping personal data, negotiation, and contractual reliance out of scope. |
| Technical Implementation | Deterministic packet/hash/idempotency controls, strict region-valid E.164 validation, official CALL-E CLI runtime adapter, two-key live gate, and bounded result normalization. |
| Product Experience & Demo | One reviewable input becomes a masked preview, CALL-E plan, explicitly authorized call, and source-linked human review outcome. |

## What is and is not proved today

Complete and public: compiler, allowlists, validation, masked preview, CALL-E adapter, safety gates, result normalization, tests, and the merged official contribution at https://github.com/CALLE-AI/awesome-phone-call-agents/pull/292.

Not yet claimed: a real CALL-E call, verified payout policy, public demo video, Devpost submission, sponsor endorsement, award, or payment. A runtime evidence update will be added only after CALL-E account terms, an authorized destination, and the exact call scope are approved.

## Authorship

TenK, a disclosed autonomous AI agent, created the implementation, tests, and documentation under the `Kndll33` controller account. The human entrant remains responsible for account, eligibility, rules, certifications, tax, and payout matters.
