
import React from 'react';

const features = [
  {
    title: "Daily AI Income Prompts",
    description: "Clear, step-by-step daily actions showing you how to use AI to create income opportunities—no fluff, no theory, just implementation.",
    icon: "⚡"
  },
  {
    title: "Private Action-Takers Community",
    description: "A high-signal space for people building, testing, and monetising with AI—not consuming endlessly.",
    icon: "🛡️"
  },
  {
    title: "Weekly Live Build Sessions",
    description: "Live, real-time demos where we build AI tools, content systems, automations, and income workflows from scratch, together.",
    icon: "🛠️"
  },
  {
    title: "AI Resource Vault",
    description: "A growing vault of ready-to-use prompts, templates, tools, workflows, and monetisation frameworks you can apply immediately.",
    icon: "🏦"
  },
  {
    title: "Accountability Pods",
    description: "Small, focused groups designed to keep you consistent, committed, and progressing—no disappearing after week one.",
    icon: "🤝"
  },
  {
    title: "Direct Support & Feedback",
    description: "Get clear feedback on your ideas, offers, and AI workflows so you move faster and avoid costly trial-and-error.",
    icon: "🎯"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 bg-[#080a0f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase italic tracking-tighter">What’s Included</h2>
          <div className="h-1.5 w-20 bg-orange-500 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-400 font-medium">Full access for just <span className="text-orange-500 font-black tracking-wider">R350/MONTH</span>.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#0b0e14] border border-white/5 p-10 rounded-[2rem] group hover:border-orange-500/40 transition-all duration-500 shadow-2xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tight italic">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-orange-500/5 border border-orange-500/20 rounded-[3rem] text-center max-w-4xl mx-auto relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
          <p className="text-2xl md:text-3xl font-black text-white italic tracking-tight">
            👉 THIS ISN’T AN AI COURSE. IT’S AN <span className="text-orange-500">AI EXECUTION ROOM.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
