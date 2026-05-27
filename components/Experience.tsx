"use client";

import { useEffect, useRef } from "react";
import { resume } from "@/lib/resume";

export default function Experience() {
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

  return (
    <section id="experience" className="py-32 relative">
      {/* Background blob */}
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)",
          top: "20%",
          right: "-5%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light">
              02. Work Experience
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
              style={{ background: "linear-gradient(to bottom, #7c3aed 0%, rgba(124,58,237,0.1) 100%)" }}
            />

            <div className="space-y-12">
              {resume.experience.map((job, idx) => (
                <div key={`${job.company}-${idx}`} className="md:pl-16 relative">
                  {/* Timeline dot */}
                  <div className="timeline-dot absolute left-0 top-5 hidden md:block" />

                  <div
                    className="card-hover rounded-2xl p-8 transition-all"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display font-bold text-white text-lg">
                            {job.role}
                          </h3>
                          {job.current && (
                            <span
                              className="text-xs font-mono"
                              style={{
                                padding: "2px 10px",
                                borderRadius: 999,
                                background: "rgba(34,197,94,0.1)",
                                border: "1px solid rgba(34,197,94,0.3)",
                                color: "#86efac",
                              }}
                            >
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-violet-light font-medium">{job.company}</p>
                      </div>
                      <span
                        className="text-xs font-mono text-slate-500"
                        style={{
                          padding: "4px 12px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          flexShrink: 0,
                        }}
                      >
                        {job.period}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                          <span
                            className="mt-2 flex-shrink-0"
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: "#7c3aed",
                              boxShadow: "0 0 6px rgba(124,58,237,0.6)",
                            }}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
