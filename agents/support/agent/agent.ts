import { defineAgent } from "eve"
import { amazonBedrock } from "@ai-sdk/amazon-bedrock"



export default defineAgent({
  model: amazonBedrock("us.anthropic.claude-3-5-sonnet-20240620-v1:0"),
  modelContextWindowTokens: 2000,
  reasoning: "low",
  defaultTools: false,
  compaction: {
    thresholdPercent: 0.2
  },
  limits: {
    maxInputTokensPerSession: 20000,
    maxOutputTokensPerSession: 10000,
    maxTokenCostUsdPerSession: 0.05,
    sessionTimeoutMs: 7 * 24 * 60 * 60 * 1_000,
  }
});
