'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects: {
    name: string;
    description: string;
    impact: string;
  }[];
}

const CareerTimeline = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences: Experience[] = [
    {
      company: 'Healthera',
      role: 'Senior Software Engineer',
      period: '2022 - Present',
      location: 'London, UK (Remote)',
      description: 'Leading development of enterprise healthcare solutions serving 50,000+ users across UK healthcare ecosystem',
      achievements: [
        'Architected microservices infrastructure reducing API response time by 60%',
        'Implemented AI-driven prescription management system processing 10K+ daily transactions',
        'Led team of 5 developers in agile environment with 99.9% uptime SLA',
        'Established CI/CD pipeline reducing deployment time from 4 hours to 15 minutes'
      ],
      technologies: ['ASP.NET Core', 'React', 'PostgreSQL', 'Azure', 'Docker', 'Kubernetes', 'Redis'],
      projects: [
        {
          name: 'Patient Portal Redesign',
          description: 'Complete overhaul of patient-facing application with modern UI/UX',
          impact: '40% increase in user engagement, 25% reduction in support tickets'
        },
        {
          name: 'Pharmacy Integration Hub',
          description: 'Real-time integration with 500+ pharmacies across UK',
          impact: 'Processing 15K+ prescriptions daily with 99.95% success rate'
        }
      ]
    },
    {
      company: 'DAV Philippines',
      role: 'Senior Developer',
      period: '2020 - 2022',
      location: 'Manila, Philippines',
      description: 'Developed fintech solutions and blockchain applications for international clients',
      achievements: [
        'Built DeFi platform handling $2M+ in daily transactions',
        'Implemented smart contracts with zero security vulnerabilities',
        'Reduced transaction processing time by 75% through optimization',
        'Mentored 3 junior developers in blockchain development'
      ],
      technologies: ['Solidity', 'Web3.js', 'Node.js', 'MongoDB', 'React', 'AWS'],
      projects: [
        {
          name: 'Crypto Trading Platform',
          description: 'Real-time cryptocurrency trading with advanced charting',
          impact: '5,000+ active traders, $50M+ trading volume'
        },
        {
          name: 'NFT Marketplace',
          description: 'Full-featured NFT minting and trading platform',
          impact: '10,000+ NFTs minted, 2,000+ active users'
        }
      ]
    },
    {
      company: 'Nuxify Inc.',
      role: 'Software Engineer',
      period: '2018 - 2020',
      location: 'Quezon City, Philippines',
      description: 'Developed web applications and mobile solutions for diverse client portfolio',
      achievements: [
        'Delivered 15+ client projects with 100% on-time completion rate',
        'Implemented responsive designs supporting 10+ device types',
        'Reduced application load time by 50% through optimization',
        'Established coding standards adopted company-wide'
      ],
      technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Docker'],
      projects: [
        {
          name: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with payment integration',
          impact: '1,000+ daily orders, 99.8% payment success rate'
        },
        {
          name: 'Inventory Management System',
          description: 'Real-time inventory tracking for retail chain',
          impact: '30% reduction in stock discrepancies'
        }
      ]
    }
  ];

  const toggleExpand = (company: string) => {
    if (!isHydrated) return;
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Career Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive career growth from developer to senior engineer with measurable impact at every stage
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Company Header */}
              <div className="bg-gradient-to-r from-[#1a365d] to-[#2d3748] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-[#3182ce] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="BuildingOfficeIcon" size={32} variant="solid" className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{exp.company}</h3>
                      <p className="text-xl text-[#3182ce] font-semibold mb-2">{exp.role}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="flex items-center gap-1">
                          <Icon name="CalendarIcon" size={16} variant="outline" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon name="MapPinIcon" size={16} variant="outline" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleExpand(exp.company)}
                    disabled={!isHydrated}
                    className="px-6 py-3 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 self-start md:self-center"
                  >
                    {expandedCompany === exp.company ? 'Show Less' : 'View Details'}
                    <Icon 
                      name={expandedCompany === exp.company ? 'ChevronUpIcon' : 'ChevronDownIcon'} 
                      size={20} 
                      variant="outline" 
                    />
                  </button>
                </div>
              </div>

              {/* Company Details */}
              <div className="p-6 md:p-8">
                <p className="text-lg text-gray-700 mb-6">{exp.description}</p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <Icon name="TrophyIcon" size={24} variant="solid" className="text-[#3182ce]" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="CheckCircleIcon" size={20} variant="solid" className="text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <Icon name="WrenchScrewdriverIcon" size={24} variant="solid" className="text-[#3182ce]" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#3182ce] text-white rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expandable Projects */}
                <div
                  className={`transition-all duration-500 ${
                    expandedCompany === exp.company ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0'
                  } overflow-hidden`}
                >
                  <h4 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                    <Icon name="RocketLaunchIcon" size={24} variant="solid" className="text-[#3182ce]" />
                    Notable Projects
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {exp.projects.map((project, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                        <h5 className="text-lg font-bold text-[#1a365d] mb-2">{project.name}</h5>
                        <p className="text-gray-600 mb-3">{project.description}</p>
                        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                          <p className="text-sm font-semibold text-green-800">Impact: {project.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;