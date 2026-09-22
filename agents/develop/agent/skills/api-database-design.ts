import { defineSkill } from "eve/skills";

export default defineSkill({
    description: "Use when designing REST/GraphQL API endpoints, database schemas, relationships, and migrations.",
    markdown: `
# API & Database Architecture Standards

## 1. RESTful API Design
- Use plural nouns for resource endpoints (e.g., \`/api/v1/users\`, \`/api/v1/orders\`).
- Use correct HTTP verbs: \`GET\` (read), \`POST\` (create), \`PUT\` (full replace), \`PATCH\` (partial update), \`DELETE\` (remove).
- Return standard HTTP status codes: \`200 OK\`, \`201 Created\`, \`400 Bad Request\`, \`401 Unauthorized\`, \`403 Forbidden\`, \`404 Not Found\`, \`500 Internal Error\`.
- Standardize error envelopes: \`{ error: { code: string, message: string, details?: any } }\`.

## 2. Database Schema & Migrations
- Use explicit primary keys (\`UUID\` or auto-incrementing IDs).
- Enforce referential integrity using foreign keys and constraint rules.
- Add indexes to foreign keys and columns frequently used in \`WHERE\`, \`ORDER BY\`, or \`JOIN\` clauses.
- Ensure every database migration is reversible with a corresponding rollback script.
`,
});
