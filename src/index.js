import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import httpApi from "i18next-http-backend";
import "./i18n";

import './index.css';


//localisation
// i18n
//     .use(initReactI18next)
//     .use(languageDetector)
//     .use(httpApi)
//     .init({
//         supportedLngs: ["en", "ru"],
//         fallbackLng: "en",
//         detection: {
//            order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
//             caches: ["cookie"]
//         },
//         backend: {
//             loadPath: "/assets/locales/{{lng}}/translation.json"
//         }
//     })



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

