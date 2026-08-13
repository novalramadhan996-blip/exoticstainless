import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { COMPANY } from "@/lib/site-data";
import { Reveal } from "./motion-primitives";
import { SectionHeading } from "./SectionHeading";

const info = [
  { icon: Phone, label: "Telepon", value: COMPANY.phone },
  { icon: Mail, label: "Email", value: COMPANY.email },
  { icon: MapPin, label: "Kantor", value: COMPANY.office },
  { icon: Clock, label: "Jam Kerja", value: COMPANY.hours },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Terima kasih! Tim kami akan menghubungi Anda dalam 24 jam.");
    }, 900);
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Minta Penawaran"
          description="Ceritakan proyek Anda dan insinyur kami akan menyiapkan proposal yang disesuaikan."
        />
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" required placeholder="Nama Anda" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required placeholder="anda@perusahaan.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telepon</Label>
                  <Input id="phone" placeholder="+62 (000) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Perusahaan</Label>
                  <Input id="company" placeholder="Nama perusahaan" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" placeholder="Ada yang bisa kami bantu?" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea id="message" required rows={5} placeholder="Jelaskan proyek Anda..." />
                </div>
              </div>
              <Button
                type="submit"
                variant="gold"
                size="xl"
                disabled={submitting}
                className="mt-6 w-full"
              >
                {submitting ? "Mengirim..." : "Kirim Pesan"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {info.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-surface p-5 shadow-soft"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-bold text-foreground">{item.label}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 overflow-hidden rounded-2xl border border-border shadow-soft">
                <iframe
                  title="Lokasi kantor Master Stainless"
                  src={`https://www.google.com/maps?q=${COMPANY.mapLat},${COMPANY.mapLng}&z=16&hl=id&output=embed`}
                  className="h-full min-h-72 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
