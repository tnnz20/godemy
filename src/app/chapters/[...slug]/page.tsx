import { notFound } from "next/navigation"
import { allChapters } from "contentlayer/generated"

import "@/styles/mdx.css"

import { Mdx } from "@/app/components/mdx-components"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getChapterFromParams(params: string[]) {
  const slug = params?.join("/")
  const chapter = allChapters.find((chapter) => chapter.slugAsParams === slug)

  if (!chapter) notFound()

  return chapter
}

export default async function page(prop: PageProps) {
  const chapter = await getChapterFromParams(prop.params?.slug)

  return (
    <main className="container max-w-4xl py-6 lg:py-12">
      <div className="space-y-3">
        <h1 className="font-heading my-2 inline-block text-4xl lg:text-5xl">{chapter.title}</h1>
        <Mdx code={chapter.body.code} />
      </div>
    </main>
  )
}
