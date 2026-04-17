"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal, { type TeamMemberDetail } from "./MemberModal";

const boardRow1: TeamMemberDetail[] = [
  {
    name: "Samuel Babarinde",
    role: "Founder & Chairman",
    fullTitle: "Founder & Chairman Of The Board",
    image: "/images/Board Member/samuel.png",
    bio: "Real estate executive and entrepreneur with more than 15 years of development experience across Ontario and Michigan. As Chairman of Egolia Group, he leads the organization's technology and infrastructure strategy.",
    experience: [
      "Since founding the company in 2016, he has overseen the growth of a development portfolio comprising more than 7,000 units and a pipeline valued at over $5 billion.",
      "Leads the organization's technology and infrastructure strategy, with a focus on building institutional-grade systems that integrate compliance, asset governance, and digital market infrastructure for real-world assets.",
      "Recognized for combining development expertise with a forward-looking approach to financial and digital infrastructure, positioning the organization for long-term growth and market leadership.",
    ],
  },
  {
    name: "Ravi Thakur",
    role: "Founder & Vice Chairman",
    fullTitle: "Founder & Vice Chairman, Acting CEO",
    image: "/images/Board Member/raviheadshot512.512.png",
    bio: "Senior executive with more than 30 years of leadership experience across real estate development, project management, business development, and investment strategy.",
    experience: [
      "As Vice Chairman and Acting CEO of Egolia Group, and a partner at AvranceCorp Developments, he brings expertise in structuring large-scale development opportunities and cultivating strategic capital relationships.",
      "Advances projects across residential, mixed-use, and investment asset classes with a strong cross-sector network spanning private equity, banking, brokerage, development, and international investors.",
      "Trusted advisor to partners, investors, and executive teams navigating complex transactions and expansion initiatives, recognized for his ability to align execution, capital, and growth strategy.",
    ],
  },
  {
    name: "Michael Spencley",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/Michael Spencley Head Shot.jpg",
    bio: "Senior executive with more than 30 years of CEO experience providing fiscal, strategic, and operational leadership across small, medium, and large organizations, including both turnaround and start-up environments.",
    experience: [
      "Dynamic, results-oriented leader who has consistently translated complex challenges into clear, actionable solutions that drive organizational improvement and long-term value creation.",
      "Leadership style combines accountability, team development, and execution, enabling management teams to achieve high performance and implement best practices across the organization.",
      "Board-level experience with both private and public companies. Expertise includes strategy, finance, budgeting, profit management, sales and marketing leadership, corporate development, strategic alliances, governance, contract negotiations, regulatory relations, and performance improvement.",
    ],
  },
  {
    name: "Tihomir Bajic",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/tihomir.png",
    bio: "Repeat entrepreneur and investor. Co-founded the Long-Term Stock Exchange (LTSE) alongside Eric Ries.",
    experience: [
      "Led the buildout of the complete technology stack powering an SEC-regulated national securities exchange from the ground up.",
      "Early engineer and later CTO across multiple ventures that went public or were acquired by publicly traded companies, with deep expertise in regulated financial market infrastructure.",
      "Managing Partner of the X& family of funds, focusing on early-stage deep tech investments and bringing hands-on experience in enterprise-scale platforms and compliance-heavy technology systems.",
    ],
  },
];

const boardRow2: TeamMemberDetail[] = [
  {
    name: "Larry D. Hayes",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/lary D. Hayes.JPG",
    bio: "Senior executive with more than 25 years of leadership experience across credit unions, CUSOs, and fintech organizations.",
    experience: [
      "Served as CEO, COO, President, and Executive Consultant, bringing expertise in financial turnaround, strategic planning, governance, ALM, digital transformation, and member experience.",
      "Strong track record in restoring profitability, strengthening balance sheets, modernizing operations, and guiding institutions through periods of change and growth.",
      "Recognized for his ability to combine financial discipline with strategic clarity and people-focused leadership. Trusted advisor to boards, executives, and financial organizations navigating transformation.",
    ],
  },
  {
    name: "Christopher Williams",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/Williams Chris_01388.JPG",
    bio: "Senior real estate investment executive and board leader with nearly 40 years of experience across multifamily, student, and military housing.",
    experience: [
      "Led large-scale investment, operating, and infrastructure strategies for residential portfolios valued at more than $15 billion and comprising over 100,000 units nationwide.",
      "Partner at ApexOne Investment Partners focusing on investment strategy, capital formation, acquisitions, and portfolio management. Former President of Balfour Beatty Investments' residential business overseeing military, student, and multifamily communities.",
      "Recognized for leadership in public-private partnerships, infrastructure investment, and governance. Trusted advisor to boards, institutional partners, and government stakeholders.",
    ],
  },
  {
    name: "Neil Wolfson",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/neil wolfson headshot 3.jpg",
    bio: "Senior investment executive and board leader with deep experience across fintech, asset management, governance, and family office investing.",
    experience: [
      "Served on boards and committees of numerous public and private fintech companies including OnDeck, ExcelFin, SALT Blockchain, IOU Financial, Audibly, Nextivity, UPTIQ, and Finitive, guiding organizations through growth, strategic transactions, and successful exits.",
      "Former President and CIO of SF Capital Group overseeing a billion-dollar multi-generational family office. Former CIO and President of Wilmington Trust Investment Management ($40B AUM), and President, CEO, and Chairman of the Wilmington Funds ($10B). Began career as Partner at KPMG LLP.",
      "CFA charterholder with MBA in Finance from NYU Stern. Adjunct Professor at Rutgers Graduate Business School. Widely recognized market commentator with 100+ appearances on CNBC and Bloomberg Television.",
    ],
  },
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
            className="text-center text-3xl md:text-4xl font-light text-navy mb-4"
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
