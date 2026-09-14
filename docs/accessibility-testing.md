# Accessibility Testing

Use automated checks to find issues worth investigating, then verify the
experience with keyboard and assistive-technology testing.

## Start With The Page

1. Open a page you are authorized to test.
2. In QAgentExt, enter `Run accessibility check` and review the proposed steps.
3. Run the checks and inspect each finding in context.
4. Re-test after fixing the application and keep a record of what was checked.

You can also use `test keyboard navigation` and `check screen reader semantics`
for focused diagnostic checks. Contrast inspection reports a measurement for a
selected element where supported; unsupported rendering situations need manual
review. Do not assume every image, gradient or composited background is measured.

## Manual Checks Still Matter

- Use Tab and Shift+Tab to traverse the page in a sensible order.
- Check visible focus, keyboard activation, dialogs and error messages.
- Test names, roles, state changes and announcements with the browser and screen
  reader combinations your users rely on.
- Review content meaning, zoom, reading order and interaction design manually.

QAgentExt's screen-reader semantics checks are diagnostics, not an emulation of
NVDA, JAWS or VoiceOver. Automated results are not accessibility certification.
Keep the page, date, viewport, browser, tool version and manual checks alongside
evidence; a scan alone does not establish complete conformance.

## Accessibility Of QAgentExt

The extension should be usable with keyboard navigation and assistive technology.
Please report inaccessible controls, missing labels, lost focus or confusing
announcements using the [bug template](../.github/ISSUE_TEMPLATE/bug_report.md).
Include browser, operating system and screen-reader name/version when relevant.
Do not include personal page data in the report.

Development previews may add live hover or focus inspection. These guides do not
claim those preview features are present in every installed store version.

[Support](../SUPPORT.md) | [Privacy](privacy-and-permissions.md)
