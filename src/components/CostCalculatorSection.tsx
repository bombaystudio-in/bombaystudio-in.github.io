"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, Download, Loader2 } from "lucide-react";

export default function CostCalculatorSection() {
  const [bhk, setBhk] = useState<string>("2BHK");
  const [area, setArea] = useState<number>(1100);
  const [tier, setTier] = useState<"standard" | "premium" | "luxury">("premium");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const ratePerSqft = {
    standard: 1350,
    premium: 1850,
    luxury: 2800,
  };

  const estimatedTotal = area * ratePerSqft[tier];
  const formattedEstimate = (estimatedTotal / 100000).toFixed(2);

  const triggerPdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/mumbai-interior-budget-planner-2026.pdf";
    link.download = "mumbai-interior-budget-planner-2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          bhk,
          area,
          tier: tier === "standard" ? "Standard Finish" : tier === "premium" ? "Premium Turnkey" : "Ultra Luxury",
          estimatedTotal: formattedEstimate,
          type: "calculator",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLeadSubmitted(true);
        triggerPdfDownload();
      } else {
        setErrorMessage(data.error || "Failed to request BOQ quote. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-8 sm:py-10 lg:py-12 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl glass-panel p-4 sm:p-6 lg:p-8 gold-border-glow">
          {/* Centered Calculator Header */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Estimate Your <span className="gold-gradient-text">Interior Cost</span>
            </h2>
            <p className="text-[#A1A1AA] text-xs sm:text-sm font-light mt-1.5">
              Select your home layout, carpet area, and desired finish tier to get an instant cost estimate for Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-4">
              {/* BHK Selector */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-2">
                  1. Select BHK Type
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {["1BHK", "2BHK", "3BHK", "4BHK / Villa"].map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setBhk(type);
                        if (type === "1BHK") setArea(650);
                        if (type === "2BHK") setArea(1100);
                        if (type === "3BHK") setArea(1550);
                        if (type === "4BHK / Villa") setArea(2600);
                      }}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        bhk === type
                          ? "btn-gold-shiny scale-102"
                          : "bg-[#121212] text-[#A1A1AA] hover:text-white border border-white/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-white mb-1.5">
                  <span className="uppercase tracking-wider text-[10px] sm:text-xs">2. Carpet Area (sq.ft.)</span>
                  <span className="text-[#FCF6BA] text-sm sm:text-base">{area} sq.ft.</span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={4500}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#1C1C1C] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>

              {/* Finish Tier */}
              <div>
                <label className="block text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider mb-2">
                  3. Select Finish Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: "standard", label: "Standard", desc: "Commercial Ply & Matte Laminate" },
                    { id: "premium", label: "Premium Turnkey", desc: "IS-710 Marine Ply & PU Paint" },
                    { id: "luxury", label: "Ultra Luxury", desc: "Italian Marble & Fluted Veneer" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id as "standard" | "premium" | "luxury")}
                      className={`p-2.5 sm:p-3 rounded-lg text-left text-xs transition-all ${
                        tier === t.id
                          ? "bg-[#1C1C1C] border-2 border-[#D4AF37] text-white gold-border-glow"
                          : "bg-[#121212] text-[#A1A1AA] border border-white/10 hover:text-white"
                      }`}
                    >
                      <p className="font-bold text-xs text-white mb-0.5">{t.label}</p>
                      <p className="text-[10px] font-light leading-tight">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-5 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#121212] border border-white/15 text-center space-y-3.5 shadow-2xl">
              <span className="text-[#D4AF37] text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                Estimated Project Budget
              </span>

              <div className="py-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  ₹{formattedEstimate} <span className="text-base font-sans font-normal text-[#D4AF37]">Lakhs*</span>
                </span>
                <p className="text-[10px] text-[#A1A1AA] font-light mt-1">
                  Turnkey materials, civil execution &amp; architectural supervision.
                </p>
              </div>

              <div className="space-y-1 text-[11px] text-[#A1A1AA] text-left border-y border-white/10 py-2">
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Penalty-Backed Handover</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>100% Transparent Itemized BOQ</span>
                </p>
              </div>

              {!leadSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-2">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp Number"
                    className="w-full px-3 py-2 rounded-lg bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errorMessage && (
                    <p className="text-[10px] text-red-400 text-left">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-1.5 btn-gold-shiny text-xs uppercase tracking-wider py-2.5 rounded-lg transition-all disabled:opacity-50"
                  >
                    {loading ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>{loading ? "Transmitting..." : "Get Detailed Estimate Breakdown"}</span>
                  </button>
                </form>
              ) : (
                <div className="p-3.5 rounded-lg bg-[#1C1C1C] text-white text-xs space-y-2 border border-[#D4AF37] shadow-xl">
                  <div className="flex items-center justify-center gap-1.5 text-[#D4AF37]">
                    <CheckCircle2 className="w-4 h-4" />
                    <p className="font-bold text-xs sm:text-sm">Quote Submitted!</p>
                  </div>
                  <p className="text-[10px] text-[#A1A1AA] text-center">
                    Our team will WhatsApp your custom BOQ breakdown shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
