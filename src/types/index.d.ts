export type SidebarNavItem = {
  title: string
  disabled?: boolean
} & (
  | {
      path: string
      items?: never
    }
  | {
      path?: string
      items: { title: string; path: string }[]
    }
)

export type ChaptersConfig = {
  sideNav: SidebarNavItem[]
}
