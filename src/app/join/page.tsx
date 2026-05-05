"use client";
import { ArrowRight } from "lucide-react";
import * as React from "react";

const perks = [
  { icon: "🎓", label: "Free Workshops" },
  { icon: "🤝", label: "Community Access" },
  { icon: "📢", label: "Early Opportunities" },
];

export default function JoinPage() {
  const [done, setDone] = React.useState(false);

  return (
    <div style={{ paddingTop: "var(--nav-h)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "var(--nav-h) 24px 64px" }}>
      <div style={{ width: "100%", maxWidth: 600 }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <span className="section-label" style={{ justifyContent: "center" }}>Join Us</span>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 10 }}>Join <span style={{ color: "var(--orange)" }}>PODEVS</span></h1>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>It's free. Always. Get access to workshops, community, and resources the moment you sign up.</p>
        </div>

        <div className="card-static" style={{ padding: "36px 32px", marginBottom: 16 }}>
          <h2 style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 6 }}>Create Your Account</h2>
          <p style={{ color: "var(--muted)", fontSize: "0.875rem", marginBottom: 28 }}>Join 2,000+ students already in the community.</p>

          <form style={{ display: "flex", flexDirection: "column", gap: 18 }} onSubmit={(e) => { e.preventDefault(); setDone(true); setTimeout(() => setDone(false), 3000); }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["First Name", "Last Name"].map((label) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--muted)" }}>{label}</label>
                  <input type="text" placeholder={label === "First Name" ? "Arun" : "Kumar"} style={{ height: 42, padding: "0 14px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg2)", color: "var(--text)", fontSize: "0.9rem", outline: "none", transition: "border-color var(--trans)" }} onFocus={(e) => e.target.style.borderColor = "var(--orange)"} onBlur={(e) => e.target.style.borderColor = "var(--border)"} />
                </div>
              ))}
            </div>

            {[
              { label: "Email Address", type: "email", placeholder: "you@example.com" },
              { label: "College / Institution", type: "text", placeholder: "Your college name" },
            ].map((f) => (
              <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--muted)" }}>{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} style={{ height: 42, padding: "0 14px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg2)", color: "var(--text)", fontSize: "0.9rem", outline: "none", transition: "border-color var(--trans)" }} onFocus={(e) => e.target.style.borderColor = "var(--orange)"} onBlur={(e) => e.target.style.borderColor = "var(--border)"} />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--muted)" }}>What interests you most?</label>
              <select style={{ height: 42, padding: "0 14px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg2)", color: "var(--text)", fontSize: "0.9rem", outline: "none", appearance: "none" }}>
                <option value="">Select an interest</option>
                {["Web Development", "Machine Learning / AI", "Mobile Development", "DevOps & Cloud", "UI/UX Design", "Open Source", "All of the above!"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label style={{ fontSize: "0.8rem", fontWeight: 500, color: "var(--muted)" }}>Year of Study</label>
              <select style={{ height: 42, padding: "0 14px", borderRadius: 8, border: "1px solid var(--border)", background: "var(--bg2)", color: "var(--text)", fontSize: "0.9rem", outline: "none", appearance: "none" }}>
                <option value="">Select year</option>
                {["1st Year", "2nd Year", "3rd Year", "4th Year", "Postgraduate", "Other"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", height: 46, fontSize: "0.95rem", background: done ? "#22c55e" : "var(--orange)", marginTop: 4 }}>
              {done ? "✓ Welcome to PODEVS!" : <><span>Join PODEVS — It's Free</span> <ArrowRight size={16} /></>}
            </button>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--subtle)" }}>No spam, ever. Unsubscribe anytime. The Smile of Education.</p>
          </form>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {perks.map((p) => (
            <div key={p.label} className="card-static" style={{ padding: "18px 12px", textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{p.icon}</div>
              <p style={{ fontSize: "0.78rem", color: "var(--muted)" }}>{p.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
