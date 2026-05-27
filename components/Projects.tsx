"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { resume } from "@/lib/resume";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const gradients = [
    "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.05) 100%)",
    "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(124,58,237,0.05) 100%)",
    "linear-gradient(135deg, rgba(167,139,250,0.1) 0%, rgba(6,182,212,0.1) 100%)",
    "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.08) 100%)",
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          bottom: "0%",
          left: "-10%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light">
              03. Projects
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resume.projects.map((proj, idx) => (
              <div
                key={proj.title}
                className="card-hover rounded-2xl p-8 group relative overflow-hidden"
                style={{
                  background: gradients[idx % gradients.length],
                  border: "1px solid rgba(124,58,237,0.15)",
                }}
              >
                {/* Top bar */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(124,58,237,0.15)",
                      border: "1px solid rgba(124,58,237,0.3)",
                    }}
                  >
                    <span className="font-mono text-violet-light font-bold text-sm">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-slate-600 group-hover:text-violet-light transition-colors"
                  />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                  {proj.description}
                </p>

                {/* Highlight */}
                <div
                  className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                  style={{
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#22c55e",
                      display: "inline-block",
                    }}
                  />
                  <span className="text-xs font-mono text-green-400">{proj.highlight}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
