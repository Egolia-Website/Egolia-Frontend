"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#f5f5f7] border-t border-[#0F1C3F]/[0.06]">

      {/* ── Main footer grid ── */}
      <div className="max-w-[1280px] mx-auto px-8 lg:px-14 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Col 1 — Brand */}
        <div>
          <Image
            src="/images/egolia-logo.png"
            alt="Egolia Group"
            width={160}
            height={50}
            className="object-contain mix-blend-multiply mb-5 w-[140px]"
          />
          <p className="text-[#6e6e73] text-[14px] leading-[1.75] mb-7">
            &copy; {new Date().getFullYear()} Egolia Group.<br />
            Building long-term value.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "Twitter",
                href: "#",
                svg: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "#",
                svg: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                href: "#",
                svg: (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
              },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="text-[#0F1C3F]/35 hover:text-orange transition-colors duration-200"
              >
                {s.svg}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 2 — Get in Touch */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[15px] mb-6">Get in Touch</p>
          <div className="space-y-2 text-[#6e6e73] text-[14px] leading-[1.75] mb-5">
            <p>Toronto, Ontario,</p>
            <p>Canada</p>
          </div>
          <a
            href="mailto:info@avrancecorp.com"
            className="block text-[#6e6e73] text-[14px] hover:text-orange transition-colors duration-200 mb-1"
          >
            info@avrancecorp.com
          </a>
        </div>

        {/* Col 3 — Platform */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[15px] mb-6">Our Platform</p>
          <ul className="space-y-3.5">
            {[
              { label: "AvranceCorp", href: "/platform/avrancecorp" },
              { label: "Avrance Capital", href: "/platform/avrancecapital" },
              { label: "Metadata & Research", href: "/platform/metadata" },
              { label: "TradeREA", href: "/platform/traderea" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[#6e6e73] text-[14px] hover:text-orange transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <p className="text-[#0F1C3F] font-semibold text-[15px] mb-3">Our Newsletter</p>
          <p className="text-[#6e6e73] text-[14px] leading-[1.75] mb-6">
            Subscribe to our newsletter to get our latest insights and updates delivered to you.
          </p>
          <div className="flex items-center gap-0 border border-[#0F1C3F]/15 rounded-lg overflow-hidden focus-within:border-orange transition-colors duration-200">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-4 py-3 text-[14px] text-[#0F1C3F] placeholder-[#6e6e73]/60 bg-white outline-none"
            />
            <button
              className="bg-[#0F1C3F] hover:bg-[#1A2B5C] text-white text-[13px] font-semibold px-5 py-3 transition-colors duration-300"
            >
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
        <div className="flex items-center gap-1.5">
          <div className="w-8 h-[1.5px] rounded-full" style={{ background: "linear-gradient(to right, #E8792B, #0F1C3F)" }} />
        </div>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <Link key={item} href="#" className="text-[#6e6e73] text-[13px] hover:text-orange transition-colors duration-200">
              {item}
            </Link>
          ))}
        </div>
      </div>

    </footer>
  );
}
