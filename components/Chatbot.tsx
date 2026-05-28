"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

const suggestions = [
  "What are Sai's skills?",
  "Tell me about his experience",
  "Is he open to opportunities?",
  "How can I contact him?",
];

type Message = {
  from: "bot" | "user";
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "bot",
      text: "Hi! 👋 I'm Sai's AI assistant powered by Gemini. Ask me anything about his experience, skills, or projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      const botMsg: Message = {
        from: "bot",
        text: data.reply || "Sorry, I couldn't get a response. Please try again!",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Something went wrong. Please try again!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
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

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            background: "#0a0f2e",
            border: "1px solid rgba(124,58,237,0.3)",
            boxShadow: "0 30px 80px rgba(124,58,237,0.3)",
          }}
        >
          {/* Header */}
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.15))",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "rgba(124,58,237,0.3)" }}
            >
              <Bot size={18} className="text-violet-300" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Sai's AI Assistant</p>
              <div className="flex items-center gap-1.5">
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                    boxShadow: "0 0 6px #22c55e",
                  }}
                />
                <span className="text-xs text-slate-400">Powered by Gemini</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-4 space-y-3 overflow-y-auto" style={{ height: 320 }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.from === "bot" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(124,58,237,0.2)" }}
                  >
                    <Bot size={14} className="text-violet-300" />
                  </div>
                )}
                <div
                  className="max-w-[75%] px-4 py-2.5 text-sm leading-relaxed"
                  style={
                    msg.from === "bot"
                      ? {
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#cbd5e1",
                          borderRadius: "4px 16px 16px 16px",
                        }
                      : {
                          background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
                          color: "white",
                          borderRadius: "16px 4px 16px 16px",
                        }
                  }
                >
                  {msg.text}
                </div>
                {msg.from === "user" && (
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(6,182,212,0.2)" }}
                  >
                    <User size={14} className="text-cyan-300" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div className="flex gap-2 justify-start">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.2)" }}
                >
                  <Bot size={14} className="text-violet-300" />
                </div>
                <div
                  className="px-4 py-3 flex items-center gap-1"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px 16px 16px 16px",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length <= 1 && (
            <div
              className="px-4 pb-3 flex flex-wrap gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
            >
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all hover:bg-violet/20"
                  style={{
                    background: "rgba(124,58,237,0.1)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#a78bfa",
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            className="px-4 py-3 flex gap-2"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              placeholder="Ask me anything about Sai..."
              className="flex-1 px-4 py-2 rounded-xl text-sm text-white placeholder-slate-600 outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            />
            <button
              onClick={() => send(input)}
              disabled={loading}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 disabled:opacity-50"
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
