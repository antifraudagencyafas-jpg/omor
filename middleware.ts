import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');

  // 1. Redirect www to non-www
  if (host && host.startsWith('www.')) {
    url.host = host.replace('www.', '');
    return NextResponse.redirect(url, 301);
  }

  // 2. Hotlink protection for images
  const pathname = request.nextUrl.pathname;
  const isImage = pathname.match(/\.(jpg|jpeg|png|webp|gif|ico|svg)$/i);
  if (isImage) {
    const referer = request.headers.get('referer');
    if (referer) {
      const refererUrl = new URL(referer);
      const allowedHosts = ['omrontechpumps.nl', 'localhost'];
      if (!allowedHosts.some(allowedHost => refererUrl.hostname === allowedHost || refererUrl.hostname.endsWith('.' + allowedHost))) {
        // Return a 403 Forbidden for hotlinked images
        return new NextResponse(null, { status: 403 });
      }
    }
  }

  // Note: HTTP to HTTPS redirect is typically handled at the infrastructure level (e.g., Vercel, Nginx, Cloudflare),
  // but can be added here if needed. Next.js does not provide a robust way to check for HTTP in middleware
  // without relying on non-standard headers like x-forwarded-proto.

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
