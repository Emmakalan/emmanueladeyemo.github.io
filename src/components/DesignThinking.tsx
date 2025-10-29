import { motion } from 'motion/react';
import { Lightbulb, Target, Palette, Rocket, BarChart3 } from 'lucide-react';

export function DesignThinking() {
  const phases = [
    {
      icon: Lightbulb,
      title: 'Discover',
      description: 'Deep user research, stakeholder interviews, and market analysis to uncover pain points and opportunities.',
      details: ['User interviews', 'Competitive analysis', 'Data mining', 'Problem framing'],
      color: '#6B8CFF',
    },
    {
      icon: Target,
      title: 'Define',
      description: 'Synthesize insights into clear problem statements, user personas, and measurable success criteria.',
      details: ['Problem definition', 'User personas', 'Success metrics', 'Requirement mapping'],
      color: '#4F46E5',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Ideate, prototype, and test solutions through iterative cycles of design and validation.',
      details: ['Wireframing', 'Prototyping', 'Usability testing', 'Design iteration'],
      color: '#6366F1',
    },
    {
      icon: Rocket,
      title: 'Deliver',
      description: 'Collaborate with engineering to ship quality products, ensuring design integrity through implementation.',
      details: ['Cross-functional collaboration', 'Quality assurance', 'Product launch', 'User onboarding'],
      color: '#8B5CF6',
    },
    {
      icon: BarChart3,
      title: 'Measure',
      description: 'Track KPIs, gather feedback, and iterate based on real-world usage and business impact.',
      details: ['Analytics tracking', 'User feedback loops', 'A/B testing', 'Continuous improvement'],
      color: '#A3E635',
    },
  ];

  return (
    <section id="approach" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Design Thinking Approach</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My product development methodology combines user-centered design principles with data-driven decision-making to deliver exceptional outcomes
          </p>
        </motion.div>

        {/* Desktop Flow - Horizontal */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6B8CFF] via-[#4F46E5] to-[#A3E635] opacity-30"></div>
            
            {/* Phases */}
            <div className="grid grid-cols-5 gap-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Icon circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-40 h-40 rounded-full border-2 flex items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105 relative group"
                      style={{ borderColor: phase.color }}
                    >
                      <phase.icon className="w-12 h-12" style={{ color: phase.color }} />
                      
                      {/* Pulse effect on hover */}
                      <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle, ${phase.color}20 0%, transparent 70%)`,
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl text-white">{phase.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                    
                    {/* Details */}
                    <ul className="space-y-2 text-xs text-gray-500">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center justify-center gap-2">
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: phase.color }}
                          ></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow */}
                  {index < phases.length - 1 && (
                    <div className="absolute top-20 -right-3 z-20">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 12h14m0 0l-6-6m6 6l-6 6"
                          stroke={phase.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          opacity="0.5"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Flow - Vertical */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div
                    className="w-20 h-20 rounded-full border-2 flex items-center justify-center bg-white/5 backdrop-blur-sm"
                    style={{ borderColor: phase.color }}
                  >
                    <phase.icon className="w-8 h-8" style={{ color: phase.color }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl text-white">{phase.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{phase.description}</p>
                  
                  {/* Details */}
                  <ul className="space-y-2 text-xs text-gray-500">
                    {phase.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5"
                          style={{ backgroundColor: phase.color }}
                        ></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting line */}
              {index < phases.length - 1 && (
                <div className="ml-10 mt-4 mb-4">
                  <div
                    className="w-0.5 h-8 opacity-30"
                    style={{ backgroundColor: phase.color }}
                  ></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#6B8CFF]/10 to-[#4F46E5]/10 border border-[#6B8CFF]/30 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300">
              <span className="text-[#A3E635]">Outcome-driven:</span> Every phase is anchored in measurable impact and user value
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
