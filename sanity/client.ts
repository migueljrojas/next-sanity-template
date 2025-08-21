import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN
})

const builder = imageUrlBuilder({ projectId, dataset })
export const urlFor = (source: any) => builder.image(source)
