'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  quote: string;
  project: string;
  rating: number;
}

const Testimonials = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Michal Wrochna',
      role: 'CEO',
      company: 'Stacash',
      image: "assets/images/clients/michal.png",
      alt: 'Professional woman with blonde hair in navy blazer smiling confidently in modern office',
      quote: 'Allan transformed our healthcare platform with exceptional technical expertise. His ability to architect scalable solutions while maintaining code quality is outstanding. The patient portal he built now serves 50,000+ users with 99.9% uptime.',
      project: 'Healthera Patient Portal',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'DAV Philippines',
      image: "assets/images/clients/edvard.png",
      alt: 'Asian businessman in gray suit with glasses smiling in corporate office setting',
      quote: 'Working with Allan on our DeFi platform was a game-changer. His blockchain expertise and attention to security details resulted in a platform handling $50M+ in trading volume with zero security incidents.',
      project: 'DeFi Trading Platform',
      rating: 5
    },
    {
      id: 3,
      name: 'Jennifer Rodriguez',
      role: 'CEO',
      company: 'TechStart Solutions',
      image: "assets/images/clients/donato.png",
      alt: 'Hispanic woman with long dark hair in white blouse smiling warmly in bright office',
      quote: 'Allan delivered our e-commerce platform ahead of schedule and exceeded all expectations. His full-stack expertise and problem-solving skills are exceptional. We now process 1,000+ orders daily with 99.8% payment success rate.',
      project: 'E-commerce Platform',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Engineering Lead',
      company: 'Nuxify Inc.',
      image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b290162b-1763294963048.png",
      alt: 'Caucasian man with beard in blue shirt smiling confidently in tech startup office',
      quote: 'Allan is one of the most talented developers I have worked with. His code quality, documentation, and mentorship of junior developers set a high standard for our entire team. Every project he touched improved significantly.',
      project: 'Multiple Enterprise Projects',
      rating: 5
    }];


  const nextTestimonial = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (!isHydrated) return;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#1a365d] to-[#2d3748]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders and innovative startups for delivering exceptional results
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#3182ce] shadow-lg">
                  <AppImage
                    key={currentIndex}
                    src={currentTestimonial.image}
                    alt={currentTestimonial.alt}
                    className="w-full h-full object-cover" />

                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(currentTestimonial.rating)].map((_, i) =>
                    <Icon key={i} name="StarIcon" size={24} variant="solid" className="text-yellow-400" />
                  )}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </blockquote>

                {/* Client Info */}
                <div className="mb-4">
                  <p className="text-xl font-bold text-[#1a365d]">{currentTestimonial.name}</p>
                  <p className="text-[#3182ce] font-semibold">{currentTestimonial.role}</p>
                  <p className="text-gray-600">{currentTestimonial.company}</p>
                </div>

                {/* Project Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg">
                  <Icon name="BriefcaseIcon" size={18} variant="outline" className="text-[#3182ce]" />
                  <span className="text-sm font-semibold text-[#1a365d]">
                    Project: {currentTestimonial.project}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevTestimonial}
                disabled={!isHydrated}
                className="w-12 h-12 rounded-full bg-[#3182ce] text-white flex items-center justify-center hover:bg-[#2c5282] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

                <Icon name="ChevronLeftIcon" size={24} variant="outline" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) =>
                  <button
                    key={index}
                    onClick={() => isHydrated && setCurrentIndex(index)}
                    disabled={!isHydrated}
                    className={`w-3 h-3 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${index === currentIndex ? 'bg-[#3182ce] w-8' : 'bg-gray-300'}`
                    } />

                )}
              </div>

              <button
                onClick={nextTestimonial}
                disabled={!isHydrated}
                className="w-12 h-12 rounded-full bg-[#3182ce] text-white flex items-center justify-center hover:bg-[#2c5282] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

                <Icon name="ChevronRightIcon" size={24} variant="outline" />
              </button>
            </div>
          </div>

          {/* LinkedIn Verification Badge */}
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">All testimonials verified on LinkedIn</p>
            {/* <a
              href="https://www.linkedin.com/in/allan-castrence-a3b94a392/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a365d] rounded-lg font-semibold hover:bg-gray-100 transition-colors">

              <Icon name="UserGroupIcon" size={20} variant="outline" />
              View LinkedIn Profile
            </a> */}
          </div>
        </div>
      </div>
    </section>);

};

export default Testimonials;