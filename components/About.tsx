"use client";

import { useEffect, useRef } from "react";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";
import { resume } from "@/lib/resume";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light">
              01. About
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Bio */}
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                Turning data chaos into{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  clarity
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                {resume.bio}
              </p>

              <p className="text-slate-400 leading-relaxed" style={{ fontWeight: 300 }}>
                From building self-service dashboards that reduced ad hoc requests by 70%, to architecting automated SSRS pipelines that eliminated all manual file sharing — I care about solutions that{" "}
                <span className="text-slate-200">actually stick</span>.
              </p>

              {/* Contact info */}
              <div className="mt-8 space-y-3">
                {[
                  { icon: Mail, label: resume.email, href: `mailto:${resume.email}` },
                  { icon: Phone, label: resume.phone, href: `tel:${resume.phone.replace(/\D/g, "")}` },
                  { icon: MapPin, label: "Minneapolis, MN / Pittsburgh, PA", href: null },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                    >
                      <Icon size={14} className="text-violet-light" />
                    </div>
                    {href ? (
                      <a href={href} className="text-slate-400 text-sm hover:text-violet-light transition-colors">
                        {label}
                      </a>
                    ) : (
                      <span className="text-slate-400 text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Education */}
            <div>
              <h3 className="font-display font-semibold text-white mb-8 flex items-center gap-2">
                <GraduationCap size={18} className="text-violet-light" />
                Education
              </h3>

              <div className="space-y-6">
                {resume.education.map((ed) => (
                  <div
                    key={ed.school}
                    className="card-hover gradient-border rounded-2xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-display font-semibold text-white">{ed.degree}</p>
                        <p className="text-violet-light text-sm mt-1">{ed.school}</p>
                        {ed.minor && (
                          <p className="text-slate-500 text-xs mt-1">{ed.minor}</p>
                        )}
                      </div>
                      <span
                        className="text-xs font-mono flex-shrink-0"
                        style={{
                          padding: "3px 10px",
                          borderRadius: 999,
                          background: ed.current ? "rgba(124,58,237,0.15)" : "rgba(255,255,255,0.05)",
                          border: `1px solid ${ed.current ? "rgba(124,58,237,0.4)" : "rgba(255,255,255,0.1)"}`,
                          color: ed.current ? "#a78bfa" : "#64748b",
                        }}
                      >
                        {ed.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills preview */}
              <div className="mt-10">
                <p className="text-slate-500 text-xs uppercase tracking-widest font-mono mb-4">Core Skills</p>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "Python", "Power BI", "ETL/ELT", "AWS", "SSRS", "Databricks", "Tableau", "DAX", "Data Modeling"].map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
