# Debugging A Failed Test

Start with the first failed step, not the largest report.

1. Confirm the page and test data were the ones you intended.
2. Read the failed action or assertion and its expected result.
3. Compare it with the page's actual state.
4. Inspect available execution logs and console/network details for that step.
5. Correct the application, test setup or expectation, then rerun the smallest
   useful test.

## A Safe Example

Task Pad displays `Task saved`. An assertion expecting `Task published` should
fail. The useful finding is the mismatch, not a reason to remove the assertion.
See the [example scenarios](../examples/scenarios.md).

If a locator was recovered automatically, review the matched element. A successful
fallback does not prove the intended business action was performed.

## Share Useful Evidence

Include extension/browser versions, a short reproduction, expected and actual
results, and a sanitized screenshot if useful. Use a dummy page whenever possible.
Reports and reproduction packs may include URLs, typed values, screenshots or
other sensitive information. Review them before attaching anything publicly.

Do not upload session files, cookies, authentication headers, private applications
or an entire browser profile. Read [support](../SUPPORT.md) for a safe issue report.

[Replay again](replaying-tests.md) | [FAQ](faq.md)
