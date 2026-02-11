
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-white/5 border border-white/10 p-12 md:p-24 rounded-[4rem] relative shadow-2xl overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-orange-500/[0.02] pointer-events-none"></div>
            
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight uppercase italic tracking-tighter">
                Ready to <span className="text-orange-500">Take Action?</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-16 font-medium max-w-2xl mx-auto">
                Stop watching from the sidelines. Join the private room where winners actually build things.
            </p>

            <div className="mb-16 inline-block">
                <div className="flex items-baseline justify-center gap-2">
                    <span className="text-7xl md:text-[100px] font-black text-white tracking-tighter italic">R350</span>
                    <span className="text-2xl text-orange-500 font-black uppercase italic tracking-tighter">/mo</span>
                </div>
                <p className="text-sm text-gray-600 font-bold uppercase tracking-[0.2em] mt-2">Instant lifetime-locked pricing</p>
            </div>

            <div>
                <a 
                href="https://www.paypal.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-16 py-6 bg-orange-500 text-white text-2xl font-black rounded-[2rem] hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(245,158,11,0.3)] uppercase tracking-tighter italic"
                >
                <span className="relative z-10">ENTER THE EXECUTION ROOM</span>
                <div className="absolute inset-0 bg-white/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                </a>
            </div>

            <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                <div>
                    <h4 className="text-white font-black italic uppercase text-xs tracking-widest mb-3">01. Access</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">Instant delivery of the Resource Vault and Discord credentials.</p>
                </div>
                <div>
                    <h4 className="text-white font-black italic uppercase text-xs tracking-widest mb-3">02. Network</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">Connect with 500+ builders shipping AI products every day.</p>
                </div>
                <div>
                    <h4 className="text-white font-black italic uppercase text-xs tracking-widest mb-3">03. Support</h4>
                    <p className="text-[13px] text-gray-500 leading-relaxed">Weekly live calls and 24/7 technical build support.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
