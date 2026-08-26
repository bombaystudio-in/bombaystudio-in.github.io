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
      } else {
        setErrorMessage(data.error || "Failed to request BOQ quote. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-panel p-8 sm:p-14 gold-border-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1C1C] text-[#FCF6BA] text-xs font-semibold uppercase tracking-wider mb-3 border border-white/10">
                  <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Instant Lead Calculator</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                  Estimate Your <span className="gold-gradient-text">Interior Cost</span>
                </h2>
                <p className="text-[#A1A1AA] text-sm font-light mt-2">
                  Select your home layout, carpet area, and desired finish tier to get an instant cost estimate for Mumbai.
                </p>
              </div>

              {/* BHK Selector */}
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-3">
                  1. Select BHK Type
                </label>
                <div className="grid grid-cols-4 gap-3">
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
                      className={`py-3 rounded-xl text-xs font-bold transition-all ${
                        bhk === type
                          ? "btn-gold-shiny scale-105"
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
                <div className="flex justify-between text-xs font-bold text-white mb-2">
                  <span className="uppercase tracking-wider">2. Carpet Area (sq.ft.)</span>
                  <span className="text-[#FCF6BA] text-base">{area} sq.ft.</span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={4500}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-[#1C1C1C] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>

              {/* Finish Tier */}
              <div>
                <label className="block text-xs font-bold text-white uppercase tracking-wider mb-3">
                  3. Select Finish Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "standard", label: "Standard Finish", desc: "Commercial Plywood & Matte Laminate" },
                    { id: "premium", label: "Premium Turnkey", desc: "IS-710 Marine Ply, PU Paint & Quartz" },
                    { id: "luxury", label: "Ultra Luxury", desc: "Italian Marble, Fluted Veneer & Brass" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTier(t.id as "standard" | "premium" | "luxury")}
                      className={`p-4 rounded-xl text-left text-xs transition-all ${
                        tier === t.id
                          ? "bg-[#1C1C1C] border-2 border-[#D4AF37] text-white gold-border-glow"
                          : "bg-[#121212] text-[#A1A1AA] border border-white/10 hover:text-white"
                      }`}
                    >
                      <p className="font-bold text-sm text-white mb-1">{t.label}</p>
                      <p className="text-[11px] font-light leading-tight">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Box */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#121212] border border-white/15 text-center space-y-6 shadow-2xl">
              <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">
                Estimated Project Budget
              </span>

              <div className="py-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-white">
                  ₹{formattedEstimate} <span className="text-xl font-sans font-normal text-[#D4AF37]">Lakhs*</span>
                </span>
                <p className="text-xs text-[#A1A1AA] font-light mt-2">
                  Includes Architectural Planning, Materials, Labor &amp; Site Supervision.
                </p>
              </div>

              <div className="space-y-2 text-xs text-[#A1A1AA] text-left border-y border-white/10 py-4">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>Penalty-Backed 60 to 90 Day Handover</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Transparent Itemized BOQ</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  <span>10-Year Structural Warranty</span>
                </p>
              </div>

              {!leadSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#D4AF37]"
                  />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="WhatsApp Number"
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
                    <span>{loading ? "Transmitting..." : "Get Detailed PDF Quote"}</span>
                  </button>
                </form>
              ) : (
                <div className="p-4 rounded-xl bg-[#1C1C1C] text-white text-xs space-y-2 border border-[#D4AF37]">
                  <p className="font-bold text-[#D4AF37] text-sm">Thank You!</p>
                  <p>Our senior architect will WhatsApp your itemized BOQ within 15 minutes.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
