import React from 'react';
import { Code, Cpu, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />,
      title: 'Full-Stack Development',
      description: 'Building scalable web applications using MERN stack'
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />,
      title: 'AI Integration',
      description: 'Developing intelligent chatbots with Gemini API'
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1" />,
      title: 'Workflow Automation',
      description: 'Creating automation workflows with Make.com & n8n'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />,
      title: 'Data Analytics',
      description: 'Visualizing insights with Power BI and Excel'
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="backdrop-blur-lg bg-white/5 border border-purple-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/20 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Background</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Computer Science Engineering student at RGUKT Srikakulam with an outstanding 9.2 CGPA. 
              Passionate about building innovative web applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Self-taught MERN stack developer with expertise in AI integration and workflow automation. 
              Constantly exploring emerging technologies and implementing them in practical projects.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-cyan-500/20 rounded-2xl p-8 hover:shadow-xl hover:shadow-cyan-500/20 transition-all">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">What I Do</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  {feature.icon}
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;