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
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { name: "Twitter", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> },
                { name: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
                { name: "YouTube", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg> },
                { name: "Discord", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6h0a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3h0v2a1 1 0 0 1-1 1h-1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1a1 1 0 0 1 1 1v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-2a1 1 0 0 1 1-1h1a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-1a1 1 0 0 1-1-1V6z"></path><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle></svg> },
                { name: "Instagram", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> }
              ].map((s) => (
                <a key={s.name} href="#" title={s.name} style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, border: "1px solid var(--border)", color: "var(--muted)", transition: "color var(--trans), border-color var(--trans)" }}
                  className="hover:text-[var(--orange)] hover:border-[var(--orange)]">
                  {s.icon}
                </a>
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
