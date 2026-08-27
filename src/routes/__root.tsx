import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";
import { COMPANY } from "@/lib/site-data";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import heroImg from "@/assets/hero.jpg";

const DEFAULT_TITLE = "Exotic Stainless | Fabrikasi Stainless Steel Jabodetabek";
const DEFAULT_DESCRIPTION = "Exotic Stainless melayani fabrikasi stainless steel custom di Jabodetabek untuk railing, pagar, gerbang, pintu, peralatan stainless, rak, dan kebutuhan proyek rumah, komersial, maupun industri.";
const KEYWORDS = "Exotic Stainless, fabrikasi stainless steel Jabodetabek, fabrikasi stainless steel, stainless steel custom, jasa stainless steel, railing stainless steel, railing tangga stainless, railing balkon stainless, pagar stainless steel, gerbang stainless steel, pintu stainless steel, peralatan dapur stainless, peralatan rumah sakit stainless, peralatan laboratorium stainless, rak stainless, Bekasi, Jakarta, Bogor, Depok, Tangerang";
const OG_IMAGE = absoluteUrl(heroImg);
const CANONICAL_URL = SITE_URL || "/";
const FAVICON_URL = "/favicon.svg?v=exotic-stainless-2026";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Halaman tidak ditemukan</h2><p className="mt-2 text-sm text-muted-foreground">Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Kembali ke Beranda</Link></div></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { console.error("Application error:", error); }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">Halaman gagal dimuat</h1><p className="mt-2 text-sm text-muted-foreground">Terjadi kesalahan pada website. Silakan coba lagi atau kembali ke halaman utama.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Coba Lagi</button><a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent">Kembali ke Beranda</a></div></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: COMPANY.name },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#ffffff" },
      { name: "geo.region", content: "ID-JB" },
      { name: "geo.placename", content: "Jabodetabek, Indonesia" },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: COMPANY.name },
      { property: "og:locale", content: "id_ID" },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Exotic Stainless — jasa fabrikasi stainless steel custom Jabodetabek" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: FAVICON_URL },
      { rel: "shortcut icon", type: "image/svg+xml", href: FAVICON_URL },
      { rel: "apple-touch-icon", href: FAVICON_URL },
      { rel: "canonical", href: CANONICAL_URL },
      { rel: "sitemap", type: "application/xml", href: `${CANONICAL_URL}/sitemap.xml` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        { "@type": "Organization", "@id": `${CANONICAL_URL}/#organization`, name: COMPANY.name, url: CANONICAL_URL, logo: absoluteUrl(FAVICON_URL), email: COMPANY.email, telephone: COMPANY.phone, areaServed: [{ "@type": "AdministrativeArea", name: "Jakarta" }, { "@type": "AdministrativeArea", name: "Bogor" }, { "@type": "AdministrativeArea", name: "Depok" }, { "@type": "AdministrativeArea", name: "Tangerang" }, { "@type": "AdministrativeArea", name: "Bekasi" }, { "@type": "AdministrativeArea", name: "Jabodetabek" }, { "@type": "Country", name: "Indonesia" }] },
        { "@type": "LocalBusiness", "@id": `${CANONICAL_URL}/#localbusiness`, name: COMPANY.name, url: CANONICAL_URL, image: OG_IMAGE, telephone: COMPANY.phone, email: COMPANY.email, priceRange: "$$", openingHours: "Mo-Sa 08:00-18:00", geo: { "@type": "GeoCoordinates", latitude: COMPANY.mapLat, longitude: COMPANY.mapLng }, areaServed: ["Jabodetabek", "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Indonesia"], knowsAbout: ["fabrikasi stainless steel Jabodetabek", "stainless steel custom", "pagar stainless steel", "railing stainless steel", "railing tangga", "railing balkon", "gerbang stainless steel", "pintu stainless steel", "peralatan stainless steel", "produk stainless steel custom"] },
        { "@type": "Service", "@id": `${CANONICAL_URL}/#stainless-fabrication`, name: "Fabrikasi Stainless Steel Custom", serviceType: "Fabrikasi stainless steel custom", provider: { "@id": `${CANONICAL_URL}/#organization` }, areaServed: ["Jabodetabek", "Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"], description: "Jasa fabrikasi stainless steel custom untuk railing, pagar, gerbang, pintu, peralatan, rak, dan kebutuhan proyek rumah, komersial, maupun industri." },
        { "@type": "WebSite", "@id": `${CANONICAL_URL}/#website`, name: COMPANY.name, url: CANONICAL_URL, inLanguage: "id-ID", publisher: { "@id": `${CANONICAL_URL}/#organization` } },
      ],
    }) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { return <html lang="id"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><LoadingScreen /><ScrollProgress /><Navbar /><main className="min-h-screen"><Outlet /></main><Footer /><BackToTop /><WhatsAppButton /><Toaster position="top-right" richColors /></QueryClientProvider>;
}
