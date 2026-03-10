/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  ExternalLink, 
  Mail, 
  ChevronRight, 
  Code2, 
  Layers, 
  Cpu, 
  Globe,
  Menu,
  X,
  ArrowUp,
  Copy,
  Check,
  Download,
  Briefcase,
  Phone,
  ArrowRight
} from 'lucide-react';

// --- Interfaces ---

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
}

interface Skill {
  category: string;
  items: string[];
}

// --- Constants ---

const USER_DATA = {
  name: "ODUNYEMI MOSHOOD TEMITAYO",
  linkedin: "https://www.linkedin.com/in/odunyemi-temitayo-921646211",
  github: "https://github.com/odunyemitemitayo-design",
  email: "odunyemitemitayo@gmail.com",
  phone: "08137450852",
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere AI",
    description: "A sustainable energy monitoring platform using machine learning to optimize power consumption in smart homes.",
    tags: ["Next.js", "TensorFlow", "PostgreSQL", "Tailwind"],
    link: "#",
    github: USER_DATA.github
  },
  {
    id: 2,
    title: "Nexus Protocol",
    description: "Decentralized finance dashboard for cross-chain asset management and yield farming optimization.",
    tags: ["React", "Solidity", "Ethers.js", "Framer Motion"],
    link: "#",
    github: USER_DATA.github
  },
  {
    id: 3,
    title: "Lumina Design System",
    description: "A comprehensive, accessible-first UI library built for enterprise-scale React applications.",
    tags: ["TypeScript", "Storybook", "Rollup", "CSS-in-JS"],
    link: "#",
    github: USER_DATA.github
  },
  {
    id: 4,
    title: "SwiftShip Logistics",
    description: "Real-time fleet tracking and route optimization engine for last-mile delivery services.",
    tags: ["Node.js", "Redis", "Google Maps API", "Docker"],
    link: "#",
    github: USER_DATA.github
  }
];

const SKILLS: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL", "Redis"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jest"]
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Start a Project", href: "#start-project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter focus:outline-none focus:ring-2 focus:ring-white/20 rounded text-slate-200"
          aria-label="Odunyemi Moshood Temitayo - Home"
        >
          OMT<span className="text-indigo-500">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-1"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-200 p-2 focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-400 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-white/20 rounded"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0a0a0a]">
      {/* Background Depth Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6">
            Senior Software Engineer
          </span>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] mb-8 text-slate-200">
            <span className="block">ODUNYEMI</span>
            <span className="block text-slate-500/50">MOSHOOD</span>
            <span className="block text-indigo-500">TEMITAYO.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl font-light leading-relaxed mb-10">
            Building scalable digital experiences through clean code and 
            intentional design. Specializing in high-performance web architectures.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-indigo-600 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
              aria-label="Go to contact section"
            >
              Let's Talk <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/5 border border-white/10 text-slate-200 font-semibold rounded-full hover:bg-white/10 transition-all focus:outline-none focus:ring-4 focus:ring-white/10"
              aria-label="View projects"
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number; key?: React.Key }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -12 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 focus-within:ring-2 focus-within:ring-white/20 backdrop-blur-sm"
    >
      <div className="flex justify-between items-start mb-8">
        <div className="p-4 bg-indigo-500/10 rounded-2xl group-hover:bg-indigo-500/20 transition-colors">
          <Code2 className="text-indigo-400" size={28} />
        </div>
        <div className="flex gap-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-black hover:bg-white rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <Github size={22} />
            </a>
          )}
          <a 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-500 hover:text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label={`Visit ${project.title} live site`}
          >
            <ExternalLink size={22} />
          </a>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-3 text-slate-200 group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 font-light leading-relaxed mb-8">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-slate-500 bg-white/5 px-3 py-1.5 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-slate-200">
              TECHNICAL <br />
              <span className="text-indigo-500">EXPERTISE.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              A curated stack of technologies I use to build robust, 
              scalable, and performant digital products.
            </p>
          </motion.div>

          <div className="space-y-16">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mb-8 flex items-center gap-4">
                  <span className="w-8 h-px bg-slate-800" />
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {skill.items.map(item => (
                    <span 
                      key={item}
                      className="text-xl font-medium text-slate-400 hover:text-indigo-400 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StartProjectForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({ name: '', email: '', description: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="start-project" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-slate-200">
            START A <span className="text-indigo-500">PROJECT.</span>
          </h2>
          <p className="text-slate-400 text-xl font-light leading-relaxed">
            Have a vision? Let's bring it to life together. Fill out the details below 
            and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[40px] backdrop-blur-xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-2">What should I call you?</label>
              <input
                required
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-2">Where can I reach you?</label>
              <input
                required
                type="email"
                id="email"
                placeholder="work@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="text-sm font-medium text-slate-400 ml-2">Tell me about your vision</label>
            <textarea
              required
              id="description"
              rows={5}
              placeholder="I'm looking to build a..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none"
            />
          </div>

          <div className="flex justify-center">
            <button
              disabled={status !== 'idle'}
              type="submit"
              className={`group relative px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 ${
                status === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20'
              }`}
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    Send Proposal <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                )}
                {status === 'submitting' && (
                  <motion.span key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    Received! <Check size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(USER_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-32 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-slate-200">GET IN TOUCH.</h2>
            <p className="text-slate-400 text-xl font-light mb-12 max-w-lg">
              Have a project in mind or just want to say hi? I'm always open to 
              discussing new opportunities and creative ideas.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={`mailto:${USER_DATA.email}`} 
                  className="group flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  aria-label="Send an email"
                >
                  <Mail className="text-indigo-400" size={24} />
                  <span className="text-lg font-medium text-slate-200 group-hover:text-white">{USER_DATA.email}</span>
                </a>
                <button 
                  onClick={copyToClipboard}
                  className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/20 relative"
                  aria-label="Copy email address"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Check className="text-green-500" size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Copy className="text-slate-400" size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded"
                    >
                      Copied!
                    </motion.span>
                  )}
                </button>
              </div>

              <a 
                href={`tel:${USER_DATA.phone}`} 
                className="group inline-flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Call me"
              >
                <Phone className="text-indigo-400" size={24} />
                <span className="text-lg font-medium text-slate-200 group-hover:text-white">{USER_DATA.phone}</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col justify-end lg:items-end">
            <div className="flex gap-6 mb-12">
              <a 
                href={USER_DATA.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/5 rounded-3xl transition-all duration-300 text-slate-400 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white/20" 
                aria-label="GitHub Profile"
              >
                <Github size={32} />
              </a>
              <a 
                href={USER_DATA.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 bg-white/5 rounded-3xl transition-all duration-300 text-slate-400 hover:text-white hover:bg-[#0077b5] focus:outline-none focus:ring-2 focus:ring-white/20" 
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={32} />
              </a>
            </div>
            <div className="text-slate-500 text-right">
              <p className="text-sm uppercase tracking-widest font-bold mb-2">Based in</p>
              <p className="text-lg text-slate-300">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {USER_DATA.name}.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="selection:bg-indigo-500 selection:text-white bg-[#0a0a0a]">
      <Navbar />
      
      <main>
        <Hero />

        <section id="about" className="py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square max-w-lg mx-auto lg:mx-0"
              >
                <div className="absolute inset-0 bg-indigo-500/10 rounded-[40px] blur-3xl" />
                <div className="relative h-full w-full bg-white/[0.03] border border-white/10 rounded-[40px] overflow-hidden flex items-center justify-center backdrop-blur-md">
                  <Briefcase size={160} className="text-indigo-500 opacity-10" />
                  <div className="absolute bottom-12 left-12 right-12">
                    <p className="text-lg font-mono text-slate-500 leading-relaxed">
                      // Passionate about clean code, scalable architecture, and exceptional user experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12 text-slate-200">
                  ABOUT <br />
                  <span className="text-indigo-500">ME.</span>
                </h2>
                <div className="space-y-8 text-slate-400 text-xl font-light leading-relaxed">
                  <p>
                    I am a Senior Software Engineer with a focus on building high-performance 
                    web applications. My approach combines technical excellence with a 
                    deep understanding of user needs.
                  </p>
                  <p>
                    With over 5 years of experience in the industry, I've worked with 
                    startups and established companies to deliver digital products that 
                    make an impact. I believe in the power of simple, intuitive design 
                    backed by a robust technical foundation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-32 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-200">
                  SELECTED <br />
                  <span className="text-indigo-500">WORKS.</span>
                </h2>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-slate-400 max-w-sm text-xl font-light leading-relaxed"
              >
                A collection of projects that define my journey as a developer.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {PROJECTS.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection />
        <StartProjectForm />
      </main>

      <Footer />
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-12 right-12 p-5 bg-indigo-600 text-white rounded-full shadow-2xl z-50 hover:bg-indigo-500 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            aria-label="Back to top"
          >
            <ArrowUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
