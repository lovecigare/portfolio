'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {
  onScheduleClick: () => void;
  onPortfolioClick: () => void;
}

const HeroSection = ({ onScheduleClick, onPortfolioClick }: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#1a365d] via-[#2d3748] to-[#1a202c] pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Professional Headshot */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3182ce] to-[#2c5282] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#3182ce] shadow-2xl">
                <AppImage
                  src="assets/images/profile.png"
                  alt="Professional headshot of Allan Castrence, senior software engineer in business casual attire with confident smile"
                  className="w-full h-full object-cover"
                  priority />

              </div>
            </div>
          </div>

          {/* Right: Hero Content */}
          <div className="text-white space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Allan Castrence
              </h1>
              <p className="text-2xl md:text-3xl text-[#3182ce] font-semibold">
                Senior Software Engineer | 8+ Years Experience
              </p>
            </div>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Currently working on full-stack and AI automation projects for clients remotely. Available for premium work and technical consulting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onScheduleClick}
                disabled={!isHydrated}
                className="px-8 py-4 bg-[#3182ce] text-white rounded-lg font-semibold text-lg hover:bg-[#2c5282] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">

                <Icon name="CalendarIcon" size={24} variant="outline" />
                Schedule Consultation
              </button>
              <button
                onClick={onPortfolioClick}
                disabled={!isHydrated}
                className="px-8 py-4 bg-transparent border-2 border-[#3182ce] text-white rounded-lg font-semibold text-lg hover:bg-[#3182ce]/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">

                <Icon name="BriefcaseIcon" size={24} variant="outline" />
                View Portfolio
              </button>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <Icon name="BuildingOfficeIcon" size={20} variant="solid" className="text-[#3182ce]" />
                <span className="text-sm text-gray-300">Healthera London</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPinIcon" size={20} variant="solid" className="text-[#3182ce]" />
                <span className="text-sm text-gray-300">Pampanga, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;