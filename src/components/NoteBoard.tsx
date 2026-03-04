"use client";

import { useState, useEffect } from "react";

export function NoteBoard({ memberSlug }: { memberSlug: string }) {
  const storageKey = `cascone-notes-${memberSlug}`;
  const [notes, setNotes] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setNotes(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
  }, [storageKey]);

  const addNote = () => {
    if (!input.trim()) return;
    const updated = [input.trim(), ...notes];
    setNotes(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
    setInput("");
  };

  const removeNote = (index: number) => {
    const updated = notes.filter((_, i) => i !== index);
    setNotes(updated);
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <h3 className="font-display text-lg text-bark mb-4">
        Notes & Messages
      </h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNote()}
          placeholder="Leave a note..."
          className="flex-1 bg-white/60 border border-warm-200 rounded-xl px-4 py-2 text-sm text-bark placeholder:text-bark/30 focus:outline-none focus:border-warm-400 transition-colors"
        />
        <button
          onClick={addNote}
          className="bg-gradient-to-r from-hearth to-warm-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Post
        </button>
      </div>
      {notes.length === 0 ? (
        <p className="text-bark/30 text-sm text-center py-4">
          No notes yet. Be the first to leave one.
        </p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {notes.map((note, i) => (
            <div
              key={i}
              className="bg-white/50 rounded-xl px-4 py-3 text-sm text-bark flex items-start gap-2 group"
            >
              <span className="flex-1">{note}</span>
              <button
                onClick={() => removeNote(i)}
                className="text-bark/20 hover:text-hearth text-xs opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
