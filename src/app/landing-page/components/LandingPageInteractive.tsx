'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import HeroSection from './HeroSection';
import ProfessionalSummary from './ProfessionalSummary';
import CoreCompetencies from './CoreCompetencies';
import CareerTimeline from './CareerTimeline';
import Education from './Education';
import ProjectPortfolio from './ProjectPortfolio';
import Testimonials from './Testimonials';
import PricingConsultation from './PricingConsultation';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHydrated) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScheduleClick = () => {
    scrollToSection('contact');
  };

  const handlePortfolioClick = () => {
    scrollToSection('projects');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection 
        onScheduleClick={handleScheduleClick}
        onPortfolioClick={handlePortfolioClick}
      />
      <ProfessionalSummary />
      <CoreCompetencies />
      <CareerTimeline />
      <Education />
      <ProjectPortfolio />
      <Testimonials />
      <PricingConsultation />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPageInteractive;