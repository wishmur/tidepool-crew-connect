import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Plus, ArrowRight } from "lucide-react";
import { Nav } from "@/components/tidepool/Nav";
import { Avatar, AvatarStack } from "@/components/tidepool/Avatar";
import {
  filters,
  featuredEvents,
  feedEvents,
  vibeColor,
  crew,
  type EventCard,
} from "@/lib/tidepool-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/discover")({
  head: () => ({
    meta: [
      { title: "Discover group volunteering near you — Tidepool" },
      {
        name: "description",
        content:
          "Browse beach cleanups, trail days, dive weekends and more. See where your crew is going and bring your friends.",
      },
      { property: "og:title", content: "Discover — Tidepool" },
      { property: "og:description", content: "Group volunteering, near you." },
    ],
  }),
  component: Discover,
});

const friendNames = crew.map((c) => c.name);

function FeaturedCard({ event }: { event: EventCard }) {
  return (
    <Link
      to="/"
      className="group flex gap-4 rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <img
        src={event.image}
        alt={event.title}
        width={800}
        height={600}
        loading="lazy"
        className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-28"
      />
      <div className="flex flex-col">
        <h3 className="font-display text-lg italic leading-snug text-foreground">
          {event.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">
          {event.date} · {event.location}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-3">
          <div className="flex -space-x-2">
            {friendNames.slice(0, event.friendsGoing).map((n, i) => (
              <Avatar key={n} name={n} index={i} size="sm" />
            ))}
          </div>
          <span className="text-xs font-medium text-foreground">
            {event.friendsGoing} of your friends going
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeedCard({ event }: { event: EventCard }) {
  return (
    <Link
      to="/"
      className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          width={800}
          height={600}
          loading="lazy"
          className="h-44 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-soft",
            vibeColor[event.vibe],
          )}
        >
          {event.vibe}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl italic leading-snug text-foreground">
          {event.title}
        </h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" /> {event.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {event.location}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <div className="flex items-center gap-2">
            <AvatarStack names={friendNames} max={3} size="sm" />
            <span className="text-xs font-medium text-muted-foreground">
              {event.going} going
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-terracotta px-3 py-1.5 text-xs font-semibold text-terracotta-foreground transition-transform duration-300 group-hover:translate-x-0.5">
            Bring crew
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function Discover() {
  const [active, setActive] = useState("All");

  return (
    <div className="min-h-screen bg-background">
      <Nav active="discover" />

      <main className="mx-auto max-w-6xl px-5 pb-28">
        {/* Header */}
        <section className="mt-10">
          <h1 className="font-display text-4xl italic text-foreground sm:text-5xl">
            What's your crew up to?
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">Group volunteering, near you.</p>
        </section>

        {/* Filter chips */}
        <div className="mt-6 -mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "whitespace-nowrap rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition-all duration-300 ease-out",
                  active === f
                    ? "border-transparent bg-sage text-sage-foreground shadow-soft"
                    : "bg-card text-muted-foreground hover:bg-peach hover:text-peach-foreground",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        <section className="mt-10">
          <h2 className="font-display text-2xl italic text-foreground">
            Your crew is going to…
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {featuredEvents.map((e) => (
              <FeaturedCard key={e.id} event={e} />
            ))}
          </div>
        </section>

        {/* Feed */}
        <section className="mt-12">
          <h2 className="font-display text-2xl italic text-foreground">Events near you</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            {feedEvents.map((e) => (
              <FeedCard key={e.id} event={e} />
            ))}
          </div>
        </section>
      </main>

      {/* FAB */}
      <button className="group fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-4 font-semibold text-terracotta-foreground shadow-float transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift">
        <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
        Plan a group trip
      </button>
    </div>
  );
}
