import { default as i18n } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import React from "react";
import ReactDOM from "react-dom";
import { I18nextProvider, initReactI18next } from "react-i18next";
import App from "./App";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    supportedLngs: ["en", "vi"],
    lng: document.querySelector("html").lang,
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },

    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <ThemeSwitcherProvider
      themeMap={themes}
      defaultTheme="dark"
      insertionPoint="styles-insertion-point"
    >
      <App />
    </ThemeSwitcherProvider>
  </I18nextProvider>,
  document.getElementById("root")
);
