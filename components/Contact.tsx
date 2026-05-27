"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Send, Linkedin, CheckCircle, AlertCircle } from "lucide-react";
import { resume } from "@/lib/resume";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrMsg("");

    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        "service_17zevhb",
        "template_iblfjak",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "5uX9AgZbF_V0vS1x_"
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrMsg("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all focus:border-violet/60 focus:ring-1 focus:ring-violet/30";
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <section id="contact" className="py-32 relative">
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade">
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-violet-light">
              05. Contact
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-violet/30 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-4xl font-bold text-white mb-6 leading-tight">
                Let&apos;s build something{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa, #67e8f9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  together
                </span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                I&apos;m currently open to new opportunities — full-time roles, internships, or
                interesting data projects. Drop me a message and I&apos;ll get back to you quickly.
              </p>

              <div className="space-y-4">
                <a href={`mailto:${resume.email}`} className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                    style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <Mail size={16} className="text-violet-light" />
                  </div>
                  <span className="text-slate-400 text-sm group-hover:text-violet-light transition-colors">
                    {resume.email}
                  </span>
                </a>
              </div>

              <div className="mt-10 flex gap-4">
                
                  href={resume.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-violet-light/40 hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-all"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {status === "success" && (
                  <div
                    className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)", color: "#86efac" }}
                  >
                    <CheckCircle size={15} /> Message sent! I&apos;ll be in touch soon.
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="flex items-center gap-2 text-sm rounded-lg px-4 py-3"
                    style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#fca5a5" }}
                  >
                    <AlertCircle size={15} /> {errMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-medium text-sm transition-all disabled:opacity-50"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                    color: "white",