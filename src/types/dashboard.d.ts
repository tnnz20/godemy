export type SidebarNavItem = {
  name: string
  href: string
  icon
}

export type CardWrapperProps = {
  USER_TOKEN: string
}

export type ProfileProps = {
  USER_TOKEN: string
}

export type ProfilesData = {
  title: string
  value: string
}

export type CardProfileProps = {
  Profiles: ProfilesData[]
}
