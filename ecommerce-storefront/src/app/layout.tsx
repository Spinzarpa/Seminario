"use client";

import "styles/globals.css";
import { TolgeeProvider, Tolgee, FormatSimple, DevTools } from '@tolgee/react';
import { useEffect, useState } from 'react';
import enLocale from '../i18n/en.json';
import arLocale from '../i18n/ar.json';
import deLocale from '../i18n/de.json';
import esLocale from '../i18n/es.json';
import frLocale from '../i18n/fr.json';
import hiLocale from '../i18n/hi.json';
import itLocale from '../i18n/it.json';
import ptLocale from '../i18n/pt.json';
import ruLocale from '../i18n/ru.json';
import zhLocale from '../i18n/zh.json';

// Inicializar Tolgee
const initTolgee = (language: string) => {
  return Tolgee()
    .use(DevTools())
    .use(FormatSimple())
    .init({
      defaultLanguage: language,
      apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
      apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
      staticData: {
        en: enLocale,
        ar: arLocale,
        de: deLocale,
        es: esLocale,
        fr: frLocale,
        hi: hiLocale,
        it: itLocale,
        pt: ptLocale,
        ru: ruLocale,
        zh: zhLocale,
      },
    });
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [tolgeeInstance, setTolgeeInstance] = useState(initTolgee('en'));

  useEffect(() => {
    const browserLanguage = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'ar', 'de', 'es', 'fr', 'hi', 'it', 'pt', 'ru', 'zh'];
    const language = supportedLanguages.includes(browserLanguage) ? browserLanguage : 'en';
    setCurrentLocale(language);
    setTolgeeInstance(initTolgee(language));
  }, []);

  return (
    <html lang={currentLocale} data-mode="light">
      <body>
        <TolgeeProvider tolgee={tolgeeInstance} fallback="Loading...">
          <main className="relative">{children}</main>
        </TolgeeProvider>
      </body>
    </html>
  );
}
