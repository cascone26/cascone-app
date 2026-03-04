"use client";

import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    if (localStorage.getItem("cascone-install-dismissed")) {
      setDismissed(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Check if running as installed PWA
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setDismissed(true);
    }

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem("cascone-install-dismissed", "true");
  };

  if (!showBanner || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto install-banner rounded-2xl p-4 shadow-lg fade-in-up">
      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5">🏠</span>
        <div className="flex-1">
          <p className="font-semibold text-white text-sm">
            Add to Home Screen
          </p>
          <p className="text-white/80 text-xs mt-0.5">
            Install The Cascones app for quick access — works offline too.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            onClick={handleDismiss}
            className="text-white/60 hover:text-white text-xs px-2 py-1"
          >
            Later
          </button>
          <button
            onClick={handleInstall}
            className="bg-white text-hearth font-semibold text-xs px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
}
