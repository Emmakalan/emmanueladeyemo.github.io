import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { OptimizedImage } from './OptimizedImage';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, ExternalLink, Code, Workflow, Database, Shield, Users } from 'lucide-react';

// Import technical implementation images
import seamfixCareFlow from '../assets/Seamfix Care Process Flow.png';
import usdWalletBilling from '../assets/USD Wallet Billing.drawio.png';
import screenshot2024_06_24 from '../assets/Screenshot 2024-06-24 at 17.08.35.png';
import screenshot2024_12_17 from '../assets/Screenshot 2024-12-17 at 12.20.34.png';
import guarantorVerification from '../assets/Guarantor Verification flow (1).png';
import promptyBusinessOutlook from '../assets/Prompty Business Outlook.jpg';

interface TechnicalDiagram {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'Process Flow' | 'System Architecture' | 'User Journey' | 'Business Logic' | 'Technical Design';
  project: string;
  icon: React.ReactNode;
  tags: string[];
}

const technicalDiagrams: TechnicalDiagram[] = [
  {
    id: 'seamfix-care-flow',
    title: 'Seamfix Care Process Flow',
    description: 'End-to-end patient care management workflow showing appointment scheduling, consultation, and follow-up processes.',
    image: seamfixCareFlow,
    category: 'Process Flow',
    project: 'Seamfix Care',
    icon: <Workflow className="w-5 h-5" />,
    tags: ['Healthcare', 'Process Design', 'User Experience', 'Workflow Optimization']
  },
  {
    id: 'usd-wallet-billing',
    title: 'USD Wallet Billing System',
    description: 'Comprehensive billing architecture for multi-currency wallet system with real-time transaction processing.',
    image: usdWalletBilling,
    category: 'System Architecture',
    project: 'FinSynq',
    icon: <Database className="w-5 h-5" />,
    tags: ['Fintech', 'Billing System', 'Multi-Currency', 'Real-time Processing']
  },
  {
    id: 'system-dashboard-1',
    title: 'System Dashboard & Analytics',
    description: 'Real-time monitoring dashboard showing system performance metrics and user engagement analytics.',
    image: screenshot2024_06_24,
    category: 'Technical Design',
    project: 'Seamfix Platform',
    icon: <Code className="w-5 h-5" />,
    tags: ['Dashboard', 'Analytics', 'Monitoring', 'Data Visualization']
  },
  {
    id: 'system-dashboard-2',
    title: 'Advanced System Interface',
    description: 'Sophisticated admin interface for managing complex verification workflows and compliance monitoring.',
    image: screenshot2024_12_17,
    category: 'Technical Design',
    project: 'Seamfix Verify',
    icon: <Shield className="w-5 h-5" />,
    tags: ['Admin Interface', 'Compliance', 'Verification', 'Security']
  },
  {
    id: 'guarantor-verification',
    title: 'Guarantor Verification Flow',
    description: 'Automated guarantor verification process with risk assessment and compliance checks.',
    image: guarantorVerification,
    category: 'Process Flow',
    project: 'Seamfix Verify',
    icon: <Users className="w-5 h-5" />,
    tags: ['Identity Verification', 'Risk Assessment', 'Compliance', 'Automation']
  },
  {
    id: 'prompty-business-outlook',
    title: 'Prompty Business Intelligence',
    description: 'Comprehensive business analytics dashboard showing event performance metrics and attendee insights.',
    image: promptyBusinessOutlook,
    category: 'Business Logic',
    project: 'Prompty',
    icon: <ExternalLink className="w-5 h-5" />,
    tags: ['Business Intelligence', 'Event Analytics', 'Data Insights', 'Performance Metrics']
  }
];

const categoryColors = {
  'Process Flow': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'System Architecture': 'bg-green-500/20 text-green-300 border-green-500/30',
  'User Journey': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Business Logic': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Technical Design': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
};

export function TechnicalImplementation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(technicalDiagrams.map(diagram => diagram.category)))];

  const filteredDiagrams = selectedCategory === 'All' 
    ? technicalDiagrams 
    : technicalDiagrams.filter(diagram => diagram.category === selectedCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredDiagrams.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredDiagrams.length) % filteredDiagrams.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-[#6B8CFF]/20 text-[#6B8CFF] border-[#6B8CFF]/30">
            Technical Implementation
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Behind the Scenes
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore the technical depth and implementation details that power my products, 
            from system architectures to user journey flows.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#6B8CFF] text-white hover:bg-[#5A7BFF]'
                  : 'border-white/20 text-gray-300 hover:border-[#6B8CFF]/50 hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Image Display */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden mb-8">
            <div className="aspect-[16/10] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full"
                >
                  <OptimizedImage
                    src={filteredDiagrams[currentIndex]?.image}
                    alt={filteredDiagrams[currentIndex]?.title}
                    className={`w-full h-full object-contain ${
                      filteredDiagrams[currentIndex]?.id === 'prompty-business-outlook' ? 'blur-sm' : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    quality={90}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Overlay with diagram info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      {filteredDiagrams[currentIndex]?.icon}
                    </div>
                    <Badge className={categoryColors[filteredDiagrams[currentIndex]?.category as keyof typeof categoryColors]}>
                      {filteredDiagrams[currentIndex]?.category}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white/80">
                      {filteredDiagrams[currentIndex]?.project}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredDiagrams[currentIndex]?.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {filteredDiagrams[currentIndex]?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {filteredDiagrams[currentIndex]?.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:border-[#6B8CFF]/50 hover:text-[#6B8CFF]"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <div className="flex gap-2">
              {filteredDiagrams.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#6B8CFF] scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:border-[#6B8CFF]/50 hover:text-[#6B8CFF]"
            >
              Next
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredDiagrams.map((diagram, index) => (
              <motion.button
                key={diagram.id}
                onClick={() => goToSlide(index)}
                className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? 'border-[#6B8CFF] scale-105'
                    : 'border-white/20 hover:border-white/40'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <OptimizedImage
                  src={diagram.image}
                  alt={diagram.title}
                  className={`w-full h-full object-cover ${diagram.id === 'prompty-business-outlook' ? 'blur-xs' : ''}`}
                  sizes="(max-width: 768px) 50vw, 16vw"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="p-2 bg-white/20 rounded-lg mb-2 mx-auto w-fit">
                      {diagram.icon}
                    </div>
                    <p className="text-white text-xs font-medium">{diagram.title}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Technical Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: 'Process Flows', value: '300+', icon: <Workflow className="w-6 h-6" /> },
            { label: 'System Diagrams', value: '8+', icon: <Database className="w-6 h-6" /> },
            { label: 'Technical Specs', value: '25+', icon: <Code className="w-6 h-6" /> },
            { label: 'Projects Covered', value: '7+', icon: <ExternalLink className="w-6 h-6" /> }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#6B8CFF]/20 rounded-xl mb-3 text-[#6B8CFF]">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
