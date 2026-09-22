import { defineSkill } from "eve/skills"

export default defineSkill({
    description: "Use when writing unit, integration, or end-to-end tests, setting up mocks, or verifying test coverage.",
    markdown: `# Testing & QA Guidelines
## 1. Test Strategy (AAA Pattern)
Structure every test using:
- **Arrange**: Set up minimal preconditions, test data, and required mocks.
- **Act**: Invoke the single method or workflow under test.
- **Assert**: Validate explicit expected outcomes and state transitions.
## 2. Coverage Requirements
- **Happy Path**: Expected user flows with valid inputs.
- **Edge Cases**: Empty collections, max boundaries, null/undefined inputs, and special characters.
- **Error Handling**: Network failures, timeouts, validation rejections, and thrown exceptions.
## 3. Mocking Best Practices
- Only mock external boundaries (databases, HTTP APIs, third-party services).
- Avoid over-mocking internal application logic; test real integration paths where feasible.
- Reset mock state and timers before/after each test suite.`,
    files: {
        "references/test-checklist.md": `
# Test Verification Checklist
- [ ] Unit tests cover individual logic units.
- [ ] Integration tests verify cross-module contracts.
- [ ] Mocks accurately reflect production behavior.
- [ ] Tests run deterministically with no flaky async behavior.
`,

    }
})