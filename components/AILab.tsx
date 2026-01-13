
import React, { useState } from 'react';
import { generateProjectBlueprint } from '../services/geminiService';
import { ProjectBlueprint } from '../types';
import { Send, Loader2, Sparkles, Code2, Layers, Calendar, Zap } from 'lucide-react';

const AILab: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState<ProjectBlueprint | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    try {
      const result = await generateProjectBlueprint(input);
      setBlueprint(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Discovery AI Lab</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience our engine. Describe your project idea, and our AI Architect will generate a technical blueprint instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Input Form */}
          <div className="glass p-8 rounded-3xl border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-sky-400" />
              Define Your Vision
            </h3>
            <form onSubmit={handleGenerate} className="space-y-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. 'Build a real-time analytics dashboard for a fintech app using AI for predictive trends...'"
                className="w-full h-48 bg-slate-950/50 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="w-full py-4 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                {loading ? 'Processing Blueprint...' : 'Generate Blueprint'}
              </button>
            </form>
          </div>

          {/* Output Display */}
          <div className="min-h-[400px]">
            {blueprint ? (
              <div className="bg-slate-950 p-8 rounded-3xl border border-sky-500/30 shadow-[0_0_50px_-12px_rgba(14,165,233,0.3)] space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold text-sky-400">{blueprint.title}</h4>
                    <p className="text-slate-500 text-sm">NexaForge Generated Architecture</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                    blueprint.estimatedComplexity === 'High' ? 'bg-red-500/20 text-red-400' :
                    blueprint.estimatedComplexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {blueprint.estimatedComplexity} Complexity
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <Layers className="w-4 h-4 text-sky-500" /> Architecture
                    </div>
                    <ul className="space-y-2">
                      {blueprint.architecture.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-sky-500 rounded-full" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-300 font-semibold">
                      <Code2 className="w-4 h-4 text-purple-500" /> Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blueprint.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-900 border border-white/10 rounded-md text-xs text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    Timeline: <span className="text-white font-medium">{blueprint.estimatedTimeline}</span>
                  </div>
                  <button className="flex items-center gap-2 text-sky-400 font-bold hover:text-sky-300 transition-colors">
                    Build This <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/5 rounded-3xl">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-slate-700" />
                </div>
                <h4 className="text-slate-500 font-medium">Architecture visualization will appear here</h4>
                <p className="text-slate-600 text-sm mt-2 max-w-xs">Enter your project requirements to see a customized technical strategy.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
