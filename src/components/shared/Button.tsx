import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "inline-block px-6 py-3 rounded font-semibold text-sm transition-all duration-300";

  const variants = {
    primary: "bg-orange text-white hover:bg-orange-light",
    outline: "border-2 border-white text-white hover:bg-white hover:text-navy",
    white: "bg-white text-navy hover:bg-gray-light",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
