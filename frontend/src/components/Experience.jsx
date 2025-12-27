import React from 'react';
import { Cpu, Zap, Star } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: <Cpu className="w-6 h-6 text-purple-300" />,
      title: 'AI Chatbot Developer',
      company: 'Personal Project',
      period: '2024',
      color: 'purple',
      description: 'Developed an intelligent real-time chatbot using MERN stack integrated with Gemini API. Implemented natural language processing, context memory, and responsive UI for seamless user interaction.',
      tags: ['React', 'Gemini API', 'WebSocket']
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-300" />,
      title: 'Automation Engineer',
      company: 'Personal Projects',
      period: '2024',
      color: 'cyan',
      description: 'Created intelligent workflow automation solutions using Make.com and n8n platforms. Integrated multiple APIs, automated data processing, and streamlined business operations.',
      tags: ['Make.com', 'n8n', 'Python']
    },
    {
      icon: <Star className="w-6 h-6 text-pink-300" />,
      title: 'Academic Excellence',
      company: 'RGUKT Srikakulam',
      period: '2021 - 2025',
      color: 'pink',
      description: null,
      achievements: [
        'Maintained 9.2/10.0 CGPA throughout undergraduate studies',
        'Strong foundation in Data Structures, Algorithms, and Software Engineering',
        'Self-taught MERN stack through online courses and hands-on projects',
        'Active participant in college technical events and coding competitions'
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Experience & Achievements
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`backdrop-blur-lg bg-white/5 border border-${exp.color}-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-${exp.color}-500/20 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 backdrop-blur-sm bg-${exp.color}-500/20 border border-${exp.color}-500/30 rounded-lg`}>
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className={`text-${exp.color}-300 mb-3`}>
                    {exp.company} | {exp.period}
                  </p>
                  
                  {exp.description && (
                    <p className="text-gray-300 leading-relaxed mb-3">
                      {exp.description}
                    </p>
                  )}
                  
                  {exp.achievements && (
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className={`w-2 h-2 bg-${exp.color}-400 rounded-full`} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {exp.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className={`px-3 py-1 text-xs backdrop-blur-sm bg-${exp.color}-500/20 border border-${exp.color}-500/30 rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;