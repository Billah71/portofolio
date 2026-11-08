import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ExternalLink, 
  Eye, 
  Code2, 
  Layers, 
  ArrowLeft, 
  Sparkles, 
  FolderGit2 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { TechIcon } from '../icons/TechIcons';

export const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'certificates' | 'techstack'
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  const { projects, skills } = portfolioData;

  const certificates = [
    {
      id: 'cert-1',
      title: 'Introduction to Python',
      issuer: 'Sololearn',
      issuedDate: '23 December 2024',
      credentialId: 'CC-HOXUMPOK',
      image: '/certificates/sololearn-python.jpeg',
      skills: ['Python', 'Programming Fundamentals']
    },
    {
      id: 'cert-2',
      title: 'Belajar Dasar AI',
      issuer: 'Dicoding Indonesia',
      issuedDate: '29 Maret 2026',
      credentialId: '1RXYW0R7KZVM',
      image: '/certificates/dicoding-ai.png',
      skills: ['Artificial Intelligence', 'AI Fundamentals']
    },
    {
      id: 'cert-3',
      title: 'Introduction to Financial Literacy',
      issuer: 'Dicoding Indonesia',
      issuedDate: '13 Maret 2026',
      credentialId: '81P2KLQQOXOY',
      image: '/certificates/dicoding-financial-literacy.png',
      skills: ['Financial Literacy', 'Personal Finance']
    }
  ];

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'techstack', label: 'Tech Stack' },
  ];

  return (
    <section id="portfolio" className="relative py-24 z-10">
      {/* Anchor for Skills */}
      <div id="skills" className="absolute -top-20" />
      <div id="projects" className="absolute -top-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header matching video frame 014 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-3"
        >
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Portfolio Showcase
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-mono">
            Explore my journey through projects, certifications, and technical expertise.
          </p>
        </motion.div>

        {/* 3 Tab Pills from Reference Video Frame 014 */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center p-1.5 rounded-full bg-[#121212] border border-white/10">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSelectedProject(null);
                  }}
                  className={`relative px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeShowcaseTab"
                      className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/15"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB 1: PROJECTS */}
        {activeTab === 'projects' && !selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="ref-card overflow-hidden flex flex-col justify-between group text-left"
              >
                {/* Project Image Preview from video frame 014 */}
                <div 
                  className="relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-black/75 backdrop-blur-md text-slate-300 border border-white/10">
                    {project.categoryBadge || project.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="text-xl font-bold font-display text-white group-hover:text-slate-200 transition-colors cursor-pointer"
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Card Bottom Row: Live Demo / No Link on Left, Details -> on Right (Matching Frame 014) */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl ref-btn-outline text-xs font-mono cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* INLINE PROJECT DETAIL VIEW MATCHING VIDEO FRAME 016 */}
        {activeTab === 'projects' && selectedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="ref-card p-6 sm:p-10 text-left space-y-8"
          >
            {/* Top Navigation: <- Back */}
            <button
              onClick={() => setSelectedProject(null)}
              className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {/* 2 Column Details Layout matching video frame 016 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Title, Underline, Description, 2 Stat Boxes, Buttons, Tech Stack */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                    {selectedProject.name}
                  </h3>
                  <div className="w-16 h-1 bg-white rounded-full mt-3" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.shortDescription}
                </p>

                {/* 2 Statistic Boxes from video frame 016 */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl ref-card-subtle flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-display text-white">
                        {selectedProject.technologies.length}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Technologies Used
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl ref-card-subtle flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-display text-white">
                        {selectedProject.features ? selectedProject.features.length : 4}
                      </div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                        Key Features
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Live Demo & GitHub from frame 016 */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ref-btn-white text-xs font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>

                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl ref-btn-outline text-xs font-mono"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                {/* Technologies Used with Pills from frame 016 */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                    <Code2 className="w-4 h-4" />
                    <span>Technologies Used</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                      >
                        <TechIcon name={tech} className="w-4 h-4" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Big Preview Mockup + Key Features Card from frame 016 */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-3xl overflow-hidden border border-white/10 aspect-video bg-neutral-900 shadow-2xl">
                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Key Features from frame 016 */}
                <div className="p-6 rounded-3xl ref-card-subtle space-y-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Sparkles className="w-4 h-4 text-slate-300" />
                    <span>Key Features</span>
                  </div>

                  <ul className="space-y-3 text-xs text-slate-300">
                    {selectedProject.features && selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        )}

        {/* TAB 2: CERTIFICATES MATCHING VIDEO FRAME 020 */}
        {activeTab === 'certificates' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setSelectedCert(cert)}
                className="ref-card overflow-hidden cursor-pointer group text-left flex flex-col justify-between"
              >
                {/* Certificate Frame with white border mockup like video frame 020 */}
                <div className="p-4 bg-neutral-950">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 space-y-2 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-400">
                    {cert.issuer} &bull; {cert.issuedDate}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-slate-200 transition-colors uppercase tracking-wide">
                    {cert.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* TAB 3: TECH STACK MATCHING VIDEO FRAME 024 */}
        {activeTab === 'techstack' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="ref-card p-6 flex flex-col items-center justify-center text-center aspect-square group hover:border-white/25 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TechIcon name={skill.iconType || skill.name} className="w-12 h-12" />
                </div>
                <span className="mt-4 text-xs font-mono font-medium text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 max-w-xl w-full ref-card p-6 space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="text-sm font-bold text-white">{selectedCert.title}</h4>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="font-mono text-xs text-slate-400 hover:text-white"
                >
                  Close
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src={selectedCert.image} alt={selectedCert.title} className="w-full h-auto" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
