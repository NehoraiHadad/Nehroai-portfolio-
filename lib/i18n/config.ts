export const locales = ['en', 'he'] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = 'en';

export const localeDirections: Record<AppLocale, 'ltr' | 'rtl'> = {
  en: 'ltr',
  he: 'rtl',
};

export function isLocale(value: string): value is AppLocale {
  return locales.includes(value as AppLocale);
}

export function getLocaleDirection(locale: AppLocale) {
  return localeDirections[locale];
}

function parseAcceptLanguage(header: string | null) {
  if (!header) {
    return [];
  }

  return header
    .split(',')
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(';');
      const qualityParam = params.find((param) => param.trim().startsWith('q='));
      const quality = qualityParam ? Number.parseFloat(qualityParam.split('=')[1] ?? '1') : 1;

      return {
        tag: rawTag.toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter(({ tag }) => tag.length > 0)
    .sort((a, b) => b.quality - a.quality);
}

export function resolveLocaleFromHeader(header: string | null): AppLocale {
  const requestedLocales = parseAcceptLanguage(header);

  for (const { tag } of requestedLocales) {
    if (tag === 'he' || tag.startsWith('he-') || tag === 'iw' || tag.startsWith('iw-')) {
      return 'he';
    }

    if (tag === 'en' || tag.startsWith('en-')) {
      return 'en';
    }
  }

  return defaultLocale;
}
