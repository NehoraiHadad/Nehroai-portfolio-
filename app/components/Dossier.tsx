'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, FileText, Terminal, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/lib/useReveal';

export const Dossier = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const ref = useReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section id="dossier" ref={ref} className="py-24 px-6 relative z-10 border-t border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm">
      <div className="reveal max-w-5xl mx-auto bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
        />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-zinc-400">Available for Opportunities</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6 tracking-tight">Get in touch</h2>
            <p className="text-zinc-400 text-lg mb-10">
              I'm looking for full-stack / AI-engineer roles (Israel, hybrid or remote). If your team is building with agents, pipelines, or modern web and wants someone who's also comfortable near the metal — reach out.
            </p>

            <div className="space-y-6 mb-10">
              <motion.div whileHover={{ x: 5 }} className="bg-zinc-900/50 border border-zinc-800/80 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                <h4 className="text-zinc-100 font-semibold mb-2">AI + Agents</h4>
                <p className="text-zinc-400 text-sm">LangGraph, AWS AgentCore, MCP, RAG with pgvector — built end-to-end, not glued together.</p>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="bg-zinc-900/50 border border-zinc-800/80 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                <h4 className="text-zinc-100 font-semibold mb-2">Full-Stack + Infra</h4>
                <p className="text-zinc-400 text-sm">Next.js on the front, Python/Node on the back, hardware on the floor. Eight years of on-prem datacenter instincts that don't break under load.</p>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/CV_Nehorai_Hadad.pdf"
                download="CV_Nehorai_Hadad.pdf"
                className="bg-zinc-100 text-zinc-950 px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/10"
              >
                <FileText className="w-5 h-5" />
                Download Resume
              </motion.a>
            </div>
          </div>

          {/* Right Column: Secure Terminal */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-xl">
            <div className="bg-zinc-950 px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Send a message</span>
            </div>

            <div className="p-6 flex-grow flex flex-col">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100">Thanks — message received.</h3>
                  <p className="text-zinc-400 text-sm">I'll reply within a day or two.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-cyan-500 mb-2 uppercase tracking-wider">Your email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono disabled:opacity-50"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <label htmlFor="message" className="block text-xs font-mono text-cyan-500 mb-2 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                      className="w-full flex-grow bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500/50 transition-colors font-mono resize-none disabled:opacity-50"
                      placeholder="Enter transmission data here..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting || !email || !message}
                    className="w-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 py-3 rounded-lg font-mono text-sm uppercase tracking-widest hover:bg-cyan-500 hover:text-zinc-950 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
