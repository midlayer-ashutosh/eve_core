import { defineAgent } from "eve";
import {anthropic} from "eve/models/anthropic"

export default defineAgent({
  model: anthropic("claude-sonnet-4-5"),
  defaultTools: false,
  reasoning:'low',
  compaction: {
    thresholdPercent:0.7
  },
  limits: {
    maxInputTokensPerSession:200000,
    maxOutputTokensPerSession:100000,
    maxTokenCostUsdPerSession:0.05,
    sessionTimeoutMs:7 * 24 * 60 * 60 * 1_000,
  }

});
