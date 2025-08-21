import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const secret = searchParams.get('secret')
  const enable = searchParams.get('enable') === 'true'

  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 })
  }

  const dm = draftMode()
  if (enable) dm.enable()
  else dm.disable()

  return NextResponse.redirect(new URL('/', req.url))
}
