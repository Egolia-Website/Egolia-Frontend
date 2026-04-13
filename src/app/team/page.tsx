import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TeamHero from "@/components/team/TeamHero";
import BoardOfDirectors from "@/components/team/BoardOfDirectors";
import TeamSection from "@/components/team/TeamSection";

const operationsTeam = [
  {
    name: "Zane Sorell",
    role: "CEO",
    fullTitle: "Chief Executive Officer",
    bio: "Zane Leads Egolia Group's Overall Strategy, Investments, And Operations.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    experience: [
      "Over 10 Years Of Experience In Real Estate Investment And Development.",
      "Leading High-Value Residential And Commercial Projects Across Multiple Markets.",
    ],
  },
  {
    name: "Maya Mathy",
    role: "Founder",
    fullTitle: "Founder & Strategic Advisor",
    bio: "Maya Founded Egolia Group With A Vision To Build Long-Term Value Through Disciplined Investing.",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    experience: [
      "15+ Years In Strategic Investment And Business Development.",
      "Pioneer In Vertically Integrated Investment Platforms.",
    ],
  },
  {
    name: "Alexis Jensen",
    role: "CTO",
    fullTitle: "Chief Technology Officer",
    bio: "Alexis Drives Technology Innovation Across All Egolia Group Companies.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    experience: [
      "Expert In Financial Technology And Digital Platform Architecture.",
      "Led Technology Transformation At Multiple Investment Firms.",
    ],
  },
  {
    name: "Keira Battye",
    role: "Product Designer",
    fullTitle: "Head Of Product Design",
    bio: "Keira Shapes The User Experience Across Egolia's Digital Products.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: [
      "8+ Years In Product Design For Fintech And Real Estate Platforms.",
      "Award-Winning Designer With Focus On Accessible Financial Tools.",
    ],
  },
  {
    name: "Dominic Game",
    role: "3D Artist",
    fullTitle: "Lead 3D Visualization Artist",
    bio: "Dominic Creates Immersive Visual Experiences For Egolia's Development Projects.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    experience: [
      "Specialized In Architectural Visualization And Real Estate Marketing.",
      "Worked With Leading Development Firms Across North America.",
    ],
  },
  {
    name: "James Vial",
    role: "Head of Front-End",
    fullTitle: "Head Of Front-End Engineering",
    bio: "James Leads Front-End Development For All Egolia Digital Products.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    experience: [
      "10+ Years Building Scalable Web Applications In Finance.",
      "Expert In React, Next.js, And Modern Front-End Architecture.",
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
        <TeamSection title="Operations" members={operationsTeam} />
        <TeamSection title="Tech" members={techTeam} />
      </main>
      <Footer />
    </>
  );
}
