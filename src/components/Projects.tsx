import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink, Cpu, ShoppingCart, AlertTriangle } from 'lucide-react';

const projects = [
  {
    title: 'Fake News Detector',
    tech: ['Python', 'Flask', 'Machine Learning', 'NLP', 'TF-IDF'],
    description: 'ML-based system using NLP & TF-IDF to classify news as fake or real with a user-friendly Flask backend interface.',
    icon: Cpu,
    color: 'neon-blue',
    github: 'https://github.com/Janumally-Raghavendra'
  },
  {
    title: 'E-Commerce Website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Responsive platform featuring product management, user authentication, shopping cart, and checkout functionality.',
    icon: ShoppingCart,
    color: 'neon-purple',
    github: 'https://github.com/Janumally-Raghavendra'
  },
  {
    title: 'Smart Retail AI Alert System',
    tech: ['Generative AI', 'Python'],
    description: 'AI-powered system enabling natural language querying of inventory and generating smart alerts for stock insights.',
    icon: AlertTriangle,
    color: 'neon-pink',
    github: 'https://github.com/Janumally-Raghavendra'
  }
];

const defaultOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.02,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold neon-text-pink">03. Featured Projects</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-pink to-transparent"></div>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Tilt options={defaultOptions} className="h-full">
                <div className={`glass-panel h-full p-6 flex flex-col relative overflow-hidden group border-t-2 border-t-${project.color}`}>
                  {/* Holographic overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className={`p-3 rounded-lg bg-${project.color}/10 text-${project.color}`}>
                      <project.icon className="w-8 h-8" />
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 relative z-10 group-hover:text-neon-blue transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 flex-grow relative z-10">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-gray-300 bg-dark-bg px-2 py-1 rounded border border-glass-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
