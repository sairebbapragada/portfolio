"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const faqs: { patterns: string[]; answer: string }[] = [
  {
    patterns: ["hello", "hi", "hey", "sup", "what's up", "howdy"],
    answer: "Hi there! 👋 I'm Sai's portfolio assistant. Ask me anything about his experience, skills, projects, or how to get in touch!",
  },
  {
    patterns: ["experience", "years", "how long", "background", "work history"],
    answer: "Sai has 2+ years of professional experience in data. He currently works at UnitedHealthcare as a Sales Reporting Analyst (March 2026 – Present). Previously he was in the M&R Sales Support Rotational Program (June 2024 – March 2026) and completed internships at Optum (2023) and UnitedHealthcare (2022).",
  },
  {
    patterns: ["power bi", "dashboard", "bi", "tableau", "visualization", "report"],
    answer: "Sai is highly skilled in Power BI and Tableau. At UnitedHealthcare he designed and deployed self-service Power BI dashboards adopted enterprise-wide, cutting ad hoc requests by ~70%.",
  },
  {
    patterns: ["sql", "query", "database", "dbeaver"],
    answer: "Sai has advanced SQL skills. He develops complex queries in DBeaver to extract and process multi-million row databases for sales agent reporting, onboarding tracking, and territory performance.",
  },
  {
    patterns: ["python"],
    answer: "Sai is proficient in Python and uses it for data processing, pipeline automation, and analytics workflows alongside SQL and other tools.",
  },
  {
    patterns: ["aws", "cloud", "s3", "glue", "emr"],
    answer: "Sai has experience with AWS including S3, Glue, and EMR basics for building and managing data pipelines in the cloud.",
  },
  {
    patterns: ["etl", "pipeline", "automation", "ssrs", "sharepoint"],
    answer: "Sai built end-to-end automated ETL pipelines at UnitedHealthcare using SSRS — pulling SQL data, converting to formatted Excel, and uploading to SharePoint on a schedule. This eliminated 100% of manual file sharing.",
  },
  {
    patterns: ["education", "degree", "school", "university", "study", "masters", "ms", "pitt", "pittsburgh", "wisconsin"],
    answer: "Sai holds a BA in Information Systems with a Minor in Marketing from the University of Wisconsin, Eau Claire. He is currently pursuing his MS in Data Science at the University of Pittsburgh (expected 2027).",
  },
  {
    patterns: ["unitedhealthcare", "optum", "company", "current job", "employer"],
    answer: "Sai currently works at UnitedHealthcare as a Sales Reporting Analyst (March 2026 – Present). He previously completed the M&R Sales Support Rotational Program and interned at both Optum and UnitedHealthcare.",
  },
  {
    patterns: ["skills", "tech", "tools", "stack", "technologies"],
    answer: "Sai's core skills include SQL, Python, Power BI, Tableau, SSRS, ETL/ELT pipelines, AWS (S3, Glue, EMR), Databricks, SQL Server, MySQL, Excel/VBA, DAX, Power Query, and SharePoint.",
  },
  {
    patterns: ["contact", "email", "reach", "connect", "message"],
    answer: "You can reach Sai at SaiRebbapragada@gmail.com or connect on LinkedIn at linkedin.com/in/sairohitrebbapragada. You can also use the contact form on this page!",
  },
  {
    patterns: ["open to", "available", "looking", "opportunity", "hire", "job", "position", "recruiting"],
    answer: "Yes! Sai is currently open to new opportunities — full-time roles, internships, or interesting data projects. Feel free to reach out!",
  },
  {
    patterns: ["project", "built", "created", "portfolio", "work"],
    answer: "Sai's key projects include: an Enterprise Sales BI Dashboard (70% reduction in ad hoc requests), an Automated SSRS Report Pipeline (100% manual effort eliminated), Territory Performance Analytics (millions of rows processed), and a Customer Experience Insights Platform at Optum.",
  },
  {
    patterns: ["achievement", "accomplishment", "impact", "result", "outcome"],
    answer: "Sai's key achievements: cut ad hoc reporting requests by 70%, eliminated 100% of manual file sharing, reduced inbound calls by 30%, and processed multi-million row databases for enterprise reporting.",
  },
  {
    patterns: ["linkedin"],
    answer: "You can find Sai on LinkedIn at linkedin.com/in/sairohitrebbapragada",
  },
  {
    patterns: ["resume", "cv", "download"],
    answer: "You can download Sai's resume using the Download Resume button on the portfolio homepage!",
  },
  {
    patterns: ["databricks"],
    answer: "Sai has experience with Databricks as part of his data pipeline and ETL toolkit, alongside AWS and SQL Server.",
  },
  {
    patterns: ["marketing", "minor"],
    answer: "Sai minored in Marketing during his BA at UW Eau Claire. This background helps him understand business context when building data solutions for Sales and Operations teams.",
  },
];

const suggestions = [
  "What are Sai's skills?",
  "Tell me about his experience",
  "Is he open to opportunities?",
  "How can I contact him?",
];

type Message = { from: "bot" | "user"; text: string };

function getAnswer(input: string): string {
  const lower = input.toLowerCase();
  for (const faq of faqs) {
    if (faq.patterns.some((p) => lower.includes(p))) {
      return faq.answer;
    }
  }
  return "Great question! I'm not sure about that specific detail. Feel free to reach out directly at SaiRebbapragada@gmail.com or use the contact form — Sai will get back to you quickly!";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! 👋 I'm Sai's portfolio assistant. Ask me anything about his experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { from: "user", text };
    const botMsg: Message = { from: "bot", text: getAnswer(text) };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          boxShadow: "0 8px 32px rgba(124,58,237,0.5)",
        }}
        aria-label="Open chat"
      >
        {open ? <X size={22} color="white" /> : <MessageCircle size={22} color="white" />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "#0a0f2e",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 30px 80px rgba(124,58,237,0.3)",
          }}
        >
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.15))",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(124,58,237,0.3)" }}>
              <Bot size={18} className="text-violet-300" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Sai's Assistant</p>
              <div className="flex items-center gap-1.5">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
                <span className="text-xs text-slate-400">Online</span>
              </div>
            </div>
          </div>

          <div className="px-4 py-4 space-y-3 overflow-y-auto" style={{ height: 320 }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "bot" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(124,58,237,0.2)" }}>
                    <Bot size={14} className="text-violet-300" />
                  </div>
                )}
                <div
                  className="max-w-[75%] px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    msg.from === "bot"
                      ? { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#cbd5e1", borderRadius: "4px 16px 16px 16px" }
                      : { background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "white", borderRadius: "16px 4px 16px 16px" }
                  }
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(6,182,212,0.2)" }}>
                    <User size={14} className="text-cyan-300" />
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {messages.length <= 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all hover:bg-violet/20"
                  style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", color: "#a78bfa" }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="px-4 py-3 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2 rounded-xl text-sm text-white placeholder-slate-600 outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            />
            <button
              onClick={() => send(input)}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <Send size={14} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
