import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/office.jpg";
import p5 from "@/assets/texture-gold.jpg";
import p6 from "@/assets/hero-portrait.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Suhrobbek Qayumov" },
      { name: "description", content: "Tanlangan loyihalar va birga qurilgan brendlar." },
    ],
  }),
  component: Portfolio,
});

const projects = [
  { img: p1, name: "Atelier Noir", cat: "Luxury Fashion", year: "2025", d: "Dubay va Milanda flagmany do'konlar bilan premium moda uyi." },
  { img: p2, name: "Obsidian Capital", cat: "Private Equity", year: "2024", d: "$80M fond, 12 texnologiya kompaniyasiga investitsiya." },
  { img: p3, name: "Celestial Aviation", cat: "Private Travel", year: "2024", d: "MDH bozoridagi birinchi private jet membership klubi." },
  { img: p4, name: "Maison Qayumov", cat: "Real Estate", year: "2023", d: "Toshkent shahar markazidagi eliten turarjoy kompleksi." },
  { img: p5, name: "Aurum Wellness", cat: "Hospitality", year: "2023", d: "Samarqanddagi 5 yulduzli zamonaviy SPA va retreat." },
  { img: p6, name: "Noble Spirits", cat: "Premium F&B", year: "2022", d: "Mintaqaviy premium ichimliklar brendi, 18 davlatda." },
];

function Portfolio() {
  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-6">— Portfolio</div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] max-w-5xl">
            Birga qurilgan <span className="text-gold italic">imperiyalar</span>.
          </h1>
        </Reveal>
      </section>

      <section className="pb-32 max-w-[1400px] mx-auto px-6 lg:px-12 space-y-32">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={0.1}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative group overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full aspect-[4/5] object-cover transition-transform duration-[1.5s] group-hover:scale-105 shadow-elegant" />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="kicker">{p.cat}</span>
                  <span className="w-px h-4 bg-border" />
                  <span className="kicker">{p.year}</span>
                </div>
                <h2 className="font-display text-5xl md:text-6xl mb-6">{p.name}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">{p.d}</p>
                <div className="grid grid-cols-3 gap-6 max-w-md">
                  <div>
                    <div className="font-display text-3xl text-gold">+{240 + i * 40}%</div>
                    <div className="kicker text-[0.6rem] mt-1">O'sish</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-gold">{8 + i}x</div>
                    <div className="kicker text-[0.6rem] mt-1">ROI</div>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-gold">{i + 3}y</div>
                    <div className="kicker text-[0.6rem] mt-1">Hamkorlik</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
