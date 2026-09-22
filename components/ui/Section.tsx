import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  size?: "sm" | "md" | "lg";
}

const paddingClasses = {
  sm: "py-16 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-28 md:py-36",
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { size = "md", className = "", children, ...props },
  ref
) {
  return (
    <section
      ref={ref}
      className={`${paddingClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
});
