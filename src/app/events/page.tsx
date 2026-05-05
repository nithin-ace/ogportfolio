"use client";
import Link from "next/link";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import * as React from "react";

const upcoming = [
  { day: "15", mo: "JUN", type: "Workshop", title: "Full-Stack Bootcamp: Next.js + Supabase", body: "Build and deploy a full-stack app from scratch in one session. Perfect for beginners with basic HTML/CSS knowledge.", time: "2:00 PM – 6:00 PM IST", loc: "Online (Zoom)", price: "Free", seats: "Max 100" },
  { day: "22", mo: "JUN", type: "Hackathon", title: "BuildFast Hackathon — 24hr Sprint", body: "Form a team, pick a problem, and ship a working product in 24 hours. Prizes, mentorship, and a lot of coffee.", time: "9:00 AM – next day", loc: "Chennai", price: "₹99/person", seats: "Prizes ₹30K" },
  { day: "01", mo: "JUL", type: "Talk", title: "DevTalks: Open Source & Your Career", body: "Hear from engineers who started with open source contributions. Q&A session included.", time: "6:00 PM IST", loc: "Online", price: "Free", seats: "" },
  { day: "14", mo: "JUL", type: "Workshop", title: "UI/UX Design Crash Course with Figma", body: "Learn the fundamentals of design thinking, wireframing, and prototyping — even if you can't draw.", time: "3:00 PM – 5:30 PM IST", loc: "Online", price: "Free", seats: "" },
];

const past = [
  { day: "05", mo: "MAY", title: "Git & GitHub Masterclass", loc: "Online", attended: "85 attended" },
  { day: "19", mo: "APR", title: "Python for Beginners Weekend", loc: "Online", attended: "120 attended" },
  { day: "02", mo: "MAR", title: "Podevs Hackathon v1.0", loc: "Chennai", attended: "200 attended" },
];

export default function EventsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <section style={{ padding: "60px 0 48px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <span className="section-label">PODEVS Events</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>Events & <span style={{ color: "var(--orange)" }}>Hackathons</span></h1>
          <p style={{ color: "var(--muted)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 500 }}>Show up, build something, and meet people who care about the same things you do.</p>
        </div>
      </section>

      <section style={{ padding: "0 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--orange)" }} />
            <span className="section-label" style={{ marginBottom: 0 }}>Upcoming Events</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: 32 }}>Don't Miss These</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16 }}>
            {upcoming.map((ev, i) => (
              <div key={ev.title} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ width: 54, height: 54, borderRadius: 12, background: "rgba(255,138,0,0.06)", border: "1px solid rgba(255,138,0,0.18)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.2rem", color: "var(--orange)", lineHeight: 1 }}>{ev.day}</span>
                    <span style={{ fontSize: 9, color: "var(--orange)", fontFamily: "monospace", letterSpacing: "0.05em" }}>{ev.mo}</span>
                  </div>
                  <span className="tag">{ev.type}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.35 }}>{ev.title}</h3>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.65 }}>{ev.body}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 4 }}><Clock size={12} />{ev.time}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)", display: "flex", alignItems: "center", gap: 4 }}><MapPin size={12} />{ev.loc}</span>
                  <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>🎟 {ev.price}</span>
                  {ev.seats && <span style={{ fontSize: "0.78rem", color: "var(--muted)" }}>👥 {ev.seats}</span>}
                </div>
                <Link href="#" className="btn-primary" style={{ alignSelf: "flex-start", fontSize: "0.8rem", padding: "8px 18px" }}>Register Now</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 0 96px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ height: 1, background: "var(--border)", marginBottom: 56 }} />
          <span className="section-label">Archive</span>
          <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.015em", marginBottom: 28 }}>Past Events</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {past.map((ev) => (
              <div key={ev.title} className="card" style={{ padding: "20px 22px", opacity: 0.75, display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 9, background: "rgba(255,138,0,0.06)", border: "1px solid rgba(255,138,0,0.15)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--orange)", lineHeight: 1 }}>{ev.day}</span>
                    <span style={{ fontSize: 8, color: "var(--orange)", fontFamily: "monospace" }}>{ev.mo}</span>
                  </div>
                  <div>
                    <span className="tag" style={{ fontSize: 10, padding: "2px 8px", marginBottom: 4, display: "inline-block" }}>Completed</span>
                    <p style={{ fontWeight: 600, fontSize: "0.9rem" }}>{ev.title}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 12, fontSize: "0.78rem", color: "var(--muted)" }}>
                  <span>📍 {ev.loc}</span><span>👥 {ev.attended}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
