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
    bio: "Real estate executive and entrepreneur with 15+ years of development experience across Ontario and Michigan.",
    experience: [
      "Real Estate Expertise — 15+ years real estate development experience across Ontario and Michigan.",
      "Founder & Visionary — Founded AvranceCorp Developments in 2016, TradeREA Technology in 2025, and the parent company Egolia Group in 2025, growing the real estate portfolio to 7,000+ units and a $5B+ pipeline.",
      "Technology & Infrastructure — Leads technology and infrastructure strategy integrating compliance and asset governance.",
      "Market Leader — Recognized for positioning the organization for sustained growth and market leadership.",
    ],
  },
  {
    name: "Ravi Thakur",
    role: "Vice Chairman",
    fullTitle: "Vice Chairman",
    image: "/images/Board Member/ravi-thakur.png",
    bio: "30+ years of leadership across real estate development, project management, and investment strategy with a proven track record of driving growth and value creation.",
    experience: [
      "Leadership Experience — 30+ years of leadership across real estate development, project management, and investment strategy with a proven track record of driving growth and value creation.",
      "Current Role — Vice Chairman and partner at AvranceCorp Developments, leading strategic initiatives and driving organizational vision at the highest level.",
      "Core Expertise — Specializes in structuring large-scale development opportunities and cultivating capital relationships to unlock transformative investment opportunities.",
      "Network Strength — Maintains a strong cross-sector network spanning private equity, banking, and international investors, facilitating strategic partnerships and growth initiatives.",
    ],
  },
  {
    name: "Michael Spencley",
    role: "Director",
    fullTitle: "Chief Executive Officer & Board Director",
    image: "/images/Board Member/michael_spencley.png",
    bio: "30+ years of CEO experience across turnaround and start-up environments, driving transformational growth and operational excellence.",
    experience: [
      "CEO Experience — 30+ years of CEO experience across turnaround and start-up environments, driving transformational growth and operational excellence.",
      "Dynamic Leader — Results-oriented leader with a proven track record of improving organizational performance and delivering sustainable value creation.",
      "Board Expertise — Extensive board-level experience with both private and public companies, navigating complex governance and strategic challenges.",
      "Core Competencies — Deep expertise in strategy development, financial management, profit optimization, and robust corporate governance frameworks.",
    ],
  },
  {
    name: "Sergio DiNicola",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/sergio.png",
    bio: "Co-founder of Eringate Homes with over two decades of expertise in residential development across Ontario.",
    experience: [
      "Co-founded Eringate Homes in 2016, delivering state-of-the-art residential developments across major Ontario urban growth areas including Georgetown, Mississauga, Aurora, and Peterborough.",
      "Oversaw a portfolio of featured projects generating combined revenues exceeding $170 million, including Heights of Trafalgar, The Grand Chateaus, Burnham Meadows, and Ravines of Olde Meadowvale.",
      "Recognized for integrating land use planning, construction, design, and financing into a cohesive boutique development model focused on quality, sustainability, and exceptional client service.",
    ],
  },
  {
    name: "Tihomir Bajić",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/thiromics.png",
    bio: "Repeat entrepreneur and investor who builds and scales transformative ventures with a proven track record of creating significant market impact through strategic vision and execution excellence.",
    experience: [
      "Repeat Entrepreneur & Investor — Builds and scales transformative ventures with a proven track record of creating significant market impact through strategic vision and execution excellence.",
      "Co-Founder, Long-Term Stock Exchange (LTSE) — Co-founded LTSE alongside Eric Ries and led the buildout of the complete technology stack powering an SEC-regulated national securities exchange from the ground up.",
      "Technology & Infrastructure Leader — Early engineer and later CTO across multiple ventures that went public or were acquired by publicly traded companies, with deep expertise in regulated financial market infrastructure.",
      "VC Investor & Deep Tech Specialist — Managing Partner of the X& family of funds, focusing on early-stage deep tech investments and bringing hands-on experience in enterprise-scale platforms and compliance-heavy technology systems.",
    ],
  },
  {
    name: "Larry D. Hayes",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/larry-hayes.png",
    bio: "Senior executive with 25+ years of leadership across credit unions, CUSOs, and fintech organizations.",
    experience: [
      "Leadership Experience — 25+ years of leadership across credit unions, CUSOs, and fintech organizations.",
      "Executive Roles — Served as CEO, COO, President, and Executive Consultant.",
      "Core Expertise — Financial turnaround, strategic planning, governance, and digital transformation.",
      "Track Record — Strong track record restoring profitability and strengthening balance sheets.",
    ],
  },
  {
    name: "Christopher Williams",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/christopher-williams.png",
    bio: "Senior real estate investment executive with nearly 40 years of experience across multifamily, student, and military housing investment.",
    experience: [
      "Industry Experience — Nearly 40 years of experience across multifamily, student, and military housing investment.",
      "Portfolio Leadership — Led investment, operating, and infrastructure strategies for residential portfolios valued at $15B+ comprising 100,000+ units nationwide.",
      "Current Position — Partner at ApexOne Investment Partners; former President of Balfour Beatty Investments.",
      "Industry Recognition — Recognized leader in public-private partnerships and infrastructure investment.",
    ],
  },
  {
    name: "Neil Wolfson",
    role: "Director",
    fullTitle: "Board Of Director",
    image: "/images/Board Member/neil-wolfson.png",
    bio: "Senior investment executive with deep expertise in fintech, asset management, and family office operations with a proven track record in building and scaling financial institutions.",
    experience: [
      "Senior Investment Executive — Deep expertise in fintech, asset management, and family office operations with a proven track record in building and scaling financial institutions.",
      "Multiple Board Positions — Board member of OnDeck, ExcelFin, SALT Blockchain, IOU Financial, and other prominent fintech companies, driving strategic growth and innovation.",
      "Established Leadership — Former President and CIO of SF Capital Group overseeing a billion-dollar family office and Wilmington Trust Investment Management with $40B in assets under management.",
      "Recognized Expert — CFA charterholder with MBA in Finance from NYU Stern; featured in 100+ appearances on CNBC and Bloomberg discussing financial markets and investment strategies.",
    ],
  },
];

function BoardCard({ member, i, onClick }: { member: TeamMemberDetail; i: number; onClick: () => void }) {
  return (
    <motion.div
      className="bg-[#f5f5f7] rounded-2xl border border-[#1d1d1f]/[0.06] p-8 flex flex-col items-center text-center cursor-pointer group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-orange/20 transition-[box-shadow,border-color] duration-300"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      onClick={onClick}
    >
      {/* Circle photo */}
      <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[140px] md:h-[140px] rounded-full overflow-hidden mb-5 bg-[#eaeaed] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
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
      <p className="text-[#6e6e73] text-[14px] font-normal leading-[1.65] mb-5">{member.bio}</p>

      {/* Divider + icons */}
      <div className="mt-auto w-full border-t border-[#1d1d1f]/[0.06] pt-4 flex items-center justify-center gap-4">
        <span className="text-[#6e6e73]/40 hover:text-orange transition-colors duration-200" onClick={(e) => e.stopPropagation()}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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

          {/* 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {boardMembers.map((member, i) => (
              <BoardCard key={member.name} member={member} i={i} onClick={() => setSelected(member)} />
            ))}
          </div>

        </div>
      </section>

      <MemberModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
