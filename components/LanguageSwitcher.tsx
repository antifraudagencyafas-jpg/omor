"use client";

import { useEffect } from "react";
import { Globe } from "lucide-react";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function LanguageSwitcher() {
  useEffect(() => {
    // Set cookie to default to Dutch if not already set
    // The format for googtrans is /source/target
    if (!document.cookie.includes("googtrans")) {
      document.cookie = "googtrans=/nl/nl; path=/; domain=" + window.location.hostname;
      document.cookie = "googtrans=/nl/nl; path=/";
    }

    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const addScript = document.createElement("script");
      addScript.id = scriptId;
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "nl",
          includedLanguages: "nl,en,de,fr,es,tr,zh-CN", // Common languages for global accessibility
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const switchLanguage = (lang: string) => {
    // Set both the specific path and the domain-wide cookie to ensure it sticks
    document.cookie = `googtrans=/nl/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/nl/${lang}; path=/`;

    // Trigger Google Translate without page reload
    const googleTranslateCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (googleTranslateCombo) {
      googleTranslateCombo.value = lang;
      googleTranslateCombo.dispatchEvent(new Event("change"));
    } else {
      // Fallback if the widget is not yet loaded
      window.location.reload();
    }
  };

  return (
    <div className="flex items-center space-x-3 text-xs font-bold tracking-widest text-white/90">
      <button
        onClick={() => switchLanguage('nl')}
        className="hover:text-white transition-colors cursor-pointer uppercase border-b border-transparent hover:border-white pb-0.5"
      >
        NL
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => switchLanguage('en')}
        className="hover:text-white transition-colors cursor-pointer uppercase border-b border-transparent hover:border-white pb-0.5"
      >
        EN
      </button>
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
}
