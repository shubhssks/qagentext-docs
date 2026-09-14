# Frequently Asked Questions

## What is QAgentExt?

A Chrome side-panel tool for developers and QA testers to record and replay
browser checks, investigate failures and export automation starter code.

## Is this the extension source repository?

No. This is the public documentation, examples and support repository. The
extension source remains private. Install the extension from the
[Chrome Web Store](https://chromewebstore.google.com/detail/qagentext-qa-testing-agen/fmabdhbonhmnomjogiehbhadalondhch),
not by loading this documentation folder as an unpacked extension.

## Do I need to code to run my first test?

No. Begin with Record, review the steps and an expected result, then replay.
Running exported automation in a separate framework requires its own setup.

## Does every recording export without edits?

No. Coverage varies by action and framework. Review navigation, quoted values,
locators and unsupported-step comments. See [export limitations](automation-export.md).

## Why did a recording pass but the feature still fail?

Check that the test includes an assertion for the result you care about. A
successful click is not proof of the complete business outcome.

## Can I use my logged-in application?

Tests can use existing browser state. Use a safe test account: actions may change
real data, and recordings can retain typed values. Tests do not automatically
isolate sessions or reset backend data.

## Does it work on every page?

No. Chrome internal pages and other protected surfaces are restricted. Embedded
content, site-access settings and application behavior can also affect testing.

## Are accessibility results a certificate?

No. They help investigate issues and complement manual testing. Screen-reader
semantics checks do not reproduce a complete assistive-technology session.

## How do I report a bug or request a feature?

Follow [support](../SUPPORT.md) and use the repository's templates when it is
published. Include a dummy reproduction and the outcome you need, not private data.

## Is the three-minute first test guaranteed?

No. It is an onboarding goal under evaluation, not a benchmark for every user,
page or setup. Follow the [quickstart](quickstart.md) and report unclear steps.

## Can I contribute extension code here?

This repository accepts documentation, independent safe examples and feedback.
Do not submit private extension implementation or reverse-engineered bundles.
See [contributing](../CONTRIBUTING.md).
