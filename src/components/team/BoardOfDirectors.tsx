"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal, { type TeamMemberDetail } from "./MemberModal";

const boardRow1: TeamMemberDetail[] = [
  { name: "Samuel Babarinde", role: "Chairman", fullTitle: "Chairman Of The Board", image: "/images/Board Member/sam.png", bio: "15+ years real estate development experience across Ontario and Michigan. Founder of AvranceCorp, TradeREA, and Egolia Group.", experience: ["Grew real estate portfolio to 7,000+ units and $5B+ pipeline.", "Leads technology and infrastructure strategy integrating compliance and asset governance."] },
  { name: "Ravi Thakur", role: "Vice Chairman", fullTitle: "Vice Chairman Of The Board", image: "/images/Board Member/ravi.png", bio: "30+ years of leadership across real estate development, project management, and investment strategy.", experience: ["Vice Chairman and partner at AvranceCorp Developments.", "Specializes in structuring large-scale development opportunities and cultivating capital relationships."] },
  { name: "Michael Spencley", role: "Board Member", fullTitle: "Board Of Directors", image: "/images/Board Member/michael spencley.png", bio: "30+ years of CEO experience across turnaround and start-up environments, driving transformational growth and operational excellence.", experience: ["Extensive board-level experience with both private and public companies.", "Deep expertise in strategy development, financial management, and corporate governance."] },
  { name: "Tihomir Bajic", role: "Board Member", fullTitle: "Board Of Directors", image: "/images/Board Member/tihomir.png", bio: "Repeat entrepreneur and investor. Co-founded the Long-Term Stock Exchange (LTSE) alongside Eric Ries.", experience: ["Led the buildout of the complete technology stack powering an SEC-regulated national securities exchange.", "Managing Partner of the X& family of funds, focusing on early-stage deep tech investments."] },
];

const boardRow2: TeamMemberDetail[] = [
  { name: "Larry D. Hayes", role: "Board Member", fullTitle: "Board Of Directors", image: "/images/Board Member/larry.png", bio: "25+ years leadership across credit unions, CUSOs, and fintech organizations.", experience: ["Served as CEO, COO, President, and Executive Consultant.", "Expert in financial turnaround, strategic planning, governance, and digital transformation."] },
  { name: "Christopher Williams", role: "Board Member", fullTitle: "Board Of Directors", image: "/images/Board Member/christopher.png", bio: "Nearly 40 years experience across multifamily, student, and military housing investment.", experience: ["Led strategies for residential portfolios valued at $15B+ comprising 100,000+ units.", "Partner at ApexOne Investment Partners; former President of Balfour Beatty Investments."] },
  { name: "Neil Wolfson", role: "Board Member", fullTitle: "Board Of Directors", image: "/images/Board Member/neil.png", bio: "Deep expertise in fintech, asset management, and family office operations with proven track record in building and scaling financial institutions.", experience: ["Former President and CIO of SF Capital Group overseeing a billion-dollar family office.", "CFA charter holder with MBA in Finance from NYU Stern; 100+ appearances on CNBC and Bloomberg."] },
];

function SocialIcons() {
  return (
    <div className="flex gap-3">
      <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook" onClick={(e) => e.stopPropagation()}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
      </Link>
      <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="GitHub" onClick={(e) => e.stopPropagation()}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
      </Link>
      <Link href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn" onClick={(e) => e.stopPropagation()}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
      </Link>
    </div>
  );
}

function BoardCard({ member, i, tall = false, onClick }: { member: TeamMemberDetail; i: number; tall?: boolean; onClick: () => void }) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-gray-200 ${tall ? "aspect-[2/3]" : "aspect-[3/4]"}`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
      onClick={onClick}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
        sizes="25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
        <h3 className="text-white text-sm sm:text-lg font-bold">{member.name}</h3>
        <p className="text-orange text-xs sm:text-sm font-bold">{member.role}</p>
        <div className="mt-2 sm:mt-3 hidden sm:block">
          <SocialIcons />
        </div>
      </div>
    </motion.div>
  );
}

export default function BoardOfDirectors() {
  const [selected, setSelected] = useState<TeamMemberDetail | null>(null);

  return (
    <>
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">
          <motion.h2
            className="text-center text-3xl md:text-4xl font-light text-navy italic mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Board Of Directors
          </motion.h2>

          <motion.div
            className="w-12 h-[2px] bg-orange mx-auto mb-16"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-10">
            {boardRow1.map((member, i) => (
              <BoardCard key={member.name} member={member} i={i} onClick={() => setSelected(member)} />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto">
            {boardRow2.map((member, i) => (
              <BoardCard key={member.name} member={member} i={i} tall onClick={() => setSelected(member)} />
            ))}
          </div>
        </div>
      </section>

      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
