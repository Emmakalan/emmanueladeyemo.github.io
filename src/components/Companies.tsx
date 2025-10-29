import { Card } from './ui/card';
import { Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Companies() {
  const clients = [
    { name: 'SEAMFIX', style: 'tracking-wider' },
    { name: 'Prompty', style: 'italic' },
    { name: 'MTN', style: 'tracking-widest' },
    { name: 'FinSynq', style: '' },
    { name: 'NIMC', style: 'tracking-wide' },
    { name: 'Educify', style: '' },
    { name: 'AWS', style: 'tracking-wider' },
  ];

  const companies = [
    {
      name: 'FinSynq',
      role: 'Founder & Product Lead',
      period: '2025 - Present',
      location: 'Calgary, AB',
      description: 'Building an AI-powered personal finance platform focused on open banking, credit building, and financial insights. Leading product strategy, partnerships, and architecture.',
      highlights: ['AI-powered finance platform', 'Open banking integration', 'Plaid/Flinks APIs'],
    },
    {
      name: 'Prompty',
      role: 'Lead Product Manager',
      period: '2024 - Present',
      location: 'Calgary, AB',
      description: 'Leading product development of a networking & event engagement platform (web + mobile). Built attendee analytics, NFC/QR badge technology, and engagement features.',
      highlights: ['Event engagement platform', 'NFC/QR technology', 'Mobile + Web'],
    },
    {
      name: 'Seamfix Verify',
      role: 'Lead Product Manager',
      period: 'Jun 2022 - Oct 2024',
      location: 'London, UK / Remote',
      description: 'Led global IDV and Background Check platforms serving millions of verifications monthly. Drove productization of AI/ML models for facial recognition, active/passive liveness.',
      highlights: ['AI/ML facial recognition', 'ISO certification', 'Global IDV platform'],
    },
    {
      name: 'Educify',
      role: 'Product Manager',
      period: 'Oct 2024 - Dec 2024',
      location: 'Calgary, AB',
      description: 'Managed development of an educational enablement platform connecting students and tutors. Delivered MVP for tutoring hub, scheduling, and secure communications.',
      highlights: ['EdTech platform', 'MVP delivery', 'GTM strategy'],
    },
    {
      name: 'Seamfix',
      role: 'Product Owner / Product Manager',
      period: 'Jan 2020 - Jun 2022',
      location: 'Nigeria',
      description: 'Delivered SaaS onboarding and KYC automation for financial institutions. Managed 3 engineering squads across product lifecycle — from ideation to release.',
      highlights: ['KYC automation', '3 engineering squads', 'Payment modules'],
    },
    {
      name: 'Seamfix',
      role: 'Business Insight & Strategic Partnerships Manager',
      period: 'Oct 2018 - Jan 2020',
      location: 'Nigeria',
      description: 'Forged key partnerships (AWS, Jumio, Sochitel). Delivered insights for GTM and product-market fit; supported revenue growth initiatives.',
      highlights: ['AWS partnership', 'GTM strategy', 'Revenue growth'],
    },
  ];

  return (
    <section id="companies" className="py-20 lg:py-32 bg-gradient-to-b from-transparent to-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Happy Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">Happy Clients</h2>
          <p className="text-gray-400 mb-12">
            I've had the pleasure of working with amazing tech companies
          </p>
          
          {/* Client Logos - Auto Scrolling */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0B1220] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0B1220] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              className="flex gap-8 lg:gap-16 items-center"
              animate={{
                x: [0, -(clients.length * 180)],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className={`text-gray-400 hover:text-white transition-all duration-300 text-lg sm:text-xl lg:text-2xl cursor-pointer whitespace-nowrap ${client.style}`}
                >
                  {client.name}
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className={`text-gray-400 hover:text-white transition-all duration-300 text-lg sm:text-xl lg:text-2xl cursor-pointer whitespace-nowrap ${client.style}`}
                >
                  {client.name}
                </div>
              ))}
              {/* Third set for extra smoothness */}
              {clients.map((client, index) => (
                <div
                  key={`third-${index}`}
                  className={`text-gray-400 hover:text-white transition-all duration-300 text-lg sm:text-xl lg:text-2xl cursor-pointer whitespace-nowrap ${client.style}`}
                >
                  {client.name}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-400 mb-8">
            Companies & Organizations I've Worked With
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 hover:border-[#6B8CFF]/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white text-xl mb-1">{company.name}</h3>
                    <p className="text-[#A3E635] text-sm mb-1">{company.role}</p>
                    <p className="text-gray-400 text-xs mb-1">{company.period}</p>
                    <p className="text-gray-500 text-xs italic">{company.location}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">{company.description}</p>
                {company.highlights && (
                  <div className="flex flex-wrap gap-2">
                    {company.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-white/5 text-gray-400 rounded-md border border-white/10"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4+', label: 'Organizations' },
            { value: '8+', label: 'Years Experience' },
            { value: '300M+', label: 'Customers Reached' },
            { value: '7+', label: 'Industries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-[#6B8CFF]/30 transition-all duration-300"
            >
              <div className="text-4xl lg:text-5xl text-white mb-2 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
