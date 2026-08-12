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
                Visit our experience center in Mumbai or schedule a free site consultation with principal designer Akhir Chaudhary.
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

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-white">Phone &amp; WhatsApp</p>
                  <a href="tel:+919664384181" className="text-[#FCF6BA] text-xs hover:underline font-medium">
                    +91 96643 84181
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1C1C1C] text-[#D4AF37] shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-white">Email</p>
                  <a href="mailto:info@bombaystudio.in" className="text-[#FCF6BA] text-xs hover:underline font-medium">
                    info@bombaystudio.in
                  </a>
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
              Fill out the form below and Akhir Chaudhary will reach out within 2 working hours.
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
                  Thank you! Akhir Chaudhary will reach out to you within 2 working hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
