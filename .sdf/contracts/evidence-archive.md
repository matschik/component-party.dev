# Evidence Archive Contract

## Purpose

This contract describes the shape, ownership, and reviewer meaning of a
receiver-owned governed-change archive. The sequence for using it lives in the
[Governed Change Loop](../playbooks/governed-change-loop.md).

## Ownership And Shape

An archive is a receiver-owned per-change record at:

```text
.sdf/evidence/<change-id>/
  evidence.md
```

New governed archives use `evidence.md` with four agent-authored judgement
sections:

- `## Intent`
- `## Review focus`
- `## Limits`
- `## Guidance applied`

The same file has an `## Machine Record` that declares `contract: 5`. The
machine record holds SDF-owned facts such as change identity, repository and
branch context when available, declared run context, SDF-owned closeout timing,
closeout status, verification history and latest results, and writer identity.
Unknown or unavailable machine facts remain honest values and do not block
judgement readiness. Tool updates preserve the Markdown body.

Scaffold and install payloads contain guidance, not per-change archives or
placeholder evidence. Historical archive shapes and committed contract-4
archives are not rewritten merely because the current contract is contract 5.

## Reviewer Meaning

Evidence explains intent, review focus, limits, and applied guidance. It
scales with the change through the depth of those four answers: concise for a
small documentation slice and richer for runtime, policy-sensitive, migration,
receiver-boundary, failure-analysis, or guidance-heavy work.

Standalone verification evidence can preserve a specific run, but does not
replace a governed archive that needs the full reviewer context.
