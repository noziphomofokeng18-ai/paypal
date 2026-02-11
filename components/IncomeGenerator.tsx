
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const IncomeGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generateAction = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as the lead strategist of the Private Action-Takers Community. 
        A prospective builder with these skills/interests: "${input}" needs a demonstration of our daily execution workflows.
        Give them a 3-step, zero-fluff, highly actionable AI income task they can start within 30 minutes using free tools.
        Format it as Step 1, Step 2, Step 3. 
        Keep the tone professional but aggressive on execution.
        End with a divider and: "Join the execution room to scale this workflow."`,
        config: {
            temperature: 0.7,
            topP: 0.9,
        }
      });

      setResult(response.text || "Execution path blocked. Try again.");
    } catch (error) {
      console.error("AI Error:", error);
      setResult("The community vault is currently locked for non-members. Join now to get guaranteed access.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0b0e14] p-1 shadow-2xl rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
      <div className="bg-[#0b0e14] p-8 md:p-12 rounded-[2.4rem] relative z-10">
        <div className="mb-10">
          <label className="block text-[11px] font-black text-orange-500 mb-4 uppercase tracking-[0.3em]">
            Member Prototype Generator
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. Sales, Coding, Content Creation..."
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-orange-500/50 transition-all text-white font-medium placeholder:text-gray-600"
            />
            <button 
              onClick={generateAction}
              disabled={loading}
              className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase tracking-tighter hover:bg-orange-600 transition-all disabled:opacity-50 shadow-[0_4px_20px_rgba(245,158,11,0.2)] active:scale-95"
            >
              {loading ? "PROTOTYPING..." : "GENERATE WORKFLOW"}
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-10 p-8 bg-black/40 border border-orange-500/20 rounded-3xl animate-in fade-in zoom-in-95 duration-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_#f59e0b]"></div>
            </div>
            <h4 className="text-white font-black italic uppercase tracking-tighter mb-6 flex items-center gap-3">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              Execution Protocol Ready
            </h4>
            <div className="text-gray-400 whitespace-pre-line leading-relaxed font-medium text-lg">
              {result}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IncomeGenerator;
