import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Crosshair, ShieldCheck, ThumbsUp, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-samples/project-1.webp";

const floatingCards = [
  { icon: ShieldCheck, value: "Custom", label: "Sesuai Kebutuhan", className: "left-0 top-10" },
  { icon: Crosshair, value: "Survey", label: "Pengukuran Lokasi", className: "right-0 top-1/2" },
  { icon: Users, value: "Siap", label: "Fabrikasi & Instalasi", className: "bottom-6 left-12" },
];

const benefits = [
  { icon: ShieldCheck, title: "Material Berkualitas", text: "Stainless steel pilihan tahan karat & kuat" },
  { icon: Crosshair, title: "Presisi Tinggi", text: "Pengerjaan detail dengan standar presisi tinggi" },
  { icon: Wrench, title: "Custom Design", text: "Desain dapat disesuaikan dengan kebutuhan Anda" },
  { icon: ThumbsUp, title: "Garansi Kepuasan", text: "Kami berkomitmen pada hasil terbaik untuk Anda" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-[154px] sm:pb-12 lg:pb-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(18,104,255,0.07),transparent_25%),linear-gradient(180deg,#fff_0%,#f8fbff_100%)]" />
      <div className="pointer-events-none absolute right-0 top-[145px] h-[270px] w-[270px] opacity-70 [background-image:radial-gradient(#72a8ff_1.5px,transparent_1.5px)] [background-size:16px_16px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="inline-flex items-center rounded-full border border-[#1268ff] bg-white px-4 py-2 text-[15px] font-bold uppercase tracking-wide text-[#1268ff]">
              Exotic Stainless&nbsp; • &nbsp;Fabrikasi Custom
            </span>

            <h1 className="mt-6 max-w-[650px] text-[48px] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#090909] sm:text-[60px] lg:text-[64px]">
              Stainless Steel
              <span className="block text-[#1268ff]">Custom</span>
              <span className="mt-4 block max-w-[590px] text-[25px] font-semibold leading-[1.22] tracking-[-0.02em] text-[#30486f] sm:text-[29px]">
                Presisi, Kokoh, dan Dibuat Sesuai Kebutuhan Anda
              </span>
            </h1>

            <p className="mt-5 max-w-[610px] text-[16px] leading-7 text-[#405575] sm:text-[17px]">
              Exotic Stainless melayani fabrikasi pagar, pintu, railing tangga, railing balkon, peralatan, dan berbagai kebutuhan stainless steel custom untuk rumah, komersial, serta industri di Jabodetabek.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button asChild variant="gold" size="xl" className="h-14 rounded-full px-8 text-[16px] font-bold shadow-gold">
                <Link to="/contact">Minta Penawaran <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="h-14 rounded-full border-2 border-[#1268ff] bg-white px-9 text-[16px] font-bold text-[#1268ff] hover:bg-[#1268ff]/5 hover:text-[#1268ff]">
                <Link to="/projects">Lihat Proyek</Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-3 text-[15px] font-medium text-[#405575]">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-[#1268ff]" />
              Survey, desain, fabrikasi, finishing, dan instalasi
            </div>
          </motion.div>

          <motion.div className="relative lg:pl-2" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.1 }}>
            <div className="overflow-hidden rounded-[28px] border border-[#dbe8f6] bg-white shadow-[0_25px_65px_-20px_rgba(16,35,63,0.22)]">
              <img src={project1} alt="Hasil fabrikasi stainless steel custom Exotic Stainless" width={1200} height={900} className="aspect-[1.34] h-full w-full object-cover" fetchPriority="high" />
            </div>

            {floatingCards.map((card, i) => (
              <motion.div key={card.label} className={`absolute ${card.className} flex items-center gap-3 rounded-2xl border border-[#dce6f0] bg-white px-5 py-4 shadow-[0_16px_38px_-12px_rgba(16,35,63,0.22)]`} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 + i * 0.12, duration: 0.5 }}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#e8f1ff]">
                  <card.icon className="h-6 w-6 text-[#1268ff]" />
                </span>
                <div>
                  <p className="text-[19px] font-extrabold leading-tight text-[#101010]">{card.value}</p>
                  <p className="mt-1 text-[13px] font-medium text-[#405575]">{card.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[26px] border border-[#e1edf8] bg-[#f5f9ff] shadow-[0_12px_35px_-20px_rgba(16,35,63,0.18)] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className={`flex items-center gap-5 px-7 py-6 lg:py-7 ${index > 0 ? "border-t border-[#cfe0f5] sm:border-l sm:border-t-0" : ""}`}>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#e3efff]">
                <benefit.icon className="h-7 w-7 text-[#1268ff]" />
              </span>
              <div>
                <h2 className="text-[16px] font-extrabold text-[#14264a]">{benefit.title}</h2>
                <p className="mt-1 text-[14px] leading-5 text-[#405575]">{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
