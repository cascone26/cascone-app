import { familyQuotes, familyEvents } from "@/data/shared";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family | The Cascones",
  description: "Shared family space — quotes, events, and memories.",
};

export default function FamilyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-24">
      <div className="pt-4 pb-6">
        <Link
          href="/"
          className="text-bark/40 hover:text-bark text-sm transition-colors"
        >
          &larr; Back home
        </Link>
      </div>

      {/* Header */}
      <section className="text-center mb-10 fade-in-up">
        <span className="text-4xl mb-4 block">👨‍👩‍👧‍👦</span>
        <h1 className="font-display text-3xl sm:text-4xl text-bark mb-2">
          Family Space
        </h1>
        <p className="text-bark/50">
          The stuff that belongs to all of us.
        </p>
      </section>

      {/* Quotes */}
      <section className="mb-10 fade-in-up fade-in-up-delay-1">
        <h2 className="font-display text-xl text-bark mb-4">
          Quotes We Love
        </h2>
        <div className="space-y-3">
          {familyQuotes.map((q, i) => (
            <div key={i} className="glass-card rounded-xl p-5">
              <p className="text-bark/70 italic text-sm leading-relaxed">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-bark/40 text-xs mt-2">
                &mdash; {q.author}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mb-10 fade-in-up fade-in-up-delay-2">
        <h2 className="font-display text-xl text-bark mb-4">
          Family Events
        </h2>
        <div className="space-y-3">
          {familyEvents.map((event, i) => (
            <div key={i} className="glass-card rounded-xl p-5 flex items-start gap-4">
              <span className="text-2xl">{event.emoji}</span>
              <div>
                <h3 className="font-medium text-bark text-sm">
                  {event.title}
                </h3>
                <p className="text-bark/40 text-xs mt-0.5">{event.date}</p>
                <p className="text-bark/60 text-sm mt-1">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shared Memories Placeholder */}
      <section className="fade-in-up fade-in-up-delay-3">
        <h2 className="font-display text-xl text-bark mb-4">
          Shared Memories
        </h2>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3 opacity-30">🖼️</div>
          <p className="text-bark/30 text-sm">
            A place for shared family photos and memories. Coming soon.
          </p>
        </div>
      </section>
    </div>
  );
}
