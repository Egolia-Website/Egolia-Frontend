import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import InvestorHero from "@/components/investor/InvestorHero";
import WhyInvest from "@/components/investor/WhyInvest";
import PlatformArchitecture from "@/components/investor/PlatformArchitecture";
import InvestmentProcess from "@/components/investor/InvestmentProcess";
import DiverseOpportunities from "@/components/investor/DiverseOpportunities";
import InstitutionalFramework from "@/components/investor/InstitutionalFramework";
import InvestorCTA from "@/components/investor/InvestorCTA";
import MobileMotionProvider from "@/components/shared/MobileMotionProvider";

export default function Investor() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <MobileMotionProvider>
          <InvestorHero />
          <WhyInvest />
          <PlatformArchitecture />
          <InvestmentProcess />
          <DiverseOpportunities />
          <InstitutionalFramework />
          <InvestorCTA />
        </MobileMotionProvider>
      </main>
      <Footer />
    </>
  );
}
