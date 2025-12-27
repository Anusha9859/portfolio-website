import React from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Veera_Venkatalakshmi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-2 backdrop-blur-sm bg-purple-500/10 border border-purple-500/30 rounded-full">
          <span className="text-purple-300 text-sm">🚀 Available for Opportunities</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Veera Venkatalakshmi
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          MERN Stack Developer | AI Engineer | Automation Specialist
        </p>
        
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Building intelligent web applications with cutting-edge technologies. 
          Specializing in full-stack development, AI integration, and workflow automation.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={handleDownloadResume}
            className="px-8 py-3 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 backdrop-blur-sm bg-white/5 border border-cyan-500/30 rounded-lg font-semibold hover:bg-white/10 transition-all"
          >
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="mailto:marisearuna@gmail.com" 
            className="p-3 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg hover:bg-white/10 hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/veera-venkatalakshmi-marise-b5b150306" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 backdrop-blur-sm bg-white/5 border border-cyan-500/30 rounded-lg hover:bg-white/10 hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://github.com/Anusha9859" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 backdrop-blur-sm bg-white/5 border border-pink-500/30 rounded-lg hover:bg-white/10 hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;