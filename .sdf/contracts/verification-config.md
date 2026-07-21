# Verification Config Contract

## Purpose

This contract describes the shape, ownership, and reviewer meaning of the
receiver-owned `.sdf/verification.yml` boundary. The sequence for using it
lives in the [Governed Change Loop](../playbooks/governed-change-loop.md).

## Ownership

The receiver chooses and maintains its verification commands. SDF reads,
displays, runs on explicit request, and records those commands; it does not
discover, infer, install, or rewrite them. A scaffolded failing placeholder
means the receiver owner must configure its existing local checks.

## Shape And Meaning

The file uses `version: 1` and a `commands` list. Each entry has a stable
`name` and exact `command`; `required` defaults to `true`, while `false` marks
nonblocking feedback. `track_timing: true` records review context only.

Results state what was checked in that environment. Required failures block a
passing configured run; optional failures remain reviewer-visible. Neither
result nor timing is a broader correctness claim.
