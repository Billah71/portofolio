import React from 'react';

export const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Reference Video Precise Grid */}
      <div className="absolute inset-0 bg-ref-grid opacity-60" />

      {/* Subtle Ambient Radial Lighting matching the video */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-white/[0.025] rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-white/[0.02] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] rounded-full blur-[160px]" />

      {/* Vignette Shadow at viewport edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(8,8,8,0.75)_100%)]" />
    </div>
  );
};
