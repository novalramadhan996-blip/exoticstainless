import { useState } from "react";
import { Download, Loader2, Settings2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  generateBrochure,
  ORIENTATION_LABELS,
  PAPER_LABELS,
  type Orientation,
  type PaperSize,
} from "@/lib/brochure";

export function BrochureDownload({
  type,
  variant = "gold",
}: {
  type: "products" | "projects";
  variant?: "gold" | "outline" | "outlineLight";
}) {
  const [loading, setLoading] = useState(false);
  const [orientation, setOrientation] = useState<Orientation>("portrait");
  const [paper, setPaper] = useState<PaperSize>("a4");
  const label = type === "products" ? "Unduh Katalog Produk" : "Unduh Portofolio Proyek";

  const handleDownload = async () => {
    setLoading(true);
    const t = toast.loading("Menyiapkan brosur PDF Anda…");
    try {
      await generateBrochure(type, { orientation, paper });
      toast.success("Brosur berhasil diunduh!", { id: t });
    } catch {
      toast.error("Gagal membuat brosur. Silakan coba lagi.", { id: t });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="inline-flex items-center gap-2">
      <Button variant={variant} size="lg" onClick={handleDownload} disabled={loading}>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Download className="h-4 w-4" />
        )}
        {loading ? "Membuat PDF…" : label}
      </Button>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" size="lg" aria-label="Opsi brosur">
            <Settings2 className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-64">
          <div className="space-y-5">
            <div>
              <Label className="text-sm font-semibold">Orientasi</Label>
              <RadioGroup
                value={orientation}
                onValueChange={(v) => setOrientation(v as Orientation)}
                className="mt-2 grid grid-cols-2 gap-2"
              >
                {(Object.keys(ORIENTATION_LABELS) as Orientation[]).map((o) => (
                  <label
                    key={o}
                    className="flex cursor-pointer items-center gap-2 rounded-lg border border-border p-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                  >
                    <RadioGroupItem value={o} />
                    {ORIENTATION_LABELS[o]}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label className="text-sm font-semibold">Ukuran Kertas</Label>
              <RadioGroup
                value={paper}
                onValueChange={(v) => setPaper(v as PaperSize)}
                className="mt-2 grid grid-cols-3 gap-2"
              >
                {(Object.keys(PAPER_LABELS) as PaperSize[]).map((p) => (
                  <label
                    key={p}
                    className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-border p-2 text-sm has-[:checked]:border-accent has-[:checked]:bg-accent/10"
                  >
                    <RadioGroupItem value={p} />
                    {PAPER_LABELS[p]}
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
