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
      items: NavLink[]
    }
)

export type ChaptersConfig = {
  sideNav: SidebarNavItem[]
}
