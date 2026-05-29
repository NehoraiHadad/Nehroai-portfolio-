'use client';

import React from 'react';
import { useDictionary } from '@/lib/i18n/provider';

export const Footer = () => {
  const { footer } = useDictionary();

  return (
    <footer className="border-t border-line bg-page relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-fg-2 bidi-ltr" dir="ltr">
          nehorai // engineering
        </span>
        <p className="text-fg-2 text-sm">
          {footer.copyrightTemplate.replace('{year}', String(new Date().getFullYear()))}
        </p>
      </div>
    </footer>
  );
};
