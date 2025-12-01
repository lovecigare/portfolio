'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface PricingTier {
  name: string;
  hourlyRate: string;
  phpRate: string;
  features: string[];
  recommended?: boolean;
}

const PricingConsultation = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [projectScope, setProjectScope] = useState('medium');
  const [estimatedCost, setEstimatedCost] = useState('$8,000 - $15,000');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Consultation',
      hourlyRate: '$25/hour',
      phpRate: '₱1,400/hour',
      features: [
        'Technical consultation',
        'Code review',
        'Architecture planning',
        'Technology recommendations',
        'Best practices guidance'
      ]
    },
    {
      name: 'Development',
      hourlyRate: '$30/hour',
      phpRate: '₱1,700/hour',
      features: [
        'Full-stack development',
        'API integration',
        'Database design',
        'Testing & QA',
        'Documentation',
        'Code deployment'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      hourlyRate: '$40/hour',
      phpRate: '₱2,200/hour',
      features: [
        'All Development features',
        'Architecture design',
        'Team leadership',
        'DevOps setup',
        'Performance optimization',
        'Security audit',
        '24/7 support'
      ]
    }
  ];

  const handleScopeChange = (scope: string) => {
    if (!isHydrated) return;
    setProjectScope(scope);
    
    const estimates: { [key: string]: string } = {
      small: '$1,500 - $4,000',
      medium: '$3,000 - $8,000',
      large: '$10,000 - $20,000',
      enterprise: '$20,000+'
    };
    
    setEstimatedCost(estimates[scope] || '$8,000 - $15,000');
  };

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Pricing & Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with flexible engagement models to fit your project needs
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.recommended
                  ? 'bg-gradient-to-br from-[#3182ce] to-[#2c5282] text-white shadow-2xl transform scale-105'
                  : 'bg-gray-50 text-gray-800 shadow-lg'
              }`}
            >
              {tier.recommended && (
                <div className="inline-block px-4 py-1 bg-yellow-400 text-[#1a365d] rounded-full text-sm font-bold mb-4">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="mb-6">
                <p className="text-4xl font-bold mb-1">{tier.hourlyRate}</p>
                <p className={`text-sm ${tier.recommended ? 'text-gray-200' : 'text-gray-500'}`}>
                  {tier.phpRate}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Icon 
                      name="CheckCircleIcon" 
                      size={20} 
                      variant="solid" 
                      className={tier.recommended ? 'text-yellow-400' : 'text-green-500'} 
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  tier.recommended
                    ? 'bg-white text-[#3182ce] hover:bg-gray-100'
                    : 'bg-[#3182ce] text-white hover:bg-[#2c5282]'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Project Estimation Calculator */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">
            Project Cost Estimator
          </h3>
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <label className="block text-lg font-semibold text-[#1a365d] mb-4">
                Project Scope
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: 'small', label: 'Small', duration: '2-4 weeks' },
                  { value: 'medium', label: 'Medium', duration: '1-3 months' },
                  { value: 'large', label: 'Large', duration: '3-6 months' },
                  { value: 'enterprise', label: 'Enterprise', duration: '6+ months' }
                ].map((scope) => (
                  <button
                    key={scope.value}
                    onClick={() => handleScopeChange(scope.value)}
                    disabled={!isHydrated}
                    className={`p-4 rounded-lg border-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      projectScope === scope.value
                        ? 'border-[#3182ce] bg-[#3182ce] text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-[#3182ce]'
                    }`}
                  >
                    <p className="font-bold mb-1">{scope.label}</p>
                    <p className="text-xs">{scope.duration}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <p className="text-gray-600 mb-2">Estimated Project Cost</p>
              <p className="text-5xl font-bold text-[#3182ce] mb-4">{estimatedCost}</p>
              <p className="text-sm text-gray-500 mb-6">
                Final cost depends on specific requirements and complexity
              </p>
              <button className="px-8 py-3 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors">
                Request Detailed Quote
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Booking */}
        <div className="bg-gradient-to-r from-[#1a365d] to-[#2d3748] rounded-2xl p-8 md:p-12 text-white text-center">
          <Icon name="CalendarIcon" size={48} variant="outline" className="mx-auto mb-6 text-[#3182ce]" />
          <h3 className="text-3xl font-bold mb-4">Free 30-Minute Consultation</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discuss your project requirements, get technical recommendations, and receive a detailed proposal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors flex items-center justify-center gap-2">
              <Icon name="CalendarIcon" size={20} variant="outline" />
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Icon name="EnvelopeIcon" size={20} variant="outline" />
              Email Inquiry
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingConsultation;