# Evaluator Observations

## Runtime declaration

- Surface: `codex_local`
- Model: `GPT-5.6 Terra`
- Reasoning: `medium`
- Speed: `standard`

## Guide and CLI observations

- The supplied guide clearly described wheel installation, receiver-owned verification, the expected first-close evidence stop, and handoff refresh.
- The guide did not specify recovery for a pre-existing, unwritable SDF user installation. I inferred that an isolated Python virtual environment satisfied its instruction to use an environment under my control.
- The guide required Corepack and pnpm 10.14.0 but did not address a shell without Corepack or the required Node version. I installed the exact Node 22.18.0 runtime in a temporary location and activated pnpm through its Corepack.
- `sdf verify` and `sdf close` appeared to return an incomplete shell result after starting their first check while their child processes continued. I confirmed completion with process checks and the resulting SDF evidence record. This is the main CLI/runtime behaviour I would ask the product author to clarify.
- The first closeout behaved as documented: it recorded a passing verification run but stopped with incomplete human evidence sections.

## Retried commands

- `corepack enable`: unavailable in the initial shell; retried after activating Node 22.18.0.
- System-environment wheel installation: failed because the pre-existing rc16 package location was unwritable; retried successfully in `/private/tmp/sdf-evaluator-rc17`.
- Initial `pnpm run test:unit`: ran before the static output was available immediately after the build and failed on missing `dist` files; reran after output finalised and passed.
- Initial `sdf verify`: returned no completion record after starting; reran once. Both the later clean verification and the first closeout recorded passing configured checks.
- Branch creation: the sandbox denied Git metadata write; retried with the required Git permission on `evaluate/copy-snippet-feedback`.

## Terms inferred and installed guidance consulted

- Interpreted “expected first-close evidence stop” using the supplied guide and installed governed-change loop as: run `sdf close` before authoring the four human evidence sections.
- Interpreted “receiver-owned verification” as the repository's existing build, quality, unit, and E2E commands; no replacement checks were invented.
- Consulted the supplied `GETTING-STARTED.md`; then the installed `AGENTS.md`, `.sdf/agent-instructions.md`, `.sdf/config.yml`, `.sdf/verification.yml`, `.sdf/playbooks/governed-change-loop.md`, both installed contracts, and standard non-claims. Also ran `sdf guidance --repo .` and `sdf close --help` because the declared run-context flags were not in the supplied guide.

## Questions not asked during the run

- Should SDF wait for and stream all child verification output so a completed command result always reflects closeout completion?
- Is there a preferred documented recovery path when the host lacks Corepack or has an older, unwritable SDF installation?

## Elapsed time by phase

Wall-clock phase timers were not captured at phase start, so only command-measured durations are recorded precisely.

| Phase                             | Elapsed                                                                                                               |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Installation                      | Not separately timed; initial wheel attempt 0.8s, isolated installation completed in under 1s after environment setup |
| Initialisation                    | Under 1s (CLI reported immediately)                                                                                   |
| Verification setup                | Not separately timed; browser installation completed in about 10s of observed command time                            |
| Clean boundary                    | Not separately timed; completed before implementation after one inconclusive CLI-shell return                         |
| Implementation and focused checks | Not separately timed                                                                                                  |
| First closeout                    | 79.02s measured by SDF                                                                                                |
| Successful closeout               | 78.58s measured by SDF                                                                                                |
| Commit and PR preparation         | Pending at the time this log was committed                                                                            |
