import React from 'react';
import { Globe, Terminal, Database, Cpu, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Globe className="w-5 h-5" />,
      color: 'purple',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript', level: 88 },
        { name: 'Bootstrap', level: 85 }
      ]
    },
    {
      title: 'Backend',
      icon: <Terminal className="w-5 h-5" />,
      color: 'cyan',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 87 },
        { name: 'Python', level: 80 },
        { name: 'REST APIs', level: 90 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      color: 'pink',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 82 }
      ]
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="w-5 h-5" />,
      color: 'purple',
      skills: [
        { name: 'Make.com', level: 78 },
        { name: 'n8n', level: 75 },
        { name: 'Gemini API', level: 80 },
        { name: 'AI Chatbots', level: 85 }
      ]
    },
    {
      title: 'Analytics',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'green',
      skills: [
        { name: 'Power BI', level: 75 },
        { name: 'Excel', level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className={`backdrop-blur-lg bg-white/5 border border-${category.color}-500/20 rounded-2xl p-6 hover:shadow-xl hover:shadow-${category.color}-500/20 transition-all ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}-300 flex items-center gap-2`}>
                {category.icon}
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className={`text-sm text-${category.color}-400`}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r from-${category.color}-500 to-${category.color}-300 rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;