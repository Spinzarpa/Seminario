"use client"; // This is a client-side component

import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // This ensures the script only runs on the client side
    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.innerHTML = `
        function googleTranslateElementInit() {
          new google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
          );
        }
      `;
      document.head.appendChild(script);

      const externalScript = document.createElement("script");
      externalScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(externalScript);
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <div
      id="google_translate_element"
      style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}
    />
  );
}
