import type { ComponentPropsWithoutRef } from "react";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  as?: "div" | "section" | "article" | "main" | "header" | "footer";
}

export function Container({
  as: Tag = "div",
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={`w-full max-w-[1200px] mx-auto px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
