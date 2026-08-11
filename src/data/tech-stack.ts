export type TechItem = {
  name: string
  /** Local asset under /public */
  logo?: string
  /** simpleicons.org slug fallback when no local logo */
  slug?: string
}

export const techStack: TechItem[] = [
  { name: 'Docker', slug: 'docker' },
  { name: 'Ollama', slug: 'ollama' },
  { name: 'React', slug: 'react' },
  { name: 'SAP', slug: 'sap' },
  { name: 'Azure', logo: '/Logo/azure.png' },
  { name: 'VLLM' },
  { name: 'Neo4j', logo: '/Logo/neo4j.png' },
  { name: 'Claude', slug: 'anthropic' },
  { name: 'Codex', logo: '/Logo/codex.svg' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Agentic AI' },
  { name: 'Copilot', slug: 'githubcopilot' },
  { name: 'Kubernetes', slug: 'kubernetes' },
]

/** Split across two rows for visual variety */
export const techStackRowOne = techStack.filter((_, i) => i % 2 === 0)
export const techStackRowTwo = techStack.filter((_, i) => i % 2 === 1)
