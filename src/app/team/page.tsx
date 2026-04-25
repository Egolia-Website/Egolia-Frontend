"use client";

import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TeamHero from "@/components/team/TeamHero";
import BoardOfDirectors from "@/components/team/BoardOfDirectors";
import TeamSection from "@/components/team/TeamSection";

const executiveTeam = [
  {
    name: "Michael Spencley",
    role: "Chief Executive Officer",
    fullTitle: "Chief Executive Officer",
    image: "/images/Board Member/michael-spencley.png",
    bio: "30+ years of CEO experience across turnaround and start-up environments, driving transformational growth and operational excellence.",
    experience: [
      "CEO Experience — 30+ years of CEO experience across turnaround and start-up environments, driving transformational growth and operational excellence.",
      "Dynamic Leader — Results-oriented leader with a proven track record of improving organizational performance and delivering sustainable value creation.",
      "Board Expertise — Extensive board-level experience with both private and public companies, navigating complex governance and strategic challenges.",
      "Core Competencies — Deep expertise in strategy development, financial management, profit optimization, and robust corporate governance frameworks.",
    ],
  },
  {
    name: "Jason R. Macintosh",
    role: "Chief Financial Officer",
    fullTitle: "Chief Financial Officer",
    bio: "25+ years of leadership across public and private companies in exploration, development, and operating environments, bringing deep expertise in capital markets and financial management.",
    image: "/images/Board Member/jason-macintosh.png",
    experience: [
      "Financial Stewardship — 25+ years of leadership across public and private companies in exploration, development, and operating environments, bringing deep expertise in capital markets and financial management.",
      "Executive Leadership — Served as CFO, Corporate Secretary, and Interim CEO for TSX and TSXV-listed mining companies, demonstrating versatility and strategic acumen.",
      "Core Expertise — Capital markets, financial stewardship, governance, strategic execution, financing, M&A, continuous disclosure, and risk management.",
      "Trusted Advisor — Guides boards, investors, regulators, and government stakeholders through transformation and value-creation phases with integrity and accountability.",
    ],
  },
  {
    name: "Wole Olapoju",
    role: "Chief Technology Officer",
    fullTitle: "Chief Technology Officer",
    bio: "Technology leader driving Egolia Group's platform architecture, digital infrastructure, and operational systems.",
    image: "/images/Board Member/wole.png",
    experience: [
      "Technology Leadership — Senior executive with a proven track record in leading high-growth organizations across multiple sectors.",
      "Platform Architecture — Drives Egolia Group's platform architecture, digital infrastructure, and operational systems.",
      "Core Expertise — Deep expertise in capital allocation, organizational strategy, and cross-sector partnership development.",
      "Vision & Execution — Recognized for aligning vision with execution, building institutions positioned for long-term market leadership.",
    ],
  },
  {
    name: "Elaine Galley",
    role: "Chief Operating Officer",
    fullTitle: "Chief Operating Officer",
    bio: "20+ years driving brand growth and market positioning in Canada's competitive real estate sector with proven results.",
    image: "/images/Board Member/ellen.png",
    experience: [
      "Marketing Expertise — 20+ years driving brand growth and market positioning in Canada's competitive real estate sector with proven results.",
      "Leadership Track Record — Former Marketing Director for leading Canadian real estate company with proven ability to elevate developments and accelerate sales.",
      "Strategic Execution — Led high-impact marketing initiatives across residential and mixed-use developments, translating vision into measurable business outcomes.",
      "Core Competencies — Brand strategy, digital transformation, sales enablement, stakeholder engagement, and deep buyer behavior insights in evolving real estate landscape.",
    ],
  },
];

const advisoryTeam = [
  {
    name: "Eric Stevenson",
    role: "Senior Capital Markets Advisor",
    fullTitle: "Senior Capital Markets Advisor",
    bio: "Capital markets veteran with over 50 years of experience, having taken 76 companies public and raised more than $500 million throughout his career.",
    image: "/images/Board Member/Eric Stevenson.png",
    experience: [
      "Industry Recognition — Recognized by the Wall Street Journal as one of the top management analysts in the United States, with a cross-disciplinary background in securities law, public company strategy, and financial communications.",
      "Founded Ventures — Founder of Price Target Media, the only QMO-designated agency recognized by SEDAR and the SEC for micro-cap public company communications, and previously founded World City Press, one of North America's earliest and largest online news networks.",
      "Strategic Role at Egolia — Extensive experience in corporate development, valuation, regulatory strategy, and public-market readiness supports Egolia's long-term capital-raise initiatives and future listing strategy.",
    ],
  },
  {
    name: "John Faraci",
    role: "Senior Legal Advisor",
    fullTitle: "Senior Legal Advisor",
    bio: "One of Ontario's most strategic legal minds in development, with a proven track record navigating complex municipal, planning, and regulatory challenges on large-scale construction projects.",
    image: "/images/Board Member/john-faraci.png",
    experience: [
      "Core Expertise — Expertise spans zoning, entitlement strategy, municipal negotiations, and development approvals, playing a pivotal role in turning around major AvranceCorp projects by navigating municipal processes and securing critical planning outcomes.",
      "Municipal Relations — Proven ability to work effectively with municipal governments and planning departments in high-stakes development environments.",
      "Role at Egolia — Provides senior legal oversight across development approvals, municipal engagement, regulatory compliance, and strategic structuring for major projects.",
    ],
  },
  {
    name: "Thomas Braun",
    role: "Senior Security Lawyer Advisor",
    fullTitle: "Senior Security Lawyer Advisor",
    bio: "Experienced securities and corporate lawyer with deep expertise in capital markets, regulatory compliance, and governance for public and private companies.",
    image: "/images/Board Member/thomas.png",
    experience: [
      "Securities Law — Specialized expertise in securities law, capital markets regulation, and compliance frameworks for public and private issuers.",
      "Corporate Governance — Advises boards and executive leadership on governance best practices, regulatory obligations, and risk mitigation strategies.",
      "Capital Markets — Extensive experience structuring and executing financing transactions, public offerings, and M&A in highly regulated environments.",
      "Strategic Advisory — Provides senior legal counsel to Egolia Group on securities compliance, investor relations structuring, and regulatory strategy.",
    ],
  },
  {
    name: "Abdalla Ali",
    role: "In-House Counsel",
    fullTitle: "In-House Counsel",
    bio: "Founder and Managing Partner of AAA Law LLP, called to the Ontario bar in 2018 and the British Columbia bar in 2025, with practice areas spanning corporate law, litigation, and immigration.",
    image: "/images/Board Member/abdalla-ali.png",
    experience: [
      "Legal Expertise — Founder and Managing Partner of AAA Law LLP, with practice areas spanning trial and litigation, corporate and business law, family law, and Canadian immigration law.",
      "Called to Bar — Called to the Ontario bar in 2018 and the British Columbia bar in 2025; member of the Law Society of Ontario and the Law Society of British Columbia.",
      "Academic Background — Holds a B.A. in Economics and International Development Studies from the University of Toronto and a Law degree from the University of Birmingham (UK).",
      "Community Engagement — Member of the Canadian Association of Black Lawyers and the Toronto Lawyers Association; recognized for commitment to community leadership and access to justice.",
    ],
  },
];

const nonExecutiveTeam = [
  {
    name: "Tahran Chowdhury",
    role: "Product Designer",
    fullTitle: "Product Designer",
    bio: "Technology strategist and digital infrastructure lead contributing to Egolia Group's platform architecture and operational systems.",
    image: "/images/Board Member/tehran.png",
    experience: [
      "Product & Design — Leads technology development and digital product initiatives for Egolia Group's platform ecosystem.",
      "Technical Expertise — Expert in full-stack engineering, financial systems integration, and scalable web infrastructure.",
      "Strategic Focus — Focused on building institutional-grade digital tools that support the organization's long-term growth.",
    ],
  },
  {
    name: "Pauline",
    role: "Executive Personal Assistant",
    fullTitle: "Executive Personal Assistant",
    bio: "Senior professional and non-executive contributor providing independent governance insight and strategic counsel to Egolia Group.",
    image: "/images/Board Member/pauline.png",
    experience: [
      "Governance & Leadership — Extensive background in organizational leadership and stakeholder engagement.",
      "Advisory Role — Brings a disciplined, outcomes-focused approach to governance and advisory responsibilities.",
      "Institutional Culture — Committed to fostering inclusive, accountable, and forward-thinking institutional culture.",
    ],
  },
  {
    name: "Matthew",
    role: "Business Analyst",
    fullTitle: "Business Analyst",
    bio: "Experienced professional bringing operational and strategic expertise to Egolia Group's governance and advisory structure.",
    image: "https://ui-avatars.com/api/?name=Matthew&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Industry Background — Broad experience across financial services and real estate advisory.",
      "Independent Oversight — Contributes independent oversight and strategic perspective to organizational decision-making.",
      "Stakeholder Value — Recognized for balanced judgment and commitment to long-term stakeholder value.",
    ],
  },
];

export default function Team() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <TeamHero />
        <BoardOfDirectors />

        <TeamSection title="Executive Leadership" members={executiveTeam} />
        <TeamSection title="Advisory" members={advisoryTeam} />
        <TeamSection title="Non-Executive Team" members={nonExecutiveTeam} />

        {/* CTA Section */}
        <section className="bg-[#f5f5f7] py-16 md:py-20 text-center">
          <div className="max-w-[600px] mx-auto px-6">
            <h2 className="text-[#1d1d1f] text-2xl md:text-3xl font-bold tracking-[-0.02em] mb-4">
              Interested in partnering with our team?
            </h2>
            <p className="text-[#6e6e73] text-[15px] leading-[1.7] mb-8">
              Whether you&apos;re exploring investment opportunities or strategic collaboration, we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#0F1C3F] text-white text-[14px] font-semibold px-8 py-3.5 rounded-lg hover:bg-[#1A2B5C] transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
