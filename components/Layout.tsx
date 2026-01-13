
import React from 'react';
import { Cpu, Globe, Cloud, Shield, Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="p-2 bg-sky-500 rounded-lg group-hover:bg-sky-400 transition-colors">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
                NEXA<span className="text-white">FORGE</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
              <a href="#ai-lab" className="text-slate-300 hover:text-white transition-colors">AI Lab</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all transform hover:scale-105 active:scale-95">
                Contact Us
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden glass border-t border-white/5 p-4 space-y-4">
            <a href="#services" className="block text-slate-300 py-2">Services</a>
            <a href="#ai-lab" className="block text-slate-300 py-2">AI Lab</a>
            <a href="#about" className="block text-slate-300 py-2">About</a>
            <button className="w-full px-6 py-3 bg-sky-500 text-white rounded-lg font-medium">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
                <Cpu className="w-6 h-6 text-sky-500" />
                <span className="text-xl font-display font-bold">NEXAFORGE</span>
              </div>
              <p className="text-slate-400 max-w-sm mx-auto sm:mx-0">
                Empowering businesses with elite AI engineering and futuristic software solutions. Based in the cutting edge of tech.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>AI & Machine Learning</li>
                <li>Custom Software</li>
                <li>Cloud Infrastructure</li>
                <li>Cyber Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-slate-400">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>GitHub</li>
                <li>Email</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 text-slate-500 text-sm text-center">
            &copy; {new Date().getFullYear()} NexaForge Tech. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
