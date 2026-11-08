import React from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Footer = () => {
  const { personal } = portfolioData;

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#080808] text-slate-400 z-10 text-center font-mono text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-2">
        <p className="text-slate-400">
          &copy; 2026 {personal.name} &mdash; All rights reserved.
        </p>
        <p className="text-[11px] text-slate-500">
          {personal.profession} &bull; {personal.status}
        </p>
      </div>
    </footer>
  );
};
