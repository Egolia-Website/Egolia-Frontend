"use client";

import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TeamHero from "@/components/team/TeamHero";
import BoardOfDirectors from "@/components/team/BoardOfDirectors";
import TeamSection from "@/components/team/TeamSection";

const executiveTeam = [
  {
    name: "Wole Ogunleye",
    role: "Chief Executive Officer",
    fullTitle: "Chief Executive Officer",
    bio: "Visionary leader driving Egolia Group's strategic direction and long-term growth across real estate, capital markets, and digital infrastructure.",
    image: "https://ui-avatars.com/api/?name=Wole+Ogunleye&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Senior executive with a proven track record in leading high-growth organizations across multiple sectors.",
      "Deep expertise in capital allocation, organizational strategy, and cross-sector partnership development.",
      "Recognized for his ability to align vision with execution, building institutions positioned for long-term market leadership.",
    ],
  },
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
    name: "Rounak S. Langhe",
    role: "Chief Investment Officer",
    fullTitle: "Chief Investment Officer",
    bio: "14 years of comprehensive experience in portfolio construction, risk management, and client relationship management.",
    image: "/images/Board Member/rounak.png",
    experience: [
      "Chief Investment Officer and Portfolio Manager at Durham Asset Management, Inc.",
      "Expert in asset-liability management, credit markets, structured products, and fixed-income trading.",
      "CFA charterholder and Chartered Investment Manager with MBA from University of Iowa; maintained first-quartile performance.",
    ],
  },
];

const advisoryTeam = [
  {
    name: "Eric Stevenson",
    role: "Senior Advisor",
    fullTitle: "Senior Strategic Advisor",
    bio: "Seasoned executive with decades of experience advising growth-stage companies on capital formation, governance, and strategic positioning.",
    image: "https://ui-avatars.com/api/?name=Eric+Stevenson&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Extensive background in corporate advisory across real estate, finance, and technology sectors.",
      "Recognized for bringing institutional discipline to emerging organizations navigating complex markets.",
      "Trusted advisor to senior leadership teams on matters of governance, expansion, and stakeholder relations.",
    ],
  },
  {
    name: "John Farraci",
    role: "Advisor",
    fullTitle: "Strategic Advisor",
    bio: "Senior business leader and advisor with a strong record of value creation across North American markets.",
    image: "https://ui-avatars.com/api/?name=John+Farraci&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Multi-decade career spanning operations, finance, and strategic development in competitive industries.",
      "Brings deep operational insight and network leverage to portfolio companies at key inflection points.",
      "Known for pragmatic leadership and the ability to accelerate organizational momentum.",
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
    name: "Shahriar Rahman",
    role: "Non-Executive Director",
    fullTitle: "Non-Executive Director",
    bio: "Technology strategist and digital infrastructure lead contributing to Egolia Group's platform architecture and operational systems.",
    image: "https://ui-avatars.com/api/?name=Shahriar+Rahman&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Leads technology development and digital product initiatives for Egolia Group's platform ecosystem.",
      "Expert in full-stack engineering, financial systems integration, and scalable web infrastructure.",
      "Focused on building institutional-grade digital tools that support the organization's long-term growth.",
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
  {
    name: "Pauline",
    role: "Non-Executive Director",
    fullTitle: "Non-Executive Director",
    bio: "Senior professional and non-executive contributor providing independent governance insight and strategic counsel to Egolia Group.",
    image: "https://ui-avatars.com/api/?name=Pauline&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Extensive background in organizational leadership and stakeholder engagement.",
      "Brings a disciplined, outcomes-focused approach to governance and advisory responsibilities.",
      "Committed to fostering inclusive, accountable, and forward-thinking institutional culture.",
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
