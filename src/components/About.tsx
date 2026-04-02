import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Terminal, Cpu, Database, Code } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: 'CGPA', value: 7.93, decimals: 2, suffix: '' },
    { label: 'Projects', value: 3, decimals: 0, suffix: '+' },
    { label: 'Certifications', value: 5, decimals: 0, suffix: '+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold neon-text-purple">01. About Me</h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-purple to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                <span className="text-neon-blue font-mono">&gt; </span>
                Motivated Computer Science student with strong foundations in programming, DSA, and automation.
              </p>
              <p>
                <span className="text-neon-pink font-mono">&gt; </span>
                Passionate about building scalable and intelligent systems that solve real-world problems.
              </p>
              <div className="glass-panel p-6 mt-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue group-hover:w-full transition-all duration-500 opacity-20 z-0"></div>
                <div className="relative z-10 flex items-center gap-4">
                  <Terminal className="text-neon-blue w-8 h-8" />
                  <div>
                    <h3 className="font-orbitron text-white">Current Objective</h3>
                    <p className="text-sm text-gray-400">Seeking an internship to develop scalable solutions and enhance technical expertise.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`glass-panel p-6 text-center border-t-2 ${
                    index === 0 ? 'border-t-neon-blue col-span-2' : 
                    index === 1 ? 'border-t-neon-purple' : 'border-t-neon-pink'
                  }`}
                >
                  <div className="text-4xl font-orbitron font-bold text-white mb-2">
                    {inView ? (
                      <CountUp end={stat.value} decimals={stat.decimals} duration={2.5} suffix={stat.suffix} />
                    ) : (
                      '0'
                    )}
                  </div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
