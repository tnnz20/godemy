export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage?: string
  links?: {
    github: string
  }
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: { title: string; href: string }[]
    }
)

export type ChaptersConfig = {
  sideNav: SidebarNavItem[]
}
