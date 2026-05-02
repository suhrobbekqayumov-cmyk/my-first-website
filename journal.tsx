import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Jurnal — Suhrobbek Qayumov" },
      { name: "description", content: "Biznes, strategiya va hayot falsafasi haqida insholar." },
    ],
  }),
  component: Journal,
});

const posts = [
  { t: "Premium brend qurishning yetti tamoyili", c: "Brending", d: "12 daqiqa", date: "Aprel 2026", e: "Haqiqiy luxury brend — mahsulot emas, bu tajriba va meros. Keling, ularning asoslarini ko'rib chiqamiz." },
  { t: "Nega men xodimlarni ishga olishdan voz kechdim", c: "Liderlik", d: "8 daqiqa", date: "Mart 2026", e: "Zamonaviy biznesda hamkorlar kerak, xodimlar emas. Yangi yondashuv haqida." },
  { t: "O'zbekiston bozorida premium segment", c: "Bozor tahlili", d: "15 daqiqa", date: "Fevral 2026", e: "Mahalliy iste'molchining premium mahsulotlarga munosabati qanday o'zgarmoqda?" },
  { t: "Ertalabki tartibotim: 5:30 — 9:00", c: "Shaxsiy", d: "6 daqiqa", date: "Yanvar 2026", e: "Kunning birinchi 3 soati — butun kunning muvaffaqiyatini belgilaydi." },
  { t: "Investitsiya falsafam: sabr va aql", c: "Investitsiya", d: "10 daqiqa", date: "Dekabr 2025", e: "Tezkor foyda ortidan quvmang. Uzoq muddatli o'sishga fokus qiling." },
  { t: "Nima uchun men 'yo'q' deyishni o'rgandim", c: "Shaxsiy", d: "7 daqiqa", date: "Noyabr 2025", e: "Ha, deyish osonroq — lekin har bir 'ha' boshqa imkoniyatga aytilgan 'yo'q' ekanligini unutmang." },
];

function Journal() {
  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-6">— Jurnal</div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] max-w-5xl">
            Fikrlar va <span className="text-gold italic">insholar</span>.
          </h1>
        </Reveal>
      </section>

      <section className="pb-32 max-w-5xl mx-auto px-6 lg:px-12">
        <div className="divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <article className="py-10 group cursor-pointer hover:bg-card transition-colors px-4 -mx-4">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="kicker text-gold">{p.c}</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="kicker">{p.date}</span>
                  <span className="w-px h-3 bg-border" />
                  <span className="kicker">{p.d}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-gold transition">
                  {p.t}
                </h2>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">{p.e}</p>
                <span className="text-gold text-sm inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  O'qish →
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <Reveal>
            <div className="kicker mb-6">— Yopiq doira</div>
            <h2 className="font-display text-5xl md:text-6xl mb-6">Xabarnomaga obuna.</h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Haftada bir marta — faqat sifatli fikrlar. Reklama yo'q.
            </p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="sizning@email.com"
                className="flex-1 bg-background border border-border px-5 py-4 focus:border-gold outline-none transition"
              />
              <button className="px-8 py-4 bg-gold text-primary-foreground uppercase tracking-wider text-sm shimmer">
                Obuna
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
