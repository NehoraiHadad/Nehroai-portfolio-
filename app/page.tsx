'use client';

import { useState } from 'react';
import { TopNav } from './components/TopNav';
import { Hero } from './components/Hero';
import { ThePractice } from './components/ThePractice';
import { Showcase } from './components/Showcase';
import { Dossier } from './components/Dossier';
import { Footer } from './components/Footer';
import { BackgroundEffect } from './components/BackgroundEffect';
import { MobileAgent } from './components/MobileAgent';

export default function Home() {
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
