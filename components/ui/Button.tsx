import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "outline" | "outline-light" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: Variant;
  size?: Size;
  href?: string;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-clay text-white shadow-[0_4px_20px_rgba(184,135,61,0.35)] hover:bg-clay-dark hover:-translate-y-px hover:shadow-[0_8px_32px_rgba(184,135,61,0.48)] active:translate-y-0 active:scale-[0.97]",
  outline:
    "border border-accent text-accent hover:bg-accent-dim hover:shadow-[0_4px_20px_rgba(46,139,87,0.18)]",
  "outline-light":
    "border border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  ghost:
    "border border-line text-foreground hover:border-line-strong hover:bg-surface active:scale-[0.97]",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2 text-sm gap-1.5 rounded-full",
  md: "px-6 py-3 text-sm gap-2 rounded-md",
  lg: "px-8 py-4 text-base gap-2.5 rounded-md",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-display font-semibold transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-150 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
