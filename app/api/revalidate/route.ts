import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { TAGS } from '@/lib/sanity.query'

export async function POST(req: Request) {
  const headerSecret = req.headers.get('x-vercel-reval-key')
  let bodySecret: string | undefined
  try {
    const body = await req.json()
    bodySecret = body?.secret
  } catch {}

  const secret = headerSecret || bodySecret
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 })
  }

  revalidateTag(TAGS.settings)
  revalidateTag(TAGS.pages)
  revalidateTag(TAGS.posts)

  return NextResponse.json({ revalidated: true, now: Date.now() })
}
