import Link from "next/link";
import { Logo } from "@/components/logo";

const col1 = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
];
const col2 = [
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
  { label: "Join Free", href: "/join" },
  { label: "Contact", href: "/contact" },
];
const col3 = [
  { label: "Web Development", href: "/services" },
  { label: "Deployment", href: "/services" },
  { label: "Hosting", href: "/services" },
  { label: "Design (Figma)", href: "/services" },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg)", padding: "64px 0 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: 48 }} className="grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "block", marginBottom: 14 }}><Logo /></Link>
            <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 240, marginBottom: 20 }}>
              The Smile of Education. A student-first EdTech community where learners build, connect, and launch — for free.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Twitter", "LinkedIn", "YouTube", "Discord", "Instagram"].map((s) => (
                <a key={s} href="#" style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid var(--border)", fontSize: "0.75rem", color: "var(--muted)", transition: "color var(--trans), border-color var(--trans)" }}
                  className="hover:text-[var(--orange)] hover:border-[var(--orange)]">{s}</a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)", marginBottom: 16 }}>Platform</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col1.map((l) => <li key={l.href}><Link href={l.href} style={{ fontSize: "0.875rem", color: "var(--muted)", transition: "color var(--trans)" }} className="hover:text-[var(--orange)]">{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Community */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)", marginBottom: 16 }}>Community</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col2.map((l) => <li key={l.href}><Link href={l.href} style={{ fontSize: "0.875rem", color: "var(--muted)", transition: "color var(--trans)" }} className="hover:text-[var(--orange)]">{l.label}</Link></li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--subtle)", marginBottom: 16 }}>Services</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col3.map((l) => <li key={l.href}><Link href={l.href} style={{ fontSize: "0.875rem", color: "var(--muted)", transition: "color var(--trans)" }} className="hover:text-[var(--orange)]">{l.label}</Link></li>)}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <p style={{ fontSize: "0.8rem", color: "var(--subtle)" }}>© {new Date().getFullYear()} PODEVS. Made with 💛 for students everywhere.</p>
          <p style={{ fontSize: "0.75rem", color: "var(--subtle)", fontFamily: "monospace", letterSpacing: "0.08em" }}>The Smile of Education</p>
        </div>
      </div>
    </footer>
  );
}
