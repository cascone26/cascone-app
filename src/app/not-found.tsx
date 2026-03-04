import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 pb-24 text-center pt-20">
      <div className="text-6xl mb-6 opacity-40">🏠</div>
      <h1 className="font-display text-3xl text-bark mb-3">
        Page Not Found
      </h1>
      <p className="text-bark/50 mb-8">
        This room doesn&apos;t exist yet — but the rest of the house is waiting.
      </p>
      <Link
        href="/"
        className="inline-block glass-card rounded-full px-6 py-3 text-sm text-bark/60 hover:text-bark transition-colors"
      >
        &larr; Go home
      </Link>
    </div>
  );
}
