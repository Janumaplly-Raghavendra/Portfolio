import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully! (Simulation)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              <span className="neon-text-purple">Initiate</span> Connection
            </h2>
            <p className="text-gray-400 font-mono">
              <span className="text-neon-blue">&gt;</span> System ready to receive incoming transmissions.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div className="glass-panel p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-orbitron text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  <a href="mailto:248r5a0517@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group">
                    <div className="p-3 rounded-full bg-dark-bg border border-glass-border group-hover:border-neon-blue transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm">248r5a0517@gmail.com</span>
                  </a>
                  
                  <a href="https://linkedin.com/in/janumpally-raghavendra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-purple transition-colors group">
                    <div className="p-3 rounded-full bg-dark-bg border border-glass-border group-hover:border-neon-purple transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm">LinkedIn Profile</span>
                  </a>
                  
                  <a href="https://github.com/Janumally-Raghavendra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-neon-pink transition-colors group">
                    <div className="p-3 rounded-full bg-dark-bg border border-glass-border group-hover:border-neon-pink transition-colors">
                      <Github className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-sm">GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink"></div>
                
                <div className="flex items-center gap-2 mb-6 text-neon-blue font-mono text-sm">
                  <Terminal className="w-4 h-4" />
                  <span>~/send_message.sh</span>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-dark-bg border border-glass-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors font-mono"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-dark-bg border border-glass-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors font-mono"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-dark-bg border border-glass-border rounded-md px-4 py-3 text-white focus:outline-none focus:border-neon-pink transition-colors font-mono resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-md bg-transparent border border-neon-blue text-neon-blue font-orbitron font-bold tracking-wider hover:bg-neon-blue hover:text-dark-bg transition-all duration-300 flex items-center justify-center gap-2 group neon-border-blue"
                >
                  <span>TRANSMIT</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
