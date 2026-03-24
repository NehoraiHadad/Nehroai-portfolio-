'use client';

import React from 'react';

export const Footer = () => (
  <footer className="py-8 text-center border-t border-zinc-800/50 bg-zinc-950 relative z-10">
    <p className="text-zinc-500 text-sm font-medium">
      © {new Date().getFullYear()} Nehor.ai. All rights reserved.
    </p>
  </footer>
);
