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
      document.cookie = "googtrans=/en/nl; path=/; domain=" + window.location.hostname;
      document.cookie = "googtrans=/en/nl; path=/";
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
          pageLanguage: "en",
          includedLanguages: "nl,en,de,fr,es,tr,zh-CN", // Common languages for global accessibility
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="flex items-center space-x-2 transition-colors cursor-pointer">
      <Globe className="w-4 h-4 text-white" />
      <div id="google_translate_element" className="translate-widget-container"></div>
    </div>
  );
}
