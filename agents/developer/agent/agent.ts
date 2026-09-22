import { defineAgent } from "eve"


//if i used any provider like openai or claude then I can directly set their model using somme specific instruction .Because OpenAi and Claude were the default provider of EVE .

import { anthropic } from "eve/models/anthropic"
//import {openAI} from "eve/models/openai"


export default defineAgent({
    model: anthropic("claude-sonnet-4-5"),   // model:"anthropic/claude-sonnet-4-5" normally using .
    reasoning: "medium",
    modelContextWindowTokens: 50000,
    compaction: {
        thresholdPercent: 0.5

    },
    limits: {
        maxInputTokensPerSession: 20000,
        maxOutputTokensPerSession: 10000,
        maxTokenCostUsdPerSession: 0.7,
        sessionTimeoutMs: 7 * 24 * 60 * 60 * 1000,
    }
})
