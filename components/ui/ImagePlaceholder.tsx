interface ImagePlaceholderProps {
  label: string;
  path: string;
  className?: string;
  aspect?: string;
  variant?: "light" | "dark";
}

export function ImagePlaceholder({
  label,
  path,
  className = "",
  aspect = "aspect-[4/3]",
  variant = "light",
}: ImagePlaceholderProps) {
  const textClasses = variant === "dark" ? "text-on-dark-muted" : "text-subtle";
  const subTextClasses = variant === "dark" ? "text-on-dark-soft" : "text-subtle/80";
  const base = variant === "dark" ? "border-white/20 bg-white/5" : "border-line-strong bg-surface-2";

  return (
    <div
      className={`${aspect} flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed px-6 text-center ${base} ${className}`}
    >
      <span className={`font-display text-xs font-semibold uppercase tracking-widest ${textClasses}`}>{label}</span>
      <span className={`font-mono text-[11px] ${subTextClasses}`}>{path}</span>
    </div>
  );
}
