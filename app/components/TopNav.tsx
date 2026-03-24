'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Menu, X } from 'lucide-react';

export const TopNav = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: (v: boolean) => void }) => {
  const [aiNeon, setAiNeon] = useState(false);
  const [dotVisible, setDotVisible] = useState(false);

  useEffect(() => {
    const neonTimer = setTimeout(() => setAiNeon(true), 2000);
    const dotTimer = setTimeout(() => setDotVisible(true), 4000);
    return () => {
      clearTimeout(neonTimer);
      clearTimeout(dotTimer);
    };
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex flex-col justify-center">
          <a href="#" aria-label="Nehorai" className="text-2xl font-bold tracking-tighter text-zinc-100 relative group inline-block w-max">
            <span aria-hidden="true">
              Nehor
              <motion.span 
                animate={{ 
                  color: aiNeon ? '#22d3ee' : '#f4f4f5', // cyan-400 vs zinc-100
                  textShadow: aiNeon ? '0px 0px 12px rgba(34,211,238,0.8)' : '0px 0px 0px rgba(34,211,238,0)'
                }}
                transition={{ duration: 0.5 }}
                className="font-light"
              >
                a
                <span className="relative inline-block">
                  <motion.span 
                    id="logo-dot" 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: dotVisible ? 1 : 0, 
                      scale: dotVisible ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, type: 'spring' }}
                    className="absolute top-[0.12em] left-[50%] -translate-x-1/2 w-[0.16em] h-[0.16em] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                  />
                  ı
                </span>
              </motion.span>
            </span>
          </a>
          <span className="text-[10px] text-zinc-500 tracking-widest uppercase mt-0.5 hidden sm:block">
            The Agentic Practice // Illuminating Complex Systems
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Practice', 'Showcase'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-zinc-400 hover:text-cyan-400 transition-colors">
              {item === 'Practice' ? 'The Practice' : 'Projects'}
            </a>
          ))}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#dossier" 
            className="bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white transition-colors flex items-center gap-2 shadow-sm"
          >
            <Briefcase className="w-4 h-4" />
            Quick Dossier
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              <a href="#practice" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-medium transition-colors">The Practice</a>
              <a href="#showcase" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-cyan-400 font-medium transition-colors">Projects</a>
              <a href="#dossier" onClick={() => setMobileMenuOpen(false)} className="bg-zinc-100 text-zinc-950 px-4 py-2 rounded-lg text-sm font-semibold text-center mt-2">
                Quick Dossier
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
