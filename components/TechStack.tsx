"use client";

import { useEffect, useRef } from "react";
import { resume } from "@/lib/resume";

const categoryColors: Record<string, string> = {
  Query: "#a78bfa",
  Language: "#67e8f9",
  BI: "#f472b6",
  Cloud: "#fb923c",
  Reporting: "#34d399",
  Pipeline: "#fbbf24",
  Database: "#60a5fa",
  Analytics: "#e879f9",
  Platform: "#94a3b8",
  Tools: "#f87171",
  ETL: "#a3e635",
};

export default function TechStack() {
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

  const tickerItems = [...resume.techStack, ...resume.techStack];

  return (
    <section id="techstack" className="py-32 relative overflow-hidden">
      <div
        className="blob"
        style={{
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)",
          top: "30%",
          right: "-5%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light">
              04. Tech Stacks
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden mb-20 py-4">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #050816, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #050816, transparent)" }}
        />
        <div className="ticker-track">
          {tickerItems.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-4 flex-shrink-0"
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: categoryColors[tech.category] || "#a78bfa",
                  display: "inline-block",
                  boxShadow: `0 0 8px ${categoryColors[tech.category] || "#a78bfa"}`,
                }}
              />
              <span
                className="font-mono text-sm font-medium whitespace-nowrap"
                style={{ color: categoryColors[tech.category] || "#a78bfa" }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills grid */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resume.skills).map(([category, skills]) => (
            <div
              key={category}
              className="card-hover rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="font-display font-semibold text-white mb-4 text-sm">{category}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
