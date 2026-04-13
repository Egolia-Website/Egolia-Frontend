import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PlatformHero from "@/components/platform/PlatformHero";
import Philosophy from "@/components/platform/Philosophy";
import IntegratedPlatform from "@/components/platform/IntegratedPlatform";
import ExploreCompanies from "@/components/platform/ExploreCompanies";
import PlatformCTA from "@/components/platform/PlatformCTA";

export default function Platform() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <PlatformHero />
        <Philosophy />
        <IntegratedPlatform />
        <ExploreCompanies />
        <PlatformCTA />
      </main>
      <Footer />
    </>
  );
}
