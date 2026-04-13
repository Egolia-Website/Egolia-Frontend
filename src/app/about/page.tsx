import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import DisciplinedValue from "@/components/about/DisciplinedValue";
import CoreCapabilities from "@/components/about/CoreCapabilities";
import VisionMission from "@/components/about/VisionMission";
import PartnerCTA from "@/components/about/PartnerCTA";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <AboutHero />
        <AboutIntro />
        <DisciplinedValue />
        <CoreCapabilities />
        <VisionMission />
        <PartnerCTA />
      </main>
      <Footer />
    </>
  );
}
