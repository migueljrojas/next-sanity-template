import { PortableText, PortableTextComponents } from '@portabletext/react'

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>
  }
}

export default function RichText({ value }: { value: any }) {
  return <PortableText value={value} components={components} />
}
