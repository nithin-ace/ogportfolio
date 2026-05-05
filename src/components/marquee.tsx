"use client";
import * as React from "react";

const items = ["Workshops", "Hackathons", "YouTube Learning", "Web Dev Services", "Community Events", "Hosting", "Student Support", "Deployment"];
const doubled = [...items, ...items];

export function Marquee() {
  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "14px 0", background: "var(--bg2)" }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { display: flex; gap: 24px; width: max-content; animation: marquee 24s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 99, border: "1px solid var(--border)", background: "var(--card)", fontSize: 12, fontWeight: 500, color: "var(--muted)", whiteSpace: "nowrap" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--orange)", flexShrink: 0 }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
