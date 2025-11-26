'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState(2025);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date()?.getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] text-white py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3182ce] to-[#2c5282] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AC</span>
              </div>
              <span className="text-xl font-bold">Allan Castrence</span>
            </div>
            <p className="text-gray-300 mb-4">
              Senior Software Engineer specializing in full-stack development, AI integration, and blockchain solutions.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for Projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRightIcon" size={16} variant="outline" />
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRightIcon" size={16} variant="outline" />
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRightIcon" size={16} variant="outline" />
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Icon name="ChevronRightIcon" size={16} variant="outline" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Full-Stack Development</li>
              <li className="text-gray-300">AI & ML Integration</li>
              <li className="text-gray-300">Blockchain Development</li>
              <li className="text-gray-300">Technical Consulting</li>
              <li className="text-gray-300">Code Review & Audit</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="EnvelopeIcon" size={20} variant="outline" className="text-[#3182ce] flex-shrink-0 mt-1" />
                <a href="mailto:allan.castrence@example.com" className="text-gray-300 hover:text-white transition-colors">
                  allan.castrence@example.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Icon name="MapPinIcon" size={20} variant="outline" className="text-[#3182ce] flex-shrink-0 mt-1" />
                <span className="text-gray-300">Pampanga, Philippines</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://linkedin.com/in/allancastrence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3182ce] rounded-lg flex items-center justify-center hover:bg-[#2c5282] transition-colors"
                >
                  <Icon name="UserGroupIcon" size={20} variant="outline" />
                </a>
                <a
                  href="https://github.com/allancastrence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#3182ce] rounded-lg flex items-center justify-center hover:bg-[#2c5282] transition-colors"
                >
                  <Icon name="CodeBracketIcon" size={20} variant="outline" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {isHydrated ? currentYear : 2025} Allan Castrence. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;