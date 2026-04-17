import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSans = localFont({
  src: [
    { path: "./fonts/GoogleSans-Variable.ttf", style: "normal" },
    { path: "./fonts/GoogleSans-Italic-Variable.ttf", style: "italic" },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Egolia Group | Building Long-Term Value",
  description:
    "Egolia is an investment company focused on building long-term value through strategic capital allocation and disciplined investing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${googleSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
