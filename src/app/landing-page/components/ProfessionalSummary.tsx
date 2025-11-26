'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

const ProfessionalSummary = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
    
    // Animated counter
    let start = 0;
    const end = 8;
    const duration = 2000;
    const increment = end / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setYearsCount(end);
        clearInterval(timer);
      } else {
        setYearsCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const milestones = [
    { year: '2016', role: 'Junior Developer', company: 'Started Career' },
    { year: '2018', role: 'Software Engineer', company: 'Nuxify Inc.' },
    { year: '2020', role: 'Senior Developer', company: 'DAV Philippines' },
    { year: '2022', role: 'Senior Software Engineer', company: 'Healthera London' },
  ];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming complex business challenges into elegant software solutions across healthcare, fintech, and enterprise domains
          </p>
        </div>

        {/* Animated Counter */}
        <div className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] rounded-2xl p-12 mb-16 text-center">
          <div className="text-7xl md:text-8xl font-bold text-[#3182ce] mb-4">
            {isHydrated ? `${yearsCount}+` : '8+'}
          </div>
          <p className="text-2xl text-white font-semibold">Years of Experience</p>
          <p className="text-gray-300 mt-2">Building enterprise-grade solutions</p>
        </div>

        {/* Career Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#3182ce] to-[#2c5282] hidden md:block"></div>

          <div className="space-y-12">
            {milestones?.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="BriefcaseIcon" size={24} variant="solid" className="text-[#3182ce]" />
                    <span className="text-2xl font-bold text-[#1a365d]">{milestone?.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-2">{milestone?.role}</h3>
                  <p className="text-gray-600">{milestone?.company}</p>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-6 h-6 bg-[#3182ce] rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Role Highlight */}
        <div className="mt-16 bg-gradient-to-r from-[#3182ce] to-[#2c5282] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-4 mb-6">
            <Icon name="StarIcon" size={32} variant="solid" className="text-yellow-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Current Role</h3>
              <p className="text-xl mb-4">Senior Software Engineer at Healthera</p>
              <p className="text-gray-200 leading-relaxed">
                Leading development of enterprise healthcare solutions for London-based healthcare technology company. Architecting scalable systems serving thousands of users across the UK healthcare ecosystem, implementing AI-driven features, and ensuring HIPAA compliance.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">50K+</p>
              <p className="text-sm text-gray-200">Active Users</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">99.9%</p>
              <p className="text-sm text-gray-200">Uptime SLA</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-1">15+</p>
              <p className="text-sm text-gray-200">Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;