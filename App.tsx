
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTASection from './components/CTA';
import IncomeGenerator from './components/IncomeGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col bg-[#0b0e14]">
      {/* Decorative Background Elements matching the community theme */}
      <div className="hero-glow top-[-200px] left-[-100px] opacity-60"></div>
      <div className="hero-glow bottom-[-200px] right-[-100px] opacity-40"></div>
      <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-orange-500/5 blur-[120px] rounded-full z-[-1]"></div>

      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="generator" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want a taste of what's inside?</h2>
              <p className="text-gray-400">Describe your current skills, and we'll generate an AI income workflow for you.</p>
            </div>
            <IncomeGenerator />
          </div>
        </section>

        <Features />
        
        <CTASection />
      </main>

      <footer className="py-16 px-4 border-t border-white/5 mt-20 bg-[#080a0f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xs">AI</div>
            <span className="font-bold text-xl tracking-tight text-white uppercase italic">Action-Takers</span>
          </div>
          <p className="text-gray-600 text-sm">© 2024 Private Action-Takers Community. Built for speed and income.</p>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-orange-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
