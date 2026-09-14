# Task Pad Scenarios

Use only the local dummy app. Each test begins with a fresh page.

| Name | Actions | Expected result |
| --- | --- | --- |
| Save a task | Type Review release notes, then Save task | Task saved appears and the task text is shown |
| Required task name | Leave Task name empty, then Save task | Native required-field validation prevents a saved message |
| Page smoke check | Open the app | Task Pad heading, labeled Task name field and Save task button are visible |
| Deliberate assertion failure | Save a task, but expect Task published | The assertion fails because the actual message is Task saved |

The deliberately failing scenario is for learning debugging, not a release gate
expected to pass. Keep it separate from your normal passing regression suite.

For a recording, use the [quickstart](../docs/quickstart.md). Review inferred
assertions and captured values before replaying. These are plain-language test
intents, not an extension-specific import schema.
