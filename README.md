# Tidepool Crew

Build a group-first volunteering web app called Tidepool. 

High-fidelity prototype — no database, mock data throughout. 

Two screens connected by navigation.

PRODUCT CONCEPT

Most volunteering platforms (VolunteerMatch, Idealist) are 

solo and transactional. Tidepool reimagines volunteering as 

a group experience — like planning a trip with friends. 

Beach cleanups become sunset hangs. Reef restoration becomes 

a dive weekend. Target user: young professionals and student 

orgs who already do group activities and want low-friction 

ways to give back together.

VISUAL DIRECTION

Warm, soft, communal. Think Notion's friendly polish meets 

a Sunday morning at the beach. Pastel palette, rounded 

everything, hand-drawn accents. NOT corporate, NOT dark mode.

Palette:

- Background: warm cream #FEFAE0 (primary), #FAF3D8 (cards)

- Sage green #C8D5B9 (accent surfaces, tags)  

- Peach #F4C7AB (highlights, hover states)

- Terracotta #D4A373 (primary CTA buttons)

- Soft butter #E9C46A (impact stats, badges)

- Text: warm near-black #3D3D3D primary, #7A7A7A secondary

- Use generous rounded corners (16-24px), soft shadows, 

  and subtle off-white card surfaces

Typography:

- Display: Fraunces (italic for warmth) OR DM Serif Display 

  for headlines

- Body: Inter or DM Sans

- Use italic serif for editorial moments

Add small hand-drawn squiggle accents, dotted underlines, 

or tiny illustrated icons (use Lucide icons styled in a 

soft way, or text-based emoji-style accents sparingly).

SCREEN 1: EVENT DETAIL (homepage)

- Top nav: "Tidepool" wordmark with a small sprout icon, 

  nav links right ("Discover", "My crew", "Past events", 

  avatar)

- Above-the-fold event hero:

  - Large rounded photo (warm beach scene at golden hour)

  - Floating card overlapping the bottom of the image:

    Event title in Fraunces italic: 

    "Malibu Beach Cleanup + Sunset Bonfire"

    Sage green pill tag: "Conservation • Group event"

    Meta row: 📅 Saturday, October 5 • 🌅 4:00–8:00 PM 

              • 📍 Zuma Beach, Malibu

- Three stat cards in a row below hero:

  Stat 1 (butter): "300 lbs" — "Projected plastic removed"

  Stat 2 (peach): "24" — "People joining"  

  Stat 3 (sage): "5" — "Friends in your crew"

- Section: "Who's coming"

  - Row of avatar bubbles (8 visible, "+16 more")

  - Subsection: "From your crew" — 5 avatars with names 

    underneath ("Maya", "Jordan", "Sam", "Priya", "Alex")

- Big terracotta CTA button, full-width: 

  "Bring your crew →" 

  Smaller link below: "Or join solo"

- Section: "What we'll do"

  Editorial paragraph: "Spend the afternoon cleaning a 

  beautiful stretch of Zuma Beach with Heal the Bay, then 

  stick around for a community bonfire as the sun goes 

  down. Bring a blanket and a friend."

- "What to bring" — three-column mini grid with icons:

  Reusable water bottle • Sunscreen + hat • Closed-toe shoes

  Tidepool provides: gloves, bags, snacks, s'mores kit

- Organizer card: small profile with photo, name 

  ("Heal the Bay × Tidepool"), verified badge, 

  short bio, "12 events hosted" stat

SCREEN 2: DISCOVERY FEED (clicking "Discover" in nav)

- Header: "What's your crew up to?" in Fraunces italic

- Subtitle: "Group volunteering, near you."

- Filter chip row (horizontal scroll):

  All • This weekend • Outdoor • Animals • Coastal • 

  Trails • Skills-based • Family-friendly

  (Selected chip has sage green background)

- Featured section: "Your crew is going to..."

  Two cards side-by-side showing events where the user's 

  friends have already signed up. Each card has:

    - Small event photo, rounded

    - Event title

    - Date + location

    - "3 of your friends going" with overlapping avatars

- Main feed: "Events near you" — 4-6 event cards in a 

  2-column grid:

  Each card:

    - Rounded event photo

    - Vibe tag in colored pill (e.g., "Sunset hang", 

      "Trail day", "Dive weekend", "Family-friendly")

    - Event title (Fraunces, smaller)

    - Date • Location

    - Bottom row: small avatar stack + "X going" + 

      "Bring crew" mini button

  Sample events (mix these in):

    "Topanga Trail Restoration + Picnic" — Trail day

    "Catalina Reef Conservation Dive Weekend" — Dive trip

    "LA Animal Shelter Crew Day" — Family-friendly  

    "Ballona Wetlands Sunrise Cleanup + Coffee" — 

       Sunset hang

    "Skid Row Garden Build" — Skills-based

    "Santa Monica Pier Plastic Audit + Brunch" — 

       Sunset hang

- Floating action button bottom-right: "+ Plan a group trip"

INTERACTION NOTES

- Filter chips can toggle (mock — just change state)

- Event cards on Screen 2 navigate to Screen 1

- Subtle hover lift on cards

- Use soft, slow transitions (300-400ms ease-out)

- Desktop-first but responsive

DO NOT

- Add login/auth flows

- Add a real backend

- Build more than these two screens  

- Use sharp corners or harsh shadows

- Use blue anywhere — keep the warm palette strict

- Make it feel like a job board or LinkedIn

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://tidepool-crew-connect.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d1439914-012d-42a1-aa83-72776da1514c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
