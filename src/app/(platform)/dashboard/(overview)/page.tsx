import { cookies } from "next/headers"

import { DecodeJWT } from "@/lib/utils"

export default function Dashboard() {
  const cookieStore = cookies()
  const jwtToken = cookieStore.get("token")

  const { role } = DecodeJWT(jwtToken?.value)

  return (
    <main>
      <h1 className={` mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <CardWrapper /> */}
        {/* <Suspense fallback={<CardsSkeleton />}>
        </Suspense> */}
        <div className="h-full w-full bg-primary">tes</div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
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
