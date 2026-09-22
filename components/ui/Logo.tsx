import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "md" | "lg";
  iconClassName?: string;
  className?: string;
}

const sizeClasses = {
  md: { icon: "h-9", text: "1.05rem" },
  lg: { icon: "h-14", text: "1.9rem" },
};

export function Logo({ variant = "light", size = "md", iconClassName, className = "" }: LogoProps) {
  const textColor = variant === "dark" ? "text-on-dark" : "text-muted";
  const s = sizeClasses[size];

  return (
    <span className={`inline-flex items-end gap-2.5 ${className}`}>
      <Image
        src="/logo-brem-icon.png"
        alt=""
        width={180}
        height={215}
        className={`w-auto ${iconClassName ?? s.icon}`}
        priority
      />
      <span className={`font-logo font-bold ${textColor}`} style={{ fontSize: s.text }}>
        Verblijfpark De Brem
      </span>
    </span>
  );
}
