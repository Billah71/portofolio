import React, { useState, useEffect } from 'react';
import { BackgroundGlow } from './components/common/BackgroundGlow';
import { IntroSplashScreen } from './components/common/IntroSplashScreen';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { PortfolioShowcase } from './components/sections/PortfolioShowcase';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-slate-100 overflow-x-hidden selection:bg-white/20 selection:text-white">
      {/* Intro Splash Screen matching Reference Video Frame 002 */}
      {showSplash && (
        <IntroSplashScreen onFinish={() => setShowSplash(false)} />
      )}

      {/* Background Precision Grid matching Reference Video */}
      <BackgroundGlow />

      {/* Floating Capsule Navbar matching Reference Video Frame 004 */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section with 3D Hanging Lanyard ID Card */}
        <HeroSection 
          onExploreProjects={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* About Me Section matching Reference Video Frame 008 */}
        <AboutSection 
          onViewProjects={() => scrollToSection('portfolio')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Portfolio Showcase (3 Tabs: Projects, Certificates, Tech Stack) matching Frames 014, 016, 020, 024 */}
        <PortfolioShowcase />

        {/* Contact Section (Hubungi Saya & Live Comments) matching Frames 028, 030, 032 */}
        <ContactSection />
      </main>

      {/* Footer matching Frame 032 */}
      <Footer />
    </div>
  );
}

export default App;
