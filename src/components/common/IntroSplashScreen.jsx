import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, User, Globe } from 'lucide-react';

export const IntroSplashScreen = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 1600);

    const handleAnyInteraction = () => {
      setIsVisible(false);
      if (onFinish) onFinish();
    };

    window.addEventListener('keydown', handleAnyInteraction, { once: true });
    window.addEventListener('wheel', handleAnyInteraction, { once: true });
    window.addEventListener('touchstart', handleAnyInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleAnyInteraction);
      window.removeEventListener('wheel', handleAnyInteraction);
      window.removeEventListener('touchstart', handleAnyInteraction);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setIsVisible(false);
    if (onFinish) onFinish();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] overflow-hidden cursor-pointer select-none"
          onClick={handleSkip}
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-ref-grid opacity-50" />

          {/* 3 Circular Icon Buttons from Reference Video Frame 002 */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center gap-3.5 mb-8 relative z-10"
          >
            <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="w-11 h-11 rounded-full bg-white/[0.06] border border-white/15 flex items-center justify-center text-white">
              <User className="w-4 h-4" />
            </div>
            <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
              <Globe className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Typography from Frame 002 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-center px-4 relative z-10 space-y-1.5"
          >
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-white tracking-tight">
              Welcome to my
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
              Portfolio Website
            </h1>
          </motion.div>

          {/* URL Pill from Frame 002 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 relative z-10"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-400">
              www.almutasim.vercel.app
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
