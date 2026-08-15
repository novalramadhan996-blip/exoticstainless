import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoMark from "@/assets/exotic-stainless-logo.svg";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/site-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !onHome || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-3"
          aria-label={COMPANY.name}
        >
          <img
            src={logoMark}
            alt={`Logo ${COMPANY.name}`}
            className="h-12 w-12 rounded-xl object-cover drop-shadow"
            loading="eager"
            decoding="async"
          />
          <span
            className={`text-lg font-extrabold uppercase tracking-tight ${
              solid ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Exotic<span className="text-accent"> Stainless</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={"hash" in link ? link.hash : undefined}
              className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors hover:text-accent ${
                solid ? "text-foreground/80" : "text-primary-foreground/90"
              }`}
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="gold" size="lg">
            <Link to="/contact">Minta Penawaran</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center rounded-xl border lg:hidden ${
            solid
              ? "border-border text-foreground"
              : "border-primary-foreground/30 text-primary-foreground"
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    hash={"hash" in link ? link.hash : undefined}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-accent"
                    activeProps={{ className: "text-accent" }}
                    activeOptions={{ exact: link.to === "/" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild variant="gold" size="lg" className="mt-2">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Minta Penawaran
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
