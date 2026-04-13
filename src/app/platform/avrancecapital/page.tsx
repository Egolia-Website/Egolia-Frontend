import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CapitalHero from "@/components/avrancecapital/CapitalHero";
import DisciplineSection from "@/components/avrancecapital/DisciplineSection";
import InvestmentFocus from "@/components/avrancecapital/InvestmentFocus";
import CapitalCTA from "@/components/avrancecapital/CapitalCTA";

export default function AvranceCapital() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <CapitalHero />
        <DisciplineSection />
        <InvestmentFocus />
        <CapitalCTA />
      </main>
      <Footer />
    </>
  );
}
