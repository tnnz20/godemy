interface CompilerProps {
  src: string
}

export function Compiler(props: CompilerProps) {
  return (
    <div className="mx-4 mt-4 flex h-full w-full justify-center">
      <iframe src={props.src} title="compiler" width="90%" height="450"></iframe>
    </div>
  )
}
