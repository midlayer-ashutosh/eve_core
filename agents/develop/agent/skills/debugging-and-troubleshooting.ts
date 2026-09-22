import { defineSkill } from "eve/skills";

export default defineSkill({
    description: "Use when diagnosing bugs, stack traces, runtime errors, or unexpected system behavior.",
    markdown: `
# Systematic Debugging Procedure

Follow these steps to diagnose and fix issues:

## 1. Reproduce & Capture
- Identify the exact inputs, environment conditions, and trigger steps.
- Isolate the error message, exit codes, and relevant stack traces.
- If possible, write a minimal failing test before altering code.

## 2. Isolate Root Cause
- Trace data flow from input to failure point (do not guess or make premature edits).
- Inspect variable state, null/undefined hazards, and async promise resolution.
- Verify environment variables and configuration assumptions.

## 3. Implement Minimal Fix
- Address the underlying cause rather than masking symptoms with ad-hoc guards.
- Maintain existing API contracts and avoid introducing breaking side effects.

## 4. Verify & Prevent Regression
- Re-run the reproduction case to verify the fix.
- Run the full test suite to guarantee zero regressions.
`,
});
