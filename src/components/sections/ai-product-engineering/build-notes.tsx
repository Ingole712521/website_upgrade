import { ExpandableNotes } from '@/components/ui/expandable-notes'

const notes = [
  {
    id: 'when',
    tag: 'Timing',
    q: 'When should a product team use AI-assisted engineering?',
    a: 'AI-assisted engineering is useful when teams need to move from concept to working product faster while keeping architecture, review, testing, and release decisions under senior engineering control.',
  },
  {
    id: 'start',
    tag: 'Kickoff',
    q: 'Can zCon start before requirements are fully finalized?',
    a: 'Yes. zCon can help with product framing, architecture, prototypes, frontend and backend delivery, integrations, testing, deployment, and production readiness.',
  },
  {
    id: 'compress',
    tag: 'Acceleration',
    q: 'Where does AI compress the product build cycle?',
    a: 'AI helps convert requirements into build plans, generate repeatable code patterns, create UI previews, cross-check acceptance criteria, and speed up review and QA while senior engineers retain control.',
  },
  {
    id: 'stack',
    tag: 'Stack fit',
    q: 'Can this fit into our existing cloud and engineering stack?',
    a: 'Typical stacks include React, Next.js, .NET, Node.js, Python, Azure, SQL and NoSQL databases, vector databases, RAG pipelines, and API integrations.',
  },
]

export function AiProductBuildNotes() {
  return (
    <ExpandableNotes
      id="build-notes"
      className="bg-muted/40 dark:bg-transparent"
      eyebrow="Product Build Notes"
      title={<>Before starting AI product engineering</>}
      description="Clarify product scope, stack fit, delivery controls, and the first release path. Tap a question to expand."
      notes={notes}
    />
  )
}
