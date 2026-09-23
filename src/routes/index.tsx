import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Sunset,
  MapPin,
  ArrowRight,
  BadgeCheck,
  Droplets,
  Sun,
  Footprints,
} from "lucide-react";
import { Nav } from "@/components/tidepool/Nav";
import { Avatar, AvatarStack } from "@/components/tidepool/Avatar";
import { images, crew, attendees } from "@/lib/tidepool-data";
import organizer from "@/assets/organizer.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malibu Beach Cleanup + Sunset Bonfire — Tidepool" },
      {
        name: "description",
        content:
          "Clean Zuma Beach with Heal the Bay, then stay for a sunset bonfire. Bring your crew — group volunteering made easy.",
      },
      { property: "og:title", content: "Malibu Beach Cleanup + Sunset Bonfire" },
      {
        property: "og:description",
        content: "A beach cleanup that turns into a sunset hang. Bring your crew.",
      },
      { property: "og:image", content: images.heroBeach },
    ],
  }),
  component: EventDetail,
});

const stats = [
  { value: "300 lbs", label: "Projected plastic removed", tone: "bg-butter text-butter-foreground" },
  { value: "24", label: "People joining", tone: "bg-peach text-peach-foreground" },
  { value: "5", label: "Friends going", tone: "bg-sage text-sage-foreground" },
];

const bring = [
  { icon: Droplets, label: "Reusable water bottle" },
  { icon: Sun, label: "Sunscreen + hat" },
  { icon: Footprints, label: "Closed-toe shoes" },
];

function EventDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Nav active="home" />

      <main className="mx-auto max-w-5xl px-5 pb-24">
        {/* Hero */}
        <section className="relative mt-6">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img
              src={images.heroBeach}
              alt="Golden hour at Zuma Beach with people gathered on the sand"
              width={1920}
              height={1080}
              className="h-[340px] w-full object-cover sm:h-[460px]"
            />
          </div>

          {/* Floating overlap card */}
          <div className="relative mx-auto -mt-20 w-[92%] rounded-3xl border border-border/60 bg-card p-6 shadow-lift sm:-mt-24 sm:w-[88%] sm:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-sage px-3 py-1 text-xs font-semibold text-sage-foreground">
              Conservation • Group event
            </span>
            <h1 className="mt-3 font-display text-3xl italic leading-tight text-foreground sm:text-5xl">
              Malibu Beach Cleanup <span className="text-terracotta">+</span> Sunset Bonfire
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4 text-terracotta" /> Saturday, October 5
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Sunset className="h-4 w-4 text-terracotta" /> 4:00–8:00 PM
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-terracotta" /> Zuma Beach, Malibu
              </span>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-3xl ${s.tone} p-6 text-center shadow-soft`}
            >
              <p className="font-display text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium opacity-80">{s.label}</p>
            </div>
          ))}
        </section>

        {/* Who's coming */}
        <section className="mt-12">
          <h2 className="font-display text-2xl italic text-foreground">Who's coming</h2>
          <div className="mt-4 rounded-3xl border border-border/60 bg-card p-6 shadow-soft">
            <AvatarStack names={attendees.concat(Array(16).fill("Friend"))} max={8} size="lg" />

            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              From your crew
            </p>
            <div className="mt-4 flex flex-wrap gap-6">
              {crew.map((p, i) => (
                <div key={p.name} className="flex flex-col items-center gap-2">
                  <Avatar name={p.name} tone={p.tone} index={i} size="lg" />
                  <span className="text-sm font-medium text-foreground">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 flex flex-col items-center">
          <button className="group flex w-full max-w-xl items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-5 text-lg font-semibold text-terracotta-foreground shadow-float transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift">
            Bring your crew
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button className="mt-3 text-sm font-medium text-muted-foreground squiggle-underline transition-colors hover:text-foreground">
            Or join solo
          </button>
        </section>

        {/* What we'll do */}
        <section className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl italic text-foreground">What we'll do</h2>
            <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground/80">
              Spend the afternoon cleaning a beautiful stretch of Zuma Beach with Heal the
              Bay, then stick around for a community bonfire as the sun goes down. Bring a
              blanket and a friend.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl italic text-foreground">What to bring</h2>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {bring.map((b) => (
                <div
                  key={b.label}
                  className="flex flex-col items-center gap-2 rounded-2xl bg-card p-4 text-center shadow-soft"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-peach text-peach-foreground">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-medium text-foreground">{b.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 rounded-2xl bg-sage/60 px-4 py-3 text-sm text-foreground">
              <span className="font-semibold">Tidepool provides:</span> gloves, bags, snacks,
              s'mores kit 🔥
            </p>
          </div>
        </section>

        {/* Organizer */}
        <section className="mt-14">
          <h2 className="font-display text-2xl italic text-foreground">Hosted by</h2>
          <div className="mt-4 flex flex-col items-start gap-5 rounded-3xl border border-border/60 bg-card p-6 shadow-soft sm:flex-row sm:items-center">
            <img
              src={organizer}
              alt="Heal the Bay event coordinator smiling at the beach"
              width={512}
              height={512}
              loading="lazy"
              className="h-20 w-20 rounded-2xl object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl text-foreground">Heal the Bay × Tidepool</h3>
                <BadgeCheck className="h-5 w-5 text-terracotta" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                A nonprofit on a mission to make the coastal waters of Greater LA safe,
                healthy and clean — one cleanup (and bonfire) at a time.
              </p>
            </div>
            <div className="rounded-2xl bg-butter px-4 py-3 text-center text-butter-foreground">
              <p className="font-display text-2xl">12</p>
              <p className="text-xs font-medium opacity-80">events hosted</p>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center">
          <Link
            to="/discover"
            className="text-sm font-medium text-muted-foreground squiggle-underline transition-colors hover:text-foreground"
          >
            See what else your crew is up to →
          </Link>
        </div>
      </main>
    </div>
  );
}
