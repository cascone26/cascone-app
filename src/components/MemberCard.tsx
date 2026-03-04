import Link from "next/link";
import type { FamilyMember } from "@/data/family";

export function MemberCard({
  member,
  index,
}: {
  member: FamilyMember;
  index: number;
}) {
  return (
    <Link
      href={`/${member.slug}`}
      className={`member-card glass-card rounded-2xl p-6 block fade-in-up-delay-${index + 1}`}
    >
      <div
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} ${member.colorTo} flex items-center justify-center text-2xl mb-4 shadow-md`}
      >
        {member.emoji}
      </div>
      <h3 className="font-display text-xl text-bark mb-1">{member.name}</h3>
      <p className="text-bark/50 text-sm">{member.role}</p>
    </Link>
  );
}
