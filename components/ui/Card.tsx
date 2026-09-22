import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  href?: string;
  external?: boolean;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export function Card({ href, external = false, title, description, icon, className = "" }: CardProps) {
  const content = (
    <>
      {icon && (
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-dim text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-1.5">
        {title}
        {href && external && (
          <svg className="h-3.5 w-3.5 text-subtle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </>
  );

  const classes = `group flex flex-col gap-4 rounded-lg border border-line bg-surface p-6 transition-all duration-200 hover:border-line-strong hover:shadow-[0_8px_28px_rgba(43,71,54,0.08)] ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
