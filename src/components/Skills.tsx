import { Card } from './ui/card';
import { Progress } from './ui/progress';
import { Lightbulb, Cpu, Zap, BarChart3, Briefcase, Database, Palette, Code, Brain } from 'lucide-react';
import { motion } from 'motion/react';
import { Badge } from './ui/badge';

export function Skills() {
  const skills = [
    {
      title: 'Product Strategy & Leadership',
      icon: Lightbulb,
      items: [
        { name: 'Vision & Roadmap', value: 95 },
        { name: 'Stakeholder Alignment', value: 90 },
        { name: 'Outcome-driven OKRs', value: 88 },
      ],
    },
    {
      title: 'AI/ML & Platforms',
      icon: Cpu,
      items: [
        { name: 'AI Insights & RAG', value: 85 },
        { name: 'IDV Liveness/Facematch', value: 92 },
        { name: 'API & Data Pipelines', value: 87 },
      ],
    },
    {
      title: 'Execution & UX',
      icon: Zap,
      items: [
        { name: 'Discovery → Delivery', value: 93 },
        { name: 'Experimentation & Analytics', value: 89 },
        { name: 'Design Systems', value: 84 },
      ],
    },
  ];

  const technicalSkills = [
    {
      title: 'Product Analytics Tools',
      icon: BarChart3,
      tools: ['Pendo', 'Hotjar', 'Google Analytics', 'Microsoft Clarity', 'Mixpanel'],
    },
    {
      title: 'Product Management Tools',
      icon: Briefcase,
      tools: ['JIRA', 'Confluence', 'Miro', 'Microsoft Office Suite', 'SharePoint', 'Aha!', 'Zoom', 'Slack', 'Productboard', 'Notion', 'Roadmunk'],
    },
    {
      title: 'Data Analysis',
      icon: Database,
      tools: ['SQL', 'Tableau', 'Power BI', 'Redash'],
    },
    {
      title: 'Design Tools',
      icon: Palette,
      tools: ['Figma', 'XD', 'Miro', 'Framer', 'Pitch'],
    },
    {
      title: 'AI Skills',
      icon: Brain,
      tools: ['Prompt Engineering', 'AI Agents', 'RAG (Retrieval-Augmented Generation)', 'LLM Integration', 'Fine-tuning Models', 'AI Product Strategy', 'Vector Databases', 'Semantic Search', 'AI Workflows', 'GPT APIs', 'Claude API', 'Langchain'],
    },
    {
      title: 'Technical Understanding',
      icon: Code,
      tools: ['APIs', 'AWS Cloud services', 'AI/ML', 'AML/KYC', 'Biometric IDV Solutions', 'Icepanel', 'OAUTH', 'SAML', 'ODIC', 'React', 'HTML/CSS', 'Javascript'],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-b from-white/5 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A blend of strategic thinking, technical depth, and execution excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:bg-white/10 hover:border-[#6B8CFF]/30 transition-all duration-300 group h-full">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6B8CFF] to-[#4F46E5] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-white text-lg">{skill.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {skill.items.map((item, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-gray-300">{item.name}</span>
                          <span className="text-sm text-[#A3E635]">{item.value}%</span>
                        </div>
                        <div className="relative">
                          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.value}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.2 + idx * 0.1 }}
                              className="h-full bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl text-white mb-4">Technical Skills</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#A3E635] to-[#6B8CFF] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 hover:bg-white/10 hover:border-[#6B8CFF]/30 transition-all duration-300 group h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#A3E635] to-[#6B8CFF] flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/30 transition-all">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-white">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-white/10 text-gray-300 border-white/20 hover:bg-[#6B8CFF]/20 hover:text-white hover:border-[#6B8CFF]/50 transition-all duration-200 cursor-default"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
