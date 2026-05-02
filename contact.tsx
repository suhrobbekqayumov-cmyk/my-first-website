import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Aloqa — Suhrobbek Qayumov" },
      { name: "description", content: "Suhrobbek Qayumov bilan bog'laning." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-background text-foreground noise min-h-screen">
      <SiteHeader />

      <section className="pt-40 pb-20 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="kicker mb-6">— Aloqa</div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] max-w-5xl mb-8">
            Keling <span className="text-gold italic">gaplashamiz</span>.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Har bir buyuk hamkorlik — oddiy suhbatdan boshlanadi.
          </p>
        </Reveal>
      </section>

      <section className="pb-32 max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-5 gap-16">
        <Reveal className="lg:col-span-3">
          {sent ? (
            <div className="border border-gold p-12 text-center">
              <div className="text-gold text-6xl mb-4">✦</div>
              <h3 className="font-display text-3xl mb-3">Rahmat!</h3>
              <p className="text-muted-foreground">Xabaringiz qabul qilindi. 24 soat ichida javob beramiz.</p>
            </div>
          ) : (
            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const parsed = schema.safeParse({
                  name: `${fd.get("firstName") ?? ""} ${fd.get("lastName") ?? ""}`.trim(),
                  email: fd.get("email"),
                  message: fd.get("message"),
                });
                if (!parsed.success) {
                  toast.error(parsed.error.issues[0]?.message ?? "Xatolik");
                  return;
                }
                setLoading(true);
                const { error } = await supabase.from("contact_messages").insert(parsed.data);
                setLoading(false);
                if (error) { toast.error("Yuborishda xatolik"); return; }
                setSent(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="kicker block mb-3">Ism</label>
                  <input name="firstName" required maxLength={50} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition" />
                </div>
                <div>
                  <label className="kicker block mb-3">Familiya</label>
                  <input name="lastName" required maxLength={50} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition" />
                </div>
              </div>
              <div>
                <label className="kicker block mb-3">Email</label>
                <input name="email" type="email" required maxLength={255} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition" />
              </div>
              <div>
                <label className="kicker block mb-3">Kompaniya</label>
                <input name="company" maxLength={100} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition" />
              </div>
              <div>
                <label className="kicker block mb-3">Qiziqish doirasi</label>
                <select name="interest" className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition text-foreground">
                  <option className="bg-card">Strategik maslahat</option>
                  <option className="bg-card">Brend arxitekturasi</option>
                  <option className="bg-card">Investitsiya</option>
                  <option className="bg-card">Xalqaro ekspansiya</option>
                  <option className="bg-card">Executive coaching</option>
                  <option className="bg-card">Boshqa</option>
                </select>
              </div>
              <div>
                <label className="kicker block mb-3">Xabaringiz</label>
                <textarea name="message" rows={5} required maxLength={2000} className="w-full bg-transparent border-b border-border py-3 focus:border-gold outline-none transition resize-none" />
              </div>
              <button disabled={loading} className="group inline-flex items-center gap-3 px-10 py-4 bg-gold text-primary-foreground uppercase tracking-wider text-sm shimmer shadow-gold disabled:opacity-60">
                {loading ? "Yuborilmoqda…" : <>Yuborish <span className="group-hover:translate-x-1 transition">→</span></>}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.2}>
          <div className="space-y-10">
            <div>
              <div className="kicker mb-3">Ofis</div>
              <p className="font-display text-2xl leading-snug">
                Amir Temur ko'chasi 107<br />
                Toshkent, O'zbekiston
              </p>
            </div>
            <div className="hairline" />
            <div>
              <div className="kicker mb-3">Email</div>
              <a href="mailto:hello@qayumov.com" className="font-display text-2xl hover:text-gold transition">
                hello@qayumov.com
              </a>
            </div>
            <div>
              <div className="kicker mb-3">Telefon</div>
              <a href="tel:+998900000000" className="font-display text-2xl hover:text-gold transition">
                +998 90 000 00 00
              </a>
            </div>
            <div className="hairline" />
            <div>
              <div className="kicker mb-3">Ish vaqti</div>
              <p className="text-muted-foreground leading-relaxed">
                Dushanba — Juma<br />
                09:00 — 19:00 (UTC+5)
              </p>
            </div>
            <div>
              <div className="kicker mb-3">Ijtimoiy tarmoqlar</div>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Telegram", "X"].map((s) => (
                  <a key={s} href="#" className="text-sm border border-border px-4 py-2 hover:border-gold hover:text-gold transition">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
