import { AnimatePresence, motion } from "framer-motion";
import { Hexagon } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-primary"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold shadow-gold"
            >
              <Hexagon className="h-8 w-8 text-primary" strokeWidth={2.5} />
            </motion.span>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
              Master Stainless
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
