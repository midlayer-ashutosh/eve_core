import { defineSkill } from "eve/skills"

export default defineSkill({
    description: "Use when cleaning up tech debt, restructuring existing code, or optimizing performance without changing external behavior.",
    markdown: `# Safe Refactoring Procedure
Follow this process when refactoring:
## 1. Establish Baseline Safety
- Ensure automated tests exist and pass completely before refactoring begins.
- Take note of current performance benchmarks if optimizing execution speed.
## 2. Incremental Transformations
- Make small, reversible changes (e.g., extract method, rename symbol, decompose conditional).
- Preserve existing public API contracts and method signatures.
- Remove dead code, redundant abstractions, and unused imports.
## 3. Optimization Focus Areas
- Eliminate unnecessary re-renders, loops, and duplicate database/network queries.
- Use efficient data structures (e.g., Maps/Sets for O(1) lookups instead of Array.find).
## 4. Validate
- Re-run test suite after every incremental transformation.
- Confirm behavior and API contracts match the pre-refactor baseline.`,
})