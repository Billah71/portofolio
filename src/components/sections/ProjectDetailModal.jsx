import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Code2, 
  Layers, 
  Sparkles, 
  X,
  CheckCircle2,
  FolderGit2
} from 'lucide-react';
import { TechIcon } from '../icons/TechIcons';

export const ProjectDetailModal = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050507]/85 backdrop-blur-xl transition-opacity"
        />

        {/* Modal Content Container */}
        <div className="min-h-full flex items-center justify-center p-3 sm:p-6 lg:p-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-5xl rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Top Navigation Bar: Back & Breadcrumb & Close */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-button text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-sky-400" />
                  <span>Back to Showcase</span>
                </button>
                <div className="text-xs text-slate-400 hidden sm:flex items-center gap-1.5 font-medium font-mono">
                  <span>Projects</span>
                  <span className="text-sky-400">&gt;</span>
                  <span className="text-slate-200">{project.name}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 2 Column Details Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title, Description, Stats, Actions, Tech Stack */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Title */}
                <div className="space-y-1">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-sky-400 border border-white/10">
                    {project.categoryBadge || project.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight pt-2">
                    {project.name}
                  </h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-white rounded-full mt-2" />
                </div>

                {/* Full Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>

                {/* 2 Mini Stat Blocks */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white font-mono">
                        {project.technologies.length}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                        Total Teknologi
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl glass-card border border-white/10 flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white font-mono">
                        {project.features ? project.features.length : 4}
                      </div>
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                        Fitur Utama
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-wider font-mono">
                    <Code2 className="w-4 h-4 text-sky-400" />
                    <span>Technologies Used</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl glass-pill text-xs font-medium text-slate-200 border border-white/10 hover:border-sky-400/40 transition-colors"
                      >
                        <TechIcon name={tech} className="w-4 h-4" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: GitHub Link */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl gradient-btn text-white text-xs sm:text-sm font-semibold tracking-wide"
                  >
                    <FolderGit2 className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass-button text-slate-200 text-xs sm:text-sm font-semibold tracking-wide hover:text-white cursor-pointer"
                  >
                    <span>Close Preview</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Large Preview & Key Features */}
              <div className="lg:col-span-5 space-y-6">
                {/* Big Image Preview */}
                <div className="rounded-2xl overflow-hidden border border-white/10 glass-panel shadow-xl aspect-video bg-slate-950 relative group">
                  <img
                    src={project.preview}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Key Features Card */}
                <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Fitur &amp; Karakteristik Utama</span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {project.features && project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};
