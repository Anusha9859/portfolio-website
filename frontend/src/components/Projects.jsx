import React from 'react';
import { Star, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Real-Time AI Chatbot',
      description: 'Full-stack AI-powered chatbot using MERN stack integrated with Gemini API for natural language processing. Features real-time responses, context-aware conversations, and modern UI.',
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'WebSocket'],
      features: ['Natural Language Processing', 'Real-time Responses', 'Context Memory', 'Modern UI/UX'],
      github: 'https://github.com/Anusha9859',
      demo: 'https://chatbot-frontend-d69m.vercel.app/'
    },
    {
      title: 'AI Agent Automation Platform',
      description: 'Developed intelligent automation workflows using Make.com and n8n to streamline business processes. Integrated multiple APIs and created custom automation scenarios.',
      tech: ['Make.com', 'n8n', 'REST APIs', 'Python', 'Webhooks'],
      features: ['Multi-API Integration', 'Workflow Automation', 'Data Transformation', 'Error Handling'],
      github: 'https://github.com/Anusha9859',
      demo: '#'
    },
    {
      title: 'MERN Chat Application',
      description: 'Real-time messaging platform with authentication, WebSocket integration, and responsive design. Supports message history, online status, and typing indicators.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.io'],
      features: ['User Authentication', 'Real-time Messaging', 'Online Status', 'Message History'],
      github: 'https://github.com/Anusha9859',
      demo: 'https://talk-a-tive-yveb.onrender.com/'
    },
    {
      title: 'Business Analytics Dashboard',
      description: 'Interactive data visualization dashboard using Power BI and Excel integration. Provides real-time insights with custom metrics and automated reporting.',
      tech: ['Power BI', 'Excel', 'Python', 'MySQL'],
      features: ['Data Visualization', 'Real-time Updates', 'Custom Metrics', 'Automated Reports'],
      github: 'https://github.com/Anusha9859',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 border border-purple-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/20 transition-all hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-300 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs backdrop-blur-sm bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyan-300 mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map(feature => (
                    <li key={feature} className="text-sm text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 backdrop-blur-sm bg-white/5 border border-purple-500/30 rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.demo}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;