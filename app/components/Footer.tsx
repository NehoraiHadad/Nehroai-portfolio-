'use client';

import React from 'react';
import { useDictionary } from '@/lib/i18n/provider';

export const Footer = () => {
  const { footer } = useDictionary();

  return (
    <footer className="py-8 text-center border-t border-zinc-800/50 bg-zinc-950 relative z-10">
      <p className="text-zinc-500 text-sm font-medium">
        {footer.copyrightTemplate.replace('{year}', String(new Date().getFullYear()))}
      </p>
    </footer>
  );
};
