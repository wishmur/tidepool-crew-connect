import heroBeach from "@/assets/hero-beach.jpg";
import eventTrail from "@/assets/event-trail.jpg";
import eventDive from "@/assets/event-dive.jpg";
import eventShelter from "@/assets/event-shelter.jpg";
import eventWetlands from "@/assets/event-wetlands.jpg";
import eventGarden from "@/assets/event-garden.jpg";
import eventPier from "@/assets/event-pier.jpg";

export const images = {
  heroBeach,
  eventTrail,
  eventDive,
  eventShelter,
  eventWetlands,
  eventGarden,
  eventPier,
};

export type Vibe = "Sunset hang" | "Trail day" | "Dive weekend" | "Family-friendly" | "Skills-based";

export const vibeColor: Record<Vibe, string> = {
  "Sunset hang": "bg-peach text-peach-foreground",
  "Trail day": "bg-sage text-sage-foreground",
  "Dive weekend": "bg-butter text-butter-foreground",
  "Family-friendly": "bg-peach text-peach-foreground",
  "Skills-based": "bg-sage text-sage-foreground",
};

export type Person = { name: string; tone: string };

// Soft avatar tones (warm palette only)
export const avatarTones = [
  "bg-sage text-sage-foreground",
  "bg-peach text-peach-foreground",
  "bg-butter text-butter-foreground",
  "bg-terracotta text-terracotta-foreground",
];

export const crew: Person[] = [
  { name: "Maya", tone: avatarTones[0] },
  { name: "Jordan", tone: avatarTones[1] },
  { name: "Sam", tone: avatarTones[2] },
  { name: "Priya", tone: avatarTones[3] },
  { name: "Alex", tone: avatarTones[0] },
];

export const attendees = ["Maya", "Jordan", "Sam", "Priya", "Alex", "Nico", "Tess", "Owen"];

export type EventCard = {
  id: string;
  title: string;
  vibe: Vibe;
  date: string;
  location: string;
  image: string;
  going: number;
  friendsGoing: number;
};

export const featuredEvents: EventCard[] = [
  {
    id: "wetlands",
    title: "Ballona Wetlands Sunrise Cleanup + Coffee",
    vibe: "Sunset hang",
    date: "Sat, Oct 12 · 7:00 AM",
    location: "Playa del Rey",
    image: images.eventWetlands,
    going: 18,
    friendsGoing: 3,
  },
  {
    id: "dive",
    title: "Catalina Reef Conservation Dive Weekend",
    vibe: "Dive weekend",
    date: "Oct 18–20 · All weekend",
    location: "Catalina Island",
    image: images.eventDive,
    going: 12,
    friendsGoing: 3,
  },
];

export const feedEvents: EventCard[] = [
  {
    id: "trail",
    title: "Topanga Trail Restoration + Picnic",
    vibe: "Trail day",
    date: "Sun, Oct 6 · 9:00 AM",
    location: "Topanga Canyon",
    image: images.eventTrail,
    going: 16,
    friendsGoing: 2,
  },
  {
    id: "dive",
    title: "Catalina Reef Conservation Dive Weekend",
    vibe: "Dive weekend",
    date: "Oct 18–20 · All weekend",
    location: "Catalina Island",
    image: images.eventDive,
    going: 12,
    friendsGoing: 3,
  },
  {
    id: "shelter",
    title: "LA Animal Shelter Crew Day",
    vibe: "Family-friendly",
    date: "Sat, Oct 11 · 10:00 AM",
    location: "Downtown LA",
    image: images.eventShelter,
    going: 9,
    friendsGoing: 1,
  },
  {
    id: "wetlands",
    title: "Ballona Wetlands Sunrise Cleanup + Coffee",
    vibe: "Sunset hang",
    date: "Sat, Oct 12 · 7:00 AM",
    location: "Playa del Rey",
    image: images.eventWetlands,
    going: 18,
    friendsGoing: 3,
  },
  {
    id: "garden",
    title: "Skid Row Garden Build",
    vibe: "Skills-based",
    date: "Sun, Oct 13 · 8:30 AM",
    location: "Downtown LA",
    image: images.eventGarden,
    going: 14,
    friendsGoing: 2,
  },
  {
    id: "pier",
    title: "Santa Monica Pier Plastic Audit + Brunch",
    vibe: "Sunset hang",
    date: "Sat, Oct 19 · 11:00 AM",
    location: "Santa Monica",
    image: images.eventPier,
    going: 21,
    friendsGoing: 4,
  },
];

export const filters = [
  "All",
  "This weekend",
  "Outdoor",
  "Animals",
  "Coastal",
  "Trails",
  "Skills-based",
  "Family-friendly",
];
