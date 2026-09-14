# Recording Tests

A recording captures a sequence of browser interactions. Review that sequence
before treating it as a test.

## A Good First Recording

Choose a small flow with a visible result: enter a task name, save it, and check
the confirmation. Use [Task Pad](../examples/README.md) or your own staging app.
Avoid payments, deletion, sending messages, and production accounts while learning.

1. Open the intended page and QAgentExt's side panel.
2. Select **Record**.
3. Perform the task, waiting for each visible result.
4. After typing, pause briefly and inspect the captured value in the preview.
5. Select **Stop Rec** and review every captured step.
6. Add an explicit expected result in **Assertion Builder** where needed.
7. Select **Confirm & Run** to verify the recording.

Use the step edit, remove and reorder controls only when they preserve your
intended task. A recording can capture incidental actions; you own the final test.
Do not assume uploads, drag-and-drop, embedded content or navigation behave
identically in every replay and exported framework.

## Data Safety

Typed text, URLs and page details may be retained in recordings and reports.
Use dummy values, never production passwords or tokens. Review the draft before
saving, and review exports again before sharing them.

## Common Problems

- **A value is missing:** check the typed step; avoid stopping immediately after
  the final keystroke. Edit the preview or re-record the short flow.
- **No expected result:** add a text or element assertion. Recording actions alone
  does not establish application correctness.
- **The page cannot be tested:** move from a browser-protected page to a normal
  web page and check site access in Chrome's extension settings.
- **Unexpected navigation:** stop and inspect the recorded URL before replaying.

[Quickstart](quickstart.md) | [Replay](replaying-tests.md) | [Privacy](privacy-and-permissions.md)
