
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-2 mb-8 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] animate-pulse">
          Limitless execution Room
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black mb-10 leading-[0.95] tracking-tighter">
          Unlock Your AI <br/>
          <span className="gradient-text">Income Potential</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          Everything inside is designed to move you from <span className="text-white border-b-2 border-orange-500 pb-1">learning → execution → income.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="https://www.paypal.com" 
            className="w-full sm:w-auto px-12 py-5 bg-orange-500 text-white rounded-2xl text-xl font-black hover:bg-orange-600 transition-all shadow-[0_10px_40px_rgba(245,158,11,0.25)] active:scale-95"
          >
            Start Building Today
          </a>
          <div className="text-gray-500 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            R350 / month
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: "Daily Actions", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "Live Builds", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
            { label: "Private Space", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
            { label: "Resource Vault", icon: "M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-orange-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                </svg>
              </div>
              <span className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
