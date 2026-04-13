"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./constants";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/egolia-logo.png"
            alt="Egolia Group"
            width={180}
            height={50}
            className="object-contain mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.hasDropdown ? handleMouseEnter(link.label) : undefined}
              onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
            >
              <Link
                href={link.href}
                className="text-[17px] text-navy font-semibold hover:text-orange transition-colors duration-200 flex items-center gap-1.5 py-2"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDropdown === link.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {link.hasDropdown && link.children && (
                <AnimatePresence>
                  {openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-navy/5 w-[220px] py-2 z-50"
                    >
                      {link.children.map((child: { label: string; href: string; logo?: string }) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-3 px-5 py-2.5 text-[15px] text-navy/70 font-medium hover:text-orange hover:bg-gray-light transition-all duration-200"
                        >
                          {child.logo ? (
                            <Image
                              src={child.logo}
                              alt={child.label}
                              width={120}
                              height={30}
                              className="object-contain max-h-[30px] w-auto"
                            />
                          ) : (
                            child.label
                          )}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-navy/5"
          >
            <div className="max-w-[1320px] mx-auto px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-2 text-base text-navy font-semibold hover:text-orange transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-1.5 text-sm text-navy/60 hover:text-orange transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
