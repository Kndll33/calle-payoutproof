# CALL-E Devpost submission draft — PayoutProof

Status: ready except for sanitized authorized runtime evidence, natural approved video URL, CALL-E account email, and controller-only Devpost certification.

## Tagline

Verify whether a public reward can actually become cash with one bounded, safety-gated CALL-E policy call.

## Inspiration

Autonomous contributors can evaluate and complete work online, yet many reward listings omit the payout currency, rail, minimum threshold, timing, or identity and tax requirements. Starting work before those facts are known creates avoidable payout risk. PayoutProof uses a phone agent only for that narrow information gap.

## What it does

PayoutProof converts an owner-reviewed public reward opportunity into one deterministic CALL-E inquiry. It allows up to five public payout-policy questions, requires a verified official business number, discloses its AI identity and purpose, and stops on refusal. Preview is side-effect free. Live start requires both an environment gate and the exact generated approval ID. There is no scheduler or automatic retry.

The result path rejects unknown statuses and discards the raw provider payload, including transcripts and full phone numbers. It returns only bounded masked fields. Every verbal outcome is labeled non-contractual and requires a public written source before the operator relies on it.

## How we built it

The Node.js/TypeScript-style app uses the official CALL-E CLI runtime boundary for plan creation, execution, and call start. The core compiler validates a strict region-valid E.164 destination with `libphonenumber-js`, enforces a one-call maximum, rejects sensitive fields, creates deterministic custody hashes and idempotency keys, and normalizes output through an allowlist.

The official CALL-E community contribution was reviewed, corrected, and merged: https://github.com/CALLE-AI/awesome-phone-call-agents/pull/292

## Challenges

The hardest problem was not dialing; it was preventing an autonomous workflow from turning a policy check into uncontrolled outreach or a privacy leak. We made live execution fail closed, prohibited retries, separated planning from dialing, and removed raw provider payloads after maintainer review. A second challenge is evidentiary: a phone answer can inform the operator but cannot override published terms, so the product makes written verification an explicit downstream requirement.

## Accomplishments

- 10 passing tests covering deterministic planning, safety controls, strict destination validation, live gating, PII/transcript removal, and the judge walkthrough
- a zero-install 90-second evaluator page with an explicit no-live-call disclosure
- official CALL-E CLI adapter with plan-before-start separation
- two independent live-start controls
- deterministic idempotency and no automatic retry
- bounded, masked output with no retained raw provider object
- substantive maintainer review resolved and official contribution merged

## What we learned

Useful phone agents need stronger boundaries than “call this number.” The product should encode why the call is permitted, which questions are allowed, what data is forbidden, how duplicate dialing is prevented, and how the answer may be used. We also learned that normalized output should be treated as a separate privacy boundary rather than a convenient copy of the provider response.

## What is next

Add source-linked human review for each verbal answer, expand the policy-question schema only when a new category has a clear lawful use, and test the workflow on opt-in or organizer-provided destinations. No recurring campaign or autonomous retry system is planned.

## Links

- Code: https://github.com/Kndll33/calle-payoutproof
- Evaluator page: https://kndll33.github.io/calle-payoutproof/
- Judge quickstart: https://github.com/Kndll33/calle-payoutproof/blob/main/JUDGE_QUICKSTART.md
- Official merged contribution: https://github.com/CALLE-AI/awesome-phone-call-agents/pull/292
- Video: [AUTHORIZED_PUBLIC_VIDEO_URL]

## Disclosure

TenK, an autonomous AI agent, generated essentially all code, tests, documentation, and demo preparation under the `Kndll33` controller account. The human entrant handles legal eligibility, account and rules acceptance, certifications, tax, payout, and exact live-call authorization. CALL-E Support confirmed this disclosed role split is eligible in a direct written response on September 2, 2026.
