import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/discover", label: "Discover" },
  { to: "/", label: "My crew" },
  { to: "/", label: "Past events" },
] as const;

export function Nav({ active }: { active?: "discover" | "home" }) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-sage text-sage-foreground transition-transform duration-300 group-hover:-rotate-6">
            <Sprout className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl italic tracking-tight text-foreground">
            Tidepool
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-card hover:text-foreground sm:px-4",
                ((active === "discover" && i === 0) ||
                  (active === "home" && i === 1)) &&
                  "bg-card text-foreground",
              )}
            >
              {l.label}
            </Link>
          ))}
          <span className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-terracotta-foreground shadow-soft sm:ml-2">
            You
          </span>
        </nav>
      </div>
    </header>
  );
}
