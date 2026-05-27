"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Download, Linkedin } from "lucide-react";
import { resume } from "@/lib/resume";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div
        className="blob animate-glow-pulse"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="blob animate-glow-pulse"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          bottom: "-10%",
          right: "-5%",
          animationDelay: "1.5s",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: ID card */}
        <div className="flex justify-center md:justify-start">
          <div
            className="animate-float relative"
            style={{
              background: "linear-gradient(145deg, #0d1340 0%, #050816 100%)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "20px",
              padding: "32px 28px",
              width: 280,
              boxShadow: "0 30px 80px rgba(124,58,237,0.25), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Photo */}
            <div
              style={{
                width: "100%",
                height: 220,
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 16,
                border: "1px solid rgba(124,58,237,0.2)",
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Sai Rebbapragada"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>

            {/* Card info */}
            <div className="flex items-start justify-between">
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#e2e8f0", fontFamily: "'Syne', sans-serif" }}>
                  Sai Rebbapragada
                </p>
                <p style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>Data Engineer</p>
              </div>
              <span
                style={{
                  fontSize: 10,
                  color: "#7c3aed",
                  fontFamily: "'JetBrains Mono', monospace",
                  background: "rgba(124,58,237,0.1)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  borderRadius: 4,
                  padding: "2px 8px",
                }}
              >
                #USA
              </span>
            </div>

            {/* Status dot */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 6px #22c55e",
                  display: "inline-block",
                }}
              />
              <span style={{ fontSize: 10, color: "#64748b", fontFamily: "'JetBrains Mono', monospace" }}>
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        {/* Right: text */}
        <div className="text-center md:text-left">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light mb-4">
            {resume.tagline}
          </p>

          <h1
            className="font-display font-extrabold leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            <span className="text-white">Hi! I&apos;m </span>
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sai
            </span>
            <span className="text-white">!</span>
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md" style={{ fontWeight: 300 }}>
            Data professional turning raw data into{" "}
            <span className="text-violet-light font-medium">business intelligence</span> — building
            pipelines, dashboards, and automated workflows at scale.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "white",
                boxShadow: "0 8px 32px rgba(124,58,237,0.4)",
              }}
            >
              Let&apos;s Connect <SendIcon size={14} />
            </a>
            <a
              href={resume.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium transition-all"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-slate-300 text-sm font-medium transition-all"
            >
              Resume <Download size={14} />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {resume.stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p
                  className="font-display font-extrabold"
                  style={{
                    fontSize: "1.75rem",
                    background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </p>
                <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-mono">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}

function SendIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}
