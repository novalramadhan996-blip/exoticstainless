export const SITE_URL = "https://meta-craft-pro.lovable.app";

/** Ubah path aset lokal (mis. /assets/hero-abc123.jpg) menjadi URL absolut untuk OG/Twitter. */
export function absoluteUrl(pathOrUrl: string) {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
