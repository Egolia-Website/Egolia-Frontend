import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Hero from "@/components/home/Hero";
import DisciplinedApproach from "@/components/home/DisciplinedApproach";
import OurPlatform from "@/components/home/OurPlatform";
import BuiltForValue from "@/components/home/BuiltForValue";
import PartneringGrowth from "@/components/home/PartneringGrowth";
import DisciplinedInvesting from "@/components/home/DisciplinedInvesting";
import PartnerWithUs from "@/components/home/PartnerWithUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
      <Hero />
      <DisciplinedApproach />
      <OurPlatform />
      <BuiltForValue />
      <PartneringGrowth />
      <DisciplinedInvesting />
      <PartnerWithUs />
      </main>
      <Footer />
    </>
  );
}
