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
  {
    label: "Who We Are",
    href: "/about",
    hasDropdown: true,
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  { label: "Divisions", href: "/platform" },
  { label: "Investor", href: "/investor" },
  { label: "Contact", href: "/contact" },
];
