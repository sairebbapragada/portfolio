import { resume } from "@/lib/resume";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} Sai Rebbapragada. Built with Next.js & Vercel.
        </p>
        <a
          href={`mailto:${resume.email}`}
          className="font-mono text-xs text-slate-600 hover:text-violet-light transition-colors"
        >
          {resume.email}
        </a>
      </div>
    </footer>
  );
}
