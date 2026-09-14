<h1 align="center">QAgentExt - QA Testing Agent</h1>
<p align="center"><strong>Record &rarr; Replay &rarr; Debug &rarr; Automate</strong></p>
<p align="center">Turn a manual browser check into a reusable test, then export automation starter code.</p>
<p align="center">For developers and QA testers working on web applications.</p>
<p align="center"><a href="https://chromewebstore.google.com/detail/qagentext-qa-testing-agen/fmabdhbonhmnomjogiehbhadalondhch">Install from the Chrome Web Store</a> &middot; <a href="docs/quickstart.md">Run your first test</a> &middot; <a href="SUPPORT.md">Get help</a></p>

This repository contains documentation, safe examples and community support for
QAgentExt. It does **not** contain the extension's private source code.

## Quickstart

1. Install QAgentExt, open a safe test page, and open its Chrome side panel.
2. Select **Record**, perform a short task using dummy data, then **Stop Rec**.
3. Review the steps. Add a **Text visible** assertion for the expected result.
4. Select **Confirm & Run**. Check the verdict and save the test with **Save Test**.
5. Select **Playwright** or **Cypress**, then **Copy Script**. Review and adapt the
   generated code before running it in your automation project.

[Follow the complete first-test guide](docs/quickstart.md) using the included
dummy app. No login or real customer data is needed for that example.

## Key Features

- **Record and replay:** capture browser interactions and review the test steps.
- **Debug failures:** inspect the result, failed step and available diagnostics.
- **Regression testing:** save useful checks and organize them into suites.
- **Automation export:** generate starter code for Playwright, Cypress and other
  available formats. Support varies by action and framework.
- **Accessibility testing:** use automated checks alongside manual keyboard and
  assistive-technology testing.

## Learn By Task

| Your goal | Guide |
| --- | --- |
| Capture a manual flow | [Recording tests](docs/recording-tests.md) |
| Run the same check again | [Replaying tests](docs/replaying-tests.md) |
| Understand a failure | [Debugging tests](docs/debugging-tests.md) |
| Organize repeated checks | [Regression suites](docs/regression-suites.md) |
| Move toward code-based automation | [Automation export](docs/automation-export.md) |
| Review accessibility | [Accessibility testing](docs/accessibility-testing.md) |
| Understand data access | [Privacy and permissions](docs/privacy-and-permissions.md) |

## Accessible By Design

These guides use explicit control names and text instructions, not screenshots
alone. Report keyboard, focus, labeling or screen-reader problems through
[support](SUPPORT.md). Automated accessibility findings are diagnostic evidence,
not certification or a replacement for NVDA, JAWS, VoiceOver or manual review.

## Examples And Media

Start with [the local dummy app](examples/README.md). It sends no form data to a
server and has no account, payment or analytics integration.

**Media placeholder:** a short Record -> Replay -> Debug -> Automate walkthrough
will appear here after capture and review. [Screenshot and GIF slots](assets/README.md)
describe the intended scenes; they are not screenshots of finished features.

## Community

[Contributing](CONTRIBUTING.md) covers documentation fixes, safe examples and
feature feedback. [Support](SUPPORT.md) explains what to include in a bug report.
Read the [FAQ](docs/faq.md) before opening an issue, and use the
[security process](SECURITY.md) for sensitive reports.

Local review draft: these guides target the published 2.0 workflow. Development
previews are not release promises. See [publication review](PUBLICATION_REVIEW.md).
