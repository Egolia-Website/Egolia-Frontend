import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InvestorHero from "@/components/investor/InvestorHero";
import WhyInvest from "@/components/investor/WhyInvest";
import InvestmentProcess from "@/components/investor/InvestmentProcess";
import DiverseOpportunities from "@/components/investor/DiverseOpportunities";
import InvestorCTA from "@/components/investor/InvestorCTA";

export default function Investor() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <InvestorHero />
        <WhyInvest />
        <InvestmentProcess />
        <DiverseOpportunities />
        <InvestorCTA />
      </main>
      <Footer />
    </>
  );
}
