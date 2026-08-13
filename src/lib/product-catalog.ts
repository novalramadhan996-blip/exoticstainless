import project1 from "@/assets/project-samples/project-1.webp";
import project2 from "@/assets/project-samples/project-2.webp";
import project3 from "@/assets/project-samples/project-3.webp";
import project4 from "@/assets/project-samples/project-4.webp";
import project5 from "@/assets/project-samples/project-5.webp";
import project6 from "@/assets/project-samples/project-6.webp";
import project7 from "@/assets/project-samples/project-7.webp";
import project8 from "@/assets/project-samples/project-8.webp";
import project9 from "@/assets/project-samples/project-9.webp";

export type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  intro: string;
  body: string[];
  features: string[];
  specs: { label: string; value: string }[];
};

const commonSpecs = (model: string) => [
  { label: "Material", value: "SS 304 / 316 sesuai kebutuhan" },
  { label: "Model", value: model },
  { label: "Finishing", value: "Brushed / Hairline / Mirror" },
  { label: "Produksi", value: "Custom setelah pengukuran lokasi" },
];

export const PRODUCTS: Product[] = [
  {
    slug: "pagar-stainless-steel",
    title: "Pagar Stainless Steel",
    description: "Pagar stainless steel custom untuk rumah, ruko, kantor, dan bangunan komersial dengan desain rapi dan modern.",
    image: project1,
    intro: "Pagar stainless steel dibuat berdasarkan ukuran dan desain lokasi dengan fokus pada konstruksi, kerapian sambungan, dan tampilan bersih.",
    body: [
      "Pengerjaan mencakup pengukuran, penentuan desain, pemilihan material, fabrikasi, hingga pemasangan di lokasi.",
      "Pola, jarak bilah, ukuran rangka, dan model bukaan dapat disesuaikan dengan kebutuhan keamanan serta karakter bangunan.",
      "Untuk area eksterior, material dan finishing dapat dipilih sesuai kondisi lingkungan agar hasil tetap rapi dan mudah dirawat.",
    ],
    features: ["Desain dan ukuran custom", "Survey lokasi sebelum produksi", "Sambungan difabrikasi presisi", "Pilihan finishing brushed atau mirror"],
    specs: commonSpecs("Custom sesuai desain"),
  },
  {
    slug: "pagar-dan-pintu-stainless",
    title: "Pagar & Pintu Stainless Steel",
    description: "Paket pagar dan pintu stainless steel custom dengan konstruksi kokoh dan tampilan yang menyatu dengan fasad bangunan.",
    image: project2,
    intro: "Pagar dan pintu dirancang sebagai satu kesatuan agar garis, pola, dan finishing terlihat konsisten dari tampak depan.",
    body: [
      "Desain dapat dibuat dengan garis horizontal, vertikal, atau pola khusus mengikuti konsep arsitektur.",
      "Daun pintu, frame, engsel, handle, dan komponen pendukung disesuaikan dengan ukuran bukaan dan penggunaan harian.",
      "Pengukuran aktual sebelum produksi membantu mengurangi risiko celah, ketidaksejajaran, dan penyesuaian berlebihan saat pemasangan.",
    ],
    features: ["Pagar dan pintu dibuat senada", "Ukuran bukaan custom", "Detail frame dan handle dapat disesuaikan", "Instalasi dan penyetelan di lokasi"],
    specs: commonSpecs("Pagar / swing / sliding"),
  },
  {
    slug: "pagar-minimalis-stainless",
    title: "Pagar Minimalis Stainless Steel",
    description: "Pagar minimalis dengan garis sederhana dan proporsi bersih untuk hunian dan bangunan modern.",
    image: project3,
    intro: "Pagar minimalis stainless steel mengutamakan garis sederhana, detail sambungan rapi, dan proporsi yang sesuai dengan fasad.",
    body: [
      "Model dapat menggunakan kombinasi pipa, hollow, plat, atau bilah stainless sesuai karakter desain.",
      "Jarak antar elemen dan tinggi pagar disesuaikan dengan kebutuhan privasi, keamanan, dan tampilan fasad.",
      "Finishing dapat diselaraskan dengan kaca, batu alam, kayu, atau elemen eksterior lainnya.",
    ],
    features: ["Desain minimalis modern", "Pola bilah dapat disesuaikan", "Proporsi mengikuti fasad", "Finishing rapi dan mudah dirawat"],
    specs: commonSpecs("Minimalis / custom"),
  },
  {
    slug: "railing-tangga-stainless",
    title: "Railing Tangga Stainless Steel",
    description: "Railing tangga stainless steel untuk rumah, kantor, ruko, dan fasilitas komersial dengan pemasangan presisi.",
    image: project4,
    intro: "Railing tangga mengikuti bentuk tangga dan kondisi aktual bangunan agar pegangan nyaman, struktur stabil, dan tampilan rapi.",
    body: [
      "Model railing dapat menggunakan susunan vertikal, horizontal, kombinasi kaca, maupun desain custom.",
      "Setiap titik dudukan diperhatikan terhadap kondisi anak tangga dan bidang pemasangan agar hasil sejajar dan proporsional.",
      "Komponen diukur sebelum fabrikasi lalu dirakit dan disetel kembali saat instalasi di lokasi.",
    ],
    features: ["Mengikuti bentuk tangga aktual", "Dudukan dan sambungan presisi", "Opsi kombinasi kaca", "Cocok untuk interior dan eksterior"],
    specs: commonSpecs("Vertikal / horizontal / custom"),
  },
  {
    slug: "pagar-stainless-custom",
    title: "Pagar Stainless Custom",
    description: "Fabrikasi pagar stainless berdasarkan gambar, ukuran, dan kebutuhan desain khusus Anda.",
    image: project5,
    intro: "Setiap proyek pagar custom dimulai dari kebutuhan lokasi lalu diterjemahkan menjadi desain yang siap diproduksi.",
    body: [
      "Referensi gambar atau konsep dari klien dapat disesuaikan dengan ukuran lapangan dan metode fabrikasi yang tepat.",
      "Pola, frame, ketebalan material, jenis bukaan, dan finishing dibahas sebelum produksi dimulai.",
      "Untuk proyek kompleks, gambar kerja dapat digunakan sebagai acuan produksi dan pemasangan.",
    ],
    features: ["Mengikuti desain referensi", "Gambar kerja untuk kebutuhan proyek", "Ukuran dan pola sepenuhnya custom", "Fabrikasi dan instalasi satu tim"],
    specs: commonSpecs("Custom dari referensi / gambar kerja"),
  },
  {
    slug: "railing-balkon-stainless",
    title: "Railing Balkon Stainless Steel",
    description: "Railing balkon stainless steel dengan pilihan model horizontal, vertikal, atau kombinasi kaca untuk tampilan modern.",
    image: project6,
    intro: "Railing balkon memberikan batas pengaman sekaligus menjaga tampilan fasad tetap ringan dan modern.",
    body: [
      "Model railing disesuaikan dengan bentuk balkon, posisi kolom, bidang pemasangan, dan konsep arsitektur.",
      "Susunan horizontal, vertikal, atau kombinasi kaca dapat dipilih sesuai kebutuhan privasi dan visual.",
      "Base plate, anchor, sambungan, dan finishing diperhatikan sejak pengukuran agar garis instalasi konsisten.",
    ],
    features: ["Model horizontal atau vertikal", "Opsi kombinasi kaca", "Pengukuran dan pemasangan lokasi", "Finishing sesuai konsep fasad"],
    specs: commonSpecs("Horizontal / vertikal / kaca"),
  },
  {
    slug: "railing-tangga-indoor",
    title: "Railing Tangga Indoor",
    description: "Railing stainless steel untuk tangga interior dengan desain ringan, rapi, dan menyatu dengan ruang.",
    image: project7,
    intro: "Railing tangga indoor mengikuti geometri tangga sekaligus menjaga visual ruang tetap bersih dan tidak terasa berat.",
    body: [
      "Desain dapat menggunakan bilah vertikal, garis horizontal, atau kombinasi handrail stainless dengan material lain.",
      "Detail ujung pipa, dudukan, dan sambungan diperhatikan agar railing terlihat rapi dari berbagai sudut.",
      "Finishing dapat diselaraskan dengan lantai, dinding, kaca, atau elemen interior lainnya.",
    ],
    features: ["Desain khusus interior", "Detail sambungan rapi", "Opsi kombinasi kaca atau kayu", "Finishing sesuai konsep ruangan"],
    specs: commonSpecs("Vertikal / horizontal / custom"),
  },
  {
    slug: "railing-balkon-minimalis",
    title: "Railing Balkon Minimalis",
    description: "Railing balkon minimalis dengan susunan garis sederhana untuk rumah dan bangunan modern.",
    image: project8,
    intro: "Railing balkon minimalis menonjolkan garis horizontal yang bersih sehingga cocok untuk fasad rumah dan bangunan modern.",
    body: [
      "Jumlah dan jarak elemen railing dapat disesuaikan dengan ukuran balkon dan konsep visual.",
      "Titik pemasangan diperiksa sebelum fabrikasi agar setiap modul terpasang dengan posisi konsisten.",
      "Finishing brushed atau hairline memberi tampilan tenang, sedangkan mirror dapat digunakan sebagai aksen reflektif.",
    ],
    features: ["Garis horizontal minimalis", "Modul sesuai ukuran balkon", "Titik pemasangan diperiksa sebelum produksi", "Pilihan finishing beragam"],
    specs: commonSpecs("Minimalis horizontal"),
  },
  {
    slug: "railing-tangga-custom",
    title: "Railing Tangga Custom",
    description: "Railing tangga custom untuk desain dan kondisi bangunan yang membutuhkan solusi fabrikasi khusus.",
    image: project9,
    intro: "Untuk tangga dengan bentuk, sudut, atau detail khusus, railing difabrikasi berdasarkan kondisi aktual agar hasil akhirnya presisi.",
    body: [
      "Railing dapat disesuaikan dengan tangga lurus, L, U, maupun bentuk lain berdasarkan hasil pengukuran lokasi.",
      "Desain dapat dikembangkan dari foto referensi, sketsa, atau gambar arsitektur lalu disesuaikan dengan metode fabrikasi.",
      "Sebelum serah terima, sambungan, dudukan, garis railing, dan finishing diperiksa kembali untuk memastikan hasil rapi.",
    ],
    features: ["Mengikuti bentuk tangga aktual", "Bisa dari sketsa atau gambar arsitektur", "Detail dudukan dan sambungan custom", "Pemeriksaan akhir sebelum serah terima"],
    specs: commonSpecs("L / U / lurus / custom"),
  },
];
