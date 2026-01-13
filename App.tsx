
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import AILab from './components/AILab';
import AIAgent from './components/AIAgent';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      
      <div className="relative">
        {/* Subtle transition between 3D Hero and content */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950/0 to-slate-950"></div>
        <Services />
      </div>

      <AILab />
      
      {/* Call to Action Refined */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass p-16 rounded-[4rem] border-white/5 relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]"></div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Ready to forge your next breakthrough?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
              Don't just keep up with the tech curve. Define it. Our engineers are ready to build your 3D future.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-white text-slate-950 rounded-full font-bold text-xl hover:bg-sky-50 transition-all shadow-xl">
                Get a Quote
              </button>
              <button className="px-12 py-5 glass text-white rounded-full font-bold text-xl hover:bg-white/5 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating AI Agent */}
      <AIAgent />
    </Layout>
  );
};

export default App;
