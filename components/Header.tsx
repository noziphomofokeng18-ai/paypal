
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0e14]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-black text-white text-[10px] shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform">AI</div>
          <span className="font-black text-xl tracking-tighter hidden sm:block italic">ACTION-TAKERS</span>
        </div>
        
        <nav className="hidden md:flex gap-10 text-[13px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#features" className="hover:text-white transition-colors">The Vault</a>
          <a href="#generator" className="hover:text-white transition-colors">Workflows</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>

        <a 
          href="https://www.paypal.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-orange-500 text-white px-7 py-2.5 rounded-xl text-sm font-black hover:bg-orange-600 transition-all active:scale-95 shadow-[0_4px_20px_rgba(245,158,11,0.2)]"
        >
          JOIN NOW
        </a>
      </div>
    </header>
  );
};

export default Header;
