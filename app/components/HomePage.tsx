'use client';

import { useState } from 'react';
import { TopNav } from './TopNav';
import { Hero } from './Hero';
import { ThePractice } from './ThePractice';
import { Showcase } from './Showcase';
import { Dossier } from './Dossier';
import { Footer } from './Footer';
import { BackgroundEffect } from './BackgroundEffect';
import { MobileAgent } from './MobileAgent';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-cyan-500/30 relative">
      <BackgroundEffect />
      <TopNav mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main className="relative z-10">
        <Hero />
        <ThePractice />
        <Showcase />
        <Dossier />
      </main>
      <Footer />
      <MobileAgent />
    </div>
  );
}
