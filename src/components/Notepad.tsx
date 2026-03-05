"use client";

import { useState, useEffect, useRef } from "react";

export function Notepad() {
  const storageKey = "cascone-notepad-jacob";
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setText(saved);
  }, []);

  const handleChange = (val: string) => {
    setText(val);
    localStorage.setItem(storageKey, val);
  };

  const copyAll = async () => {
    if (!text.trim()) return;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const clear = () => {
    setText("");
    localStorage.removeItem(storageKey);
    textareaRef.current?.focus();
  };

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-display text-lg text-bark">Notepad</h3>
        <div className="flex gap-2">
          <button
            onClick={copyAll}
            className="text-xs px-3 py-1.5 rounded-lg bg-white/60 border border-warm-200 text-bark/60 hover:text-bark hover:border-warm-400 transition-colors"
          >
            {copied ? "Copied!" : "Copy All"}
          </button>
          <button
            onClick={clear}
            className="text-xs px-3 py-1.5 rounded-lg bg-white/60 border border-warm-200 text-bark/20 hover:text-hearth hover:border-hearth/30 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Write anything here... saves automatically."
        rows={8}
        className="w-full bg-white/60 border border-warm-200 rounded-xl px-4 py-3 text-sm text-bark placeholder:text-bark/30 focus:outline-none focus:border-warm-400 transition-colors resize-y leading-relaxed"
      />
    </div>
  );
}
