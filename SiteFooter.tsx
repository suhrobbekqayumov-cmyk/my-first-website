import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-4xl mb-4">
              <span className="text-gold">Suhrobbek</span> Qayumov
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Vizyoner tadbirkor, strategik maslahatchi va premium brend arxitektori.
              Mukammallikka sadoqat — hayot falsafam.
            </p>
          </div>
          <div>
            <h4 className="kicker mb-5">Navigatsiya</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-gold transition">Men haqimda</Link></li>
              <li><Link to="/services" className="text-sm hover:text-gold transition">Xizmatlar</Link></li>
              <li><Link to="/portfolio" className="text-sm hover:text-gold transition">Portfolio</Link></li>
              <li><Link to="/journal" className="text-sm hover:text-gold transition">Jurnal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="kicker mb-5">Aloqa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Toshkent, O'zbekiston</li>
              <li>hello@qayumov.com</li>
              <li>+998 90 000 00 00</li>
            </ul>
          </div>
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="kicker text-[0.6rem]">© 2026 Suhrobbek Qayumov — Barcha huquqlar himoyalangan</p>
          <p className="kicker text-[0.6rem]">Crafted with excellence</p>
        </div>
      </div>
    </footer>
  );
}
