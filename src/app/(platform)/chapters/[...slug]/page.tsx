import { notFound } from "next/navigation"
import { allChapters, Chapter } from "contentlayer/generated"

import "@/styles/mdx.css"

import { Metadata } from "next"

import { Mdx } from "@/components/mdx-components"

import { Pager } from "../_components/pager"

interface PageProps {
  params: {
    slug: string[]
  }
}

// TODO: Fix Styling

async function getChapterFromParams(params: string[]) {
  const slug = params.join("/")
  const chapter = allChapters.find((chapter) => chapter.slugAsParams === slug)
  if (!chapter) notFound()

  return chapter
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const chapter = await getChapterFromParams(props.params?.slug)

  return {
    title: chapter.title,
    description: chapter.description,
  }
}

export default async function ChapterPage(prop: Readonly<PageProps>) {
  const chapter: Chapter = await getChapterFromParams(prop.params?.slug)

  return (
    <main className="container my-12 max-w-5xl  lg:my-8 lg:py-5">
      <div className="mx-auto w-full min-w-0 space-y-3">
        <h1 className="my-5 inline-block font-heading text-4xl lg:text-5xl">{chapter.title}</h1>
        <article className="h-full">
          <Mdx code={chapter.body.code} />
        </article>
        <hr className="my-4 md:my-6" />
        <Pager chapter={chapter} />
      </div>
    </main>
  )
}
