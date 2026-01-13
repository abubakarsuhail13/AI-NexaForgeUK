
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Scene3D from './Scene3D';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center">
      {/* 3D Background Scene */}
      <Scene3D />

      {/* Animated blobs for extra depth */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Engineering Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-none">
            Forging the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
              Future of Tech
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            NexaForge Tech transforms complex challenges into high-performance 3D experiences, scalable AI systems, and elite digital architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#ai-lab" className="w-full sm:w-auto px-10 py-4 bg-sky-500 text-white rounded-full font-bold text-lg hover:bg-sky-400 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center gap-2 group">
              Start Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all border border-white/10">
              View Our Lab
            </button>
          </div>

          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">150+</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Deployments</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">99.9%</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Uptime Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">4.0</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Industry V4.0</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-display font-bold text-white">256bit</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Security</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
