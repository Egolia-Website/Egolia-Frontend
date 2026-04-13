interface CardProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function Card({ children, className = "", dark = false }: CardProps) {
  return (
    <div
      className={`rounded-lg p-6 ${
        dark ? "bg-navy text-white" : "bg-white text-navy shadow-md"
      } ${className}`}
    >
      {children}
    </div>
  );
}
