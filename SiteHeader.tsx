import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/about", label: "Men haqimda" },
  { to: "/services", label: "Xizmatlar" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/journal", label: "Jurnal" },
  { to: "/contact", label: "Aloqa" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm gold-border flex items-center justify-center">
            <span className="text-gold font-display text-xl">S</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide">Suhrobbek</span>
            <span className="kicker text-[0.55rem]">Qayumov</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
              <span className="absolute -bottom-2 left-0 w-0 group-hover:w-full h-px bg-gold transition-all duration-500" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/auth" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Kirish
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm border border-gold text-gold hover:bg-gold hover:text-primary-foreground transition-all duration-500 shimmer"
          >
            Uchrashuv belgilash
          </Link>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-6 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-lg font-display"
                activeProps={{ className: "text-gold" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
