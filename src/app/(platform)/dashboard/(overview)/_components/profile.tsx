import { BASE_URL } from "@/constants/constants"

import { CardProfileProps, ProfileProps, ProfilesData } from "@/types/dashboard"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Profile({ USER_TOKEN }: Readonly<ProfileProps>) {
  const response = await fetch(`${BASE_URL}/user/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${USER_TOKEN}`,
    },
    cache: "no-store",
  })

  const res = await response.json()

  const Profiles: ProfilesData[] = [
    {
      title: "Nama",
      value: res?.data?.name,
    },
    {
      title: "Email",
      value: res?.data?.email,
    },
    {
      title: "Jenis Kelamin",
      value: res?.data?.gender,
    },
    {
      title: "Role",
      value: res?.data?.role,
    },
  ]
  return (
    <div className="w-full md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">Profile</h2>
      <CardProfile Profiles={Profiles} />
    </div>
  )
}

function CardProfile({ Profiles }: Readonly<CardProfileProps>) {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>Biodata pengguna Godemy</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {Profiles.map((profile) => (
            <div key={profile.title} className="mb-4  items-start pb-4 last:mb-0 last:pb-0">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{profile.title}</p>
                <p className="text-sm text-muted-foreground">{profile.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
