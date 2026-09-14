# Your First Browser Test

Goal: record a short task, verify its result, and find the automation export.
Start with dummy data on a page you are authorized to test.

## 1. Install And Open

Install [QAgentExt from the Chrome Web Store](https://chromewebstore.google.com/detail/qagentext-qa-testing-agen/fmabdhbonhmnomjogiehbhadalondhch).
Open a normal web page, then select QAgentExt from Chrome's extensions menu to
open the side panel. Pin it for easier access. Chrome internal pages and the
Web Store itself are not suitable test targets.

For a repeatable example, use [Task Pad](../examples/README.md), the local dummy
app included here. The optional local server requires Node.js; the extension
itself does not require Node.js for recording and replaying in Chrome.

## 2. Record A Small Task

1. Open Task Pad and confirm that the side panel is targeting that tab.
2. Select **Record** in QAgentExt.
3. In **Task name**, type `Review release notes`. Pause briefly after typing.
4. Select **Save task**. Wait for **Task saved** to appear.
5. Return to the side panel and select **Stop Rec**.

Keep the first recording short. In the current interface, the stop-recording
button is labeled **Stop Rec**, not the **Stop** button used during execution.

## 3. Review What The Test Will Check

The recorded steps appear in a preview. Check that the start URL, input value
and Save task action are correct. Remove any unintended actions.

If the preview does not already contain a check for `Task saved`, use
**Assertion Builder**: choose **Text visible**, enter `Task saved`, then select
**Add Assertion**. Confirm that the assertion is in the step preview.

An assertion is an expected result. A click completing is not enough to prove
the task worked. Inferred assertions also need your review.

## 4. Replay And Save

Select **Confirm & Run**. Let the test finish without interacting with the page.
Confirm that the result passed and the expected message was checked. If it
fails, use the [debugging guide](debugging-tests.md); do not remove the assertion
just to obtain a pass.

In the result area, select **Save Test** and name it `Save a task`. The recording
preview is not the same as a named saved library test.

## 5. Export A Starting Point

In the result area, choose **Playwright** or **Cypress** from the export selector,
then select **Copy Script**. Review the generated code in your automation project.
Set the starting URL and check for unsupported-step comments before running it.
See [automation export](automation-export.md) for setup and current limitations.

Success means you can explain what was recorded, what was asserted, and what
passed. A first-test time target is being evaluated; this guide does not promise
that installation or external framework setup takes three minutes.

[Next: replay a saved test](replaying-tests.md) | [Back to README](../README.md)
