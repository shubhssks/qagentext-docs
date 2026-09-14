# Safe Examples

These examples are independently written for documentation. They do not contain
extension internals or real application data.

## Task Pad

Task Pad is a tiny local form with a task-name field and Save task button. Saving
updates the page only; no backend, account, analytics or remote assets are used.
Reloading resets its state.

With Node.js installed, run this command from this repository folder:

```sh
node examples/demo-app/serve.mjs
```

Open [Task Pad locally](http://127.0.0.1:4173), then follow the
[first-test guide](../docs/quickstart.md). Stop the server with Ctrl+C. If port
4173 is in use, close the other server you own or set `PORT` to a free port;
use that same URL when recording or running the reference test.

You can also open `demo-app/index.html` directly. Chrome extension testing of a
file URL requires enabling file access for QAgentExt in Chrome's extension
settings. A localhost page avoids that additional permission setting.

## Reference Playwright Test

The test in `playwright/first-test.spec.js` demonstrates the intended assertion.
It is hand-written reference code, not an unchanged QAgentExt export.

In a terminal in this repository:

```sh
npm install
npx playwright install chromium
npm test
```

Those commands download testing dependencies and Chromium from their providers.
They do not publish this repository. Node.js and browser dependency setup are
not part of the extension's recording prerequisites.

The test runner starts the local sample server if it is not already running,
and stops the server it started when the test finishes.

The test expects `http://127.0.0.1:4173`; set `DEMO_URL` if you chose another local
port. Do not point these examples at a production application.

[Scenario list](scenarios.md) | [Automation export guide](../docs/automation-export.md)
