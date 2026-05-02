import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-portrait.jpg";
import textureImg from "@/assets/texture-gold.jpg";
import officeImg from "@/assets/office.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suhrobbek Qayumov — Vizyoner Tadbirkor & Premium Brend Arxitektori" },
      { name: "description", content: "Suhrobbek Qayumov — premium brendlar yaratuvchi vizyoner tadbirkor. Strategik maslahat va investitsiya portfoliosi." },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "14+", label: "Yillik tajriba" },
  { value: "$120M", label: "Boshqarilgan kapital" },
  { value: "42", label: "Muvaffaqiyatli loyiha" },
  { value: "9", label: "Xalqaro mukofot" },
];

const services = [
  { n: "01", t: "Strategik maslahat", d: "Kompaniyangizning o'sish strategiyasini vizyoner yondashuv bilan tuzamiz." },
  { n: "02", t: "Brend arxitekturasi", d: "Premium brendlarni noldan yaratish va pozitsiyalash." },
  { n: "03", t: "Investitsiya portfoliosi", d: "Kapitalni diversifikatsiya qilish va uzoq muddatli o'sish." },
  { n: "04", t: "Xalqaro bozorlarga chiqish", d: "Biznesingizni global darajaga olib chiqish strategiyasi." },
];

const projects = [
  { img: project1, name: "Atelier Noir", cat: "Luxury Fashion", year: "2025" },
  { img: project2, name: "Obsidian Capital", cat: "Private Equity", year: "2024" },
  { img: project3, name: "Celestial Aviation", cat: "Premium Travel", year: "2024" },
];

const testimonials = [
  { q: "Suhrobbek bilan ishlash — biznesimiz uchun burilish nuqtasi bo'ldi. Strategiyasi nafis va aniq.", a: "Azizbek R.", r: "Asoschi, Lumen Group" },
  { q: "Uning vizyoni oddiy maslahatdan ancha ko'proq. U kelajakni ko'radi.", a: "Malika T.", r: "CEO, Noble Holding" },
  { q: "Premium brendni qurishda bundan yaxshi hamkor topish qiyin.", a: "Davronbek S.", r: "Investor" },
];

function Index() {
  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero pt-20">
        <div
          className="absolute inset-0 opacity-20 mix-blend-screen"
          style={{ backgroundImage: `url(${textureImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center w-full py-20">
          <div className="lg:col-span-7 reveal">
            <div className="kicker mb-8">— Vizyoner · Strateg · Arxitektor</div>
            <h1 className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-tight mb-8">
              Suhrobbek
              <br />
              <span className="text-gold italic">Qayumov</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
              Premium brendlar me'mori. Strategik maslahatchi. Kelajakning nafis shakllarini
              bugun quruvchi vizyoner tadbirkor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gold text-primary-foreground text-sm tracking-wider uppercase shimmer shadow-gold hover:shadow-elegant transition-all duration-500"
              >
                Uchrashuv belgilash
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 border border-border text-sm tracking-wider uppercase hover:border-gold hover:text-gold transition-all duration-500"
              >
                Portfolio
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-delay-2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
              <div className="absolute -inset-4 gold-border rounded-sm" />
              <img
                src={heroImg}
                alt="Suhrobbek Qayumov portret"
                className="relative w-full h-full object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border px-6 py-4 backdrop-blur">
                <div className="kicker mb-1">Est.</div>
                <div className="font-display text-2xl">MMXII</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 kicker flex items-center gap-3">
          <div className="w-px h-8 bg-gold animate-pulse" />
          Pastga
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden bg-card">
        <div className="flex marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              {["Forbes", "Bloomberg", "Financial Times", "Reuters", "The Economist", "Wall Street Journal"].map((b) => (
                <span key={b} className="font-display text-3xl text-muted-foreground hover:text-gold transition">
                  {b} <span className="text-gold mx-6">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-4">— Raqamlarda</div>
          <h2 className="font-display text-5xl md:text-7xl mb-20 max-w-3xl">
            O'n yildan ortiq <span className="text-gold italic">mukammallik</span> yo'lida.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="bg-background p-8 lg:p-12 h-full">
                <div className="font-display text-5xl lg:text-7xl text-gold mb-3">{s.value}</div>
                <div className="kicker text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <img src={officeImg} alt="Studio" className="w-full aspect-[4/5] object-cover shadow-elegant" />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="kicker mb-6">— Falsafa</div>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-tight">
              Mukammallik —<br />
              bu <span className="text-gold italic">tafsilotlarda</span>.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Men uchun biznes — bu raqamlar emas, bu san'at. Har bir brend — bu miras,
              har bir qaror — bu kelajakka sarmoya. Oddiyni rad etamiz, faqat nafis bo'lganini tanlaymiz.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              14 yillik tajribam davomida men tushundimki, haqiqiy qiymat —
              vaqt sinovidan o'tgan narsadir.
            </p>
            <Link to="/about" className="inline-flex items-center gap-3 text-gold border-b border-gold pb-1 hover:gap-5 transition-all">
              Mening hikoyam <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <div className="kicker mb-4">— Xizmatlar</div>
              <h2 className="font-display text-5xl md:text-7xl max-w-2xl">
                Yuqori darajadagi <span className="text-gold italic">ekspertiza</span>.
              </h2>
            </div>
            <Link to="/services" className="text-gold border-b border-gold pb-1 self-start md:self-end">
              Barcha xizmatlar →
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="bg-background p-10 lg:p-14 group hover:bg-card transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-8">
                  <span className="kicker text-gold">{s.n}</span>
                  <span className="text-gold opacity-0 group-hover:opacity-100 transition">→</span>
                </div>
                <h3 className="font-display text-3xl mb-4">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="kicker mb-4">— Tanlangan ishlar</div>
            <h2 className="font-display text-5xl md:text-7xl mb-20 max-w-3xl">
              Birgalikda <span className="text-gold italic">qurilgan</span> imperiyalar.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.15}>
                <Link to="/portfolio" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-6">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />
                  </div>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <div className="kicker mb-1">{p.cat}</div>
                      <h3 className="font-display text-2xl group-hover:text-gold transition">{p.name}</h3>
                    </div>
                    <span className="kicker">{p.year}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-4 text-center">— Fikrlar</div>
          <h2 className="font-display text-5xl md:text-6xl text-center mb-20">
            Ular aytishdi.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.a} delay={i * 0.1}>
              <div className="p-10 border border-border hover:border-gold transition-all duration-500 h-full flex flex-col">
                <div className="text-gold text-5xl font-display leading-none mb-6">"</div>
                <p className="text-lg leading-relaxed mb-8 flex-1">{t.q}</p>
                <div className="hairline mb-4" />
                <div>
                  <div className="font-display text-xl">{t.a}</div>
                  <div className="kicker mt-1">{t.r}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ backgroundImage: `url(${textureImg})`, backgroundSize: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="kicker mb-6">— Keyingi bob</div>
            <h2 className="font-display text-5xl md:text-8xl mb-8 leading-none">
              Birga <span className="text-gold italic">yarataylik</span>.
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Cheklangan sonli loyihalarni qabul qilaman. Vizyoningiz haqida gaplashaylik.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-primary-foreground tracking-wider uppercase text-sm shimmer shadow-gold"
            >
              Bog'lanish <span>→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
