export type TeamMember = {
  name: string;
  role: string;
  line: string;
  note: string;
};

export const team: TeamMember[] = [
  {
    name: "Emre Kaya",
    role: "Saha koordinatörü",
    line: "Tüm hatlar · 7/24 çilingir",
    note: "Çağrıyı merkeze düşürmez; nöbetçi çilingir aracını doğru hatta tutar. Çilingir 15 Dk Kapıda vaadinin saha tarafı.",
  },
  {
    name: "Hakan Demir",
    role: "Kuzey hat ustası",
    line: "Sarıyer Kuzey Hattı",
    note: "İskele, orman ve villa siteleri. Gece çilingir ve hasarsız kilit açma bu hatta onun çantasında.",
  },
  {
    name: "Burak Yıldız",
    role: "Plaza ve rezidans",
    line: "Maslak İş Merkezi Hattı",
    note: "Lobi, vale ve kat kartı prosedürü. Ofis silindiri ve çelik kasa, acil çilingir hizmetinde ayrı set.",
  },
  {
    name: "Mert Şahin",
    role: "Finans ve site hattı",
    line: "Levent - Etiler Hattı",
    note: "Plaza mesai sonu ve site güvenliği. Garantili çilingir işi, yüksek güvenlikli çelik kapıda burada yoğun.",
  },
  {
    name: "Cem Aydın",
    role: "Sahil hattı",
    line: "Beşiktaş Sahil Hattı",
    note: "Meydan, koy ve yan sokak. En yakın çilingir pin’i değil; kapanan sahili bilen ekip.",
  },
  {
    name: "Oğuz Arslan",
    role: "Gece nöbeti",
    line: "Kağıthane ve yedek hat",
    note: "Gece çilingir vardiyası. Aktif ekibimiz sahada cümlesi gece onun aracında durur.",
  },
];
