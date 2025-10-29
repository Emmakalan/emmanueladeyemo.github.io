import { useState } from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import finsynqScreenshot from 'figma:asset/5df3ee0b6449eae7b7992f9bbe8797195271ff02.png';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Fintech', 'Government', 'Education', 'IDV & S-IAM', 'AI-Powered', 'EventTech'];

  const projects = [
    {
      title: 'FinSynq',
      description: 'AI-powered personal finance platform that delivers intelligent insights, smart suggestions, and automated financial management.',
      image: finsynqScreenshot,
      categories: ['Fintech', 'AI-Powered'],
      tags: ['Fintech', 'AI-Native'],
      link: 'https://finsynq.ca/welcome',
      details: {
        situation: 'Managing personal finances was reactive and time-consuming — users lacked intelligent, real-time insights and actionable guidance.',
        task: 'Build a next-generation personal finance experience that uses AI to simplify money management and help users make confident, data-driven financial decisions.',
        activity: 'Developed FinSynq, an AI-native platform powered by Fynn, an intelligent assistant that automates budgeting, provides personalized insights, and delivers context-aware financial recommendations. Integrated Plaid/Flinks APIs and built a secure backend with Nest.js and Supabase.',
        results: [
          '1,200+ active users within 6 months',
          '35% improvement in savings goal achievement',
          '4.7/5 user satisfaction rating',
        ],
        relate: 'Showcases my ability to combine AI, design, and user behavior data into a seamless fintech experience applicable to any insight-driven SaaS or financial platform.',
      },
    },
    {
      title: 'Seamfix Verify',
      description: 'Enterprise ID verification & compliance platform processing over 10M verifications monthly.',
      image: 'https://images.unsplash.com/photo-1732479347798-84ef29577a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVudGl0eSUyMHZlcmlmaWNhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYxNjM3NjI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      categories: ['Fintech', 'IDV & S-IAM', 'Government', 'AI-Powered'],
      tags: ['IDV', 'S-IAM', 'RegTech', 'Government'],
      link: 'https://seamfix.com/verify-compliance-management-platform',
      details: {
        situation: 'Organizations faced high fraud risks and operational delays due to fragmented verification systems and manual KYC processes.',
        task: 'Deliver a scalable, secure, and compliant identity verification system to support high-volume onboarding across multiple sectors.',
        activity: 'Led product strategy and execution for Seamfix Verify, integrating facial recognition, active/passive liveness checks, ICAO image quality compliance, and automated background checks. Collaborated with compliance and engineering teams to achieve ISO 27001 and ISO 9001 certifications.',
        results: [
          '10M+ verifications processed monthly',
          '60% faster verification turnaround',
          'Strengthened partnerships with six national databases',
        ],
        relate: 'Highlights my ability to lead complex, compliance-driven products that balance user experience, scale, and regulatory standards — transferable to fintech, identity, and B2B SaaS.',
      },
    },
    {
      title: 'Prompty',
      description: 'Event engagement & networking platform for smarter, data-driven attendee interactions.',
      image: 'https://images.unsplash.com/photo-1706759755836-43836ff8af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMG5ldHdvcmtpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTcwOTY0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      categories: ['EventTech', 'AI-Powered'],
      tags: ['EventTech', 'AI-Driven', 'SaaS'],
      link: 'https://prompty.ca',
      details: {
        situation: 'Attendees often left events with little post-event connection, and organizers lacked visibility into engagement metrics.',
        task: 'Create an integrated platform that bridges in-person and digital networking while giving event organizers actionable insights.',
        activity: 'Launched Prompty, a modern event engagement platform with NFC/QR smart badges, real-time attendee analytics, and AI insights. Oversaw UX design, roadmap definition, and go-to-market strategy.',
        results: [
          '15+ events deployed across Calgary and beyond',
          '5K+ attendee engagements tracked',
          '4.8/5 overall experience rating',
        ],
        relate: 'Demonstrates my expertise in building community-driven, insight-led SaaS platforms, a skill that translates across product categories involving engagement and growth.',
      },
    },
    {
      title: 'Seamfix S-IAM',
      description: 'Secure Identity & Access Management Platform enabling enterprise-grade authentication and digital onboarding.',
      image: 'https://images.unsplash.com/photo-1759107547027-1fd15603aaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3MlMjBjb250cm9sJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzYxNjIxMzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      categories: ['IDV & S-IAM', 'Government'],
      tags: ['IAM', 'Security', 'B2B SaaS'],
      link: 'https://seamfix.com/iam',
      details: {
        situation: 'Enterprises needed a centralized, secure solution to manage user access across multiple platforms while ensuring compliance.',
        task: 'Design and launch a scalable S-IAM platform with advanced authentication, provisioning, and access governance capabilities.',
        activity: 'Defined core requirements, collaborated with security engineers to integrate multi-factor authentication, SSO, and federated identity protocols (OAuth 2.0, SAML). Delivered APIs supporting high-volume onboarding and internal identity management.',
        results: [
          '40% reduction in onboarding time',
          '30% drop in identity-related support tickets',
          'Deployed across 1M+ managed accounts',
        ],
        relate: 'Reinforces my strength in building secure, enterprise SaaS systems, directly relevant to platforms focused on identity, access, and trust.',
      },
    },
    {
      title: 'Educify',
      description: 'Learning enablement platform connecting tutors and students through seamless digital tools.',
      image: 'https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0dXRvcmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjE3MDk2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      categories: ['Education'],
      tags: ['EdTech', 'SaaS'],
      link: '#',
      details: {
        situation: 'Tutoring organizations struggled with fragmented tools for scheduling, communication, and progress tracking.',
        task: 'Deliver a unified learning management platform to digitize the tutoring experience end-to-end.',
        activity: 'Managed cross-functional development of Educify\'s MVP, introducing scheduling, tutor dashboards, and integrated chat. Worked closely with founders to refine UX and validate early user feedback for iteration.',
        results: [
          'Reduced tutor onboarding time by 50%',
          'Increased student engagement and repeat sessions',
          'Secured early pilot programs with 3 tutoring centers',
        ],
        relate: 'Demonstrates my ability to define, build, and iterate on early-stage SaaS products, relevant to any product requiring MVP validation and market fit alignment.',
      },
    },
    {
      title: 'NIMC / Government of Nigeria',
      description: 'Digital Identity Infrastructure Modernization supporting national verification and e-governance.',
      image: 'https://images.unsplash.com/photo-1553699357-b327e0878f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXRpb25hbCUyMGlkZW50aXR5JTIwY2FyZHxlbnwxfHx8fDE3NjE3MDk4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      categories: ['Government', 'IDV & S-IAM'],
      tags: ['GovTech', 'Digital Identity'],
      link: '#',
      details: {
        situation: 'The government\'s identity verification system lacked interoperability, slowing service delivery and increasing data duplication.',
        task: 'Advise on the modernization of the national digital identity infrastructure to enable secure, API-based interoperability.',
        activity: 'Consulted on architectural frameworks for API interoperability, designed verification workflows, and guided implementation of real-time identity validation across agencies.',
        results: [
          '45% reduction in manual verification workloads',
          '99% uptime on core verification systems',
          'Established foundation for a unified national ID ecosystem',
        ],
        relate: 'Shows my capability to lead high-impact digital transformation projects in complex regulatory environments, applicable to identity, infrastructure, or public-sector modernization initiatives.',
      },
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-gradient-to-b from-white/5 to-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">Portfolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected projects showcasing product strategy, technical execution, and measurable impact across Fintech, Government, Education, and AI-powered platforms
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] text-white shadow-lg shadow-indigo-500/30'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-[#6B8CFF]/30'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 hover:border-[#6B8CFF]/30 transition-all duration-300 group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-white text-2xl mb-3">{project.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-[#4F46E5]/20 text-[#A3E635] border border-[#A3E635]/30 hover:bg-[#4F46E5]/30 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Accordion */}
                  <Accordion type="single" collapsible className="flex-1">
                    <AccordionItem value="details" className="border-white/10">
                      <AccordionTrigger className="text-gray-300 hover:text-white hover:no-underline">
                        <span className="flex items-center gap-2 text-sm">
                          📖 View Case Study (STAR Format)
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 space-y-4 pt-4">
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">Situation:</strong>
                          <p className="text-sm leading-relaxed">{project.details.situation}</p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">Task:</strong>
                          <p className="text-sm leading-relaxed">{project.details.task}</p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">Activity:</strong>
                          <p className="text-sm leading-relaxed">{project.details.activity}</p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">Results:</strong>
                          <ul className="space-y-2">
                            {project.details.results.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-[#A3E635] mt-0.5 flex-shrink-0" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-white/10">
                          <strong className="text-[#A3E635] block mb-2">Relevance:</strong>
                          <p className="text-sm leading-relaxed italic">{project.details.relate}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Link */}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#6B8CFF] hover:text-[#4F46E5] transition-colors mt-auto"
                    >
                      Visit Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
