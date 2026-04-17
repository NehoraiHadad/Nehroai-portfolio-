'use client';

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { AppLocale } from './config';
import type { AppDictionary } from './dictionaries/types';

interface I18nContextValue {
  locale: AppLocale;
  dictionary: AppDictionary;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  dictionary,
  children,
}: {
  locale: AppLocale;
  dictionary: AppDictionary;
  children: ReactNode;
}) {
  return <I18nContext.Provider value={{ locale, dictionary }}>{children}</I18nContext.Provider>;
}

function useI18nContext() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('I18nProvider is missing in the React tree.');
  }

  return context;
}

export function useDictionary() {
  return useI18nContext().dictionary;
}

export function useLocale() {
  return useI18nContext().locale;
}

export function useDirection() {
  return useI18nContext().dictionary.locale.direction;
}
