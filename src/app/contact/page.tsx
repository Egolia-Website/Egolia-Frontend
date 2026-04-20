import type { Metadata } from "next";
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
      </main>
      <Footer />
    </>
  );
}
