"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // ✅ Prevent duplicate script injection
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }

      // ✅ Ensure Google Translate initializes correctly
      window.googleTranslateElementInit = function () {
        if (
          !document.querySelector(".goog-te-combo") &&
          document.getElementById("google_translate_element")
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,de,it,fr,pt",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      // ✅ Check if Google Translate is loaded and initialize it
      setTimeout(() => {
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      }, 1500); // ✅ Increased delay to ensure script is fully loaded
    }
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }}></div>;
}
