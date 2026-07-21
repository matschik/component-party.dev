# Standard SDF Non-Claims

## Purpose

This boundary is the canonical portable reference for standard SDF non-claims
in receiver evidence archives and reviewer handoffs.

Routine evidence artifacts should reference this file instead of repeating the
full standard boilerplate. Slice-specific non-claims still belong in the active
slice's `evidence.md`, close to the changed work and review focus.

## Standard Non-Claims

Unless a slice explicitly implements and verifies one of these outcomes, SDF
evidence and closeout artifacts do not claim:

- automatic approval, merge, repair, deployment, release, hosted service
  behavior, or hidden execution;
- local GitHub mutation, PR creation, PR body mutation, or post-merge
  finalisation outside an explicitly invoked command boundary;
- correctness, security, production readiness, compliance, receiver migration,
  or remote CI confidence beyond the commands and evidence recorded for the
  slice;
- automatic evidence creation, archive repair, branch inference, change-id
  inference, verification-command invention, or publication-state inference.

## Mandatory Visible Boundaries

These boundaries must remain easy to find in routine evidence:

- `automatic_execution_permitted: false` remains the default governance mode.
- Approval and merge remain human-controlled unless an explicit future product
  boundary says otherwise.
- If SDF delivery safety conflicts with product intent or local implementation
  preference, preserve the SDF safety boundary and record the conflict
  honestly.
- Hidden automation, automatic repair, automatic approval, automatic merge,
  deployment, release, and hosted-service behavior remain out of scope unless
  a slice explicitly asks for them and verifies them.
- Local GitHub mutation remains out of scope for routine closeout and evidence
  commands. Any GitHub mutation must use an explicit command or workflow
  boundary and state that boundary in slice evidence.

## Per-Slice Non-Claims

Every governed slice should still record slice-specific non-claims in
`.sdf/evidence/<change-id>/evidence.md`. These should describe what the changed
files, commands, docs, or evidence surfaces do not prove or perform.

The compact closeout and PR-body output should keep those slice-specific
non-claims visible and add a concise pointer back to this standard reference.
