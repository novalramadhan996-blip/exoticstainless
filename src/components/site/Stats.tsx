import { STATS } from "@/lib/site-data";
import { AnimatedCounter, Reveal } from "./motion-primitives";

export function Stats() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-primary-foreground sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
