import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import emmanuelImage from 'figma:asset/4939c06fbfe3020e5b3c03d79fb3926ec4e45aee.png';

export function Hero() {
  const tags = [
    'Fintech & Payments',
    'IDV & S-IAM',
    'AI/ML Productization',
    'APIs & Platforms',
  ];

  const stats = [
    { value: '7+ years', label: 'Product leadership' },
    { value: '10+', label: 'Products shipped' },
    { value: '10M+ / mo', label: 'ID verifications at scale' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 md:-left-48 w-64 md:w-96 h-64 md:h-96 bg-[#6B8CFF]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-24 md:-right-48 w-64 md:w-96 h-64 md:h-96 bg-[#4F46E5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-[#6B8CFF]/20 to-[#4F46E5]/20 text-[#A3E635] border border-[#A3E635]/30 px-4 py-2">
                Open to Product Manager and Product Owner Roles
              </Badge>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1]"
              >
                Building{' '}
                <span className="bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] bg-clip-text text-transparent">
                  high-trust
                </span>
                , AI-powered products that scale
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-400 leading-relaxed"
              >
                Senior Product Manager with deep experience across fintech, IDV & S-IAM, and
                data-driven SaaS.
              </motion.p>
            </div>

            {/* Tag Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              {tags.map((tag, index) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-[#6B8CFF]/50 transition-all duration-300 px-4 py-2"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
              >
                <a href="#portfolio">
                  See Work <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                <a href="#contact">
                  Download CV <Download className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-[#6B8CFF]/30 transition-all duration-300 group"
                >
                  <div className="text-2xl lg:text-3xl text-white mb-1 group-hover:text-[#A3E635] transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] rounded-3xl blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src={emmanuelImage}
                  alt="Emmanuel Adeyemo"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px] object-cover rounded-[24px] shadow-2xl ring-1 ring-white/20 group-hover:ring-[#6B8CFF]/50 transition-all duration-500 p-[0px] lg:-translate-y-24"
                />
                
                {/* Decorative Elements */}
                <div className="hidden sm:block absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-[#A3E635]/20 rounded-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-[#6B8CFF]/20 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 lg:-translate-y-24"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
