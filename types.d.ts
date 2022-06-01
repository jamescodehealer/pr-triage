type Reviewer = "ahejlsberg" | "andrewbranch" | "amcasey" | "minestarks" | "orta" | "rbuckton" | "RyanCavanaugh" | "sheetalkamat" | "weswigham" | "sandersn" | "DanielRosenwasser" | "sokra" | "gabritto" | "jakebailey" | "armanio123" | "typescript-bot"

type Pulls = { [s: string]: Pull }
type Pull = {
  author: string
  reviewers: Reviewer[]
  /** 1-line description */
  description: string
  /**
   * multiline notes
   * not freeform for now -- one bullet point per entry.
   */
  notes: string[]
  state: "not-started" | "review" | "waiting" | "merge" | "done"
  label: "milestone" | "backlog" | "bonus" | "housekeeping" | "experiment" | "OTHER"
  id: string
  lastCommit: string | undefined
  lastComment: string | undefined
  lastCommenter: Reviewer | undefined
}

type Card = {
  number: string
  title: string
  labels: {
    nodes: Array<{ name: string }>
  }
  assignees: {
    nodes: Array<{ login: string }>
  }
  author: { login: string }
  commits: {
    nodes: Array<{ commit: { committedDate: string } }>
  }
  comments: {
    nodes: Array<{ publishedAt: string, author: { login: string } }>
  }
}

type Board = {
  repository: {
    project: {
      columns: {
        nodes: Array<{
          name: string,
          cards: {
            nodes: Array<{ url: string, content: Card }>
          }
        }>
      }
    }
  }
}
