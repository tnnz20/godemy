import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer/hooks"

import { cn } from "@/lib/utils"

import { Callout } from "./callout"
import { MdxCard } from "./mdx-card"

const components: MDXComponents = {
  h1: H1,
  h2: H2,
  p: Paragraph,
  ul: UnOrderedList,
  ol: OrderedList,
  li: List,
  blockquote: BlockQuote,
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: Table,
  tr: TableRow,
  th: TableHeader,
  td: TableData,
  pre: PreCode,
  code: Code,
  a: AnchorLink,
  Callout,
  Image: (prop) => <Image className="mx-auto my-4" {...prop} />,
  Card: MdxCard,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: Readonly<MdxProps>) {
  const Component = useMDXComponent(code)

  return (
    <article className="mdx">
      <Component components={components} />
    </article>
  )
}

function H1({ className, ...props }: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl", className)} {...props} />
}

function H2({ className, ...props }: Readonly<React.HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h2
      className={cn("mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0", className)}
      {...props}
    />
  )
}

function Paragraph({ className, ...props }: Readonly<React.HTMLAttributes<HTMLParagraphElement>>) {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)} {...props} />
}

function UnOrderedList({ className, ...props }: Readonly<React.HTMLAttributes<HTMLUListElement>>) {
  return <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
}

function OrderedList({ className, ...props }: Readonly<React.HTMLAttributes<HTMLOListElement>>) {
  return <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
}

function List({ className, ...props }: Readonly<React.HTMLAttributes<HTMLLIElement>>) {
  return <li className={cn("mt-2 leading-7", className)} {...props} />
}

function PreCode({ className, ...props }: Readonly<React.HTMLAttributes<HTMLPreElement>>) {
  return <pre className={cn("mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4", className)} {...props} />
}

function Table({ className, ...props }: Readonly<React.HTMLAttributes<HTMLTableElement>>) {
  return (
    <div className="my-4 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  )
}

function TableRow({ className, ...props }: Readonly<React.HTMLAttributes<HTMLTableRowElement>>) {
  return <tr className={cn("m-0 border-t p-0 even:bg-muted even:font-semibold", className)} {...props} />
}

function TableHeader({ className, ...props }: Readonly<React.HTMLAttributes<HTMLTableHeaderCellElement>>) {
  return (
    <th
      className={cn(
        "border p-3 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  )
}

function TableData({ className, ...props }: Readonly<React.HTMLAttributes<HTMLTableDataCellElement>>) {
  return (
    <td
      className={cn(
        "even:text-bold border p-4 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  )
}

type AnchorLinkProps = {
  href: string
  children: string
}
function AnchorLink({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement> & AnchorLinkProps) {
  return (
    <Link className={cn("font-medium underline underline-offset-4", className)} href={props.href}>
      {props.children}
    </Link>
  )
}

function BlockQuote({ className, ...props }: Readonly<React.HTMLAttributes<HTMLQuoteElement>>) {
  return <blockquote className={cn("border-l-4 pl-4 italic", className)} {...props} />
}

function Code({ className, ...props }: Readonly<React.HTMLAttributes<HTMLElement>>) {
  return <code className={cn("relative rounded border p-1 font-mono text-sm font-medium  ", className)} {...props} />
}
