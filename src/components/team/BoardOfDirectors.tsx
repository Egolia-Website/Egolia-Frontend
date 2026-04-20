"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import MemberModal, { type TeamMemberDetail } from "./MemberModal";

const boardMembers: TeamMemberDetail[] = [
  {
    name: "Samuel Babarinde",
    role: "Founder & Chairman",
    fullTitle: "Founder & Chairman Of The Board",
    image: "/images/Board Member/samuel-babarinde.png",
    bio: "Real estate executive and entrepreneur with more than 15 years of development experience across Ontario and Michigan.",
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
    image: "/images/Board Member/ravi-thakur.png",
    bio: "Senior executive with more than 30 years of leadership experience across real estate development and investment strategy.",
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
    image: "/images/Board Member/michael-spencley.png",
    bio: "Senior executive with more than 30 years of CEO experience providing fiscal, strategic, and operational leadership.",
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
    image: "/images/Board Member/thiromics.png",
    bio: "Repeat entrepreneur and investor. Co-founded the Long-Term Stock Exchange (LTSE) alongside Eric Ries.",
    experience: [
      "Led the buildout of the complete technology stack powering an SEC-regulated national securities exchange from the ground up.",
      "Early engineer and later CTO across multiple ventures that went public or were acquired by publicly traded companies, with deep expertise in regulated financial market infrastructure.",
      "Managing Partner of the X& family of funds, focusing on early-stage deep tech investments and bringing hands-on experience in enterprise-scale platforms and compliance-heavy technology systems.",
    ],
  },
  {
    name: "Larry D. Hayes",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/larry-hayes.png",
    bio: "Senior executive with more than 25 years of leadership experience across credit unions, CUSOs, and fintech.",
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
    image: "/images/Board Member/christopher-williams.png",
    bio: "Senior real estate investment executive with nearly 40 years of experience across multifamily and military housing.",
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
    image: "/images/Board Member/neil-wolfson.png",
    bio: "Senior investment executive with deep experience across fintech, asset management, and family office investing.",
    experience: [
      "Served on boards and committees of numerous public and private fintech companies including OnDeck, ExcelFin, SALT Blockchain, IOU Financial, Audibly, Nextivity, UPTIQ, and Finitive, guiding organizations through growth, strategic transactions, and successful exits.",
      "Former President and CIO of SF Capital Group overseeing a billion-dollar multi-generational family office. Former CIO and President of Wilmington Trust Investment Management ($40B AUM), and President, CEO, and Chairman of the Wilmington Funds ($10B). Began career as Partner at KPMG LLP.",
      "CFA charterholder with MBA in Finance from NYU Stern. Adjunct Professor at Rutgers Graduate Business School. Widely recognized market commentator with 100+ appearances on CNBC and Bloomberg Television.",
    ],
  },
];

function BoardCard({ member, i, onClick }: { member: TeamMemberDetail; i: number; onClick: () => void }) {
  return (
    <motion.div
      className="bg-[#f5f5f7] rounded-2xl border border-[#1d1d1f]/[0.06] p-8 flex flex-col items-center text-center cursor-pointer group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange/20 transition-all duration-300"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.06 * i }}
      onClick={onClick}
    >
      {/* Circle photo */}
      <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden mb-5 bg-[#eaeaed] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-500"
          sizes="140px"
        />
      </div>

      {/* Name */}
      <h3 className="text-[#1d1d1f] text-[18px] font-bold leading-snug">{member.name}</h3>

      {/* Role */}
      <p className="text-orange text-[14px] font-semibold mt-1 mb-3">{member.role}</p>

      {/* Bio */}
      <p className="text-[#6e6e73] text-[14px] leading-[1.65] mb-5">{member.bio}</p>

      {/* Divider + icons */}
      <div className="mt-auto w-full border-t border-[#1d1d1f]/[0.06] pt-4 flex items-center justify-center gap-4">
        <span className="text-[#6e6e73]/40 hover:text-orange transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </span>
        <span className="text-[#6e6e73]/40 hover:text-orange transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}

export default function BoardOfDirectors() {
  const [selected, setSelected] = useState<TeamMemberDetail | null>(null);

  return (
    <>
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-12">

          {/* Section heading */}
          <motion.h2
            className="text-[#1d1d1f] text-2xl md:text-3xl font-bold tracking-[-0.01em] mb-2 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Board of Directors
          </motion.h2>
          <motion.div
            className="w-8 h-[3px] bg-orange mx-auto mb-10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* Row 1 — 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
            {boardMembers.slice(0, 3).map((member, i) => (
              <BoardCard key={member.name} member={member} i={i} onClick={() => setSelected(member)} />
            ))}
          </div>

          {/* Row 2 — 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {boardMembers.slice(3).map((member, i) => (
              <BoardCard key={member.name} member={member} i={i + 3} onClick={() => setSelected(member)} />
            ))}
          </div>

        </div>
      </section>

      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
