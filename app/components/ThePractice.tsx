'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Layers } from 'lucide-react';
import { SKILLS } from '@/lib/data';

export const ThePractice = () => (
  <section id="practice" className="py-24 px-6 relative z-10 border-y border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, easings: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-4 tracking-tight">The Practice</h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          From LLM Orchestration to Production-Ready Full Stack Apps.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.1, easings: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, borderColor: "rgba(6, 182, 212, 0.5)" }}
            className="bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 shadow-xl transition-colors duration-300"
          >
            <h3 className="text-zinc-100 font-semibold mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              {skillGroup.category}
            </h3>
            <ul className="space-y-3">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="text-zinc-400 text-sm flex items-start gap-2 font-mono">
                  <span className="text-cyan-500/50 mt-0.5 shrink-0">{'>'}</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
