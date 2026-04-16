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
    bio: "Senior executive with more than 30 years of CEO experience providing fiscal, strategic, and operational leadership across small, medium, and large organizations.",
    image: "/images/Board Member/Michael Spencley Head Shot.jpg",
    experience: [
      "Recognized as a dynamic, results-oriented leader with a strong track record of improving performance in fast-paced and complex business settings, consistently translating complex challenges into clear, actionable solutions.",
      "Leadership style combines accountability, team development, and execution, enabling management teams to achieve high performance and implement best practices across the organization.",
      "Expertise includes strategy, finance, budgeting, profit management, sales and marketing leadership, corporate development, strategic alliances, governance, contract negotiations, regulatory relations, and performance improvement.",
    ],
  },
  {
    name: "Jason R. Macintosh",
    role: "Chief Financial Officer",
    fullTitle: "Chief Financial Officer",
    bio: "Senior executive with more than 25 years of leadership experience across public and private companies spanning exploration, development, and operating environments.",
    image: "/images/Board Member/jasonheadshot.jpg",
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
    image: "/images/Board Member/elaine.png",
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

const techTeam = [
  {
    name: "Zane Sorell",
    role: "CEO",
    fullTitle: "Chief Executive Officer",
    bio: "Enjoys adventurous travel, seeks new cultures and offbeat destinations.",
    image: "https://ui-avatars.com/api/?name=Zane+Sorell&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Over 10 Years Of Experience In Real Estate Investment.",
      "Leading Projects Across Multiple Markets.",
    ],
  },
  {
    name: "Maya Mathy",
    role: "Founder",
    fullTitle: "Founder & Strategic Advisor",
    bio: "Pop music lover, seeks joy and exciting pop concerts.",
    image: "https://ui-avatars.com/api/?name=Maya+Mathy&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "15+ Years In Strategic Investment.",
      "Pioneer In Vertically Integrated Platforms.",
    ],
  },
  {
    name: "Alexis Jensen",
    role: "CTO",
    fullTitle: "Chief Technology Officer",
    bio: "Bookworm, creative software developer with precision.",
    image: "https://ui-avatars.com/api/?name=Alexis+Jensen&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Expert In Financial Technology.",
      "Led Technology Transformation At Multiple Firms.",
    ],
  },
  {
    name: "Keira Battye",
    role: "Product Designer",
    fullTitle: "Head Of Product Design",
    bio: "Creative painter capturing beauty with imaginative artwork.",
    image: "https://ui-avatars.com/api/?name=Keira+Battye&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "8+ Years In Product Design For Fintech.",
      "Focus On Accessible Financial Tools.",
    ],
  },
  {
    name: "Dominic Game",
    role: "3D Artist",
    fullTitle: "Lead 3D Visualization Artist",
    bio: "Football enthusiast, enjoys movie nights with friends.",
    image: "https://ui-avatars.com/api/?name=Dominic+Game&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "Specialized In Architectural Visualization.",
      "Worked With Leading Firms Across North America.",
    ],
  },
  {
    name: "James Vial",
    role: "Head of Front-End",
    fullTitle: "Head Of Front-End Engineering",
    bio: "Culinary artist, explores diverse flavors, skilled in cooking.",
    image: "https://ui-avatars.com/api/?name=James+Vial&background=0F1C3F&color=fff&size=400&font-size=0.35",
    experience: [
      "10+ Years Building Scalable Web Applications.",
      "Expert In React And Modern Architecture.",
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
        <TeamSection title="Tech" members={techTeam} />
      </main>
      <Footer />
    </>
  );
}
