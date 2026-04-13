import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import MetadataHero from "@/components/metadata/MetadataHero";
import IntelligencePlatform from "@/components/metadata/IntelligencePlatform";
import IntelligenceProcess from "@/components/metadata/IntelligenceProcess";
import IntelligenceCapabilities from "@/components/metadata/IntelligenceCapabilities";
import MetadataCTA from "@/components/metadata/MetadataCTA";

export default function Metadata() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <MetadataHero />
        <IntelligencePlatform />
        <IntelligenceProcess />
        <IntelligenceCapabilities />
        <MetadataCTA />
      </main>
      <Footer />
    </>
  );
}
