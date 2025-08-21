import Image from 'next/image'
import { urlFor } from '@/sanity/client'

export default function SanityImage({ value, alt, width = 1200, height = 630 }: { value: any; alt?: string; width?: number; height?: number }) {
  const src = urlFor(value).width(width).height(height).fit('max').url()
  return <Image src={src} alt={alt ?? ''} width={width} height={height} />
}
