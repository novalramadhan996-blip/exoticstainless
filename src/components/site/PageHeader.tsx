import { motion } from "framer-motion";

export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute -right-10 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-4xl font-extrabold text-primary-foreground sm:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/70 sm:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
