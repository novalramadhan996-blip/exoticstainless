import { jsPDF } from "jspdf";
import { COMPANY, PRODUCTS, PROJECTS, type Product } from "@/lib/site-data";

// Palet warna sesuai brand
const NAVY: [number, number, number] = [15, 23, 42]; // #0F172A
const GOLD: [number, number, number] = [196, 163, 79]; // #C4A34F
const SLATE: [number, number, number] = [100, 116, 139];
const LIGHT: [number, number, number] = [241, 245, 249];

type ImgItem = { title: string; description: string; image: string; category?: string };

async function toDataUrl(src: string): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const data = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    const dims = await new Promise<{ w: number; h: number }>((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = () => resolve({ w: 4, h: 3 });
      img.src = data;
    });
    return { data, ...dims };
  } catch {
    return null;
  }
}

function fmt(type: "products" | "projects") {
  return type === "products" ? "Katalog Produk" : "Portofolio Proyek";
}

export type Orientation = "portrait" | "landscape";
export type PaperSize = "a4" | "letter" | "legal";

export const PAPER_LABELS: Record<PaperSize, string> = {
  a4: "A4",
  letter: "Letter",
  legal: "Legal",
};

export const ORIENTATION_LABELS: Record<Orientation, string> = {
  portrait: "Potret",
  landscape: "Lanskap",
};

export type BrochureOptions = {
  orientation?: Orientation;
  paper?: PaperSize;
};

export async function generateBrochure(
  type: "products" | "projects",
  options: BrochureOptions = {},
) {
  const { orientation = "portrait", paper = "a4" } = options;
  const doc = new jsPDF({ unit: "mm", format: paper, orientation });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 16;

  // ---------- Sampul ----------
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, pageW, pageH, "F");
  doc.setFillColor(...GOLD);
  doc.rect(0, 0, pageW, 6, "F");

  doc.setTextColor(...GOLD);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.text(COMPANY.name.toUpperCase(), margin, 40);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(38);
  doc.text(fmt(type), margin, pageH / 2 - 10);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  doc.setTextColor(...LIGHT);
  const tagline =
    type === "products"
      ? "Produk stainless steel premium untuk setiap kebutuhan industri Anda."
      : "Rangkaian proyek fabrikasi stainless steel unggulan kami.";
  doc.text(doc.splitTextToSize(tagline, pageW - margin * 2), margin, pageH / 2 + 4);

  doc.setDrawColor(...GOLD);
  doc.setLineWidth(0.6);
  doc.line(margin, pageH - 46, pageW - margin, pageH - 46);

  doc.setFontSize(10);
  doc.setTextColor(...LIGHT);
  doc.text(
    [COMPANY.office, `Telp: ${COMPANY.phone}  ·  Email: ${COMPANY.email}`],
    margin,
    pageH - 36,
  );

  // ---------- Isi ----------
  const items: ImgItem[] = type === "products" ? (PRODUCTS as Product[]) : PROJECTS;
  const images = await Promise.all(items.map((it) => toDataUrl(it.image)));

  const cols = orientation === "landscape" ? 2 : 1;
  const gap = 6;
  const cardW = (pageW - margin * 2 - gap * (cols - 1)) / cols;
  const imgW = cols === 2 ? 46 : 54;
  const imgH = cols === 2 ? 34 : 40;
  const cardH = 46;

  doc.addPage();

  // Header halaman isi
  const drawSectionTitle = () => {
    doc.setFillColor(...LIGHT);
    doc.rect(0, 0, pageW, 22, "F");
    doc.setFillColor(...GOLD);
    doc.rect(0, 0, 4, 22, "F");
    doc.setTextColor(...NAVY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(15);
    doc.text(fmt(type), margin, 14);
  };
  drawSectionTitle();

  const startY = 30;
  let y = startY;
  let col = 0;

  items.forEach((it, i) => {
    if (y + cardH > pageH - margin) {
      doc.addPage();
      drawSectionTitle();
      y = startY;
      col = 0;
    }

    const x = margin + col * (cardW + gap);

    // Kartu
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.roundedRect(x, y, cardW, cardH, 2, 2, "S");

    const img = images[i];
    if (img) {
      const format = img.data.includes("image/png") ? "PNG" : "JPEG";
      doc.addImage(img.data, format, x + 3, y + 3, imgW, imgH, undefined, "FAST");
    } else {
      doc.setFillColor(...LIGHT);
      doc.rect(x + 3, y + 3, imgW, imgH, "F");
    }

    const tx = x + imgW + 9;
    const tw = cardW - imgW - 14;

    if (it.category) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(...GOLD);
      doc.text(it.category.toUpperCase(), tx, y + 9);
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(cols === 2 ? 11 : 13);
    doc.setTextColor(...NAVY);
    doc.text(doc.splitTextToSize(it.title, tw), tx, y + (it.category ? 16 : 12));

    doc.setFont("helvetica", "normal");
    doc.setFontSize(cols === 2 ? 8.5 : 9.5);
    doc.setTextColor(...SLATE);
    const desc = doc.splitTextToSize(it.description, tw);
    doc.text(desc, tx, y + (it.category ? 23 : 19));

    col += 1;
    if (col >= cols) {
      col = 0;
      y += cardH + gap;
    }
  });


  // ---------- Footer di setiap halaman isi ----------
  const total = doc.getNumberOfPages();
  for (let p = 2; p <= total; p++) {
    doc.setPage(p);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageH - 12, pageW - margin, pageH - 12);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...SLATE);
    doc.text(`${COMPANY.name}  ·  ${COMPANY.email}`, margin, pageH - 7);
    doc.text(`Halaman ${p - 1}`, pageW - margin, pageH - 7, { align: "right" });
  }

  const base =
    type === "products" ? "Master-Stainless-Katalog-Produk" : "Master-Stainless-Portofolio-Proyek";
  doc.save(`${base}-${PAPER_LABELS[paper]}-${ORIENTATION_LABELS[orientation]}.pdf`);
}
