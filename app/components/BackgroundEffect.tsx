'use client';

import React from 'react';
import { motion } from 'motion/react';

export const BackgroundEffect = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">
    {/* Subtle Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
    
    {/* Node Network Pattern */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D1FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>

    {/* Animated Orbs */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.15, 0.1],
        x: [0, 50, 0],
        y: [0, -50, 0]
      }}
      transition={{ duration: 15, repeat: Infinity }}
      className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/20 blur-[120px]"
    />
    <motion.div 
      animate={{ 
        scale: [1, 1.5, 1],
        opacity: [0.05, 0.1, 0.05],
        x: [0, -50, 0],
        y: [0, 50, 0]
      }}
      transition={{ duration: 20, repeat: Infinity, delay: 2 }}
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"
    />
  </div>
);
