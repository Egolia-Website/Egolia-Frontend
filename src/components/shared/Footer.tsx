"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#0F1C3F]/[0.06]">

      {/* ── Main footer grid ── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-14 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-14">

        {/* Col 1 — Brand */}
        <div>
          <Image
            src="/images/egolia-logo.png"
            alt="Egolia Group"
            width={160}
            height={50}
            className="object-contain mix-blend-multiply mb-6 w-[150px]"
          />
          <p className="text-[#6e6e73] text-[15px] leading-[1.8] mb-8">
            &copy; {new Date().getFullYear()} Egolia Group.<br />
            Building long-term value.
          </p>
        </div>

        {/* Col 2 — Get in Touch */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[16px] mb-7">Get in Touch</p>
          <div className="space-y-1.5 text-[#6e6e73] text-[15px] leading-[1.8] mb-7">
            <p>Unit 800 – 2810 Matheson Blvd E</p>
            <p>Mississauga, ON, L4W 4X7</p>
            <p>Canada</p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:info@egolia.com"
              className="inline-flex items-center gap-2.5 text-[#0F1C3F] hover:text-orange transition-colors duration-300 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0F1C3F]/20 group-hover:border-orange group-hover:bg-orange/5 transition-colors duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span className="text-[14px] font-medium">info@egolia.com</span>
            </a>
            <Link
              href="#"
              aria-label="X"
              className="inline-flex items-center gap-2.5 text-[#0F1C3F] hover:text-orange transition-colors duration-300 group"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-[#0F1C3F]/20 group-hover:border-orange group-hover:bg-orange/5 transition-colors duration-300">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.06 2.25h6.638l4.262 5.632 5.284-5.632Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="text-[14px] font-medium">@EgoliaGroup</span>
            </Link>
          </div>
        </div>

        {/* Col 3 — Divisions */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[16px] mb-7">Our Divisions</p>
          <ul className="space-y-4">
            {[
              { label: "AvranceCorp Developments", href: "/platform/avrancecorp" },
              { label: "TradeREA Xchange Technology", href: "/platform/traderea" },
              { label: "Avrance Capital Management", href: "/platform/avrancecapital" },
              { label: "Meta Data Research", href: "/platform/metadata" },
              { label: "Egolia Mining", href: "/platform/avrancemining" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#6e6e73] text-[15px] hover:text-orange transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[16px] mb-3">Our Newsletter</p>
          <p className="text-[#6e6e73] text-[15px] leading-[1.8] mb-7">
            Subscribe to our newsletter to get our latest insights and updates delivered to you.
          </p>
          <div className="flex items-center border border-[#0F1C3F]/15 rounded-lg overflow-hidden focus-within:border-orange transition-colors duration-200">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-4 py-3.5 text-[15px] text-[#0F1C3F] placeholder-[#6e6e73]/60 bg-white outline-none"
            />
            <button className="bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[13px] font-semibold px-5 py-3.5 transition-colors duration-300">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-5 border-t border-[#0F1C3F]/[0.07] flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[#6e6e73] text-[13px]">
          &copy; {new Date().getFullYear()} Egolia Group. All rights reserved.
        </p>
<div className="flex gap-6">
          <Link href="/privacy" className="text-[#6e6e73] text-[13px] hover:text-orange transition-colors duration-200">Privacy Policy</Link>
          <Link href="/terms" className="text-[#6e6e73] text-[13px] hover:text-orange transition-colors duration-200">Terms of Use</Link>
        </div>
      </div>

    </footer>
  );
}
