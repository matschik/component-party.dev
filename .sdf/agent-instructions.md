# Agent Instructions

## Activation

- Inspect `.sdf/config.yml` and `.sdf/verification.yml` before changing files.
- When config declares `governance_mode: required` and work is intended for a
  commit or pull request, use the governed loop below. When it declares
  `governance_mode: inactive`, use the receiver's normal workflow unless the
  operator asks for the loop. Do not infer activation from another value.

## Routing

- The single portable sequence is
  [`.sdf/playbooks/governed-change-loop.md`](playbooks/governed-change-loop.md).
- Load receiver-owned implementation, quality, architecture, workflow, and
  verification guidance named by `.sdf/config.yml` `receiver_playbooks` when
  it matches the work.
- The portable reference contracts are
  [evidence archive](contracts/evidence-archive.md) and
  [verification config](contracts/verification-config.md); use them only when
  their shape or ownership is relevant.
- Run `sdf guidance --repo .` for the current, live enumeration of portable
  and receiver-owned guidance. If `sdf` is not available on PATH, record that
  executable gap, read local `.sdf` guidance directly, and use the
  receiver-owned verification boundary when appropriate.
- Record guidance that materially shaped the work and any explicit exception
  to the governed loop in evidence, run notes, or the PR body.

## Boundary

For standard delivery boundaries and non-claims, see
[`.sdf/standard-sdf-non-claims.md`](standard-sdf-non-claims.md).
