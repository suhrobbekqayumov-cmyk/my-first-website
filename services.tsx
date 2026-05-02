import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Xizmatlar — Suhrobbek Qayumov" },
      { name: "description", content: "Strategik maslahat, brend arxitekturasi, investitsiya portfoliosi va xalqaro ekspansiya xizmatlari." },
    ],
  }),
  component: Services,
});

const services = [
  {
    n: "01",
    t: "Strategik maslahat",
    d: "Kompaniyangizning 3-5 yillik o'sish strategiyasini noldan quramiz. Bozor tahlili, raqobatchilarni o'rganish va aniq yo'l xaritasi.",
    f: ["Bozor chuqur tahlili", "Raqobat xaritasi", "KPI va OKR ramkasi", "Chorakli ko'rib chiqish"],
    p: "$15,000 dan",
  },
  {
    n: "02",
    t: "Brend arxitekturasi",
    d: "Premium brendni noldan yaratamiz: nom, hikoya, vizual til, kommunikatsiya. Sizning brendingiz — san'at asari bo'lsin.",
    f: ["Brend pozitsiyalash", "Vizual identitet", "Brand book", "Lansman strategiyasi"],
    p: "$25,000 dan",
  },
  {
    n: "03",
    t: "Investitsiya portfoliosi",
    d: "Kapitalingizni diversifikatsiya qilamiz. O'zbekiston va xalqaro bozorlarda xavfsiz va daromadli investitsiyalar.",
    f: ["Risk profili", "Diversifikatsiya", "Chorakli hisobot", "Shaxsiy menejer"],
    p: "Individual",
  },
  {
    n: "04",
    t: "Xalqaro ekspansiya",
    d: "Biznesingizni Dubay, London, Istanbul va boshqa global bozorlarga olib chiqamiz. Yuridik, marketing va operatsion qo'llab-quvvatlash.",
    f: ["Market entry strategy", "Yuridik yordam", "Mahalliy sheriklar", "Marketing lansmani"],
    p: "$40,000 dan",
  },
  {
    n: "05",
    t: "Executive coaching",
    d: "C-level rahbarlar uchun shaxsiy kouching. Qarorlar qabul qilish, jamoa boshqaruvi, shaxsiy samaradorlik.",
    f: ["Haftalik 1-on-1", "360° baholash", "Shaxsiy reja", "24/7 aloqa"],
    p: "$8,000 /oyiga",
  },
  {
    n: "06",
    t: "M&A maslahat",
    d: "Qo'shilish va sotib olish bitimlarida to'liq hamkorlik. Due diligence, muzokara, bitimni yopish.",
    f: ["Target skrining", "Valuation", "Muzokara", "Post-merger integration"],
    p: "Success fee",
  },
];

const process = [
  { n: "I", t: "Tanishuv", d: "Bepul 60 daqiqalik strategik qo'ng'iroq." },
  { n: "II", t: "Chuqur tahlil", d: "Biznesingizni har tomonlama o'rganish." },
  { n: "III", t: "Taklif", d: "Individual taklif va aniq rejali ta'rifnoma." },
  { n: "IV", t: "Ijro", d: "Jadval bo'yicha amalga oshirish va qo'llab-quvvatlash." },
];

function Services() {
  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-6">— Xizmatlar</div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-8 max-w-5xl">
            Yuqori darajadagi <span className="text-gold italic">ekspertiza</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Har bir mijoz — individual yondashuv. Oddiylik — dushmanimiz, mukammallik — maqsadimiz.
          </p>
        </Reveal>
      </section>

      <section className="pb-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.1}>
              <div className="bg-background p-10 lg:p-14 h-full flex flex-col group hover:bg-card transition-all duration-500">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-display text-6xl text-gold">{s.n}</span>
                  <span className="kicker">{s.p}</span>
                </div>
                <h3 className="font-display text-3xl mb-4">{s.t}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{s.d}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {s.f.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="text-gold mt-1">✦</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-gold border-b border-gold pb-1 self-start group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  So'rov yuborish →
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="kicker mb-4">— Jarayon</div>
            <h2 className="font-display text-5xl md:text-6xl mb-20">To'rt bosqich.</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="font-display text-8xl text-gold/30 mb-4">{p.n}</div>
                  <h3 className="font-display text-2xl mb-3">{p.t}</h3>
                  <p className="text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 text-center max-w-3xl mx-auto px-6">
        <Reveal>
          <h2 className="font-display text-5xl md:text-6xl mb-8">Loyihangiz boshlansinmi?</h2>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground uppercase tracking-wider text-sm shimmer shadow-gold">
            Bepul konsultatsiya →
          </Link>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
