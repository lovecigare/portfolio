'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

const ContactSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isHydrated) return;
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "afoucher7255@gmail.com" }),
    });

    alert(formData.message)
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-green-500" />
            </div>
            <h3 className="text-3xl font-bold text-[#1a365d] mb-4">Thank You!</h3>
            <p className="text-xl text-gray-600 mb-8">
              Your inquiry has been received. I will respond within 24 hours with a detailed proposal and next steps.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>What happens next:</strong>
              </p>
              <ul className="text-left max-w-md mx-auto space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="CheckIcon" size={20} variant="outline" className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Project requirements analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckIcon" size={20} variant="outline" className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Detailed technical proposal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckIcon" size={20} variant="outline" className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Timeline and cost estimation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="CheckIcon" size={20} variant="outline" className="text-green-500 flex-shrink-0 mt-1" />
                  <span>Schedule consultation call</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => isHydrated && setIsSubmitted(false)}
              disabled={!isHydrated}
              className="mt-8 px-8 py-3 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Start Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how I can help bring your vision to life with expert software engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Project Inquiry Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select project type</option>
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile Application</option>
                  <option value="blockchain">Blockchain/DeFi</option>
                  <option value="ai-ml">AI/ML Integration</option>
                  <option value="api">API Development</option>
                  <option value="consulting">Technical Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select budget range</option>
                  <option value="under-2k">Under $2,000</option>
                  <option value="2k-5k">$2,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="over-25k">Over $25,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3182ce] focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project requirements, timeline, and any specific technologies you'd like to use..."
                />
              </div>

              <button
                type="submit"
                disabled={!isHydrated}
                className="w-full px-8 py-4 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Icon name="PaperAirplaneIcon" size={20} variant="outline" />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1a365d] to-[#2d3748] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3182ce] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="EnvelopeIcon" size={24} variant="outline" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:allan.castrence@example.com" className="text-gray-300 hover:text-white transition-colors">
                      allancastrence5@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3182ce] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPinIcon" size={24} variant="outline" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-gray-300">Pampanga, Philippines</p>
                    <p className="text-sm text-gray-400">Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#3182ce] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="ClockIcon" size={24} variant="outline" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Availability</p>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-gray-300">Available for new projects</p>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/allan-castrence-a3b94a392/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon name="UserGroupIcon" size={24} variant="outline" className="text-[#3182ce]" />
                  <div>
                    <p className="font-semibold text-[#1a365d]">LinkedIn</p>
                    <p className="text-sm text-gray-600">Professional network</p>
                  </div>
                </a>

                <a
                  href="https://github.com/lovecigare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Icon name="CodeBracketIcon" size={24} variant="outline" className="text-[#3182ce]" />
                  <div>
                    <p className="font-semibold text-[#1a365d]">GitHub</p>
                    <p className="text-sm text-gray-600">Code repositories</p>
                  </div>
                </a>

                <button className="w-full flex items-center justify-center gap-2 p-4 bg-[#3182ce] text-white rounded-lg hover:bg-[#2c5282] transition-colors">
                  <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">Quick Questions?</h3>
              <p className="text-gray-600 mb-4">Check out frequently asked questions about:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-700">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#3182ce]" />
                  <span>Project timelines</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#3182ce]" />
                  <span>Remote collaboration</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#3182ce]" />
                  <span>Technology stack</span>
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <Icon name="CheckCircleIcon" size={18} variant="solid" className="text-[#3182ce]" />
                  <span>Payment terms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;