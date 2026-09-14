# Privacy And Permissions

Use QAgentExt only on pages you are authorized to test. A browser test can type,
click, navigate and trigger the same application requests as a manual user.

## Data To Review

Recordings, saved tests, environment profiles, screenshots and diagnostic reports
can contain page data, typed values, URLs or credentials. Use dummy values and
review all exports before sharing. Automatic masking is not a guarantee that
every secret is removed.

Core testing works locally in Chrome without a QAgent account. That is different
from saying no network activity occurs: test pages and explicit API steps can
send requests, configured monitor webhooks can send summaries, and the panel
loads web fonts. Your application may also transmit data during a test.

## Why Chrome Asks For Access

- **Site access:** interact with the pages and frames being tested. Current
  access is broad; review and manage it in Chrome's extension settings.
- **Tabs and navigation:** identify and follow test pages and embedded frames.
- **Script execution:** run browser-side interactions and diagnostics.
- **Storage:** retain saved tests, settings and recent results.
- **Side panel:** provide the testing workspace.
- **Notifications and scheduling:** support completion alerts and configured monitors.

Restricted site access can limit features. Browser-protected pages are not
normal test targets. File URLs and incognito access require separate Chrome
settings; do not enable them unless needed.

For the official privacy disclosure, use the privacy-policy link on the
[Chrome Web Store listing](https://chromewebstore.google.com/detail/qagentext-qa-testing-agen/fmabdhbonhmnomjogiehbhadalondhch).
This guide is practical usage guidance, not a replacement for that policy.

## Public Sharing Checklist

Remove passwords, tokens, cookies, authorization headers, internal addresses,
customer names and private screenshots. Prefer a small dummy reproduction over
real application artifacts. Do not attach your browser profile or extension package.

See [security reporting](../SECURITY.md) for sensitive issues.
