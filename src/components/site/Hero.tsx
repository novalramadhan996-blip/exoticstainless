import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-samples/project-1.webp";

const floatingCards = [
  { icon: Award, value: "Custom", label: "Sesuai Kebutuhan", className: "left-0 top-10" },
  { icon: Building2, value: "Survey", label: "Pengukuran Lokasi", className: "right-0 top-1/2" },
  { icon: Users, value: "Siap", label: "Fabrikasi & Instalasi", className: "bottom-6 left-12" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-10 -top-10 h-80 w-80 rounded-full bg-secondary/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Exotic Stainless · Fabrikasi Custom
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] text-primary-foreground sm:text-5xl lg:text-6xl">
            Stainless Steel
            <span className="text-gradient-gold"> Custom</span>
            <span className="mt-2 block text-2xl font-semibold text-primary-foreground/80 sm:text-3xl">
              Presisi, Kokoh, dan Dibuat Sesuai Kebutuhan
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
            Exotic Stainless melayani fabrikasi pagar, pintu, railing tangga, railing balkon, peralatan, dan berbagai kebutuhan stainless steel custom untuk rumah, komersial, serta industri di Jabodetabek.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Minta Penawaran <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outlineLight" size="xl">
              <Link to="/projects">Lihat Proyek</Link>
            </Button>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-primary-foreground/60">
            <ShieldCheck className="h-5 w-5 text-accent" />
            Survey, desain, fabrikasi, finishing, dan instalasi
          </div>
        </motion.div>

        <motion.div className="relative" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}>
          <div className="overflow-hidden rounded-3xl border border-primary-foreground/10 shadow-elevated">
            <img
              src={project1}
              alt="Hasil fabrikasi stainless steel custom Exotic Stainless"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`absolute ${card.className} flex items-center gap-3 rounded-2xl border border-border/60 bg-background/95 px-4 py-3 shadow-elevated backdrop-blur`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-gold">
                <card.icon className="h-5 w-5 text-primary" />
              </span>
              <div>
                <p className="text-lg font-extrabold text-foreground">{card.value}</p>
                <p className="text-xs text-muted-foreground">{card.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
