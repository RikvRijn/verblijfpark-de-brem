interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-body text-xs font-semibold uppercase tracking-[0.18em] text-clay ${className}`}
    >
      {children}
    </p>
  );
}
