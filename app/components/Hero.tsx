'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, User, Brain, Network, Database, Cpu, Sparkles } from 'lucide-react';
import { InteractiveAgent } from './InteractiveAgent';

const CYCLING_WORDS = ['Autonomy.', 'Intelligence.', 'Clarity.', 'Illumination.'];
const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz0123456789!<>-_\\/[]{}cxz=+*^?#';

const ScrambleText = () => {
  const [text, setText] = useState(CYCLING_WORDS[0]);
  const [targetWord, setTargetWord] = useState(CYCLING_WORDS[0]);

  useEffect(() => {
    let currentIndex = 0;
    let scrambleInterval: NodeJS.Timeout;

    const cycleInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % CYCLING_WORDS.length;
      const nextWord = CYCLING_WORDS[currentIndex];
      setTargetWord(nextWord);
      let iteration = 0;

      clearInterval(scrambleInterval);
      
      scrambleInterval = setInterval(() => {
        setText(nextWord.split('').map((char, index) => {
          if (index < Math.floor(iteration)) {
            return nextWord[index];
          }
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }).join(''));

        if (iteration >= nextWord.length) {
          clearInterval(scrambleInterval);
          setText(nextWord);
        }
        
        iteration += 1 / 3;
      }, 30);

    }, 4000);

    return () => {
      clearInterval(cycleInterval);
      clearInterval(scrambleInterval);
    };
  }, []);

  return (
    <span className="relative inline-block whitespace-nowrap">
      {/* Invisible target word dictates the container width, preventing layout shifts */}
      <span className="invisible">{targetWord}</span>
      {/* Absolutely positioned scrambling text doesn't affect document flow */}
      <span className="absolute left-0 top-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {text}
      </span>
    </span>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.8, easings: [0.22, 1, 0.36, 1] } 
  }
};

const wordVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.2 }
  }
};

const charVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    transition: { duration: 0.8, easings: [0.22, 1, 0.36, 1] } 
  }
};

const TARGETS = [
  { id: 0, label: "LLM_ORCHESTRATION", icon: Brain, left: '75%', top: '35%' },
  { id: 1, label: "VECTOR_SEARCH", icon: Cpu, left: '85%', top: '50%' },
  { id: 2, label: "AUTONOMOUS_AGENTS", icon: Network, left: '70%', top: '65%' },
  { id: 3, label: "RAG_PIPELINE", icon: Database, left: '90%', top: '75%' },
  { id: 4, label: "NEURAL_NETWORKS", icon: Sparkles, left: '65%', top: '85%' },
];

const IlluminationBackground = () => {
  const [beamStage, setBeamStage] = useState(0); // 0: hidden, 1: growing, 2: active
  const [activeTarget, setActiveTarget] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [beamState, setBeamState] = useState({ x: 0, y: 0, angle: 0, ready: false });
  const [scrollY, setScrollY] = useState(0);

  // 1. Sequence timing
  useEffect(() => {
    const growTimer = setTimeout(() => setBeamStage(1), 4000); // Beam starts growing
    const activeTimer = setTimeout(() => setBeamStage(2), 5500); // Beam reaches first target
    return () => {
      clearTimeout(growTimer);
      clearTimeout(activeTimer);
    };
  }, []);

  useEffect(() => {
    if (beamStage < 2) return;
    const interval = setInterval(() => {
      setIsMoving(true);
      setActiveTarget(prev => (prev + 1) % TARGETS.length);
      
      // Beam takes 1.5s to move. Highlight target after it arrives.
      setTimeout(() => {
        setIsMoving(false);
      }, 1500);
    }, 4000);
    return () => clearInterval(interval);
  }, [beamStage]);

  // 2. Continuous tracking of origin and target
  useEffect(() => {
    let animationFrameId: number;
    let lastX = -999, lastY = -999, lastAngle = -999;

    const trackPositions = () => {
      const dot = document.getElementById('logo-dot');
      const targetEl = document.getElementById(`target-${activeTarget}`);

      if (dot && targetEl) {
        const dotRect = dot.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();

        // Viewport-relative coordinates
        const originX = dotRect.left + dotRect.width / 2;
        const originY = dotRect.top + dotRect.height / 2;

        const targetX = targetRect.left + targetRect.width / 2;
        const targetY = targetRect.top + targetRect.height / 2;

        const dx = targetX - originX;
        const dy = targetY - originY;
        
        // Calculate angle from straight down (y-axis)
        const angle = Math.atan2(dx, dy) * (180 / Math.PI);

        // Only update state if changed significantly (e.g., > 0.5px or > 0.5deg)
        if (Math.abs(lastX - originX) > 0.5 || Math.abs(lastY - originY) > 0.5 || Math.abs(lastAngle - angle) > 0.5) {
          lastX = originX;
          lastY = originY;
          lastAngle = angle;
          setBeamState({
            x: originX,
            y: originY,
            angle: -angle, // Negative because CSS rotate is clockwise, and we want to rotate towards dx
            ready: true
          });
        }
      }
      
      animationFrameId = requestAnimationFrame(trackPositions);
    };

    trackPositions();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeTarget]);

  // 3. Track scroll to fade out effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const globalOpacity = Math.max(0, 1 - scrollY / 400);

  if (globalOpacity === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ opacity: globalOpacity }}>
      {/* The Beam - Rendered via Portal to be above everything including TopNav */}
      {beamState.ready && createPortal(
        <motion.div
          className="fixed pointer-events-none z-[60]"
          style={{
            top: beamState.y,
            left: beamState.x,
            width: '1500px',
            height: '150vh',
            x: '-50%',
            transformOrigin: 'top center',
            background: 'linear-gradient(180deg, rgba(34,211,238,0.4) 0%, rgba(34,211,238,0.05) 60%, transparent 100%)',
            filter: 'blur(4px)',
          }}
          initial={{
            opacity: 0,
            clipPath: 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)',
            rotate: 0
          }}
          animate={{
            opacity: beamStage > 0 ? globalOpacity : 0,
            clipPath: beamStage === 0 
              ? 'polygon(50% 0%, 50% 0%, 50% 0%, 50% 0%)' 
              : beamStage === 1 
                ? 'polygon(50% 0%, 50% 0%, 51% 100%, 49% 100%)' // Grow down to first target
                : isMoving 
                  ? 'polygon(50% 0%, 50% 0%, 58% 100%, 42% 100%)' // Wider while searching
                  : 'polygon(50% 0%, 50% 0%, 51% 100%, 49% 100%)', // Laser focus when stopped
            rotate: beamState.angle,
          }}
          transition={{
            opacity: { duration: 0.5 },
            clipPath: { duration: 1.5 },
            rotate: { type: "spring", stiffness: 40, damping: 15 }
          }}
        />,
        document.body
      )}

      {/* The Targets */}
      <div className="absolute inset-0 max-w-7xl mx-auto">
        {TARGETS.map((target, idx) => {
          const isActive = beamStage === 2 && activeTarget === idx;
          const isHighlighted = isActive && !isMoving;
          const Icon = target.icon;
          
          return (
            <motion.div
              key={target.id}
              id={`target-${idx}`}
              className="absolute flex flex-col items-center justify-center gap-3 z-10"
              style={{ left: target.left, top: target.top, x: '-50%', y: '-50%' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHighlighted ? 1 : 0.15,
                  scale: isHighlighted ? 1 : 0.8,
                  filter: isHighlighted ? 'blur(0px)' : 'blur(2px)'
                }}
                transition={{ duration: 0.5 }} 
                className="relative flex flex-col items-center gap-2"
              >
                {/* Icon with Glowing Ring */}
                <div className="relative p-2 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      opacity: isHighlighted ? 1 : 0,
                      scale: isHighlighted ? 1 : 0.5
                    }}
                    className="absolute inset-0 rounded-full border border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.6)]" 
                  />
                  <Icon className={`w-5 h-5 relative z-10 transition-colors duration-500 ${isHighlighted ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'text-cyan-500/30'}`} />
                </div>
                
                {/* Label */}
                <motion.span 
                  animate={{
                    opacity: isHighlighted ? 1 : 0,
                    y: isHighlighted ? 0 : 5
                  }}
                  className={`font-mono text-[9px] font-bold tracking-widest px-2 py-1 rounded border relative z-10 transition-colors duration-500 ${isHighlighted ? 'text-cyan-100 bg-cyan-950/80 border-cyan-400/50 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'text-transparent bg-transparent border-transparent'}`}
                >
                  {target.label}
                </motion.span>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  );
};

export const Hero = () => (
  <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 min-h-[90vh]">
    <IlluminationBackground />
    {/* Left: Text Content */}
    <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-start text-left">
      <motion.div variants={item} className="flex items-center gap-2 mb-6 bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-full">
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-cyan-400 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
          System.Status: Online
        </span>
      </motion.div>
      
      <div className="text-5xl md:text-7xl font-bold text-zinc-100 mb-6 tracking-tight leading-tight">
        <motion.div variants={wordVariants} initial="hidden" animate="show" className="inline-block overflow-hidden pb-2">
          {"Architecting".split('').map((char, i) => (
            <motion.span key={i} variants={charVariants} className="inline-block">
              {char}
            </motion.span>
          ))}
        </motion.div>
        <br />
        <motion.div variants={item} className="inline-block overflow-hidden pb-2">
          <ScrambleText />
        </motion.div>
      </div>
      
      <motion.h2 variants={item} className="text-xl md:text-2xl text-zinc-400 mb-6 font-light leading-relaxed">
        Illuminating the black box of AI. Deploying intelligent, autonomous systems with full-stack precision.
      </motion.h2>
      
      <motion.p variants={item} className="text-lg text-zinc-500 max-w-xl mb-10">
        I build autonomous agent systems that turn complex, raw data into clear, actionable insights. 
        Bridging the gap between cutting-edge AI and robust, production-ready software.
      </motion.p>
      
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#showcase" 
          className="w-full sm:w-auto bg-cyan-500 text-zinc-950 px-8 py-3.5 rounded-xl font-semibold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center justify-center gap-2"
        >
          View Case Studies <ArrowRight className="w-4 h-4" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#dossier" 
          className="w-full sm:w-auto bg-zinc-900 border border-zinc-700 text-zinc-100 px-8 py-3.5 rounded-xl font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
        >
          <Terminal className="w-4 h-4" />
          Initiate Contact
        </motion.a>
      </motion.div>
    </motion.div>

    {/* Right: Interactive Agent Visual */}
    <motion.div 
      initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ duration: 1, delay: 0.4, easings: [0.22, 1, 0.36, 1] }}
      className="relative hidden lg:block"
    >
      <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />
      <InteractiveAgent />
    </motion.div>
  </section>
);
