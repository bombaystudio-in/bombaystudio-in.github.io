"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    scope: "Turnkey Residential (2BHK / 3BHK / Villa)",
    brief: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "consultation" }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setFormSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-2">
                Get In Touch
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Let’s Discuss Your <span className="gold-gradient-text">Space</span>
              </h2>
              <p className="text-[#A1A1AA] text-sm font-light mt-3">
                Visit our experience center in Mumbai or schedule a free site consultation with Principal Architect Ar. Aakhir Choudhary.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-white">Office Address</p>
                  <p className="text-[#A1A1AA] text-xs font-light">
                    Bombay Studio Design HQ, Suite 402, Trade World B, BKC &amp; Lower Parel, Mumbai, Maharashtra 400013
                  </p>
                </div>
              </div>

              {/* Direct Studio Line (Highlight Primary) */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#121212] border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/10">
                <div className="p-3 rounded-xl bg-[#D4AF37] text-[#050505] shrink-0 font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-[#D4AF37] text-xs uppercase tracking-wider">
                      DIRECT STUDIO LINE
                    </p>
                    <span className="text-[10px] bg-[#25D366]/20 text-[#25D366] px-2 py-0.5 rounded-full font-bold">
                      Available Now
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-0.5">
                    <a
                      href="tel:+917070704181"
                      className="text-white text-base hover:text-[#FCF6BA] font-serif font-bold whitespace-nowrap shrink-0 tracking-wide"
                    >
                      +91 707070 4181
                    </a>
                    <a
                      href="https://wa.me/917070704181?text=Hi%20Bombay%20Studio,%20I%20want%20to%20book%20a%20free%20interior%20consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] bg-[#25D366] text-black font-bold px-2.5 py-1 rounded-md hover:bg-[#1EBE5D] transition-colors inline-flex items-center gap-1 shrink-0"
                    >
                      <span>WhatsApp Chat ↗</span>
                    </a>
                  </div>
                  <p className="text-[#A1A1AA] text-[11px] font-light">
                    Direct line for quick inquiries, site estimates &amp; architect consultation.
                  </p>
                </div>
              </div>

              {/* Personal Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white text-xs uppercase tracking-wider">Principal Architect Personal Line</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href="tel:+919664384181"
                      className="text-[#FCF6BA] text-xs hover:underline font-semibold whitespace-nowrap shrink-0"
                    >
                      +91 966438 4181
                    </a>
                    <span className="hidden sm:inline text-white/30">•</span>
                    <a
                      href="mailto:aakhir@bombaystudio.in"
                      className="text-[#A1A1AA] text-xs hover:text-white transition-colors break-all sm:break-normal"
                    >
                      aakhir@bombaystudio.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Studio Email Contact */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-white text-xs uppercase tracking-wider">Studio General Email</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href="mailto:info@bombaystudio.in"
                      className="text-[#A1A1AA] text-xs hover:text-white transition-colors break-all sm:break-normal"
                    >
                      info@bombaystudio.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <Clock className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-white">Working Hours</p>
                  <p className="text-[#A1A1AA] text-xs font-light">
                    Monday – Saturday: 10:00 AM – 7:30 PM (Sunday by Appointment)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Lead Form */}
          <div className="lg:col-span-7 rounded-3xl glass-panel p-8 sm:p-12 gold-border-glow shadow-2xl">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Book Your Free Consultation
            </h3>
            <p className="text-xs text-[#A1A1AA] font-light mb-8">
              Fill out the form below and Ar. Aakhir Choudhary will reach out within 2 working hours.
            </p>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rohan Mehta"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Bandra West, Mumbai"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Project Scope *
                    </label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/15 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option>Turnkey Residential (2BHK / 3BHK / Villa)</option>
                      <option>Modular Kitchen &amp; Wardrobes</option>
                      <option>Commercial Office Fitout</option>
                      <option>Restaurant / Retail / Clinic</option>
                      <option>Architecture &amp; Elevation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Project Brief &amp; Key Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Tell us about carpet area, Possession date & target budget..."
                    className="w-full px-4 py-3.5 rounded-xl bg-[#050505] border border-white/15 text-white text-xs placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-400">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 btn-gold-shiny text-xs uppercase tracking-wider py-4 rounded-xl transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>{loading ? "Transmitting..." : "Submit Consultation Request"}</span>
                </button>
              </form>
            ) : (
              <div className="p-8 rounded-2xl bg-[#121212] text-center space-y-4 border border-[#D4AF37]">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-white">
                  Consultation Request Received!
                </h4>
                <p className="text-xs text-[#A1A1AA] font-light max-w-md mx-auto">
                  Thank you! Ar. Aakhir Choudhary will reach out to you within 2 working hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
