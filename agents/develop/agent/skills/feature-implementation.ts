import { defineSkill } from "eve/skills";

export default defineSkill({
    description: "Use when planning, designing, and implementing new features, modules, or application components.",
    markdown: `
# Feature Implementation Workflow

Follow this procedure when creating new features:

## 1. Requirements & Scope Analysis
- Identify target files, models, and interfaces before touching code.
- Break large changes into atomic, testable increments.
- Verify whether existing modules or helper functions already fulfill parts of the requirement.

## 2. Interface-First Design
- Define TypeScript types, interfaces, and contracts first.
- Ensure proper separation of concerns (Business Logic vs. Data Access vs. Presentation).
- Avoid unnecessary external dependencies when vanilla/native APIs suffice.

## 3. Implementation Steps
- Implement core data types and utility functions.
- Write business logic and integration handlers.
- Handle edge cases, errors, and validation early.
- Keep functions small, pure, and single-purpose.

## 4. Verification
- Verify that changes compile cleanly with no TypeScript/lint warnings.
- Run or create automated unit tests covering happy and error paths.
`,
});
