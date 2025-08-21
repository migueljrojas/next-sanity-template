import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname.startsWith('/studio') && process.env.NODE_ENV === 'production') {
    const auth = req.headers.get('authorization')
    const expected = 'Basic ' + Buffer.from(`${process.env.STUDIO_USER}:${process.env.STUDIO_PASS}`).toString('base64')
    if (auth !== expected) {
      return new NextResponse('Auth required', { status: 401, headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' } })
    }
  }
  return NextResponse.next()
}

export const config = { matcher: ['/studio/:path*'] }
