export const translatePageContent = async (targetLang) => {
  const elements = document.querySelectorAll(
    "body *:not(script):not(style):not(meta):not(link)"
  );

  for (let element of elements) {
    if (
      element.childNodes.length === 1 &&
      element.childNodes[0].nodeType === 3
    ) {
      // Only translate text nodes
      const originalText = element.innerText.trim();
      if (originalText) {
        try {
          const translatedText = await fetchTranslation(
            originalText,
            targetLang
          );
          element.innerText = translatedText;
        } catch (error) {
          console.error("Translation error:", error);
        }
      }
    }
  }
};

const fetchTranslation = async (text, targetLang) => {
  const encodedText = encodeURIComponent(text);
  const response = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodedText}`
  );
  const data = await response.json();
  return data[0].map((item) => item[0]).join("");
};
