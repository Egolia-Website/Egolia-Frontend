interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light = false,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl ${center ? "mx-auto" : ""}`}>
      {subtitle && (
        <p className={`text-sm uppercase tracking-widest mb-2 ${light ? "text-orange" : "text-orange"}`}>
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-xl leading-relaxed font-semibold ${light ? "text-gray-300" : "text-gray-dark"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
