import { familyMembers } from "@/data/family";
import { familyQuotes } from "@/data/shared";
import { MemberCard } from "@/components/MemberCard";
import Link from "next/link";

export default function Home() {
  // Pick a rotating quote based on the day
  const dayIndex = Math.floor(Date.now() / 86400000) % familyQuotes.length;
  const todayQuote = familyQuotes[dayIndex];

  return (
    <div className="max-w-5xl mx-auto px-4 pb-24">
      {/* Hero */}
      <section className="text-center pt-12 pb-10 fade-in-up">
        <div className="inline-block mb-6">
          <span className="text-5xl">🏡</span>
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-bark mb-3">
          The Cascones
        </h1>
        <p className="text-bark/50 text-lg max-w-md mx-auto">
          Our family, one app.
        </p>
      </section>

      {/* Daily quote */}
      <section className="max-w-lg mx-auto mb-12 fade-in-up fade-in-up-delay-1">
        <div className="glass-card rounded-2xl p-6 text-center">
          <p className="font-display text-bark/70 italic text-base leading-relaxed">
            &ldquo;{todayQuote.text}&rdquo;
          </p>
          <p className="text-bark/40 text-sm mt-2">
            &mdash; {todayQuote.author}
          </p>
        </div>
      </section>

      {/* Family grid */}
      <section className="mb-16">
        <h2 className="font-display text-2xl text-bark mb-6 text-center">
          The Family
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {familyMembers.map((member, i) => (
            <MemberCard key={member.slug} member={member} index={i} />
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="text-center">
        <Link
          href="/family"
          className="inline-flex items-center gap-2 glass-card rounded-full px-6 py-3 text-sm text-bark/60 hover:text-bark transition-colors"
        >
          <span>Family Board & Events</span>
          <span className="text-bark/30">&rarr;</span>
        </Link>
      </section>
    </div>
  );
}
