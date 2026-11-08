import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ArrowUpRight, 
  Code2, 
  Award, 
  Globe 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const AboutSection = ({ onViewProjects, onContactClick }) => {
  const { personal } = portfolioData;

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const cvContent = `# ${personal.name}
${personal.profession} | ${personal.status}
WhatsApp: ${personal.whatsapp} | Email: ${personal.email}

=== PROFIL & DESKRIPSI ===
${personal.aboutDescription}

=== KEAHLIAN TEKNIS (10 TECH STACK) ===
Frontend: HTML, CSS, JavaScript, Responsive Web Design
Backend, IT & Database: Laravel, MySQL, Python, Jaringan Komputer
UI/UX & Desain: Figma, UI/UX Design

=== PENDIDIKAN ===
Teknik Informatika (Informatics Engineering)
`;
    const blob = new Blob([cvContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CV-${personal.name.replace(/\s+/g, '_')}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const statCards = [
    {
      id: 'projects',
      label: 'PROJECTS',
      value: '4',
      icon: Code2,
      onClick: onViewProjects
    },
    {
      id: 'skills',
      label: 'TECH STACK',
      value: '10',
      icon: Award,
      onClick: () => {
        const el = document.getElementById('portfolio');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'focus',
      label: 'STUDENT FOCUS',
      value: '100%',
      icon: Globe,
      onClick: onContactClick
    }
  ];

  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Main Grid: Left Details & Right Circular Photo matching video frame 008 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Monospace Badge: ABOUT ME */}
            <div className="font-mono text-xs text-slate-400 tracking-wider">
              ABOUT ME
            </div>

            {/* Giant Name Headline from frame 008 */}
            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
              Al-mutasim
              <span className="block text-slate-300">Bihablillah</span>
              <span className="block text-neutral-400">A</span>
            </h2>

            {/* Description Text matching User Request */}
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              {personal.aboutDescription}
            </p>

            {/* Quote Pill Capsule from video frame 008 */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-slate-300 italic font-medium">
              "Turning ideas into clean, modern, and meaningful digital experiences."
            </div>

            {/* Buttons from frame 008: Download CV & View Projects */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3 ref-btn-white text-xs sm:text-sm cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2 px-6 py-3 ref-btn-outline text-xs sm:text-sm cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Circular Photo Spotlight from video frame 008 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Circular spotlight gradient halo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-b from-white/20 via-white/5 to-transparent shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-neutral-900 border border-white/10 relative">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="w-full h-full object-cover object-[center_20%] grayscale contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 3 Interactive Stat Cards from video frame 008 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={card.onClick}
                className="p-6 ref-card flex flex-col justify-between h-40 cursor-pointer group text-left"
              >
                {/* Top Row: Icon and Number */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {card.value}
                  </div>
                </div>

                {/* Bottom Row: Label & Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-300 uppercase">
                    {card.label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
