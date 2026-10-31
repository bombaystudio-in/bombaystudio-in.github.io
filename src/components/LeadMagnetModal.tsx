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

  const triggerDirectDownload = () => {
    const link = document.createElement("a");
    link.href = "/bombay-studio-portfolio.pdf";
    link.download = "bombay-studio-portfolio.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // 1. Immediately trigger the direct file download for zero-friction gratification
    triggerDirectDownload();
    setSubmitted(true);

    // 2. Register lead with backend (resilient, non-blocking)
    try {
      await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } catch {
      // Non-blocking background catch
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
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
            Official Monograph (12 Pages)
          </span>
          <h3 className="font-serif text-2xl font-bold text-white mt-1">
            2026 Architectural Portfolio Monograph PDF
          </h3>
          <p className="text-xs text-[#A1A1AA] font-light mt-2 leading-relaxed">
            Get our complete 12-page portfolio brochure featuring delivered luxury residences, turnkey material specs, and itemized BOQ estimates.
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
              <span>{loading ? "Preparing..." : "Download Portfolio Brochure PDF ↗"}</span>
            </button>
          </form>
        ) : (
          <div className="p-5 rounded-2xl bg-[#1C1C1C] text-white text-xs space-y-3 border border-[#D4AF37]/50 shadow-xl">
            <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mx-auto" />
            <div>
              <p className="font-serif font-bold text-white text-base">Download Started!</p>
              <p className="text-[#A1A1AA] text-xs mt-1">
                Your 12-page Bombay Studio Architectural Monograph is downloading.
              </p>
            </div>
            <a
              href="/bombay-studio-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37]/20 hover:bg-[#D4AF37]/30 text-[#FCF6BA] border border-[#D4AF37]/40 text-xs font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Click here if download didn&apos;t start automatically ↗</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
