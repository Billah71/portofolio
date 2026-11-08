import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, CheckCircle2, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechIcon } from '../icons/TechIcons';

export const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-sky-400 text-xs font-mono mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>EXPERTISE &amp; TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-gradient-sky">Skills</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Penguasaan teknologi pengembangan website dan perancangan antarmuka digital yang saya pelajari dan terapkan dalam berbagai proyek.
          </p>
        </motion.div>

        {/* Skills Modern Grid: 10 skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative p-5 rounded-3xl glass-card border border-white/10 hover:border-sky-400/40 flex flex-col items-center text-center justify-between transition-all duration-300"
            >
              {/* Subtle Ambient Glow on Hover */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: skill.bgGlow }}
              />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center p-3 group-hover:scale-110 group-hover:border-sky-400/40 transition-all duration-300 relative z-10 shadow-lg">
                <TechIcon name={skill.iconType || skill.name} className="w-10 h-10" />
              </div>

              {/* Title & Category */}
              <div className="mt-4 space-y-1 relative z-10 w-full">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                  {skill.name}
                </h3>
                <span className="inline-block text-[10px] uppercase font-mono tracking-wider text-slate-400 group-hover:text-slate-300">
                  {skill.category}
                </span>
                <p className="text-[11px] text-slate-400 leading-tight line-clamp-2 pt-1 font-normal opacity-80 group-hover:opacity-100 transition-opacity">
                  {skill.description}
                </p>
              </div>

              {/* Level indicator pill */}
              <div className="mt-4 relative z-10 w-full pt-2 border-t border-white/5">
                <span className="inline-flex items-center justify-center gap-1 w-full py-1 rounded-xl text-[10px] font-mono bg-white/[0.03] text-sky-300 border border-white/5 group-hover:border-sky-400/20">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" />
                  <span>{skill.level}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 max-w-3xl mx-auto text-center space-y-3 shadow-xl"
        >
          <div className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <span>Fokus Pengembangan &bull; Mahasiswa Teknik Informatika</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Kombinasi keahlian di bidang <strong className="text-white">Web Development</strong> (HTML, CSS, JavaScript, PHP, Laravel, MySQL) dan <strong className="text-white">UI/UX Design</strong> (Figma, wireframing, dan Responsive Web Design) memungkinkan saya merancang dan membangun website dari konsep visual hingga implementasi fungsional yang utuh.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
