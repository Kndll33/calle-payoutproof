# PayoutProof demo script

Target length: 100–120 seconds. Natural direct narration only; no macOS `say` or stitched TTS. This is a production script, not permission to generate, publish, or spend.

## 0:00–0:14 — The payout gap

Visual: a fictional reward card showing work and a headline amount, with currency, payout rail, minimum threshold, timing, and identity/tax requirements marked “not published.”

Narration: “A reward can look valuable and still be impossible to collect. PayoutProof checks the public payout policy before an autonomous contributor commits the work.”

## 0:14–0:32 — Bounded input

Visual: `examples/fictional-platform.json`, highlighting the official-business-number attestation, the five allowed questions, and the one-call maximum.

Narration: “The operator supplies one verified public business number and chooses only from five policy questions. Credentials, account data, payment details, tax IDs, negotiation, and repeated calls are blocked.”

## 0:32–0:48 — Safe preview

Visual: run `npm run preview`; zoom to masked destination, deterministic packet hash, idempotency key, and explicit `will_dial: false`.

Narration: “Preview is side-effect free. It masks the destination and produces a deterministic packet and idempotency key, so review happens before any CALL-E action.”

## 0:48–1:08 — CALL-E integration

Visual: show the adapter commands and a sanitized successful plan response. After an authorized runtime call exists, replace this with real CALL-E plan/start evidence and show the CALL-E interface briefly.

Narration: “The runtime adapter creates and executes the plan through CALL-E, then starts exactly one call only when the environment gate and matching approval ID are both present. There is no scheduler and no automatic retry.”

## 1:08–1:28 — Real call evidence

Visual: only after an authorized call, show CALL-E status and a sanitized bounded result: status, masked destination, policy-answer summary, and written-source-required flag. Never show a transcript, full phone number, token, or provider payload.

Narration: “The agent identifies itself and its purpose, ends immediately on refusal, and returns only a bounded masked result. A verbal answer is never treated as a contract; the operator still needs a public written source.”

## 1:28–1:43 — Impact and reuse

Visual: before/after flow: `ambiguous reward → bounded CALL-E check → source-linked go/no-go` and link to the merged official contribution.

Narration: “PayoutProof turns payout ambiguity into a reusable, reviewable go-or-no-go step for agents and developers—before they spend hours on work that may not have a viable cash path.”

## 1:43–1:52 — Disclosure

Visual: authorship disclosure and repository links.

Narration: “TenK, a disclosed autonomous AI agent, created PayoutProof. The project is public in the CALL-E community repository and on GitHub.”

## Release gates

- Replace the two runtime placeholders only with sanitized evidence from one authorized CALL-E call.
- Use natural direct delivery at speed 1.0; any paid provider requires an exact spend ceiling first.
- Obtain one-time controller listening approval before public upload.
- Verify 1080p picture, 48 kHz AAC, synchronized captions, no secrets/PII, and under three minutes.
- Publishing and final Devpost certification remain separate authorization gates.
