import { client } from '@/sanity/client'
import groq from 'groq'

export const TAGS = {
  settings: 'settings',
  pages: 'pages',
  posts: 'posts'
} as const

export async function getSettings() {
  return client.fetch(groq`*[_type == "settings"][0]{title, description}`, {}, { next: { revalidate: 60, tags: [TAGS.settings] } })
}

export async function getPageBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{title, content}`,
    { slug },
    { next: { revalidate: 60, tags: [TAGS.pages] } }
  )
}

export async function getAllPageSlugs() {
  return client.fetch(groq`*[_type == "page" && defined(slug.current)][].slug.current`)
}
