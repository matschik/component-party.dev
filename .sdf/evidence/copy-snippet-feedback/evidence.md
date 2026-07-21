# Evidence

## Intent

Give the code-snippet copy control truthful, short-lived success or failure feedback for the active file, including an announcement that assistive technology can perceive.

## Review focus

Check that a copy operation snapshots only the visible file, that a tab switch invalidates stale feedback, and that the accessible button label and live status accurately distinguish success from a failed Clipboard API plus fallback. The focused browser coverage mocks both outcomes and selects a second file tab before copying.

## Limits

This does not redesign framework selection or comparison behaviour, guarantee clipboard permissions in every host browser, or make claims about remote CI, deployment, approval, or merge. The local E2E coverage exercises the client interaction only.

## Guidance applied

Followed the supplied Getting Started close-first flow and the installed governed-change loop. The installed configuration had no receiver-specific playbooks, so the change stayed limited to the existing component, copy helper contract, repository-owned verification boundary, and focused Playwright coverage.

## Machine Record

```yaml
contract: 5
written_by: "sdf-cli 0.1.0rc17"
change_id: "copy-snippet-feedback"
repository:
  name: "component-party-evaluation-sandbox"
  path: "/Users/johnbutler/git_projects/component-party-evaluation-sandbox"
  github: "johnnybutler7/component-party-evaluation-sandbox"
branch:
  name: "evaluate/copy-snippet-feedback"
  head: "3cd6ff8c6f106e36b958f063ad52b3b4cbba5c59"
run_context:
  surface: "codex_local"
  model: "GPT-5.6 Terra"
  reasoning: "medium"
  speed: "standard"
started_at: "unavailable"
closed_at: "2026-07-21T14:06:47+00:00"
closeout_status: "passed"
verification:
  total_runs: 2
  failed_runs: 0
  final_pass_followed_earlier_failure: false
  latest_run:
    status: "passed"
    total_duration_seconds: 78.58
    checks:
      - name: "build"
        status: "passed"
        duration_seconds: 33.35
      - name: "check-ci"
        status: "passed"
        duration_seconds: 4.61
      - name: "unit-tests"
        status: "passed"
        duration_seconds: 1.36
      - name: "e2e-tests"
        status: "passed"
        duration_seconds: 39.26
```
