import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logoMark from "@/assets/exotic-stainless-logo.svg";

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
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              animate={{ scale: [0.96, 1, 0.96], opacity: [0.85, 1, 0.85] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="grid h-20 w-20 place-items-center rounded-2xl border border-slate-200 bg-white p-3 shadow-lg"
            >
              <img
                src={logoMark}
                alt="Logo Exotic Stainless"
                className="h-full w-full object-contain"
                loading="eager"
                decoding="async"
              />
            </motion.div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-800">
              Exotic Stainless
            </p>
            <div className="h-1 w-24 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
