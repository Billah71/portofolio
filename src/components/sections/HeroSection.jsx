import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

// Interactive 3D Lanyard ID Card Component exactly matching reference video frames 004 & 006
const LanyardCard = ({ avatar, name, profession, status }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for 3D tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-18deg', '18deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-start cursor-grab active:cursor-grabbing select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      {/* Black Lanyard Ribbon / Strap extending from top matching video frame 004 */}
      <div className="relative flex flex-col items-center">
        {/* Lanyard Strap with vertical text '3D CARD' like the video */}
        <div className="w-7 h-28 bg-[#151515] border-x border-white/10 flex flex-col items-center justify-around py-2 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.05)_50%,transparent)]" />
          <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-white/70 rotate-90 whitespace-nowrap">
            3D CARD
          </span>
          <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-white/70 rotate-90 whitespace-nowrap">
            3D CARD
          </span>
        </div>

        {/* Metal Clip / Buckle clasp connecting strap to card */}
        <div className="w-5 h-4 bg-gradient-to-b from-neutral-600 via-neutral-300 to-neutral-700 rounded-sm shadow-md z-10 -mt-0.5 border border-white/20" />
        <div className="w-2.5 h-3 bg-neutral-800 -mt-0.5 rounded-full border border-neutral-600 z-10" />
      </div>

      {/* Hanging ID Card with 3D tilt & gentle natural sway */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateZ: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative -mt-1 w-64 sm:w-72 aspect-[3/4] bg-[#0c0c0c] border-[8px] sm:border-[10px] border-white rounded-[2rem] shadow-2xl overflow-hidden transition-shadow group hover:shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
      >
        {/* Photo Container with dramatic lighting like video */}
        <div className="relative w-full h-full bg-[#121212] overflow-hidden">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover object-[center_20%] grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dramatic diagonal light beam across portrait (matching video frame 004) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/10 pointer-events-none" />

          {/* Subtle reflection overlay on card surface */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/60 pointer-events-none" />

          {/* Bottom badge inside card */}
          <div className="absolute bottom-4 left-4 right-4 p-2.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-left">
            <p className="text-[11px] font-mono font-bold text-white tracking-wide truncate">
              {name}
            </p>
            <p className="text-[9px] font-mono text-slate-400 truncate">
              {profession}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const HeroSection = ({ onExploreProjects, onContactClick }) => {
  const { personal } = portfolioData;

  // Typewriter effect for profession
  const typewriterTexts = [
    "Web Developer",
    "UI/UX Designer",
    "Mahasiswa Teknik Informatika",
    "Frontend & Backend"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typewriterTexts[roleIndex];
    let timeout;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typewriterTexts.length);
      }, 150);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting 
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const techPills = ["HTML", "CSS", "JavaScript", "Laravel", "MySQL", "Figma", "Jaringan"];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography, Bio & Actions matching video frame 004 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Monospace Badge from video frame 004: * AVAILABLE FOR WORK */}
            <div className="font-mono text-xs text-slate-400 tracking-wider flex items-center gap-2">
              <span className="text-white">*</span>
              <span>AVAILABLE FOR WORK &bull; {personal.status}</span>
            </div>

            {/* Giant Modern Extended Headline from video frame 004 */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.05]">
                Al-mutasim
                <span className="block text-neutral-400">Bihablillah A</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-200 pt-1">
                {personal.profession}
              </h2>
            </div>

            {/* Dynamic Typewriter with Cursor like frame 004 */}
            <div className="font-mono text-sm sm:text-base text-slate-400 h-6 flex items-center">
              <span>{displayText}</span>
              <span className="w-2 h-4 ml-1 bg-white animate-pulse" />
            </div>

            {/* Requested Hero Description */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              {personal.heroDescription}
            </p>

            {/* Tech Stack Pills from frame 004 */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1 rounded-full text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/10 hover:border-white/25 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: View My Projects & Contact Me */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2 px-6 py-3 ref-btn-white text-xs sm:text-sm cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 ref-btn-outline text-xs sm:text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Sub-indicators from frame 004 */}
            <div className="pt-3 space-y-1 font-mono text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span>&darr;</span>
                <span>explore my work below</span>
              </div>
              <div className="flex items-center gap-2">
                <span>&nearr;</span>
                <span>open to collaboration &amp; web projects</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: 3D Hanging Lanyard ID Card from video frames 004 & 006 */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-start pt-2 sm:pt-0"
          >
            <LanyardCard
              avatar={personal.avatar}
              name={personal.name}
              profession={personal.profession}
              status={personal.status}
            />
          </motion.div>

        </div>
      </div>

      {/* Bottom Center Scroll Indicator matching video frame 004 */}
      <div className="text-center font-mono text-xs text-slate-400 tracking-widest uppercase flex items-center justify-center gap-1.5 pt-6 pb-2">
        <span>SCROLL</span>
        <span>&darr;</span>
      </div>
    </section>
  );
};
