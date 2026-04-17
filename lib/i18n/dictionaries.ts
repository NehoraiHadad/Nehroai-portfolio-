import 'server-only';

import type { AppLocale } from './config';
import type { AppDictionary } from './dictionaries/types';

const dictionaries: Record<AppLocale, () => Promise<AppDictionary>> = {
  en: () => import('./dictionaries/en').then((module) => module.enDictionary),
  he: () => import('./dictionaries/he').then((module) => module.heDictionary),
};

export async function getDictionary(locale: AppLocale) {
  return dictionaries[locale]();
}
