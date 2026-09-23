import { cn } from "@/lib/utils";
import { avatarTones } from "@/lib/tidepool-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

const sizes = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-11 w-11 text-base sm:h-12 sm:w-12",
};

export function Avatar({
  name,
  tone,
  index = 0,
  size = "md",
  className,
}: {
  name: string;
  tone?: string;
  index?: number;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const resolved = tone ?? avatarTones[index % avatarTones.length];
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-full border-2 border-background font-semibold ring-1 ring-border/50",
        sizes[size],
        resolved,
        className,
      )}
      title={name}
    >
      {initials(name)}
    </span>
  );
}

export function AvatarStack({
  names,
  max = 5,
  size = "md",
}: {
  names: string[];
  max?: number;
  size?: keyof typeof sizes;
}) {
  const shown = names.slice(0, max);
  const extra = names.length - shown.length;
  return (
    <div className="flex flex-wrap items-center gap-y-2">
      <div className="flex -space-x-3">
        {shown.map((n, i) => (
          <Avatar key={n + i} name={n} index={i} size={size} />
        ))}
      </div>
      {extra > 0 && (
        <span className="ml-2 text-sm font-medium text-muted-foreground">
          +{extra} more
        </span>
      )}
    </div>
  );
}
