import { defineSkill } from "eve/skills"

export default defineSkill({
    description: "Use when managing git branches, crafting commit messages, creating pull requests, or preparing release versions.",
    markdown: `# Git & Release Conventions
## 1. Conventional Commits Standard
Format all commit messages as: \`<type>(<scope>): <short summary>\`
- \`feat\`: A new user-facing feature or capability
- \`fix\`: A bug fix
- \`refactor\`: Code change that neither fixes a bug nor adds a feature
- \`test\`: Adding or correcting tests
- \`chore\`: Build process, package updates, or auxiliary tool changes
## 2. Branching & PR Guidelines
- Use feature branches named \`feat/<name>\`, \`fix/<name>\`, or \`refactor/<name>\`.
- Keep commits atomic (one logical change per commit).
- Provide PR summaries describing:
  1. Context & Motivation
  2. Summary of Changes
  3. How It Was Verified
## 3. Semantic Versioning (SemVer)
- **MAJOR (X.0.0)**: Incompatible/breaking API changes.
- **MINOR (0.X.0)**: Backward-compatible functionality additions.
- **PATCH (0.0.X)**: Backward-compatible bug fixes.`,
})