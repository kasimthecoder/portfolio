export const SITE_ORIGIN = "https://www.kasimsaifi.in";
export const HOME_URL = `${SITE_ORIGIN}/`;

export function canonicalUrl(pathname: string) {
  if (pathname === "/") return HOME_URL;
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(path, SITE_ORIGIN).toString();
}
