export type TechItem = {
  name: string
  /** simpleicons.org slug; omit for custom/fallback mark */
  slug?: string
}

export const techStack: TechItem[] = [
  { name: 'Docker', slug: 'docker' },
  { name: 'Ollama', slug: 'ollama' },
  { name: 'React', slug: 'react' },
  { name: 'SAP', slug: 'sap' },
  { name: 'Azure', slug: 'microsoftazure' },
  { name: 'VLLM' },
  { name: 'Neo4j', slug: 'neo4j' },
  { name: 'Claude', slug: 'anthropic' },
  { name: 'Codex', slug: 'openai' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Agentic AI' },
  { name: 'Copilot', slug: 'githubcopilot' },
  { name: 'Kubernetes', slug: 'kubernetes' },
]

/** Split across two rows for visual variety */
export const techStackRowOne = techStack.filter((_, i) => i % 2 === 0)
export const techStackRowTwo = techStack.filter((_, i) => i % 2 === 1)
