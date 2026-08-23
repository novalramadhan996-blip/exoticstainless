import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logoMark from "@/assets/exotic-stainless-logo.svg";
import { Button } from "@/components/ui/button";
import { COMPANY, NAV_LINKS } from "@/lib/site-data";

const TRUST_ITEMS = ["FABRIKASI CUSTOM", "PRESISI TINGGI", "MATERIAL PREMIUM", "GARANSI KEPUASAN"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !onHome || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-gradient-to-r from-[#0865ed] via-[#1268ff] to-[#0799ef] text-white">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-end gap-6 px-4 text-[13px] font-bold sm:px-6 lg:px-8">
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="hidden items-center gap-2 whitespace-nowrap sm:flex">
              <CheckCircle2 className="h-4 w-4" strokeWidth={2} />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={`transition-all duration-300 ${solid ? "border-b border-border/70 bg-white/97 shadow-soft backdrop-blur-xl" : "border-b border-border/50 bg-white/96 backdrop-blur-md"}`}>
        <div className="mx-auto flex h-[92px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label={COMPANY.name}>
            <img src={logoMark} alt={`Logo ${COMPANY.name}`} className="h-[58px] w-[58px] object-contain" loading="eager" decoding="async" />
            <span className="leading-none tracking-tight">
              <span className="block text-[27px] font-extrabold text-[#101010]">EXOTIC</span>
              <span className="block text-[25px] font-extrabold text-[#1268ff]">STAINLESS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={"hash" in link ? link.hash : undefined}
                className="group inline-flex items-center gap-1.5 rounded-lg px-4 py-3 text-[16px] font-semibold text-[#101010] transition-colors hover:text-primary"
                activeProps={{ className: "group inline-flex items-center gap-1.5 rounded-lg px-4 py-3 text-[16px] font-semibold text-primary" }}
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
                {link.label === "Produk" && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild variant="gold" size="lg" className="h-14 rounded-full px-7 text-[16px] font-bold shadow-gold">
              <Link to="/contact">Minta Penawaran <ArrowRight className="h-5 w-5" /></Link>
            </Button>
          </div>

          <button type="button" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-xl border border-border text-foreground lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden border-b border-border bg-white lg:hidden">
            <nav className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={link.to} hash={"hash" in link ? link.hash : undefined} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-base font-semibold text-foreground/80 hover:bg-muted hover:text-primary" activeProps={{ className: "block rounded-lg px-3 py-3 text-base font-semibold text-primary" }} activeOptions={{ exact: link.to === "/" }}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <Button asChild variant="gold" size="lg" className="mt-2 rounded-full">
                <Link to="/contact" onClick={() => setOpen(false)}>Minta Penawaran <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
