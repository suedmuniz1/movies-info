import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./services/i18n/en.json";
import pt from "./services/i18n/pt.json";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  resources: {
    en,
    pt,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
