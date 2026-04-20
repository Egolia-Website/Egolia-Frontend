"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="bg-[#f5f5f7]">

      {/* ── Map + Form row ── */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* Left — Two maps stacked */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[64%] flex flex-col min-h-[320px] lg:min-h-0"
        >
          {/* North York */}
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.0!2d-79.4822!3d43.7615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fec077e7b53%3A0x2f36e50479fb70a2!2s4205%20Keele%20St%2C%20North%20York%2C%20ON%20M3J%203T8!5e0!3m2!1sen!2sca!4v1713000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(25%) saturate(0.85) contrast(1.04)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[12px] font-semibold text-[#1d1d1f] shadow-[0_4px_16px_rgba(0,0,0,0.1)] pointer-events-none flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-orange inline-block" />
              Canada Head Office
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-[3px] bg-[#f5f5f7]" />

          {/* Mississauga */}
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              initial={{ scale: 1.06 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0!2d-79.6371!3d43.6319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b4301bde93a67%3A0x4c7f0b2c6e1c5a1!2s2810%20Matheson%20Blvd%20E%2C%20Mississauga%2C%20ON%20L4W%204X7!5e0!3m2!1sen!2sca!4v1713000000001!5m2!1sen!2sca"
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "grayscale(25%) saturate(0.85) contrast(1.04)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl text-[12px] font-semibold text-[#1d1d1f] shadow-[0_4px_16px_rgba(0,0,0,0.1)] pointer-events-none flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#0F1C3F] inline-block" />
              Mississauga Office
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[36%] bg-white px-8 sm:px-10 lg:px-12 pt-8 pb-12 flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[#1d1d1f]/[0.06]"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-3">Contact</p>
            <h2 className="text-[26px] font-bold text-[#1d1d1f] tracking-tight leading-[1.1] mb-1">Get In Touch</h2>
            <p className="text-[#6e6e73] text-[14px] mb-8">Fill out the form and we'll be in touch shortly.</p>
          </motion.div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {[
              {
                id: "name", label: "Name", type: "text", value: name, onChange: setName, placeholder: "Full Name",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />,
              },
              {
                id: "email", label: "Email", type: "email", value: email, onChange: setEmail, placeholder: "email@domain.com",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
              },
              {
                id: "phone", label: "Phone", type: "tel", value: phone, onChange: setPhone, placeholder: "+1 (000) 000-0000",
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />,
              },
            ].map((field, i) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6e6e73] mb-2.5 block">{field.label}</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6e6e73]/50">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">{field.icon}</svg>
                  </span>
                  <input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full bg-[#f5f5f7] border border-[#1d1d1f]/[0.07] rounded-xl text-[#1d1d1f] pl-11 pr-4 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 placeholder:text-[#6e6e73]/35"
                  />
                </div>
              </motion.div>
            ))}

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.74, ease: [0.16, 1, 0.3, 1] }}
            >
              <label className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#6e6e73] mb-2.5 block">Message</label>
              <div className="relative">
                <span className="absolute left-4 top-4 text-[#6e6e73]/50">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                </span>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here"
                  className="w-full bg-[#f5f5f7] border border-[#1d1d1f]/[0.07] rounded-xl text-[#1d1d1f] pl-11 pr-4 py-3.5 text-[15px] focus:border-orange focus:bg-white focus:outline-none focus:shadow-[0_0_0_3px_rgba(232,121,43,0.08)] transition-all duration-200 resize-none placeholder:text-[#6e6e73]/35"
                />
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[14px] font-semibold py-4 rounded-lg transition-colors duration-300 tracking-wide"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

      </div>

      {/* ── Offices strip ── */}
      <div className="border-t border-[#1d1d1f]/[0.08] bg-white px-6 lg:px-14 py-10 lg:py-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[11px] font-semibold tracking-[0.45em] uppercase text-[#6e6e73] mb-8"
        >
          Our Offices
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-[#1d1d1f]/[0.07]">
          {[
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              city: "North York, Canada", tag: "Head Office",
              address: "Unit 1-2, 4205 Keele Street\nNorth York, ON, M3J 3T8",
              phone: "+1 (416) 555-0192",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              ),
              city: "Mississauga, Canada",
              address: "2810 Matheson Blvd E\nMississauga, ON, L4W 4X7",
              phone: "+1 (416) 555-0192",
            },
            {
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              city: "General Inquiries",
              address: "info@avrancecorp.com",
              phone: "@EgoliaGroup",
              isContact: true,
            },
          ].map((office, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${i > 0 ? "lg:pl-12" : ""} ${i < 2 ? "lg:pr-12" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange/8 text-orange shrink-0 mt-0.5">
                  {office.icon}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-[15px] font-bold text-[#1d1d1f]">{office.city}</h3>
                    {office.tag && (
                      <span className="text-[10px] font-semibold tracking-wide uppercase bg-orange/10 text-orange px-2 py-0.5 rounded-full">
                        {office.tag}
                      </span>
                    )}
                  </div>
                  {office.isContact ? (
                    <div className="space-y-2">
                      <a href="mailto:info@avrancecorp.com" className="flex items-center gap-2 text-[#6e6e73] text-[14px] hover:text-orange transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {office.address}
                      </a>
                      <a href="#" className="flex items-center gap-2 text-[#6e6e73] text-[14px] hover:text-orange transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.06 2.25h6.638l4.262 5.632 5.284-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        {office.phone}
                      </a>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-[#6e6e73] text-[14px]">
                        <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="whitespace-pre-line leading-[1.65]">{office.address}</span>
                      </div>
                      <a href="tel:4165550192" className="flex items-center gap-2 text-[#6e6e73] text-[14px] hover:text-orange transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {office.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
