"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const subjects = ["General Inquiry", "Investor", "Marketplace", "Developer"];

export default function ContactForm() {
  const [selectedSubject, setSelectedSubject] = useState("");

  return (
    <section className="bg-navy-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left - Contact info */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Contact Information
              </h1>
              <p className="text-white/55 text-xl leading-[1.7] mb-12 font-semibold">
                Reach out to our team for inquiries, partnerships, or investment opportunities.
              </p>

              {/* Contact details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-white/60">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-base">+012 3456 789</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-white/60">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-base">info@avrancecorp.com</span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center text-white/60 mt-0.5">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-white/70 text-base leading-relaxed">
                    2450 Matheson Blvd E, Mississauga, ON
                    <br />
                    L4W 4E7
                  </span>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-5 mt-12">
                <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                </Link>
                <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </Link>
                <Link href="#" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </Link>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/5 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-white/5 rounded-full" />
          </motion.div>

          {/* Right - Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-white/40 text-sm mb-2 block font-semibold">First Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-base font-semibold focus:border-orange outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block font-semibold">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-base font-semibold focus:border-orange outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-white/40 text-sm mb-2 block font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-base font-semibold focus:border-orange outline-none transition-colors"
                />
              </div>
              <div>
                <label className="text-white/40 text-sm mb-2 block font-semibold">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-white/20 text-white py-3 text-base font-semibold focus:border-orange outline-none transition-colors"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-white/40 text-sm mb-4 block font-semibold">Select Subject?</label>
              <div className="flex flex-wrap gap-4">
                {subjects.map((subject) => (
                  <label key={subject} className="flex items-center gap-2 cursor-pointer group">
                    <div
                      className={`w-4 h-4 border-2 flex items-center justify-center transition-colors ${
                        selectedSubject === subject
                          ? "border-orange bg-orange"
                          : "border-white/30 group-hover:border-white/50"
                      }`}
                    >
                      {selectedSubject === subject && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        selectedSubject === subject ? "text-white" : "text-white/50 group-hover:text-white/70"
                      }`}
                      onClick={() => setSelectedSubject(subject)}
                    >
                      {subject}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-white/40 text-sm mb-2 block font-semibold">Message</label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-transparent border-b border-white/20 text-white py-3 text-base font-semibold focus:border-orange outline-none transition-colors resize-none placeholder:text-white/20"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-navy px-8 py-3 text-base font-bold hover:bg-orange hover:text-white transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
