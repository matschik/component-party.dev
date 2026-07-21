# Governed Change Loop Playbook

## Purpose

This portable playbook gives receiver agents one outcome-first operating
sequence for governed changes: readiness and guidance, bounded precedent
lookup, scoped implementation, declared run context when available,
receiver-owned verification, concise evidence, closeout, and checked reviewer
handoff.

Use it with the [Evidence Archive Contract](../contracts/evidence-archive.md)
and [Verification Config Contract](../contracts/verification-config.md). Use
command `--help` only when the documented invocation or a required option is
genuinely unknown.

## Use When

Use this playbook when `.sdf/config.yml` declares
`governance_mode: required` and the change is intended for review, commit, or a
pull request.

Use a lighter hand only when the operator explicitly scopes out a step. Record
that exception in evidence, run notes, or the PR body.

## Sequence

1. Inspect receiver readiness.

   Check that the repository has enough local SDF structure to continue. If a
   readiness gap blocks the change, stop or record the owner/operator decision.

2. Identify applicable guidance.

   Read [`.sdf/agent-instructions.md`](../agent-instructions.md), this
   playbook, and only the receiver-owned playbooks from `.sdf/config.yml` that
   match the work. Record what materially shaped the slice; "none material" is
   valid for small changes.

3. Use prior evidence only as bounded precedent.

   Consult prior evidence only when it reduces real uncertainty about scope,
   risk, verification depth, blockers, handoff shape, or a similar boundary.
   Skip it for an obvious low-risk change when it would not resolve such an
   uncertainty.
   Pick one to three clearly relevant archives under `.sdf/evidence/`, ignore
   directories without `evidence.md`, read only the relevant human sections and
   the embedded `## Machine Record` when structured facts matter, and cite a
   prior archive only when it materially shaped the current run. Prior evidence
   is precedent, not authority or hidden memory.

4. Inspect the receiver-owned verification boundary.

   Read `.sdf/verification.yml`. Do not invent replacement commands. If the
   configured command is still a failing starter placeholder or the file is
   unreadable, stop or record the owner/operator decision before proceeding.
   The portable file shape and command semantics live in the
   [Verification Config Contract](../contracts/verification-config.md).

5. Make the smallest bounded change.

   Keep the edit scoped to the authorized request, preserve receiver-owned
   boundaries, and avoid unrelated refactors. Run focused checks only when
   useful while working; they are supporting feedback, not the closeout
   boundary unless the receiver configured them as that boundary.

   ### Engineering discipline

   Keep changes small enough to review and reason about. Prefer explicit,
   readable implementation over cleverness; make side effects and critical
   boundaries visible in names, structure, tests, and evidence. Use focused
   tests for fast feedback when useful. Avoid unrelated cleanup, premature
   abstraction, hidden automation, and broad rewrites. Use receiver-owned
   playbooks for language, framework, architecture, testing, security, and
   domain-specific truth.

6. Scaffold evidence when a one-pass closeout is wanted.

   After the bounded change, use `sdf start` only when a human-populated archive
   is needed before one passing closeout. It scaffolds that archive and records
   any available declared run context. `sdf start` is also useful earlier for
   long-running, risky, multi-session, or context-sensitive work that benefits
   from early durable declaration; it is not mandatory for every change.

   A valid late close-first path also exists: the first `sdf close` synthesizes
   a missing archive and runs configured verification, but the blank human
   sections cannot pass. Populate them, then run `sdf close` a second time. Do
   not describe that path as one configured verification run.

   Record only values genuinely available to the run; `unknown` and
   `unavailable` are valid machine values. Never invent a model identifier or
   replace it with descriptive prose. Hosted non-interactive agents proceed
   with declared values or `unknown`; they do not pause for missing values.

7. Populate concise evidence judgement.

   Populate only `Intent`, `Review focus`, `Limits`, and `Guidance applied`.
   New evidence should help the current reviewer or a future operator
   understand those four judgements. Keep it proportional: small
   documentation-only changes can be concise, while runtime, policy-sensitive,
   migration, receiver-boundary, failure-analysis, or guidance-heavy changes
   need richer notes. Machine verification and closeout facts belong in the
   `## Machine Record`; do not copy them into the four human sections.

8. Use `sdf close` for full verification and closeout.

   `sdf close` runs the receiver's configured full verification boundary,
   records the machine-owned closeout facts, and prepares the checked local
   handoff. Do not manually run `sdf verify` or the complete configured command
   list immediately before `sdf close` unless diagnosing a failure or
   deliberately seeking intermediate feedback. Required command failures block
   a passing closeout unless fixed, accepted as a known blocker, or explicitly
   handled by the owner/operator. Optional failures remain reviewer-visible and
   must be interpreted honestly.

9. Commit, then produce the final checked reviewer handoff.

   Commit the implementation and evidence after a passing closeout. Then run
   `sdf close --repo . --change-id <change-id> --refresh-handoff` exactly once
   against that final commit.

   ### Handoff judgement
   - Generated PR-body text is the authoritative source for a draft PR body;
     do not rewrite, re-summarise, or combine it with an alternative PR summary.
   - The refreshed GitHub-linked output is publication-ready only when the
     evidence archive is committed at the referenced current HEAD.
   - Repo-relative handoffs remain checked local/offline review artifacts, not
     publication-ready GitHub bodies. Publish the refreshed checked handoff
     verbatim when it reports `publication-ready`.
   - Generated handoff text is local output outside the committed archive.
   - Handoff does not create, update, approve, or merge a pull request. Publish
     the generated body through the receiver's established publication route;
     do not rediscover alternative tooling when that route is already known.
   - Keep handoff compact and point to durable evidence for detail.

## Record

- Readiness, guidance, and verification-boundary inspections.
- Portable and receiver-owned guidance that shaped the change.
- Any bounded prior evidence lookup that materially affected the run.
- Focused feedback separately from configured closeout verification.
- Verification results, including failed-then-fixed, blocked, and skipped
  states.
- Evidence archive path and closeout status when evidence is used.
- Any explicit exception to readiness, evidence, verification, closeout, or
  generated PR-body handoff.

## Do Not

- Do not invent verification commands outside `.sdf/verification.yml`.
- Do not present focused feedback as full closeout.
- Do not duplicate machine verification or closeout facts in human judgement.
- Do not inspect every command's help when the required invocation is already
  documented.
- Do not refresh a handoff before the final commit or more than once unless
  that commit changes.

## References

- [Evidence Archive Contract](../contracts/evidence-archive.md)
- [Verification Config Contract](../contracts/verification-config.md)
