import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'ServiceNow Certified System Administrator (CSA)',
    issuer: 'ServiceNow',
    date: 'Mar 2026',
    color: 'neon-blue'
  },
  {
    title: 'Salesforce Certified Agentforce Specialist',
    issuer: 'Salesforce',
    date: 'Dec 2025',
    color: 'neon-purple'
  },
  {
    title: 'Generative AI Leader Track',
    issuer: 'Google Cloud',
    date: 'Mar 2026',
    color: 'neon-pink'
  },
  {
    title: 'Technology Job Simulation',
    issuer: 'Deloitte Australia',
    date: 'Aug 2025',
    color: 'neon-blue'
  },
  {
    title: 'Python',
    issuer: 'Cisco Networking Academy',
    date: 'Jan 2026',
    color: 'neon-purple'
  },
  {
    title: 'ServiceNow Micro-Certification – Flows',
    issuer: 'ServiceNow',
    date: 'Feb 2026',
    color: 'neon-pink'
  }
];

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold neon-text-blue">04. Certifications</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-blue to-transparent"></div>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Timeline central line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-pink"
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-[-8px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-dark-bg border-2 border-neon-blue z-10 shadow-[0_0_10px_#00f3ff]"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className={`glass-panel p-6 hover:border-${cert.color} transition-colors group relative overflow-hidden`}>
                    <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-1 h-full bg-${cert.color} opacity-50`}></div>
                    
                    <div className={`flex items-center gap-2 mb-2 text-${cert.color} ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Award className="w-5 h-5" />
                      <span className="font-orbitron font-semibold text-sm tracking-wider">{cert.issuer}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">{cert.title}</h3>
                    
                    <div className={`flex items-center gap-2 text-sm text-gray-400 font-mono ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
