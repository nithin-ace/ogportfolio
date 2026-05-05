"use client";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import * as React from "react";

const pillars = [
  {
    num: "01", title: "Learning", icon: "📚",
    body: "We run free workshops every month, covering in-demand skills like web development, open source, cloud, and more. Our YouTube channel serves bite-sized tutorials with zero gatekeeping.",
    items: [{ icon: "🎓", title: "Live Workshops", sub: "Monthly hands-on sessions — all free" }, { icon: "▶️", title: "YouTube Tutorials", sub: "Practical videos on trending tech" }, { icon: "📦", title: "Resource Packs", sub: "Curated materials, templates & starter kits" }],
    cta: "Watch Videos →", href: "/media", flip: false,
  },
  {
    num: "02", title: "Community", icon: "🤝",
    body: "Tech is better together. PODEVS hosts events, hackathons, and networking sessions that turn strangers into collaborators. We create the spaces you need to grow beyond the code.",
    items: [{ icon: "⚡", title: "Hackathons", sub: "Build fast, win prizes, meet teams" }, { icon: "🎤", title: "Dev Talks", sub: "Expert speakers on trending topics" }, { icon: "🌐", title: "Online Community", sub: "Discord, group chats & study circles" }],
    cta: "See Events →", href: "/events", flip: true,
  },
  {
    num: "03", title: "Services", icon: "🚀",
    body: "We build the web so you can focus on your idea. Affordable website creation, fast deployment, and reliable hosting — all priced for students.",
    items: [{ icon: "🌍", title: "Website Creation", sub: "Custom-designed, fully responsive sites" }, { icon: "☁️", title: "Deployment & Hosting", sub: "Fast, reliable, student-friendly pricing" }],
    cta: "View Pricing →", href: "/services", flip: false,
  },
];

export default function WhatWeDoPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <section style={{ padding: "60px 0 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-label">Our Offerings</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>What We <span style={{ color: "var(--orange)" }}>Do</span></h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 540 }}>From workshops to services — everything we build is designed for students who want to grow fast and ship real things.</p>
        </div>
      </section>

      {pillars.map((p) => (
        <section key={p.num} style={{ padding: "0 0 80px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center" }}>
              {p.flip && (
                <div className="card-static" style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", background: "rgba(255,138,0,0.03)" }}>
                  {p.icon}
                </div>
              )}
              <div>
                <span className="section-label">Pillar {p.num}</span>
                <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>{p.title}</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 24, fontSize: "0.95rem" }}>{p.body}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                  {p.items.map((item) => (
                    <div key={item.title} className="card-static" style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{item.title}</p>
                        <p style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href={p.href} className="btn-primary">{p.cta}</Link>
              </div>
              {!p.flip && (
                <div className="card-static" style={{ aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "5rem", background: "rgba(255,138,0,0.03)" }}>
                  {p.icon}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
