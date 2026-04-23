import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Terms of Use | Egolia Group",
  description: "Terms of Use governing access to and use of the Egolia Group website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the Egolia Group website (the "Site"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please discontinue use of the Site immediately. These Terms apply to all visitors, users, and others who access the Site.`,
  },
  {
    title: "2. Use of the Site",
    content: `You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:

• Use the Site in any way that violates applicable local, national, or international laws or regulations.
• Transmit any unsolicited or unauthorized advertising or promotional material.
• Attempt to gain unauthorized access to any part of the Site or its related systems.
• Use any automated means to scrape, crawl, or extract data from the Site without prior written consent.
• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site.`,
  },
  {
    title: "3. Intellectual Property",
    content: `All content on this Site — including text, graphics, logos, images, and software — is the property of Egolia Group or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without express written permission from Egolia Group.`,
  },
  {
    title: "4. No Investment Advice",
    content: `The information provided on this Site is for general informational purposes only and does not constitute financial, investment, legal, or tax advice. Nothing on this Site should be construed as a solicitation or offer to buy or sell any security or investment product. You should consult a qualified professional before making any investment decision.

Egolia Group makes no representations or warranties regarding the accuracy, completeness, or timeliness of any information on the Site.`,
  },
  {
    title: "5. Forward-Looking Statements",
    content: `Certain information on this Site may contain forward-looking statements regarding future events, performance, or results. These statements involve known and unknown risks and uncertainties that may cause actual outcomes to differ materially from those expressed or implied. Egolia Group undertakes no obligation to update any forward-looking statements.`,
  },
  {
    title: "6. Disclaimer of Warranties",
    content: `The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Egolia Group does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    title: "7. Limitation of Liability",
    content: `To the fullest extent permitted by law, Egolia Group and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content — even if advised of the possibility of such damages.`,
  },
  {
    title: "8. Third-Party Links",
    content: `The Site may contain links to third-party websites, including affiliated companies such as AvranceCorp and TradeREA. These links are provided for convenience only. Egolia Group has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.`,
  },
  {
    title: "9. Privacy",
    content: `Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection and use of your personal information.`,
  },
  {
    title: "10. Modifications to the Site and Terms",
    content: `Egolia Group reserves the right to modify or discontinue the Site, or any portion thereof, at any time without notice. We also reserve the right to amend these Terms at any time by posting updated Terms on the Site. Your continued use of the Site following any changes constitutes acceptance of the revised Terms.`,
  },
  {
    title: "11. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Ontario, Canada.`,
  },
  {
    title: "12. Contact Us",
    content: `If you have questions about these Terms of Use, please contact us:

**Egolia Group**
Email: info@avrancecorp.com
Phone: +1 (800) 555-0192`,
  },
];

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px] bg-white min-h-screen">

        {/* Header */}
        <div className="bg-[#f5f5f7] border-b border-[#e8e8ed] py-14 md:py-20">
          <div className="max-w-[780px] mx-auto px-6 lg:px-8">
            <p className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Legal</p>
            <h1 className="text-[#0F1C3F] text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">Terms of Use</h1>
            <p className="text-[#6e6e73] text-[15px] leading-[1.7]">
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: April 2025
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-[780px] mx-auto px-6 lg:px-8 py-10">
          <p className="text-[#3a3a3f] text-[16px] leading-[1.85] border-l-2 border-orange pl-5">
            Please read these Terms of Use carefully before using the Egolia Group website. These Terms govern your access to and use of our Site and services. By using the Site, you agree to be legally bound by these Terms.
          </p>
        </div>

        {/* Sections */}
        <div className="max-w-[780px] mx-auto px-6 lg:px-8 pb-24 space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-[#e8e8ed] pt-8">
              <h2 className="text-[#0F1C3F] text-[18px] font-bold mb-4">{section.title}</h2>
              <div className="text-[#3a3a3f] text-[15px] leading-[1.85] whitespace-pre-line">
                {section.content.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
              </div>
            </div>
          ))}
        </div>

      </main>
      <Footer />
    </>
  );
}
