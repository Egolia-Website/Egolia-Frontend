import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TradereaHero from "@/components/traderea/TradereaHero";
import Advantage from "@/components/traderea/Advantage";
import HowItWorks from "@/components/traderea/HowItWorks";
import TradereaCTA from "@/components/traderea/TradereaCTA";

export default function TradeREA() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <TradereaHero />
        <HowItWorks />
        <Advantage />
        <TradereaCTA />
      </main>
      <Footer />
    </>
  );
}
