import { notFound } from "next/navigation";
import { familyMembers, getMember } from "@/data/family";
import { NoteBoard } from "@/components/NoteBoard";
import { Notepad } from "@/components/Notepad";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return familyMembers.map((m) => ({ member: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ member: string }>;
}): Promise<Metadata> {
  const { member: slug } = await params;
  const member = getMember(slug);
  if (!member) return { title: "Not Found" };
  return {
    title: `${member.name} | The Cascones`,
    description: member.bio,
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ member: string }>;
}) {
  const { member: slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 pb-24">
      {/* Back link */}
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
        <div
          className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} ${member.colorTo} flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg`}
        >
          {member.emoji}
        </div>
        <h1 className="font-display text-3xl sm:text-4xl text-bark mb-1">
          {member.name}
        </h1>
        <p className="text-bark/50">{member.role}</p>
      </section>

      {/* Greeting */}
      <section className="mb-8 fade-in-up fade-in-up-delay-1">
        <div className="glass-card rounded-2xl p-6">
          <p className="font-display text-lg text-bark/80 italic">
            {member.greeting}
          </p>
          <p className="text-bark/60 text-sm mt-3 leading-relaxed">
            {member.bio}
          </p>
        </div>
      </section>

      {/* Favorites */}
      <section className="mb-8 fade-in-up fade-in-up-delay-2">
        <h2 className="font-display text-xl text-bark mb-4">Favorites</h2>
        <div className="grid grid-cols-2 gap-3">
          {member.favorites.map((fav) => (
            <div key={fav.label} className="glass-card rounded-xl p-4">
              <p className="text-bark/40 text-xs uppercase tracking-wider mb-1">
                {fav.label}
              </p>
              <p className="text-bark text-sm font-medium">{fav.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery Placeholder */}
      <section className="mb-8 fade-in-up fade-in-up-delay-3">
        <h2 className="font-display text-xl text-bark mb-4">Photos</h2>
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="text-4xl mb-3 opacity-30">📷</div>
          <p className="text-bark/30 text-sm">
            Photos coming soon. Add images to the <code className="text-bark/40 bg-bark/5 px-1 rounded">public/photos/{member.slug}/</code> folder.
          </p>
        </div>
      </section>

      {/* Quotes */}
      {member.quotes.length > 0 && (
        <section className="mb-8 fade-in-up fade-in-up-delay-4">
          <h2 className="font-display text-xl text-bark mb-4">Quotes</h2>
          <div className="space-y-3">
            {member.quotes.map((quote, i) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <p className="text-bark/70 text-sm italic">
                  &ldquo;{quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Notepad — Jacob only */}
      {member.slug === "jacob" && (
        <section className="mb-8 fade-in-up fade-in-up-delay-5">
          <Notepad />
        </section>
      )}

      {/* Note Board */}
      <section className="fade-in-up fade-in-up-delay-5">
        <NoteBoard memberSlug={member.slug} />
      </section>
    </div>
  );
}
