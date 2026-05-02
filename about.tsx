import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import officeImg from "@/assets/office.jpg";
import portraitImg from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Men haqimda — Suhrobbek Qayumov" },
      { name: "description", content: "Suhrobbek Qayumovning hayot yo'li, falsafasi va tamoyillari." },
    ],
  }),
  component: About,
});

const timeline = [
  { y: "2012", t: "Boshlanish", d: "Birinchi kompaniya tashkil etildi — kichik savdo startapi." },
  { y: "2015", t: "Kengayish", d: "Xalqaro bozorga chiqish va birinchi muvaffaqiyatli exit." },
  { y: "2018", t: "Investor", d: "O'zbekistonda texnologiya sohasiga yirik investitsiyalar." },
  { y: "2021", t: "Premium brendlar", d: "Luxury segmentga fokus — Atelier Noir ochilishi." },
  { y: "2024", t: "Global", d: "Dubay va Londonda vakolatxonalar ochildi." },
  { y: "2026", t: "Bugun", d: "Yangi avlod vizyonerlarga yo'l ko'rsatish va merosni qurish." },
];

const values = [
  { t: "Nafislik", d: "Har bir detal—san'at asaridek." },
  { t: "Uzoq muddatlilik", d: "Vaqt sinovidan o'tgan qarorlar." },
  { t: "Integritet", d: "So'zim — shartnomam." },
  { t: "Vizyon", d: "Ertani bugun qurish." },
];

function About() {
  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-6">— Hikoya</div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-12 max-w-5xl">
            Har bir buyuk <span className="text-gold italic">brend</span> — kimningdir vizyoni.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <img src={portraitImg} alt="Suhrobbek" className="w-full aspect-[4/5] object-cover shadow-elegant" />
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Men Suhrobbek Qayumov — O'zbekistonda tug'ilib, dunyo bo'ylab biznes qurish
                imtiyoziga ega bo'lgan tadbirkorman. 14 yildan beri premium brendlar
                yaratish va strategik maslahat berish bilan shug'ullanaman.
              </p>
              <p>
                Mening yo'lim oddiy savdogardan boshlanib, bugungi kunda $120M+ kapitalni
                boshqaradigan investor darajasigacha yetib keldi. Lekin men uchun raqamlar —
                ikkinchi darajali. Asosiysi — <span className="text-gold">meros</span>.
              </p>
              <p>
                Men ishonamanki, haqiqiy muvaffaqiyat — bu o'zingizdan keyin qoldiradigan
                narsangiz. Shuning uchun har bir loyihaga xuddi o'z farzandimdek qarayman.
              </p>
              <div className="hairline my-10" />
              <blockquote className="font-display text-3xl text-foreground leading-snug italic">
                "Mukammallik — manzil emas, bu yo'l. Va men bu yo'ldan chiqib ketishni istamayman."
              </blockquote>
            </div>
          </div>
        </Reveal>
      </section>

      {/* VALUES */}
      <section className="py-32 bg-card border-y border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <div className="kicker mb-4">— Tamoyillar</div>
            <h2 className="font-display text-5xl md:text-6xl mb-20">To'rtta ustun.</h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-px bg-border">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.1}>
                <div className="bg-card p-10 h-full">
                  <div className="text-gold font-display text-6xl mb-6">0{i + 1}</div>
                  <h3 className="font-display text-2xl mb-3">{v.t}</h3>
                  <p className="text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-32 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-4">— Yo'l xaritasi</div>
          <h2 className="font-display text-5xl md:text-6xl mb-20">Bosqichma-bosqich.</h2>
        </Reveal>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
          {timeline.map((t, i) => (
            <Reveal key={t.y} delay={i * 0.08}>
              <div className={`relative flex gap-8 mb-16 md:mb-20 ${i % 2 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2" />
                <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`md:${i % 2 ? "text-left" : "text-right"}`}>
                    <div className="font-display text-5xl text-gold mb-2">{t.y}</div>
                    <h3 className="font-display text-2xl mb-2">{t.t}</h3>
                    <p className="text-muted-foreground">{t.d}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <img src={officeImg} alt="Office" className="w-full aspect-video object-cover mb-12 shadow-elegant" />
            <h2 className="font-display text-4xl md:text-5xl mb-6">Ofis — Toshkent sentri.</h2>
            <p className="text-muted-foreground text-lg">
              Har kuni ertalab 6:00 da ish kunim boshlanadi. Chunki g'oliblar — erta turadi.
            </p>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
