import Link from "next/link";
import Image from "next/image";

const navigationLinks = [
  { label: "Overview", href: "/overview" },
  { label: "Our Firm", href: "/about" },
  { label: "Platform", href: "/platform" },
  { label: "For Investors", href: "/investor" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Logo & description */}
          <div>
            <Image
              src="/images/egolia-logo.png"
              alt="Egolia Group"
              width={180}
              height={55}
              className="object-contain mix-blend-multiply"
            />
            <p className="text-navy/70 text-base mt-6 leading-[1.7] italic font-medium">
              Building Long-Term Value Through Strategic Capital, Innovation, And Disciplined Growth.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-navy text-xl font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-navy/70 text-base hover:text-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-navy text-xl font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-navy/70 text-base">
              <p>Info@Avrancecorp.Com</p>
              <p>Toronto, Ontario</p>
            </div>

            <Link
              href="https://linkedin.com"
              target="_blank"
              className="inline-block mt-5 text-navy text-base font-medium border-b-2 border-orange pb-0.5 hover:text-orange transition-colors duration-300"
            >
              LinkedIn
            </Link>

            {/* Social icons */}
            <div className="flex gap-5 mt-8">
              <Link href="#" className="text-navy/50 hover:text-orange transition-colors duration-300" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </Link>
              <Link href="#" className="text-navy/50 hover:text-orange transition-colors duration-300" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </Link>
              <Link href="#" className="text-navy/50 hover:text-orange transition-colors duration-300" aria-label="Instagram">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy/10 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/40 text-sm">
            &copy; {new Date().getFullYear()} Egolia Group. All rights reserved.
          </p>
          <div className="w-12 h-[2px] bg-orange" />
        </div>
      </div>
    </footer>
  );
}
