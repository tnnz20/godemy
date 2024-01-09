export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
  links?: {
    github: string
  }
}

export type HomeConfig = {
  title: string
  href: string
}[]

// TODO: active treshold and delete disabled
export type SidebarNavItem = {
  title: string
  disabled?: boolean
  // threshold:number
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: { title: string; href: string; disabled?: boolean }[]
    }
)

export type ChaptersConfig = {
  sideNav: SidebarNavItem[]
}

export type QuizItem = {
  id: number
  question: string
  isCode: boolean
  answers: string[]
  correctAnswer: string
}

export type QuizConfig = {
  category: string
  quizItem: QuizItem[]
}
