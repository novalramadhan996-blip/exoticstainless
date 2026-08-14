import { jsPDF } from "jspdf";
import { COMPANY, PRODUCTS, type Product } from "@/lib/site-data";
import project1 from "@/assets/project-samples/project-1.webp";
import project2 from "@/assets/project-samples/project-2.webp";
import project3 from "@/assets/project-samples/project-3.webp";
import project4 from "@/assets/project-samples/project-4.webp";
import project5 from "@/assets/project-samples/project-5.webp";
import project6 from "@/assets/project-samples/project-6.webp";
import project7 from "@/assets/project-samples/project-7.webp";
import project8 from "@/assets/project-samples/project-8.webp";
import project9 from "@/assets/project-samples/project-9.webp";
import project10 from "@/assets/project-samples/project-10.webp";
import project11 from "@/assets/project-samples/project-11.webp";
import project12 from "@/assets/project-samples/project-12.webp";

// Palet warna sesuai brand
const NAVY: [number, number, number] = [15, 23, 42]; // #0F172A
const GOLD: [number, number, number] = [196, 163, 79]; // #C4A34F
const SLATE: [number, number, number] = [100, 116, 139];
const LIGHT: [number, number, number] = [241, 245, 249];

type ImgItem = { title: string; description: string; image: string; category?: string };

// Isi PDF disamakan dengan daftar proyek yang tampil di halaman Proyek,
// sehingga judul, kategori, deskripsi, dan foto tidak berbeda lagi.
const PROJECT_BROCHURE_ITEMS: ImgItem[] = [
  {
    title: "Pagar & Gerbang Stainless",
    category: "Pagar & Gerbang",
    description: "Pekerjaan pagar dan gerbang stainless custom untuk tampilan rumah yang rapi, kokoh, dan tahan lama.",
    image: project1,
  },
  {
    title: "Railing Tangga Stainless",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga indoor dengan konstruksi vertikal yang sederhana dan kokoh.",
    image: project2,
  },
  {
    title: "Fabrikasi & Pengelasan Stainless",
    category: "Fabrikasi Stainless",
    description: "Proses fabrikasi dan pengelasan stainless steel yang dikerjakan secara presisi sesuai kebutuhan proyek.",
    image: project3,
  },
  {
    title: "Railing Tangga Indoor",
    category: "Railing Tangga",
    description: "Railing tangga stainless dengan desain minimalis dan garis vertikal yang memberikan tampilan bersih pada interior.",
    image: project4,
  },
  {
    title: "Pagar Stainless Custom",
    category: "Pagar & Gerbang",
    description: "Pagar stainless custom dengan panel dan detail dekoratif yang dibuat sesuai ukuran dan kebutuhan hunian.",
    image: project5,
  },
  {
    title: "Railing Tangga Minimalis",
    category: "Railing Tangga",
    description: "Railing tangga stainless dengan desain sederhana, proporsional, dan mudah dipadukan dengan interior modern.",
    image: project6,
  },
  {
    title: "Gerbang Stainless Custom",
    category: "Pagar & Gerbang",
    description: "Gerbang stainless dengan kombinasi bidang dan ornamen yang dikerjakan secara custom untuk hunian.",
    image: project7,
  },
  {
    title: "Railing Tangga Stainless",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga dengan susunan vertikal yang rapi dan konstruksi yang kokoh.",
    image: project8,
  },
  {
    title: "Pagar Stainless Modern",
    category: "Pagar & Gerbang",
    description: "Pagar stainless dengan kombinasi garis horizontal dan detail vertikal untuk tampilan fasad yang modern.",
    image: project9,
  },
  {
    title: "Railing Tangga Custom",
    category: "Railing Tangga",
    description: "Railing tangga stainless custom dengan konstruksi kokoh dan finishing rapi untuk area hunian.",
    image: project10,
  },
  {
    title: "Railing Stainless Indoor",
    category: "Railing Tangga",
    description: "Railing stainless untuk area tangga dan bordes dengan garis vertikal yang bersih dan presisi.",
    image: project11,
  },
  {
    title: "Railing Tangga Stainless Custom",
    category: "Railing Tangga",
    description: "Pekerjaan railing tangga stainless custom dengan desain minimalis yang menyesuaikan kondisi bangunan.",
    image: project12,
  },
];

async function toDataUrl(src: string): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const res = await fetch(src);
    const blob = await res.blob();
    const objectUrl = URL.createObjectURL(blob);

    const dims = await new Promise<{ w: number; h: number }>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
      img.onerror = reject;
      img.src = objectUrl;
    });

    // Convert WebP/JPEG/etc. to PNG because jsPDF does not reliably accept WebP directly.
    const img = new Image();
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = objectUrl;
    });

    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas tidak tersedia");
    ctx.drawImage(img, 0, 0);
    const data = canvas.toDataURL("image/png");
    URL.revokeObjectURL(objectUrl);

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
      : "Rangkaian proyek fabrikasi stainless steel unggulan kami di Jabodetabek.";
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
  const items: ImgItem[] = type === "products" ? (PRODUCTS as Product[]) : PROJECT_BROCHURE_ITEMS;
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
      doc.addImage(img.data, "PNG", x + 3, y + 3, imgW, imgH, undefined, "FAST");
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
