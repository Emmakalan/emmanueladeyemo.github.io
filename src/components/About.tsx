import { Card } from './ui/card';
import { Target, Lightbulb, Rocket, Globe as GlobeIcon, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import Globe from './ui/globe';

export function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Customer-Obsessed',
      description: 'Deep user research to inform every product decision',
    },
    {
      icon: Lightbulb,
      title: 'Strategic Thinker',
      description: 'Balancing business goals with technical feasibility',
    },
    {
      icon: Rocket,
      title: 'Execution-Focused',
      description: 'Shipping enterprise-grade products at scale',
    },
  ];

  const globalReach = [
    {
      continent: 'Africa',
      role: 'Product Development & Innovation',
      color: 'from-[#6B8CFF] to-[#4F46E5]',
    },
    {
      continent: 'Europe',
      role: 'Cross-Border Collaboration',
      color: 'from-[#A3E635] to-[#84CC16]',
    },
    {
      continent: 'North America',
      role: 'Strategic Partnerships',
      color: 'from-[#6B8CFF] to-[#8B5CF6]',
    },
    {
      continent: 'Asia',
      role: 'Team Leadership',
      color: 'from-[#4F46E5] to-[#6366F1]',
    },
  ];

  const certifications = [
    {
      name: 'Certified Scrum Product Owner (Scrum Alliance, CSPO)',
      date: 'Feb 2025',
    },
    {
      name: 'Certified Product Owner/Product Manager [Scaled Agile, SAFe]',
      date: 'Jul 2023',
    },
    {
      name: 'Artificial Intelligence Certification [Product School]',
      date: 'May 2024',
    },
    {
      name: 'Product Led Growth Certification [Product School]',
      date: 'Apr 2023',
    },
    {
      name: 'Data Analytics [Utiva]',
      date: 'Dec 2020',
    },
    {
      name: 'Generative AI: Prompt Engineering Basics [IBM]',
      date: 'Sep 2024',
    },
  ];

  const globeConfig = {
    pointSize: 4,
    globeColor: "#0B1220",
    showAtmosphere: true,
    atmosphereColor: "#6B8CFF",
    atmosphereAltitude: 0.1,
    emissive: "#0B1220",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(107,140,255,0.7)",
    ambientLight: "#6B8CFF",
    directionalLeftLight: "#A3E635",
    directionalTopLight: "#6B8CFF",
    pointLight: "#A3E635",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const arcs = [
    {
      order: 1,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: 51.5074,
      endLng: -0.1278,
      arcAlt: 0.3,
      color: "#6B8CFF",
    },
    {
      order: 2,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.3,
      color: "#A3E635",
    },
    {
      order: 3,
      startLat: 6.5244,
      startLng: 3.3792,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#4F46E5",
    },
    {
      order: 4,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 40.7128,
      endLng: -74.0060,
      arcAlt: 0.3,
      color: "#6B8CFF",
    },
    {
      order: 5,
      startLat: 51.5074,
      startLng: -0.1278,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: "#A3E635",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Customer-obsessed Product Manager blending strategy, UX, and technical depth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a customer-obsessed Product Manager who blends strategy, UX, and technical
                depth to ship enterprise-grade products. I've led ID verification & background-check
                platforms with massive throughput, built event-engagement apps (web + mobile), and
                founded an AI-native personal finance product.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines deep user research, data-driven decision making, and cross-functional
                collaboration to deliver products that truly solve customer problems at scale.
              </p>
            </Card>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-[#6B8CFF]/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>

        {/* Global Reach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GlobeIcon className="w-8 h-8 text-[#A3E635]" />
              <h3 className="text-3xl lg:text-4xl text-white">Global Reach</h3>
            </div>
            <p className="text-gray-400 text-lg">
              Working across continents to build world-class products
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Globe />
            </motion.div>

            {/* Continents List */}
            <div className="space-y-4">
              {globalReach.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-[#6B8CFF]/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-x-2 transition-all duration-300 group">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${region.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all`}>
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white text-xl mb-1">{region.continent}</h4>
                        <p className="text-gray-400">{region.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-[#A3E635]" />
              <h3 className="text-3xl lg:text-4xl text-white">Certifications</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Continuously learning and staying ahead of industry trends
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-[#6B8CFF]/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white mb-2 leading-snug">{cert.name}</p>
                      <Badge variant="outline" className="border-[#A3E635] text-[#A3E635]">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
