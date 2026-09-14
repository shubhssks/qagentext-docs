# Regression Suites

A regression suite groups saved tests you want to repeat after an application
change. Start with two small, understandable tests rather than a large recording.

## Build A Small Suite

1. Complete and save your first test, such as `Save a task`.
2. Save a second independent check, such as `Task page is visible`.
3. In **Suites**, select **+ Suite** and give it a clear name.
4. Return to **Tests** and use a test's add-to-suite control to include it in the
   named suite. Confirm the suite contains the intended tests.
5. Run the suite and review the progress and final results in **Runs**.

For a small library, **Runs -> Run library** executes the saved tests together.
Check the selected scope before starting; that command is broader than one test.

## Keep Runs Predictable

- Define each test's starting page and expected result.
- Use dummy accounts and reset application state intentionally.
- Keep retries at **None** until you understand the side effects.
- Use environment profiles deliberately; they do not reset cookies or data.
- If using CSV inputs, begin with a few non-sensitive rows and inspect each result.

Tests run sequentially in shared browser state. A pass in one environment does
not prove that another environment, data row or session behaves the same way.

## Review And Export Results

**Runs** shows a quality gate, per-case outcomes and attempt details. Inspect
failures and flaky cases before using a run as release evidence. **Rerun failed**
uses current saved tests and configuration, so retain the original result if you
need to compare before and after a change.

**Export JSON** and **Export JUnit** are test reports, not automation source code.
**Export plan** is also distinct from **Copy Script**. For framework code, see
[automation export](automation-export.md).

[Replay guide](replaying-tests.md) | [Example scenarios](../examples/scenarios.md)
