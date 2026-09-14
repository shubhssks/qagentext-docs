# Replaying Tests

Replay executes the reviewed actions and checks their expected results. It can
change the application just as a manual user can.

## Replay A New Recording

Review the recorded-step preview and its assertions, then select **Confirm & Run**.
Do not interact with the target page while the test is running. Use **Stop** if
the target is wrong or you need to interrupt the run.

## Replay A Saved Test

1. Open the application and the side panel.
2. In **Tests**, locate the named test in your library.
3. Review its intended page and data, then use its **Run** control.
4. Check the final result and the assertion outcome, not only the action log.

If the test requires an authenticated session, prepare a safe test account first.
Saved tests do not guarantee an isolated session. Existing cookies, page storage
and backend data can affect the result.

## Read The Outcome

- **Pass:** the checks that actually ran met their expected outcomes.
- **Fail:** inspect the failed step and available diagnostics.
- **Flaky:** in a regression plan with retries, an earlier failure was followed
  by a pass. This is not the same as a clean first-attempt pass.
- **Stopped or incomplete:** do not treat the run as proof of a successful test.

Keep retries off while learning. Retrying a save, payment or other mutation may
repeat a side effect. Fix setup and expectations before adding retries.

[Debug a failure](debugging-tests.md) | [Run a suite](regression-suites.md)
