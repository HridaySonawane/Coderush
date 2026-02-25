"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Landing/Navbar"
import Footer from "@/components/Footer"
import { Code2, Cpu, Globe, Rocket, Users, Zap } from "lucide-react"

const stats = [
  { value: "250+", label: "Active Members" },
  { value: "40+", label: "Events Hosted" },
  { value: "15+", label: "Projects Shipped" },
  { value: "10+", label: "Workshops" },
  { value: "5+", label: "Tech Domains" },
  { value: "3", label: "Core Teams" },
]

const features = [
  {
    id: "01",
    title: "Peer-Led Learning",
    desc: "Grow together through structured collaboration and mentorship programs designed by students, for students.",
  },
  {
    id: "02",
    title: "Project-First Approach",
    desc: "Real-world projects from day one. Ship code, build products, and create impact — not just theory.",
  },
  {
    id: "03",
    title: "Open Collaboration",
    desc: "Build fast with passionate developers across domains. Open source mindset, community-driven growth.",
  },
]

const highlights = [
  {
    icon: Code2,
    title: "Hackathons",
    desc: "24-hour coding marathons with industry mentors and real prizes.",
  },
  {
    icon: Cpu,
    title: "Tech Talks",
    desc: "Weekly sessions on cutting-edge technologies from AI to blockchain.",
  },
  {
    icon: Globe,
    title: "Open Source",
    desc: "Contribute to meaningful projects that impact thousands of users.",
  },
  {
    icon: Rocket,
    title: "Startup Lab",
    desc: "Turn ideas into MVPs with guidance from founders and investors.",
  },
  {
    icon: Users,
    title: "Networking",
    desc: "Connect with developers, designers, and builders across campuses.",
  },
  {
    icon: Zap,
    title: "Skill Sprints",
    desc: "Intensive 2-week learning tracks on modern frameworks and tools.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <Navbar />

      <main className="relative pt-32 pb-20">
        {/* ===== AMBIENT GLOWS ===== */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6D28D9]/15 blur-[160px] rounded-full pointer-events-none animate-radial-breathe" />
        <div className="absolute top-[60%] right-0 w-[400px] h-[400px] bg-[#6D28D9]/8 blur-[140px] rounded-full pointer-events-none" />

        {/* ===== BIG BACKGROUND TEXT ===== */}
        <div className="absolute top-20 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-[#1e3a8a]/20 tracking-[0.2em] font-sora whitespace-nowrap">
            ORIGIN
          </h1>
        </div>

        {/* ===== HERO HEADING ===== */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-10 text-center mb-28">
          {/* Radial light behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] radial-glow pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#6D28D9]/30 bg-[#6D28D9]/10 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6D28D9] animate-pulse" />
              <span className="font-inter text-xs text-[#6D28D9] font-medium tracking-wider uppercase">
                Est. 2024
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight">
              About The{" "}
              <span className="text-[#6D28D9] animate-text-glow inline-block">Club</span>
            </h2>
            <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto font-inter leading-relaxed">
              A student-driven tech ecosystem focused on building,
              shipping, and scaling real projects. We turn curiosity into code,
              and code into impact.
            </p>
          </motion.div>
        </section>

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-28" />

        {/* ===== FEATURES — 01 02 03 LIST ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-28 relative">
          {/* Blue shadow glow behind the grid */}
          <div className="absolute inset-0 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-16 items-start mt-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center mt-30 ml-15 md:items-start md:text-left md:ml-0"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600/20 blur-2xl" />
                <h3 className="relative text-3xl md:text-4xl font-bold font-sora leading-tight mb-4">
                  What Makes Us{" "}
                  <span className="text-[#6D28D9]">Different</span>
                </h3>
              </div>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                We don&apos;t just teach tech — we build with it.
                Our approach is hands-on, community-first, and project-driven.
              </p>
            </motion.div>

            <div className="space-y-6">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="glass-card p-6 cursor-default"
                >
                  <div className="flex gap-5 items-start">
                    <div className="bg-[#1e3a8a] rounded-lg px-3 py-1.5 min-w-[50px] flex items-center justify-center">
                      <span className="text-[#6D28D9] font-bold text-xl font-sora">
                        {item.id}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold font-sora text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 mt-1.5 text-sm font-inter leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-28" />

        {/* ===== HIGHLIGHTS GRID — 6 CARDS ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-sora">
              What We <span className="text-[#6D28D9]">Do</span>
            </h3>
            <p className="text-gray-500 mt-4 text-sm font-inter max-w-lg mx-auto">
              From hackathons to open source — we build across every layer of the stack.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                className="glass-card p-8 text-center group cursor-default"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#6D28D9]/10 border border-[#6D28D9]/20 flex items-center justify-center group-hover:bg-[#6D28D9]/20 group-hover:border-[#6D28D9]/40 group-hover:shadow-[0_0_25px_rgba(109,40,217,0.3)] transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[#6D28D9]" />
                </div>
                <h4 className="text-lg font-semibold font-sora text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm font-inter leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-28" />

        {/* ===== STATS SECTION ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 mb-28">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-sora text-center mb-16"
          >
            By The <span className="text-[#6D28D9]">Numbers</span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.04 }}
                className="glass-card p-8 md:p-10 text-center cursor-default"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-[#6D28D9] font-sora animate-text-glow">
                  {stat.value}
                </h4>
                <p className="text-gray-500 mt-3 text-sm font-inter tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-28" />

        {/* ===== CTA SECTION ===== */}
        <section className="max-w-3xl mx-auto px-6 md:px-10 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-[#6D28D9]/10 blur-[120px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <h3 className="text-3xl md:text-4xl font-bold font-sora mb-4">
              Ready to Build <span className="text-[#6D28D9]">With Us?</span>
            </h3>
            <p className="text-gray-500 font-inter text-sm mb-10 max-w-md mx-auto">
              Join a community of passionate developers, designers, and builders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-2xl bg-[#6D28D9] text-white font-inter font-semibold text-sm hover:shadow-[0_0_40px_rgba(109,40,217,0.5)] transition-all duration-300"
              >
                Join The Club
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-2xl border border-[#6D28D9]/40 text-gray-300 font-inter font-semibold text-sm hover:bg-[#6D28D9]/10 hover:border-[#6D28D9]/60 transition-all duration-300"
              >
                Explore Events
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}