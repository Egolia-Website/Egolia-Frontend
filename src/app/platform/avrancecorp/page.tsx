import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AvranceHero from "@/components/avrancecorp/AvranceHero";
import AboutAvrance from "@/components/avrancecorp/AboutAvrance";
import Performance from "@/components/avrancecorp/Performance";
import InvestmentApproach from "@/components/avrancecorp/InvestmentApproach";
import AvranceCTA from "@/components/avrancecorp/AvranceCTA";

export default function AvranceCorp() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <AvranceHero />
        <AboutAvrance />
        <Performance />
        <InvestmentApproach />
        <AvranceCTA />
      </main>
      <Footer />
    </>
  );
}
