"use client";

import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TeamHero from "@/components/team/TeamHero";
import BoardOfDirectors from "@/components/team/BoardOfDirectors";
import TeamSection from "@/components/team/TeamSection";

const executiveTeam = [
  {
    name: "Jason R. Macintosh",
    role: "Chief Financial Officer",
    fullTitle: "Chief Financial Officer",
    bio: "Senior executive with more than 25 years of leadership experience across public and private companies spanning exploration, development, and operating environments.",
    image: "/images/Board Member/jason-macintosh.png",
    experience: [
      "Served as CFO, Corporate Secretary, and Interim CEO for TSX- and TSXV-listed mining companies, bringing expertise in capital markets, financial stewardship, governance, and strategic execution.",
      "Strong track record in financing, M&A, continuous disclosure, and risk management, recognized for guiding organizations through transition and value-creation phases.",
      "Trusted advisor to boards, investors, regulators, and Indigenous and government stakeholders, with a leadership approach grounded in integrity, accountability, and disciplined decision-making.",
    ],
  },
  {
    name: "Elaine Galley",
    role: "Chief Operating Officer",
    fullTitle: "Chief Operating Officer",
    bio: "20+ years driving brand growth and market positioning in Canada's competitive real estate sector.",
    image: "/images/Board Member/ellen.png",
    experience: [
      "Former Marketing Director for leading Canadian real estate company with proven ability to elevate developments and accelerate sales.",
      "Led high-impact marketing initiatives across residential and mixed-use developments.",
      "Expert in brand strategy, digital transformation, sales enablement, and stakeholder engagement.",
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
    name: "Wole Olapoju",
    role: "Chief Technology Officer",
    fullTitle: "Chief Technology Officer",
    bio: "Technology leader driving Egolia Group's platform architecture, digital infrastructure, and operational systems.",
    image: "/images/Board Member/wole.png",
    experience: [
      "Senior executive with a proven track record in leading high-growth organizations across multiple sectors.",
      "Deep expertise in capital allocation, organizational strategy, and cross-sector partnership development.",
      "Recognized for his ability to align vision with execution, building institutions positioned for long-term market leadership.",
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
      "Recognized by the Wall Street Journal as one of the top management analysts in the United States, with a cross-disciplinary background in securities law, public company strategy, and financial communications.",
      "Founder of Price Target Media — the only QMO-designated agency recognized by SEDAR and the SEC for micro-cap public company communications — and previously founded World City Press, one of North America's earliest and largest online news networks.",
      "Extensive experience in corporate development, valuation, regulatory strategy, and public-market readiness supports Egolia's long-term capital-raise initiatives and future listing strategy.",
    ],
  },
  {
    name: "John Faraci",
    role: "Senior Legal Advisor",
    fullTitle: "Senior Legal Advisor",
    bio: "One of Ontario's most strategic legal minds in development, with a proven track record navigating complex municipal, planning, and regulatory challenges on large-scale construction projects.",
    image: "/images/Board Member/john-faraci.png",
    experience: [
      "Expertise spans zoning, entitlement strategy, municipal negotiations, and development approvals — playing a pivotal role in turning around major AvranceCorp projects by navigating municipal processes and securing critical planning outcomes.",
      "Proven ability to work effectively with municipal governments and planning departments in high-stakes development environments.",
      "Provides senior legal oversight at Egolia across development approvals, municipal engagement, regulatory compliance, and strategic structuring for major projects.",
    ],
  },
  {
    name: "Abdallah",
    role: "Advisor",
    fullTitle: "Strategic Advisor",
    bio: "Experienced advisor and investor with a strong foundation in emerging markets, capital strategy, and cross-border partnerships.",
    image: "https://ui-avatars.com/api/?name=Abdallah&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Broad experience in international business development and strategic advisory.",
      "Brings cross-cultural fluency and investor relations expertise to Egolia Group.",
      "Focused on expanding the organization's reach into global capital networks.",
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
      "Leads technology development and digital product initiatives for Egolia Group's platform ecosystem.",
      "Expert in full-stack engineering, financial systems integration, and scalable web infrastructure.",
      "Focused on building institutional-grade digital tools that support the organization's long-term growth.",
    ],
  },
  {
    name: "Pauline",
    role: "Non-Executive Director",
    fullTitle: "Non-Executive Director",
    bio: "Senior professional and non-executive contributor providing independent governance insight and strategic counsel to Egolia Group.",
    image: "/images/Board Member/pauline.png",
    experience: [
      "Extensive background in organizational leadership and stakeholder engagement.",
      "Brings a disciplined, outcomes-focused approach to governance and advisory responsibilities.",
      "Committed to fostering inclusive, accountable, and forward-thinking institutional culture.",
    ],
  },
  {
    name: "Matthew",
    role: "Non-Executive Director",
    fullTitle: "Non-Executive Director",
    bio: "Experienced professional bringing operational and strategic expertise to Egolia Group's governance and advisory structure.",
    image: "https://ui-avatars.com/api/?name=Matthew&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Broad experience across financial services and real estate advisory.",
      "Contributes independent oversight and strategic perspective to organizational decision-making.",
      "Recognized for balanced judgment and commitment to long-term stakeholder value.",
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
