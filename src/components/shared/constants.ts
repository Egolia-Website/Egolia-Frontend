export const colors = {
  navy: {
    dark: "#0A1628",
    DEFAULT: "#0F1C3F",
    light: "#1A2B5C",
  },
  blue: {
    DEFAULT: "#2D5DAA",
    light: "#4A7BC7",
  },
  orange: {
    DEFAULT: "#E8792B",
    light: "#F09050",
  },
  gold: "#D4A843",
  white: "#FFFFFF",
  gray: {
    light: "#F5F5F5",
    medium: "#E0E0E0",
    dark: "#6B7280",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Overview", href: "/overview" },
  {
    label: "Who We Are",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  {
    label: "Platform",
    href: "/platform",
    hasDropdown: true,
    children: [
      { label: "Our Companies", href: "/platform" },
      { label: "AvranceCorp", href: "/platform/avrancecorp", logo: "/images/avr.png" },
      { label: "TradeREA", href: "/platform/traderea", logo: "/images/TradeREA-Light-Logo.png" },
      { label: "AvranceCapital", href: "/platform/avrancecapital", logo: "/images/avrCapital.png" },
      { label: "Metadata & Research", href: "/platform/metadata" },
    ],
  },
  { label: "Investor", href: "/investor" },
  { label: "Contact", href: "/contact" },
];
