"use client";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Marquee } from "@/components/marquee";
import { useEffect } from "react";

const stats = [
  { num: "2K+", label: "Members" },
  { num: "50+", label: "Free Workshops" },
  { num: "20+", label: "Events Run" },
  { num: "100%", label: "Student-Friendly" },
];

const pillars = [
  { icon: "📚", title: "Learning", body: "Free workshops, structured YouTube content, and curated resources so every student can upskill without financial barriers.", href: "/what-we-do" },
  { icon: "🤝", title: "Community", body: "Events, hackathons, and meetups that connect you with peers, mentors, and opportunities you won't find in a classroom.", href: "/events" },
  { icon: "🚀", title: "Services", body: "Affordable website creation, deployment, and hosting services so you can launch your ideas without a hefty price tag.", href: "/services" },
];

const events = [
  { day: "15", mo: "JUN", type: "Workshop", title: "Full-Stack Bootcamp: Next.js + Supabase", time: "2:00 PM IST", location: "Online", price: "Free" },
  { day: "22", mo: "JUN", type: "Hackathon", title: "BuildFast Hackathon — 24hr Sprint", time: "All Day", location: "Chennai", price: "₹99" },
  { day: "01", mo: "JUL", type: "Talk", title: "DevTalks: Open Source & Your Career Path", time: "6:00 PM IST", location: "Online", price: "Free" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Build a Portfolio Website in 60 Minutes", views: "12K views · 3 weeks ago" },
  { id: "9bZkp7q19f0", title: "React Hooks Explained Simply", views: "8.4K views · 1 month ago" },
  { id: "FTQbiNvZqaY", title: "Deploy Your First App on Vercel", views: "5.2K views · 2 months ago" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div
      className={`fade-up ${className}`}
      ref={(el) => {
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
        obs.observe(el);
      }}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}

import * as React from "react";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      {/* ── Hero ───────────────────────────────────────── */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "var(--nav-h)", paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", width: "100%" }}>
          <div style={{ maxWidth: 760 }}>
            <span className="section-label" style={{ marginBottom: 24 }}>Student-First EdTech Platform</span>
            <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.025em", marginBottom: 20 }}>
              Where Students<br />Learn, Build,<br />and Launch.
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
              PODEVS is your community to grow — through workshops, events, hackathons, and affordable services built for the next generation of builders.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/join" className="btn-primary">Join the Community <ArrowRight size={15} /></Link>
              <Link href="/events" className="btn-outline">Explore Events</Link>
            </div>
            {/* Stats */}
            <div style={{ display: "flex", gap: 40, marginTop: 56, flexWrap: "wrap", paddingTop: 40, borderTop: "1px solid var(--border)" }}>
              {stats.map((s) => (
                <div key={s.num}>
                  <p style={{ fontSize: "1.9rem", fontWeight: 800, color: "var(--orange)", lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--muted)", marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ────────────────────────────────────── */}
      <Marquee />

      {/* ── Pillars ────────────────────────────────────── */}
      <section style={{ padding: "96px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ justifyContent: "center" }}>What We Stand For</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 12 }}>Three Pillars of PODEVS</h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>Everything we do is built around learning, community, and creating opportunities for students.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="card" style={{ padding: "32px 28px", height: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
                  <div style={{ fontSize: 32 }}>{p.icon}</div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 700 }}>{p.title}</h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.7, flex: 1 }}>{p.body}</p>
                  <Link href={p.href} style={{ color: "var(--orange)", fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}>
                    Explore <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Events Preview ─────────────────────────────── */}
      <section style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <div>
              <span className="section-label">Upcoming</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Events & Hackathons</h2>
            </div>
            <Link href="/events" className="btn-outline" style={{ fontSize: "0.8rem", padding: "7px 16px" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {events.map((ev, i) => (
              <FadeUp key={ev.title} delay={i * 0.07}>
                <div className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(255,138,0,0.08)", border: "1px solid rgba(255,138,0,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--orange)", lineHeight: 1 }}>{ev.day}</span>
                      <span style={{ fontSize: 9, color: "var(--orange)", fontFamily: "monospace", letterSpacing: "0.05em" }}>{ev.mo}</span>
                    </div>
                    <span className="tag">{ev.type}</span>
                  </div>
                  <h3 style={{ fontWeight: 600, fontSize: "0.975rem", lineHeight: 1.35 }}>{ev.title}</h3>
                  <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 4 }}><Calendar size={12} />{ev.time}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>📍 {ev.location}</span>
                    <span style={{ fontSize: "0.8rem", color: "var(--muted)" }}>🎟 {ev.price}</span>
                  </div>
                  <Link href="/events" className="btn-primary" style={{ fontSize: "0.8rem", padding: "8px 16px", alignSelf: "flex-start" }}>Register</Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── YouTube Preview ────────────────────────────── */}
      <section style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
            <div>
              <span className="section-label">On YouTube</span>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>Latest Videos</h2>
            </div>
            <Link href="/media" className="btn-outline" style={{ fontSize: "0.8rem", padding: "7px 16px" }}>View All →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {videos.map((v, i) => (
              <FadeUp key={v.id} delay={i * 0.07}>
                <div className="card" style={{ overflow: "hidden" }}>
                  <div style={{ position: "relative", aspectRatio: "16/9", background: "var(--bg2)", overflow: "hidden" }}>
                    <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2.5l10 5.5-10 5.5V2.5z" fill="#fff" /></svg>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <p style={{ fontWeight: 500, fontSize: "0.9rem", marginBottom: 6 }}>{v.title}</p>
                    <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{v.views}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────── */}
      <section style={{ padding: "0 24px 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="card-static" style={{ padding: "72px 48px", textAlign: "center" }}>
            <span className="tag" style={{ marginBottom: 20 }}>The Smile of Education</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14, marginTop: 12 }}>
              Ready to Start Your Builder Journey?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px" }}>
              Join 2,000+ students already learning, building, and launching with PODEVS — completely free to start.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/join" className="btn-primary">Join Free Today <ArrowRight size={15} /></Link>
              <Link href="/about" className="btn-outline">Learn About Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
