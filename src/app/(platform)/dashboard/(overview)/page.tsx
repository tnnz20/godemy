import { cookies } from "next/headers"

import { DecodeJWT } from "@/lib/utils"

import CardStudentWrapper from "./_components/card-student"
import CardTeacherWrapper from "./_components/card-teacher"
import Profile from "./_components/profile"

export default function Dashboard() {
  const cookieStore = cookies()
  const jwtToken = cookieStore.get("token")

  const { role } = DecodeJWT(jwtToken?.value)
  return (
    <main>
      <h1 className={` mb-4 text-2xl md:text-4xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {role === "teacher" && <CardTeacherWrapper USER_TOKEN={jwtToken?.value ?? ""} />}
        {role === "student" && <CardStudentWrapper USER_TOKEN={jwtToken?.value ?? ""} />}
        {/* <Suspense fallback={<CardsSkeleton />}>
        </Suspense> */}
      </div>
      <div className="mt-6 ">
        <Profile USER_TOKEN={jwtToken?.value ?? ""} />
        {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense> */}
      </div>
    </main>
  )
}
