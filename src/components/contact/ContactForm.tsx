"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Enter a valid email";
    if (!message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setName(""); setEmail(""); setPhone(""); setMessage("");
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  }

  return (
    <section className="bg-[#f5f5f7] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14">

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.p>
          <motion.h1
            className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s Build Something <span className="text-orange">Together.</span>
          </motion.h1>
        </div>

        {/* Map — full width within container */}
        <motion.div
          className="w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.1)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.6371!3d43.6319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4301bde93a67%3A0x4c7f0b2c6e1c5a1!2s2810%20Matheson%20Blvd%20E%2C%20Mississauga%2C%20ON%20L4W%204X7!5e0!3m2!1sen!2sca!4v1713000000001!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(10%) saturate(1) contrast(1.02)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Form + Location side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">

          {/* Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-2">Send A Message</p>
            <h2 className="text-[#1d1d1f] text-[1.8rem] font-bold tracking-[-0.025em] leading-[1.1] mb-8">Get In Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-2 block">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-5 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40 ${errors.name ? "border-red-400" : "border-[#e8e8ed]"}`}
                  />
                  {errors.name && <p className="text-red-500 text-[12px] mt-1.5">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-2 block">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-5 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40 ${errors.email ? "border-red-400" : "border-[#e8e8ed]"}`}
                  />
                  {errors.email && <p className="text-red-500 text-[12px] mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-2 block">
                  Phone <span className="text-[#6e6e73]/50 normal-case tracking-normal font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (000) 000-0000"
                  className="w-full bg-[#f5f5f7] border border-[#e8e8ed] rounded-xl text-[#1d1d1f] px-5 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40"
                />
              </div>

              <div>
                <label className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-2 block">Message</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your inquiry…"
                  className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-5 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 resize-none placeholder:text-[#6e6e73]/40 ${errors.message ? "border-red-400" : "border-[#e8e8ed]"}`}
                />
                {errors.message && <p className="text-red-500 text-[12px] mt-1.5">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group w-full inline-flex items-center justify-center gap-3 bg-orange hover:bg-[#d4691e] text-white text-[15px] font-bold py-4 rounded-xl transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending…" : "Send Message"}
                {!sending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />}
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 text-[14px] font-medium px-5 py-4 rounded-xl"
                  >
                    <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Message sent! We&apos;ll get back to you shortly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Our Location */}
          <motion.div
            className="bg-[#0F1C3F] rounded-3xl p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex flex-col"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-7">Our Location</p>

            <div className="space-y-0 divide-y divide-white/10 flex-1">
              <div className="flex items-start gap-4 pb-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <MapPin className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-white text-[14px] font-bold mb-1">Mississauga Office</p>
                  <p className="text-white/50 text-[14px] leading-[1.7]">2810 Matheson Blvd E<br />Mississauga, ON, L4W 4X7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <Phone className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-white text-[14px] font-bold mb-1">Phone</p>
                  <a href="tel:4166500192" className="text-white/50 text-[14px] hover:text-orange transition-colors duration-300">+1 (416) 650-0192</a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <Mail className="w-5 h-5" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-white text-[14px] font-bold mb-1">Email</p>
                  <a href="mailto:info@avrancecorp.com" className="text-white/50 text-[14px] hover:text-orange transition-colors duration-300">info@avrancecorp.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-6">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.06 2.25h6.638l4.262 5.632 5.284-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[14px] font-bold mb-1">Follow Us</p>
                  <a href="https://x.com/EgoliaGroup" target="_blank" rel="noopener noreferrer" className="text-white/50 text-[14px] hover:text-orange transition-colors duration-300">@EgoliaGroup</a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
