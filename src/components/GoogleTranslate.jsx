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

      window.googleTranslateElementInit = function () {
        try {
          if (!document.getElementById("google_translate_element")) return;
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,es,de,it,fr,pt,bn",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        } catch (error) {
          console.error("Google Translate Initialization Error:", error);
        }
      };

      // ✅ Catch and ignore "removeChild" errors
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        try {
          return originalRemoveChild.call(this, child);
        } catch (error) {
          if (error.name !== "NotFoundError") {
            console.warn("Ignored removeChild error:", error);
          }
        }
      };

      setTimeout(() => {
        if (window.google && window.google.translate) {
          window.googleTranslateElementInit();
        }
      }, 2000);
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "block", marginTop: "10px" }}
    ></div>
  );
}
