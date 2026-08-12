"use client";

import { useState, useEffect } from "react";
import { X, FileText, Download, CheckCircle2, Loader2 } from "lucide-react";

export default function LeadMagnetModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const modalShown = localStorage.getItem("lead_magnet_shown");
      if (!modalShown) {
        setIsOpen(true);
        localStorage.setItem("lead_magnet_shown", "true");
      }
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md rounded-3xl glass-panel p-8 gold-border-glow shadow-2xl text-center space-y-6">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-[#A1A1AA] hover:text-white hover:bg-[#1C1C1C] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-16 h-16 rounded-2xl bg-[#1C1C1C] text-[#D4AF37] mx-auto flex items-center justify-center border border-white/10">
          <FileText className="w-8 h-8 text-[#D4AF37]" />
        </div>

        <div>
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
            Free Download
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mt-1">
            2026 Mumbai Interior Budget Planner &amp; Checklist PDF
          </h3>
          <p className="text-xs text-[#A1A1AA] font-light mt-2">
            Get our complete material rate card, BOQ checklist, and 15 questions to ask any contractor before signing.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email ID"
              className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#D4AF37]"
            />
            {errorMessage && (
              <p className="text-xs text-red-400 text-left">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              <span>{loading ? "Sending..." : "Download PDF Guide Free"}</span>
            </button>
          </form>
        ) : (
          <div className="p-4 rounded-xl bg-[#1C1C1C] text-white text-xs space-y-2 border border-[#D4AF37]">
            <CheckCircle2 className="w-6 h-6 text-[#D4AF37] mx-auto" />
            <p className="font-bold text-white">Download Link Sent!</p>
            <p className="text-[#A1A1AA]">Check your email inbox for your PDF Budget Planner.</p>
          </div>
        )}
      </div>
    </div>
  );
}
