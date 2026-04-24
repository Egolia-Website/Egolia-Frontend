"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export interface TeamMemberDetail {
  name: string;
  role: string;
  fullTitle: string;
  image: string;
  bio: string;
  experience: string[];
}

interface MemberModalProps {
  member: TeamMemberDetail | null;
  onClose: () => void;
}

export default function MemberModal({ member, onClose }: MemberModalProps) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-[#0F1C3F]/60 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-white w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl shadow-[0_32px_80px_rgba(15,28,63,0.18)]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f7] text-[#6e6e73] hover:bg-[#e8e8ed] hover:text-[#1d1d1f] transition-all duration-200 z-10"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-7 sm:p-10">
              {/* Top: photo + name */}
              <div className="flex flex-col sm:flex-row gap-7 items-start mb-8">
                <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0 rounded-full overflow-hidden ring-2 ring-orange/20 bg-[#e8e8ed]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>

                <div className="pt-1">
                  <h2 className="text-[#1d1d1f] text-2xl sm:text-3xl font-bold tracking-[-0.01em]">
                    {member.name}
                  </h2>
                  <p className="text-orange text-[14px] font-semibold mt-1">{member.fullTitle}</p>

                  <p className="text-[#6e6e73] text-[14px] leading-[1.7] mt-4 max-w-md">
                    {member.bio}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 mt-5 text-[13px] font-medium text-[#0F1C3F] hover:text-orange transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn Profile
                  </Link>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#1d1d1f]/[0.07] mb-8" />

              {/* Experience */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-orange mb-5">
                  Experience
                </p>
                <ul className="space-y-5">
                  {member.experience.map((item, i) => {
                    const [heading, ...rest] = item.split(" — ");
                    const description = rest.join(" — ");
                    return (
                      <li key={i} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0 mt-[6px]" />
                        <div>
                          <p className="text-[#0F1C3F] text-[15px] font-semibold leading-snug mb-1">{heading}</p>
                          {description && (
                            <p className="text-[#6e6e73] text-[13px] leading-[1.65]">{description}</p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
