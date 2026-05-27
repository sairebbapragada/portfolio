"use client";

import { useState, useEffect } from "react";
import { Send, Linkedin } from "lucide-react";
import { resume } from "@/lib/resume";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stacks", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-lg tracking-tight text-white hover:text-violet-light transition-colors"
        >
          SR<span className="text-violet-light">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link font-body text-sm tracking-wide uppercase">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/10 hover:border-violet-light/50 hover:bg-white/5 transition-all"
          >
            <Linkedin size={16} className="text-slate-400" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-violet/60 bg-violet/10 hover:bg-violet/20 text-violet-light text-sm font-medium transition-all"
          >
            Let&apos;s Connect <SendIcon size={13} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-slate-300 hover:text-white text-sm uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 flex items-center gap-2 px-4 py-2 rounded-full border border-violet/60 bg-violet/10 text-violet-light text-sm font-medium w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s Connect <SendIcon size={13} />
            </a>
          </div>
        </div>
      )}
    </nav>
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
