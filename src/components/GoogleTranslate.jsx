"use client";
import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !scriptLoaded) {
      setScriptLoaded(true); // ✅ Ensure script loads only once

      // ✅ Prevent duplicate script injection
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onload = () => {
          console.log("✅ Google Translate script loaded successfully");
          initializeGoogleTranslate();
        };
        script.onerror = () => {
          console.error("❌ Google Translate failed to load");
        };
        document.body.appendChild(script);
      } else {
        initializeGoogleTranslate();
      }

      // ✅ Ensure Google Translate initializes after script loads
      function initializeGoogleTranslate() {
        try {
          window.googleTranslateElementInit = function () {
            if (!document.getElementById("google_translate_element")) return;
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: "en,es,de,it,fr,pt",
                autoDisplay: false,
              },
              "google_translate_element"
            );
          };
          setTimeout(() => {
            if (window.google && window.google.translate) {
              window.googleTranslateElementInit();
              console.log("✅ Google Translate initialized");
            }
          }, 1000);
        } catch (error) {
          console.error("Google Translate Initialization Error:", error);
        }
      }

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
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ display: "block", marginTop: "10px" }}
    ></div>
  );
}
