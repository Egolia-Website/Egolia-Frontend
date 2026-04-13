import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import OverviewHero from "@/components/overview/OverviewHero";
import AtAGlance from "@/components/overview/AtAGlance";
import CompaniesOverview from "@/components/overview/CompaniesOverview";
import WhyEgolia from "@/components/overview/WhyEgolia";
import OverviewCTA from "@/components/overview/OverviewCTA";

export default function Overview() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <OverviewHero />
        <AtAGlance />
        <CompaniesOverview />
        <WhyEgolia />
        <OverviewCTA />
      </main>
      <Footer />
    </>
  );
}
