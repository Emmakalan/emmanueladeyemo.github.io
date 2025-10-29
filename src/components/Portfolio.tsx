import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import { motion } from "motion/react";
import finsynqScreenshot from "figma:asset/5df3ee0b6449eae7b7992f9bbe8797195271ff02.png";
import seamfixVerifyImage from "../assets/Screenshot 2024-05-15 at 17.41.27.png";
import seamfixIAMImage from "../assets/Screenshot 2025-10-29 at 10.34.53.png";
import nimcImage from "../assets/NIN NIMC.jpg";
import promptyImage from "../assets/Screenshot 2025-10-29 at 10.54.43.png";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Fintech",
    "Government",
    "Education",
    "IDV & S-IAM",
    "AI-Powered",
    "EventTech",
    "HealthTech",
  ];

  const industryDescriptions: Record<string, string> = {
    Fintech:
      "Building secure, scalable financial technology solutions that empower users with intelligent insights, seamless transactions, and data-driven decision-making. My fintech experience spans payment systems, personal finance platforms, and compliance-driven verification tools.",
    Government:
      "Modernizing public sector infrastructure through digital identity systems, e-governance platforms, and interoperable API frameworks. I specialize in navigating complex regulatory environments while delivering citizen-centric solutions at national scale.",
    Education:
      "Creating learning enablement platforms that connect educators and students through intuitive digital tools. My edtech work focuses on reducing friction, improving engagement, and enabling measurable learning outcomes through thoughtful product design.",
    "IDV & S-IAM":
      "Leading enterprise identity verification and secure identity & access management (S-IAM) solutions that process millions of verifications monthly. I build trust through biometric authentication, compliance frameworks, and seamless user experiences that balance security with usability.",
    "AI-Powered":
      "Integrating artificial intelligence into product experiences to deliver personalized insights, automation, and predictive capabilities. My AI-powered products leverage machine learning to create smarter, more intuitive user experiences across fintech, events, and verification platforms.",
    EventTech:
      "Transforming in-person and hybrid events through smart engagement tools, real-time analytics, and AI-driven networking. I build platforms that bridge physical and digital experiences, helping organizers drive meaningful connections and measurable ROI.",
    HealthTech:
      "Designing AI-driven healthcare platforms that streamline diagnostics, digitize patient records, and improve clinical workflows. I focus on building HIPAA-compliant, user-friendly systems that bridge the gap between medical professionals and patients while accelerating care delivery through automation and intelligent insights.",
  };

  const projects = [
    {
      title: "FinSynq",
      description:
        "AI-powered personal finance platform that delivers intelligent insights, smart suggestions, and automated financial management.",
      image: finsynqScreenshot,
      categories: ["Fintech", "AI-Powered"],
      tags: ["Fintech", "AI-Native"],
      link: "https://finsynq.ca/welcome",
      details: {
        situation:
          "Managing personal finances was reactive and time-consuming — users lacked intelligent, real-time insights and actionable guidance.",
        task: "Build a next-generation personal finance experience that uses AI to simplify money management and help users make confident, data-driven financial decisions.",
        activity:
          "Developed FinSynq, an AI-native platform powered by Fynn, an intelligent assistant that automates budgeting, provides personalized insights, and delivers context-aware financial recommendations. Integrated Plaid/Flinks APIs and built a secure backend with Nest.js and Supabase. Currently in pre-launch phase with active waitlist.",
        results: [
          "Built end-to-end AI-native fintech platform from 0 to 1",
          "Successfully integrated Plaid/Flinks open banking APIs",
          "Designed and shipped intelligent assistant (Fynn) with context-aware recommendations",
          "Established secure, scalable architecture with Nest.js and Supabase",
        ],
        relate:
          "Showcases my ability to combine AI, design, and user behavior data into a seamless fintech experience applicable to any insight-driven SaaS or financial platform.",
      },
    },
    {
      title: "Seamfix Verify",
      description:
        "Enterprise ID verification & compliance platform processing over 10M verifications monthly.",
      image: seamfixVerifyImage,
      categories: [
        "Fintech",
        "IDV & S-IAM",
        "Government",
        "AI-Powered",
      ],
      tags: ["IDV", "S-IAM", "RegTech", "Government"],
      link: "https://seamfix.com/verify-compliance-management-platform",
      details: {
        situation:
          "Organizations faced high fraud risks and operational delays due to fragmented verification systems and manual KYC processes.",
        task: "Deliver a scalable, secure, and compliant identity verification system to support high-volume onboarding across multiple sectors.",
        activity:
          "Led product strategy and execution for Seamfix Verify, Africa's first No-Code ID verification platform. Integrated facial recognition, active/passive liveness checks, ICAO image quality compliance, and automated background checks. Collaborated with compliance and engineering teams to achieve ISO 27001 and ISO 9001 certifications.",
        results: [
          "10M+ verifications processed monthly",
          "First No-Code ID verification platform from Africa",
          "Coverage across 13,000+ identity documents from 226 countries",
          "60% faster verification turnaround",
          "400% increase in revenue",
        ],
        relate:
          "Highlights my ability to lead complex, compliance-driven products that balance user experience, scale, and regulatory standards — transferable to fintech, identity, and B2B SaaS.",
      },
    },
    {
      title: "Prompty",
      description:
        "Event engagement & networking platform for smarter, data-driven attendee interactions.",
      image: promptyImage,
      categories: ["EventTech", "AI-Powered"],
      tags: ["EventTech", "AI-Driven", "SaaS"],
      link: "https://prompty.ca",
      details: {
        situation:
          "Attendees often left events with little post-event connection, and organizers lacked visibility into engagement metrics.",
        task: "Create an integrated platform that bridges in-person and digital networking while giving event organizers actionable insights.",
        activity:
          "Launched Prompty, a modern event engagement platform with NFC/QR smart badges, real-time attendee analytics, and AI insights. Successfully launched Mobile (Android) and iOS applications to expand platform accessibility. Oversaw UX design, roadmap definition, and go-to-market strategy.",
        results: [
          "12K+ connections made across Calgary and beyond",
          "2K+ attendee engagements tracked",
          "4.8/5 overall experience rating",
          "60% increase in platform stability and reliability",
        ],
        relate:
          "Demonstrates my expertise in building community-driven, insight-led SaaS platforms, a skill that translates across product categories involving engagement and growth.",
      },
    },
    {
      title: "Seamfix S-IAM",
      description:
        "Secure Identity & Access Management Platform enabling enterprise-grade authentication and digital onboarding.",
      image: seamfixIAMImage,
      categories: ["IDV & S-IAM", "Government"],
      tags: ["IAM", "Security", "B2B SaaS"],
      link: "https://seamfix.com/iam",
      details: {
        situation:
          "Enterprises needed a centralized, secure solution to manage user access across multiple platforms while ensuring compliance.",
        task: "Design and launch a scalable S-IAM platform with advanced authentication, provisioning, and access governance capabilities.",
        activity:
          "Defined core requirements, collaborated with security engineers to integrate multi-factor authentication, SSO, and federated identity protocols (OAuth 2.0, SAML). Delivered APIs supporting high-volume onboarding and internal identity management.",
        results: [
          "40% reduction in onboarding time",
          "30% drop in identity-related support tickets",
          "Deployed across 1M+ managed accounts",
        ],
        relate:
          "Reinforces my strength in building secure, enterprise SaaS systems, directly relevant to platforms focused on identity, access, and trust.",
      },
    },
    {
      title: "Educify",
      description:
        "Learning enablement platform connecting tutors and students through seamless digital tools.",
      image:
        "https://images.unsplash.com/photo-1673515335586-f9f662c01482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB0dXRvcmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjE3MDk2NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      categories: ["Education"],
      tags: ["EdTech", "SaaS"],
      link: "#",
      details: {
        situation:
          "Tutoring organizations struggled with fragmented tools for scheduling, communication, and progress tracking.",
        task: "Deliver a unified learning management platform to digitize the tutoring experience end-to-end.",
        activity:
          "Managed cross-functional development of Educify's MVP, introducing scheduling, tutor dashboards, and integrated chat. Worked closely with founders to refine UX and validate early user feedback for iteration.",
        results: [
          "Reduced tutor onboarding time by 50%",
          "Increased student engagement and repeat sessions",
          "Secured early pilot programs with 3 tutoring centers",
        ],
        relate:
          "Demonstrates my ability to define, build, and iterate on early-stage SaaS products, relevant to any product requiring MVP validation and market fit alignment.",
      },
    },
    {
      title: "NIMC / Government of Nigeria",
      description:
        "Digital Identity Infrastructure Modernization supporting national verification and e-governance.",
      image: nimcImage,
      categories: ["Government", "IDV & S-IAM"],
      tags: ["GovTech", "Digital Identity"],
      link: "#",
      details: {
        situation:
          "The government's identity verification system lacked interoperability, slowing service delivery and increasing data duplication.",
        task: "Advise on the modernization of the national digital identity infrastructure to enable secure, API-based interoperability.",
        activity:
          "Consulted on architectural frameworks for API interoperability, designed verification workflows, and guided implementation of real-time identity validation across agencies.",
        results: [
          "45% reduction in manual verification workloads",
          "99% uptime on core verification systems",
          "Established foundation for a unified national ID ecosystem",
        ],
        relate:
          "Shows my capability to lead high-impact digital transformation projects in complex regulatory environments, applicable to identity, infrastructure, or public-sector modernization initiatives.",
      },
    },
    {
      title: "NovoCare Medical Diagnostics",
      description:
        "AI-powered diagnostics and electronic medical records (EMR) platform designed to deliver faster, smarter, and more transparent healthcare experiences.",
      image:
        "https://images.unsplash.com/photo-1656428964836-78d54bf76231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGlhZ25vc3RpY3MlMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjE3MTQ1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      categories: ["HealthTech", "AI-Powered"],
      tags: ["HealthTech", "AI & Automation", "EMR"],
      link: "#",
      details: {
        situation:
          "Medical diagnostic centers faced challenges managing patient records, communicating results efficiently, and maintaining compliance with healthcare data regulations. Fragmented systems led to slow turnaround times, data inconsistencies, and poor patient engagement.",
        task: "Develop a secure, cloud-based platform that digitizes the diagnostic workflow — from registration and test booking to result delivery, EMR management, and AI-powered insights.",
        activity:
          "Designed and led development of NovoCare, an all-in-one diagnostics platform with integrated AI summarization, voice-bot reminders, and HIPAA-compliant EMR module. Built admin and patient portals for booking, payments, and result tracking. Introduced AI modules for symptom checking, wellness scoring, and medical summarization to improve clinical efficiency. Architected backend infrastructure using Nest.js, Supabase, and secure data encryption layers.",
        results: [
          "Reduced average test-result turnaround by 40%",
          "Improved patient engagement via automated notifications and AI reminders",
          "Increased operational efficiency by digitizing 90% of manual workflows",
          "Enhanced compliance through secure, role-based access and audit logging",
        ],
        relate:
          "Highlights my ability to design and scale AI-driven, compliance-ready healthcare products, bridging data science and user-centric product design — a skillset transferable to any regulated or data-intensive industry (health, finance, or government).",
      },
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter),
        );

  return (
    <section
      id="portfolio"
      className="py-20 lg:py-32 bg-gradient-to-b from-white/5 to-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Selected projects showcasing product strategy,
            technical execution, and measurable impact across
            Fintech, Government, Education, and AI-powered
            platforms
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-[#6B8CFF] to-[#4F46E5] text-white shadow-lg shadow-indigo-500/30"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-[#6B8CFF]/30"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Industry Description */}
        {activeFilter !== "All" &&
          industryDescriptions[activeFilter] && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-12 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-[#6B8CFF]/10 via-[#4F46E5]/10 to-[#6B8CFF]/10 border border-[#6B8CFF]/30 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#A3E635] mt-2"></div>
                  <div>
                    <h3 className="text-[#A3E635] text-sm uppercase tracking-wider mb-2">
                      {activeFilter}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {industryDescriptions[activeFilter]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

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
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <div>
                    <h3 className="text-white text-2xl mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
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
                  <Accordion
                    type="single"
                    collapsible
                    className="flex-1"
                  >
                    <AccordionItem
                      value="details"
                      className="border-white/10"
                    >
                      <AccordionTrigger className="text-gray-300 hover:text-white hover:no-underline">
                        <span className="flex items-center gap-2 text-sm">
                          📖 View Case Study (STAR Format)
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400 space-y-4 pt-4">
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">
                            Situation:
                          </strong>
                          <p className="text-sm leading-relaxed">
                            {project.details.situation}
                          </p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">
                            Task:
                          </strong>
                          <p className="text-sm leading-relaxed">
                            {project.details.task}
                          </p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">
                            Activity:
                          </strong>
                          <p className="text-sm leading-relaxed">
                            {project.details.activity}
                          </p>
                        </div>
                        <div>
                          <strong className="text-[#6B8CFF] block mb-2">
                            Results:
                          </strong>
                          <ul className="space-y-2">
                            {project.details.results.map(
                              (result, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#A3E635] mt-0.5 flex-shrink-0" />
                                  <span>{result}</span>
                                </li>
                              ),
                            )}
                          </ul>
                        </div>
                        <div className="pt-3 border-t border-white/10">
                          <strong className="text-[#A3E635] block mb-2">
                            Relevance:
                          </strong>
                          <p className="text-sm leading-relaxed italic">
                            {project.details.relate}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Link */}
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#6B8CFF] hover:text-[#4F46E5] transition-colors mt-auto"
                    >
                      Visit Project{" "}
                      <ExternalLink className="w-4 h-4" />
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