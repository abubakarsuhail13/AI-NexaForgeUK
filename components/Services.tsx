
import React from 'react';
import { Cpu, Globe, Cloud, Shield, Database, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI & Machine Learning",
    desc: "Custom LLM training, computer vision, and predictive analytics tailored for enterprise workflows.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Scaleable Web Platforms",
    desc: "High-performance architectures using Next.js, React, and serverless technology for ultimate speed.",
    color: "from-purple-500/20 to-indigo-500/20",
    border: "border-purple-500/20"
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Engineering",
    desc: "Seamless AWS/GCP/Azure migrations and Kubernetes orchestration for zero-downtime scalability.",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-500/20"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Cyber Security",
    desc: "Advanced threat detection and encryption protocols to protect your most sensitive data.",
    color: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/20"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Big Data Solutions",
    desc: "Consolidate complex data streams into actionable intelligence with robust pipeline engineering.",
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-green-500/20"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Ecosystems",
    desc: "Native and cross-platform mobile apps that bridge the gap between AI and portable convenience.",
    color: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl font-display font-bold mb-4">Mastering the Tech Stack of Tomorrow</h2>
          <p className="text-slate-400">Our deep expertise spans the entire development lifecycle, ensuring every line of code serves your business objectives.</p>
        </div>
        <button className="text-sky-400 font-bold flex items-center gap-2 group">
          View all capabilities <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${s.color} border ${s.border} hover:border-white/20 transition-all hover:-translate-y-2`}>
            <div className="mb-6 p-4 bg-slate-950 rounded-2xl inline-block text-white">
              {s.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-6">{s.desc}</p>
            <div className="h-1 w-12 bg-white/20 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
