import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, hasLocale, localeCookie } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/")[1];

  if (hasLocale(pathLocale)) {
    const response = NextResponse.next();
    if (request.cookies.get(localeCookie)?.value !== pathLocale) {
      response.cookies.set(localeCookie, pathLocale, { maxAge: 60 * 60 * 24 * 365 });
    }
    return response;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function preferredLocale(request: NextRequest) {
  const saved = request.cookies.get(localeCookie)?.value;
  if (hasLocale(saved)) return saved;

  const accepted = request.headers
    .get("accept-language")
    ?.split(",")
    .map((entry) => entry.split(";")[0].trim().slice(0, 2).toLowerCase());

  return accepted?.find(hasLocale) ?? defaultLocale;
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
