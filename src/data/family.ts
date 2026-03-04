export interface FamilyMember {
  slug: string;
  name: string;
  role: string;
  emoji: string;
  color: string;        // tailwind gradient from
  colorTo: string;      // tailwind gradient to
  greeting: string;
  bio: string;
  favorites: { label: string; value: string }[];
  quotes: string[];
  photos: string[];     // placeholder URLs
}

export const familyMembers: FamilyMember[] = [
  {
    slug: "jacob",
    name: "Jacob",
    role: "The Builder",
    emoji: "🛠️",
    color: "from-blue-500",
    colorTo: "to-indigo-600",
    greeting: "Hey, welcome to my corner.",
    bio: "20 years old. Building things with code, studying to be a teacher, and trying to do it all for the glory of God. If something on this app is broken, it's probably my fault — and I'm probably already fixing it.",
    favorites: [
      { label: "Song", value: "Currently rotating" },
      { label: "Food", value: "Whatever Mom made" },
      { label: "Hobby", value: "Coding at 2am" },
      { label: "Quote", value: "Build things that matter." },
    ],
    quotes: [
      "If I can build it, I will.",
      "Family first, always.",
    ],
    photos: [],
  },
  {
    slug: "abby",
    name: "Abby",
    role: "The Wonderland",
    emoji: "✨",
    color: "from-purple-400",
    colorTo: "to-pink-500",
    greeting: "Welcome to Abby's world.",
    bio: "The original reason this whole family app idea started. She already had her own site (abbywonderland.vercel.app) — now she gets a spot in the family hub too.",
    favorites: [
      { label: "Favorite Thing", value: "TBD — ask Abby" },
      { label: "Hobby", value: "TBD" },
      { label: "Song", value: "TBD" },
      { label: "Color", value: "TBD" },
    ],
    quotes: [
      "Placeholder quote — Abby gets to pick her own.",
    ],
    photos: [],
  },
  {
    slug: "mom",
    name: "Mom",
    role: "The Heart",
    emoji: "💛",
    color: "from-amber-400",
    colorTo: "to-orange-500",
    greeting: "Welcome to Mom's page.",
    bio: "The one who holds everything together. This page is for her — fill it with whatever makes her smile.",
    favorites: [
      { label: "Favorite Thing", value: "Her kids (obviously)" },
      { label: "Hobby", value: "TBD" },
      { label: "Song", value: "TBD" },
      { label: "Recipe", value: "TBD" },
    ],
    quotes: [
      "Placeholder — Mom picks her own quote.",
    ],
    photos: [],
  },
  {
    slug: "dad",
    name: "Dad",
    role: "The Rock",
    emoji: "🪨",
    color: "from-emerald-500",
    colorTo: "to-teal-600",
    greeting: "Welcome to Dad's page.",
    bio: "Steady, dependable, always there. This page is a work in progress — just like the rest of us.",
    favorites: [
      { label: "Favorite Thing", value: "TBD" },
      { label: "Hobby", value: "TBD" },
      { label: "Song", value: "TBD" },
      { label: "Team", value: "TBD" },
    ],
    quotes: [
      "Placeholder — Dad picks his own quote.",
    ],
    photos: [],
  },
  {
    slug: "atlas",
    name: "Atlas",
    role: "The Adventurer",
    emoji: "🚀",
    color: "from-sky-400",
    colorTo: "to-cyan-500",
    greeting: "Hey Atlas!",
    bio: "5 years old and already has his own game (atlasbox.vercel.app). This little dude is going places.",
    favorites: [
      { label: "Game", value: "AtlasBox (Shut the Box)" },
      { label: "Favorite Thing", value: "Space stuff" },
      { label: "Age", value: "5" },
      { label: "Superpower", value: "Being awesome" },
    ],
    quotes: [
      "Placeholder — Atlas probably said something funny today.",
    ],
    photos: [],
  },
];

export function getMember(slug: string): FamilyMember | undefined {
  return familyMembers.find((m) => m.slug === slug);
}

// Template for adding new family members — copy this and add to the array above:
/*
  {
    slug: "name",
    name: "Display Name",
    role: "Their Title",
    emoji: "🎯",
    color: "from-rose-400",
    colorTo: "to-red-500",
    greeting: "Welcome!",
    bio: "A short bio about them.",
    favorites: [
      { label: "Thing", value: "Value" },
    ],
    quotes: ["A quote they love."],
    photos: [],
  },
*/
