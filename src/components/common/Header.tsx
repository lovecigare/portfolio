'use client';

import { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/landing-page', icon: 'HomeIcon' },
    { name: 'About', href: '#about', icon: 'UserIcon' },
    { name: 'Projects', href: '#projects', icon: 'BriefcaseIcon' },
    { name: 'Skills', href: '#skills', icon: 'CodeBracketIcon' },
    { name: 'Contact', href: '#contact', icon: 'EnvelopeIcon' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border ${className}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/landing-page" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-xl">AC</span>
            </div>
            <span className="text-xl font-bold hidden sm:block text-white">Allan Castrence</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors text-white"
              >
                <Icon name={item.icon as any} size={18} variant="outline" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} 
              size={24} 
              variant="outline" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  <Icon name={item.icon as any} size={20} variant="outline" />
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 mt-4 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;