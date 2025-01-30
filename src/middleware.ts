import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { decrypt } from './helpers/crypto';

const protectedRoutes = ['/dashboard']

function decryptCookie(cookie: string) {
  const bytes = decrypt(cookie);
  return JSON.parse(bytes);
}

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  const cookie = (await cookies()).get('session')?.value;

  if (path === '/auth/login' && cookie) {
    const decryptedData = decryptCookie(cookie);

    if (decryptedData.sessionId === 'gengar') {
      return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
    }
  }

  if (isProtectedRoute) {
    if (cookie) {
      const decryptedData = decryptCookie(cookie);

      if (decryptedData.sessionId !== 'gengar') {
        return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
      }
    } else {
      return NextResponse.redirect(new URL('/auth/login', req.nextUrl))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}