'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Skill {
  name: string;
  category: string;
  proficiency: number;
  projects: string;
  icon: string;
}

const CoreCompetencies = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skills: Skill[] = [
    {
      name: 'Full-Stack Development',
      category: 'Web Development',
      proficiency: 100,
      projects: '50+ enterprise applications',
      icon: 'CodeBracketIcon',
    },
    {
      name: 'AI Agents & ML',
      category: 'Artificial Intelligence',
      proficiency: 93,
      projects: '12+ AI-powered features',
      icon: 'CpuChipIcon',
    },
    {
      name: 'Blockchain Development',
      category: 'Web3 & Crypto',
      proficiency: 95,
      projects: '8+ DeFi applications',
      icon: 'CubeIcon',
    },
    {
      name: 'ASP.NET Core',
      category: 'Backend Framework',
      proficiency: 98,
      projects: '30+ enterprise APIs',
      icon: 'ServerIcon',
    },
    {
      name: 'Java & Spring Boot',
      category: 'Backend Framework',
      proficiency: 94,
      projects: '25+ microservices',
      icon: 'CommandLineIcon',
    },
    {
      name: 'Python & Django',
      category: 'Backend Framework',
      proficiency: 99,
      projects: '35+ data-driven apps',
      icon: 'DocumentTextIcon',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Core Competencies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mastery across modern technology stack with proven track record in enterprise-scale implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => isHydrated && setHoveredSkill(skill.name)}
              onMouseLeave={() => isHydrated && setHoveredSkill(null)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3182ce] to-[#2c5282] rounded-lg flex items-center justify-center">
                  <Icon name={skill.icon as any} size={28} variant="outline" className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#1a365d]">{skill.name}</h3>
                  <p className="text-sm text-gray-500">{skill.category}</p>
                </div>
              </div>

              {/* Proficiency Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-600">Proficiency</span>
                  <span className="text-sm font-bold text-[#3182ce]">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3182ce] to-[#2c5282] transition-all duration-1000 ease-out"
                    style={{ width: isHydrated ? `${skill.proficiency}%` : '0%' }}
                  ></div>
                </div>
              </div>

              {/* Project Count */}
              <div
                className={`transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}
              >
                <div className="bg-gray-50 rounded-lg p-3 mt-2">
                  <p className="text-sm text-gray-700 font-medium">{skill.projects}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack Visualization */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1a365d] mb-6 text-center">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'ASP.NET', 'Java', 'Python',
              'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure',
              'Solidity', 'Web3.js', 'TensorFlow', 'PyTorch'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-[#3182ce] to-[#2c5282] text-white rounded-full text-sm font-semibold hover:shadow-lg transition-shadow duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;