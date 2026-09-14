# Automation Export

Export turns supported test steps into starter code for an automation framework.
It is a handoff for review, not a guarantee of a complete production test suite.

## Export From A Result

1. Record or author a test, review it, and run it.
2. In the result area, choose **Playwright** or **Cypress** from the format selector.
3. Select **Copy Script**.
4. Review the output in your own automation project before executing it.

Other available formats include Selenium, WebdriverIO, Puppeteer, TestCafe and
Robot Framework. Coverage differs across formats; start with one framework.

## Review Checklist

- Set or verify the starting URL. In current exports, navigation may be emitted
  as an unsupported-action comment instead of executable navigation.
- Check all unsupported-action or unsupported-validation comments.
- Inspect quoted strings, backslashes and locator patterns, especially when
  recorded text contains punctuation.
- Confirm the locators identify the intended elements.
- Retain meaningful assertions and add necessary waits/setup/cleanup.
- Remove credentials, cookies and private data. Use your test project's secret
  handling rather than committing live values.
- Install the framework and its browser dependencies, then run the code in a
  safe environment. A QAgentExt PASS does not prove the exported script passes.

## Independent Reference Example

[The Task Pad Playwright example](../examples/playwright/first-test.spec.js) is a
small, separately written reference test. It is **not** presented as unchanged
QAgentExt output. [Example setup](../examples/README.md) explains how to run it.

Playwright documentation: [writing tests](https://playwright.dev/docs/writing-tests).
Cypress documentation: [writing your first test](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test).

## What Export Is Not

Copy Script does not install dependencies, provision CI, handle your credentials,
or promise full conversion of browser audits, custom actions and recorded flows.
JSON/JUnit reports describe results; they are different from framework source code.

[Record a flow](recording-tests.md) | [FAQ](faq.md)
