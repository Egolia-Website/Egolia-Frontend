import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Egolia Group",
  description:
    "Get in touch with the Egolia Group team. Reach our offices in North York and Mississauga, Canada, or send us a message directly.",
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px]">
        <ContactForm />

        {/* CTA */}
        <section className="relative py-16 md:py-20 text-center overflow-hidden">
          <Image src="/images/backImage.png" alt="" fill className="object-cover object-center" />
          <div className="relative z-10 max-w-[700px] mx-auto px-6">
            <p className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-5">Work With Us</p>
            <h2 className="text-[#0F1C3F] text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] leading-[1.1] mb-5">
              Interested in investment <span className="text-orange">opportunities?</span>
            </h2>
            <p className="text-[#6e6e73] text-[15px] leading-[1.75] mb-10">
              Explore how Egolia Group creates long-term value across real estate, capital markets, and digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/investor"
                className="inline-flex items-center gap-2 bg-orange hover:bg-[#d4691e] text-white text-[14px] font-semibold px-8 py-4 rounded-lg transition-colors duration-300"
              >
                Investor Relations
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 border border-[#0F1C3F]/20 hover:border-orange hover:text-orange text-[#0F1C3F] text-[14px] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Our Platform
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
