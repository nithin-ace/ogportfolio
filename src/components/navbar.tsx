"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          height: "var(--nav-h)",
          background: scrolled ? "var(--bg)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.25s ease, border-color 0.25s ease",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link href="/"><Logo /></Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 2 }} className="hidden md:flex">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                padding: "6px 14px", borderRadius: 7, fontSize: "0.875rem", fontWeight: 500,
                color: pathname === l.href ? "var(--text)" : "var(--muted)",
                background: pathname === l.href ? "var(--bg2)" : "transparent",
                transition: "color var(--trans), background var(--trans)",
              }}
                className="hover:text-[var(--text)] hover:bg-[var(--bg2)]"
              >{l.label}</Link>
            ))}
          </nav>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden md:flex">
            <ThemeToggle />
            <Link href="/join" className="btn-primary" style={{ borderRadius: 8, padding: "8px 18px", fontSize: "0.8rem" }}>Join Free</Link>
          </div>

          {/* Mobile */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="flex md:hidden">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)} style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--text)" }}>
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div style={{ position: "fixed", top: "var(--nav-h)", left: 0, right: 0, zIndex: 40, background: "var(--bg)", borderBottom: "1px solid var(--border)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 4 }} className="md:hidden">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} style={{ padding: "10px 14px", borderRadius: 8, fontSize: "0.95rem", fontWeight: 500, color: pathname === l.href ? "var(--text)" : "var(--muted)", background: pathname === l.href ? "var(--bg2)" : "transparent" }}>{l.label}</Link>
          ))}
          <div style={{ marginTop: 8, paddingTop: 12, borderTop: "1px solid var(--border)" }}>
            <Link href="/join" className="btn-primary" style={{ width: "100%", justifyContent: "center", borderRadius: 8 }}>Join Free</Link>
          </div>
        </div>
      )}
    </>
  );
}
