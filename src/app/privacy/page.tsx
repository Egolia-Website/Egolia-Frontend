import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "Privacy Policy | Egolia Group",
  description: "Privacy Policy for Egolia Group and its affiliated companies.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect the following types of information when you interact with our website or services:

• **Personal Identification Information:** Name, email address, phone number, and similar contact details you provide voluntarily through our contact or inquiry forms.
• **Usage Data:** Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.
• **Communication Records:** Correspondence you send to us, including emails and messages submitted through our contact form.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `Egolia Group uses the information we collect for the following purposes:

• To respond to your inquiries and provide the information or services you request.
• To communicate updates about our offerings, investment opportunities, and platform developments where you have consented.
• To improve our website and user experience through aggregated analytics.
• To comply with applicable legal and regulatory obligations.`,
  },
  {
    title: "3. Disclosure of Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• **Service Providers:** Trusted third-party vendors who assist in operating our website or conducting our business, subject to confidentiality obligations.
• **Legal Requirements:** When disclosure is required by law, regulation, legal process, or governmental request.
• **Business Transfers:** In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.`,
  },
  {
    title: "4. Data Security",
    content: `We implement reasonable administrative, technical, and physical safeguards to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You may configure your browser to refuse cookies; however, some features of our website may not function properly as a result.`,
  },
  {
    title: "6. Third-Party Links",
    content: `Our website may contain links to third-party websites, including our affiliated companies such as AvranceCorp and TradeREA. We are not responsible for the privacy practices or content of those sites and encourage you to review their respective privacy policies.`,
  },
  {
    title: "7. Your Rights",
    content: `Depending on your jurisdiction, you may have the right to:

• Access the personal information we hold about you.
• Request correction of inaccurate or incomplete information.
• Request deletion of your personal information, subject to applicable legal obligations.
• Withdraw consent where processing is based on consent.

To exercise any of these rights, please contact us at info@avrancecorp.com.`,
  },
  {
    title: "8. Retention",
    content: `We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable law. When information is no longer needed, we take reasonable steps to securely delete or anonymize it.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `Egolia Group reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with a revised effective date. Continued use of our website following any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:

**Egolia Group**
Email: info@avrancecorp.com
Phone: +1 (800) 555-0192`,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-[84px] bg-white min-h-screen">

        {/* Header */}
        <div className="bg-[#f5f5f7] border-b border-[#e8e8ed] py-14 md:py-20">
          <div className="max-w-[780px] mx-auto px-6 lg:px-8">
            <p className="text-orange text-[13px] font-bold tracking-[0.3em] uppercase mb-4">Legal</p>
            <h1 className="text-[#0F1C3F] text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-4">Privacy Policy</h1>
            <p className="text-[#6e6e73] text-[15px] leading-[1.7]">
              Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated: April 2025
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-[780px] mx-auto px-6 lg:px-8 py-10">
          <p className="text-[#3a3a3f] text-[16px] leading-[1.85] border-l-2 border-orange pl-5">
            Egolia Group and its affiliated entities (&quot;Egolia,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard information when you visit our website or interact with our services.
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
