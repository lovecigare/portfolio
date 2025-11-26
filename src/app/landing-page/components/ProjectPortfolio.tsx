'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  alt: string;
  liveDemo?: string;
  github?: string;
  results: {
    metric: string;
    value: string;
  }[];
}

const ProjectPortfolio = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const categories = ['All', 'Healthcare', 'Blockchain', 'E-commerce', 'Fintech', 'AI/ML'];

  const projects: Project[] = [
  {
    id: 1,
    name: 'Healthera Patient Portal',
    category: 'Healthcare',
    description: 'Enterprise healthcare platform serving 50,000+ patients across UK with real-time prescription management, appointment scheduling, and medical records access.',
    technologies: ['ASP.NET Core', 'React', 'PostgreSQL', 'Azure', 'Redis'],
    image: "https://images.unsplash.com/photo-1733232679107-9c9957c1affa",
    alt: 'Modern healthcare dashboard showing patient records and prescription management interface on desktop computer',
    liveDemo: 'https://healthera.co.uk',
    github: 'Private Repository',
    results: [
    { metric: 'Active Users', value: '50,000+' },
    { metric: 'Daily Transactions', value: '10,000+' },
    { metric: 'Uptime', value: '99.9%' }]

  },
  {
    id: 2,
    name: 'DeFi Trading Platform',
    category: 'Blockchain',
    description: 'Decentralized finance platform enabling cryptocurrency trading with advanced charting, real-time market data, and secure wallet integration.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'MongoDB'],
    image: "https://images.unsplash.com/photo-1568092715422-fff34eabbe84",
    alt: 'Cryptocurrency trading platform interface displaying real-time charts and market data on multiple screens',
    liveDemo: 'https://dexscout.org',
    github: 'https://github.com/allancastrence/defi-platform',
    results: [
    { metric: 'Trading Volume', value: '$50M+' },
    { metric: 'Active Traders', value: '5,000+' },
    { metric: 'Transactions', value: '100K+' }]

  },
  {
    id: 3,
    name: 'NFT Marketplace',
    category: 'Blockchain',
    description: 'Full-featured NFT minting and trading platform with smart contract integration, royalty management, and IPFS storage.',
    technologies: ['Solidity', 'Ethereum', 'React', 'IPFS', 'Web3.js'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_135caf281-1764176515476.png",
    alt: 'NFT marketplace gallery showing digital art collection with colorful abstract pieces and trading interface',
    liveDemo: 'https://favrr.com',
    github: 'https://github.com/allancastrence/nft-marketplace',
    results: [
    { metric: 'NFTs Minted', value: '10,000+' },
    { metric: 'Active Users', value: '2,000+' },
    { metric: 'Total Sales', value: '$5M+' }]

  },
  {
    id: 4,
    name: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Scalable e-commerce solution with payment gateway integration, inventory management, and real-time order tracking.',
    technologies: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'Stripe'],
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68",
    alt: 'Modern e-commerce website showing product catalog with shopping cart and checkout interface on laptop',
    liveDemo: 'https://swag.com',
    github: 'https://github.com/allancastrence/ecommerce',
    results: [
    { metric: 'Daily Orders', value: '1,000+' },
    { metric: 'Payment Success', value: '99.8%' },
    { metric: 'Revenue', value: '$2M+' }]

  },
  {
    id: 5,
    name: 'AI Chatbot Assistant',
    category: 'AI/ML',
    description: 'Intelligent chatbot powered by natural language processing for customer support automation with multi-language support.',
    technologies: ['Python', 'TensorFlow', 'Django', 'PostgreSQL', 'Redis'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c1f2b172-1764176513258.png",
    alt: 'AI chatbot interface showing conversation flow with natural language responses on mobile and desktop devices',
    liveDemo: 'https://example-ai.com',
    github: 'https://github.com/allancastrence/ai-chatbot',
    results: [
    { metric: 'Conversations', value: '50,000+' },
    { metric: 'Accuracy', value: '95%' },
    { metric: 'Response Time', value: '<2s' }]

  },
  {
    id: 6,
    name: 'Payment Gateway Integration',
    category: 'Fintech',
    description: 'Secure payment processing system with multi-currency support, fraud detection, and PCI DSS compliance.',
    technologies: ['ASP.NET Core', 'React', 'SQL Server', 'Azure', 'Stripe'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13392b20f-1764176513252.png",
    alt: 'Secure payment gateway interface showing transaction processing and multi-currency payment options',
    liveDemo: 'https://example-pay.com',
    github: 'Private Repository',
    results: [
    { metric: 'Transactions', value: '$10M+' },
    { metric: 'Success Rate', value: '99.5%' },
    { metric: 'Fraud Prevention', value: '99.9%' }]

  }];


  const filteredProjects = selectedCategory === 'All' ?
  projects :
  projects.filter((p) => p.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    if (!isHydrated) return;
    setSelectedCategory(category);
  };

  const handleProjectClick = (project: Project) => {
    if (!isHydrated) return;
    setSelectedProject(project);
  };

  const closeModal = () => {
    if (!isHydrated) return;
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-4">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing enterprise-grade solutions with measurable business impact and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            disabled={!isHydrated}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            selectedCategory === category ?
            'bg-[#3182ce] text-white shadow-lg' :
            'bg-gray-100 text-gray-700 hover:bg-gray-200'}`
            }>

              {category}
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) =>
          <div
            key={project.id}
            onClick={() => handleProjectClick(project)}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">

              <div className="relative h-48 overflow-hidden">
                <AppImage
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />

                <div className="absolute top-4 right-4 px-3 py-1 bg-[#3182ce] text-white rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) =>
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">

                      {tech}
                    </span>
                )}
                  {project.technologies.length > 3 &&
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                }
                </div>
                <div className="flex gap-3">
                  {project.liveDemo &&
                <button className="flex items-center gap-1 text-[#3182ce] hover:text-[#2c5282] font-semibold text-sm">
                      <Icon name="GlobeAltIcon" size={16} variant="outline" />
                      Live Demo
                    </button>
                }
                  {project.github &&
                <button className="flex items-center gap-1 text-[#3182ce] hover:text-[#2c5282] font-semibold text-sm">
                      <Icon name="CodeBracketIcon" size={16} variant="outline" />
                      Code
                    </button>
                }
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Detail Modal */}
        {selectedProject &&
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">

            <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8">

              <div className="relative h-64 md:h-96">
                <AppImage
                src={selectedProject.image}
                alt={selectedProject.alt}
                className="w-full h-full object-cover" />

                <button
                onClick={closeModal}
                disabled={!isHydrated}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">

                  <Icon name="XMarkIcon" size={24} variant="outline" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-[#1a365d]">{selectedProject.name}</h3>
                  <span className="px-4 py-2 bg-[#3182ce] text-white rounded-full font-semibold">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-lg text-gray-700 mb-6">{selectedProject.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#1a365d] mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) =>
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#3182ce] text-white rounded-full text-sm font-medium">

                        {tech}
                      </span>
                  )}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-[#1a365d] mb-3">Project Results</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedProject.results.map((result) =>
                  <div key={result.metric} className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="text-3xl font-bold text-[#3182ce] mb-1">{result.value}</p>
                        <p className="text-sm text-gray-600">{result.metric}</p>
                      </div>
                  )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.liveDemo &&
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-[#3182ce] text-white rounded-lg font-semibold hover:bg-[#2c5282] transition-colors text-center flex items-center justify-center gap-2">

                      <Icon name="GlobeAltIcon" size={20} variant="outline" />
                      View Live Demo
                    </a>
                }
                  {selectedProject.github &&
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors text-center flex items-center justify-center gap-2">

                      <Icon name="CodeBracketIcon" size={20} variant="outline" />
                      View Code
                    </a>
                }
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>);

};

export default ProjectPortfolio;