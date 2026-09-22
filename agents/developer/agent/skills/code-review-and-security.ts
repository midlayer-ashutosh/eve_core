import { defineSkill } from "eve/skills"

export default defineSkill({
    description: "Use when reviewing code changes, validating pull requests, or auditing code for security vulnerabilities.",
    markdown: `# Code Review & Security Audit
Apply this checklist when auditing or reviewing changes:
## 1. Security (OWASP Top 10)
- **Injection**: Ensure queries and shell commands use parameterized inputs.
- **Authentication & Authorization**: Verify permission checks exist on all sensitive endpoints.
- **Data Exposure**: Ensure tokens, secrets, or PII are never logged or committed to source control.
- **Input Validation**: Validate and sanitize all incoming payloads with schema validators.
## 2. Code Quality & Maintainability
- Verify adherence to DRY (Don't Repeat Yourself) and SOLID principles.
- Ensure error handling is explicit and never silently catches/swallows errors.
- Confirm naming conventions are consistent, readable, and self-documenting.
## 3. Performance & Resource Safety
- Check for unbounded queries, memory leaks, unclosed streams, and event listener leaks.
- Ensure asynchronous tasks correctly handle cancellations and timeouts.`,
})