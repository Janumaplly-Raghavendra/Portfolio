import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['Python', 'Java'],
    color: 'neon-blue'
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    color: 'neon-purple'
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'Firebase'],
    color: 'neon-pink'
  },
  {
    title: 'Concepts',
    skills: ['DSA', 'OOPS'],
    color: 'neon-blue'
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Google Colab'],
    color: 'neon-purple'
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold neon-text-blue">02. Skills Matrix</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-neon-blue to-transparent"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="glass-panel p-6 relative overflow-hidden group"
            >
              {/* Background glow effect on hover */}
              <div className={`absolute inset-0 bg-${category.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <h3 className={`text-xl font-orbitron mb-6 text-${category.color} border-b border-glass-border pb-2`}>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-4 py-2 rounded-full bg-dark-bg border border-glass-border text-sm font-medium hover:border-${category.color} hover:text-${category.color} transition-colors cursor-default shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
