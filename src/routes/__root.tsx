import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { BackToTop } from "@/components/site/BackToTop";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Toaster } from "@/components/ui/sonner";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Master Stainless — Fabrikasi Stainless Steel Premium" },
      {
        name: "description",
        content:
          "Merekayasa solusi stainless steel yang dibangun untuk performa dan dirancang untuk presisi. Fabrikasi kustom, pemotongan laser, pengelasan, dan instalasi ke seluruh negeri.",
      },
      { name: "author", content: "Master Stainless" },
      { property: "og:title", content: "Master Stainless — Fabrikasi Stainless Steel Premium" },
      {
        property: "og:description",
        content:
          "Merekayasa solusi stainless steel yang dibangun untuk performa dan dirancang untuk presisi. Fabrikasi kustom, pemotongan laser, pengelasan, dan instalasi ke seluruh negeri.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Master Stainless" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Master Stainless — Fabrikasi Stainless Steel Premium" },
      { name: "twitter:description", content: "Merekayasa solusi stainless steel yang dibangun untuk performa dan dirancang untuk presisi. Fabrikasi kustom, pemotongan laser, pengelasan, dan instalasi ke seluruh negeri." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/905b178964c0c3337530ed611979b660/id-preview-d4043aa8--cc557626-822a-47a7-91e9-e6f099e51d76.lovable.app-1786416683655.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/905b178964c0c3337530ed611979b660/id-preview-d4043aa8--cc557626-822a-47a7-91e9-e6f099e51d76.lovable.app-1786416683655.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },

      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://meta-craft-pro.lovable.app/#organization",
          name: "Master Stainless",
          description: "Fabrikasi dan manufaktur stainless steel premium.",
          url: "https://meta-craft-pro.lovable.app",
          logo: {
            "@type": "ImageObject",
            url: "https://meta-craft-pro.lovable.app/favicon.ico",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
