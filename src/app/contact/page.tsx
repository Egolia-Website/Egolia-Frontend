import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/contact/ContactForm";

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
