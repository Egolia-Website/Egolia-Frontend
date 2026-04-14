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
    bio: "30+ years of CEO experience driving transformational growth and operational excellence.",
    image: "/images/Board Member/michael spencley.png",
    experience: [
      "Results-oriented leader with proven track record in turnaround and start-up environments.",
      "Deep expertise in strategy development, financial management, and profit optimization.",
    ],
  },
  {
    name: "Jason R. Macintosh",
    role: "Chief Financial Officer",
    fullTitle: "Chief Financial Officer",
    bio: "25+ years of leadership across public and private companies in capital markets and financial management.",
    image: "/images/Board Member/jason macintosh.png",
    experience: [
      "Served as CFO, Corporate Secretary, and Interim CEO for TSX and TSXV-listed companies.",
      "Expert in capital markets, governance, M&A, financing, and risk management.",
    ],
  },
  {
    name: "Elaine Galley",
    role: "Chief Operating Officer",
    fullTitle: "Chief Operating Officer",
    bio: "20+ years driving brand growth and market positioning in Canada's competitive real estate sector.",
    image: "/images/Board Member/elaine.png",
    experience: [
      "Former Marketing Director for leading Canadian real estate company.",
      "Expert in brand strategy, digital transformation, sales enablement, and stakeholder engagement.",
    ],
  },
  {
    name: "Rounak S. Langhe",
    role: "Chief Investment Officer",
    fullTitle: "Chief Investment Officer",
    bio: "14 years of experience in portfolio construction, risk management, and client relationship management.",
    image: "/images/Board Member/rounak.png",
    experience: [
      "CIO and Portfolio Manager at Durham Asset Management, Inc.",
      "CFA charter holder with MBA from University of Iowa; maintained first-quartile performance.",
    ],
  },
];

const techTeam = [
  {
    name: "Zane Sorell",
    role: "CEO",
    fullTitle: "Chief Executive Officer",
    bio: "Enjoys adventurous travel, seeks new cultures and offbeat destinations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
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
    image: "https://randomuser.me/api/portraits/women/32.jpg",
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
    image: "https://randomuser.me/api/portraits/women/45.jpg",
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
    image: "https://randomuser.me/api/portraits/women/50.jpg",
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
    image: "https://randomuser.me/api/portraits/men/50.jpg",
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
    image: "https://randomuser.me/api/portraits/men/52.jpg",
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
