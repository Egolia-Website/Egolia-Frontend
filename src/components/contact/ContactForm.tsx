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
    <section className="bg-[#f5f5f7] py-16 md:py-24">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            className="text-orange text-[14px] font-bold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.p>
          <motion.h1
            className="text-[2.2rem] sm:text-[3rem] lg:text-[3.8rem] font-bold text-[#0F1C3F] leading-[1.08] tracking-[-0.03em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let&apos;s Build Something <span className="text-orange">Together.</span>
          </motion.h1>
        </div>

        {/* Single card */}
        <motion.div
          className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.09)] flex flex-col lg:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >

          {/* LEFT — Map */}
          <div className="w-full lg:w-[48%] min-h-[240px] sm:min-h-[320px] lg:min-h-[700px] flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.6371!3d43.6319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4301bde93a67%3A0x4c7f0b2c6e1c5a1!2s2810%20Matheson%20Blvd%20E%2C%20Mississauga%2C%20ON%20L4W%204X7!5e0!3m2!1sen!2sca!4v1713000000001!5m2!1sen!2sca"
              width="100%"
              height="100%"
              className="w-full h-full min-h-[240px] sm:min-h-[320px] lg:min-h-[700px]"
              style={{ border: 0, display: "block", filter: "grayscale(10%) contrast(1.02)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* RIGHT — Form + Location */}
          <div className="w-full lg:w-[52%] flex flex-col">

            {/* Form */}
            <div className="flex-1 p-7 sm:p-10">
              <p className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-1.5">Send A Message</p>
              <h2 className="text-[#1d1d1f] text-[1.6rem] font-bold tracking-[-0.025em] leading-[1.1] mb-7">Get In Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-1.5 block">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Smith"
                      className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-4 py-3 text-[14px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40 ${errors.name ? "border-red-400" : "border-[#e8e8ed]"}`}
                    />
                    {errors.name && <p className="text-red-500 text-[11px] mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@domain.com"
                      className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-4 py-3 text-[14px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40 ${errors.email ? "border-red-400" : "border-[#e8e8ed]"}`}
                    />
                    {errors.email && <p className="text-red-500 text-[11px] mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-1.5 block">
                    Phone <span className="text-[#6e6e73]/50 normal-case tracking-normal font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (000) 000-0000"
                    className="w-full bg-[#f5f5f7] border border-[#e8e8ed] rounded-xl text-[#1d1d1f] px-4 py-3 text-[14px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/40"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#6e6e73] mb-1.5 block">Message</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your inquiry…"
                    className={`w-full bg-[#f5f5f7] border rounded-xl text-[#1d1d1f] px-4 py-3 text-[14px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 resize-none placeholder:text-[#6e6e73]/40 ${errors.message ? "border-red-400" : "border-[#e8e8ed]"}`}
                  />
                  {errors.message && <p className="text-red-500 text-[11px] mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full inline-flex items-center justify-center gap-3 bg-orange hover:bg-[#d4691e] text-white text-[14px] font-bold py-3.5 rounded-xl transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
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
                      className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 text-[13px] font-medium px-4 py-3.5 rounded-xl"
                    >
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Message sent! We&apos;ll get back to you shortly.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>

            {/* Location — pinned bottom */}
            <div className="bg-[#0F1C3F] px-7 sm:px-10 py-6 flex flex-col sm:flex-row gap-6">

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-orange" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-[13px] font-bold mb-1">Address</p>
                  <p className="text-white/50 text-[12px] leading-[1.6]">2810 Matheson Blvd E, Mississauga, ON, L4W 4X7</p>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-orange" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-[13px] font-bold mb-1">Phone</p>
                  <a href="tel:4166500192" className="text-white/50 text-[12px] hover:text-orange transition-colors duration-300">+1 (416) 650-0192</a>
                </div>
              </div>

              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-orange" strokeWidth={1.6} />
                </div>
                <div className="min-w-0">
                  <p className="text-white text-[13px] font-bold mb-1">Email</p>
                  <a href="mailto:info@avrancecorp.com" className="text-white/50 text-[12px] hover:text-orange transition-colors duration-300 break-words">info@avrancecorp.com</a>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
