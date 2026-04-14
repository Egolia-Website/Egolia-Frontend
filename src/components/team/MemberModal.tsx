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
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative bg-navy-dark w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-5 sm:p-8 md:p-10">
              {/* Top: Image + Name */}
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="relative w-36 h-44 sm:w-40 sm:h-52 flex-shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="160px"
                  />
                </div>

                <div>
                  <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold">{member.name}</h2>
                  <p className="text-white/70 text-sm sm:text-base font-semibold mt-1">{member.fullTitle}</p>

                  <p className="text-white/70 text-sm sm:text-base leading-[1.7] mt-4 sm:mt-6 italic">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="mt-10">
                <h3 className="text-white text-xl font-bold mb-5">Experience</h3>
                <ul className="space-y-3">
                  {member.experience.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/70 text-base leading-[1.6] font-medium">
                      <span className="text-orange mt-1 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: Name + Social */}
              <div className="mt-8 sm:mt-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white text-lg font-bold">{member.name}</p>
                  <p className="text-orange text-sm font-bold">{member.role}</p>
                </div>
                <div className="flex gap-4">
                  <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                  </Link>
                  <Link href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
