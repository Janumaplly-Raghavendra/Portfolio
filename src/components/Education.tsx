import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Star } from 'lucide-react';

const educationData = [
  {
    institution: 'CMR Engineering College, Hyderabad',
    degree: 'Bachelor of Engineering - Computer Science Engineering',
    date: 'Sept 2024 - Present',
    grade: '7.93 CGPA',
    color: 'neon-blue'
  },
  {
    institution: 'Gayathri Institute of Technology and Sciences',
    degree: 'Diploma',
    date: 'Jun 2021 - July 2024',
    grade: '8.51 CGPA',
    color: 'neon-purple'
  },
  {
    institution: 'All Saint’s Model School',
    degree: 'High School',
    date: 'Jun 2020 - May 2021',
    grade: '10.0 CGPA',
    color: 'neon-pink'
  }
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold neon-text-purple">01.5 Education</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-purple to-transparent"></div>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`glass-panel p-6 md:p-8 border-l-4 border-l-${edu.color} hover:border-${edu.color} transition-all group`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">{edu.institution}</h3>
                  <div className={`flex items-center gap-2 text-gray-300 font-orbitron text-sm md:text-base mb-4 text-${edu.color}`}>
                    <GraduationCap className="w-5 h-5" />
                    <span>{edu.degree}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm font-mono text-gray-400 shrink-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.date}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end text-neon-blue font-bold">
                    <Star className="w-4 h-4" />
                    <span>Grade: {edu.grade}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
