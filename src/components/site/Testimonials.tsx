import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/site-data";
import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kata Klien Kami"
          description="Dipercaya oleh operator, insinyur, dan manajer fasilitas di seluruh negeri."
        />
        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto h-12 w-12 text-accent/30" />
          <div className="relative min-h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="mt-4 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-6 text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-lg font-bold text-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div className="text-left">
                    <p className="font-bold text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-gradient-gold" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
