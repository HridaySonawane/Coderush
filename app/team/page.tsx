"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Landing/Navbar"
import Footer from "@/components/Footer"

const teams = [
  {
    category: "Core Team",
    members: [
      { name: "Alex Chen", role: "President", dept: "Leadership", monogram: "AC" },
      { name: "Priya Sharma", role: "Vice President", dept: "Leadership", monogram: "PS" },
      { name: "Marco Rivera", role: "Tech Lead", dept: "Engineering", monogram: "MR" },
    ],
  },
  {
    category: "Development",
    members: [
      { name: "Sara Kim", role: "Frontend Lead", dept: "Engineering", monogram: "SK" },
      { name: "Dev Patel", role: "Backend Lead", dept: "Engineering", monogram: "DP" },
      { name: "Aisha Obi", role: "Full Stack Dev", dept: "Engineering", monogram: "AO" },
    ],
  },
  {
    category: "Design & Community",
    members: [
      { name: "Leo Zhang", role: "Design Lead", dept: "Creative", monogram: "LZ" },
      { name: "Nina Torres", role: "Community Manager", dept: "Operations", monogram: "NT" },
      { name: "Raj Mehta", role: "Event Lead", dept: "Operations", monogram: "RM" },
    ],
  },
]

const allMembers = teams.flatMap((t) => t.members)

const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      <Navbar />

      <main className="relative pt-32 pb-20">
        {/* ===== AMBIENT GLOWS ===== */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#6D28D9]/15 blur-[160px] rounded-full pointer-events-none animate-radial-breathe" />
        <div className="absolute top-[50%] left-0 w-[350px] h-[350px] bg-[#6D28D9]/8 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-[70%] right-0 w-[300px] h-[300px] bg-[#6D28D9]/6 blur-[100px] rounded-full pointer-events-none" />

        {/* ===== BIG BACKGROUND TEXT ===== */}
        <div className="absolute top-20 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[100px] md:text-[180px] lg:text-[220px] font-extrabold text-[#1e3a8a]/20 tracking-[0.2em] font-sora whitespace-nowrap">
            TEAMS
          </h1>
        </div>

        {/* ===== HERO HEADING ===== */}
        <section className="relative max-w-5xl mx-auto px-6 md:px-10 text-center mb-20">
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
                Our People
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-sora leading-tight">
              Meet The Team Behind{" "}
              <span className="text-[#6D28D9] animate-text-glow inline-block">CodeRush-X</span>
            </h1>
            <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto font-inter leading-relaxed">
              Builders. Designers. Developers. The passionate minds driving innovation forward.
            </p>
          </motion.div>
        </section>

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-20" />

        {/* ===== TEAM SECTIONS ===== */}
        {teams.map((team, teamIdx) => (
          <section key={teamIdx} className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-8 h-[2px] bg-[#6D28D9]/60" />
              <h2 className="text-xl md:text-2xl font-semibold font-sora text-gray-300">
                {team.category}
              </h2>
              <div className="flex-1 h-[1px] bg-[#6D28D9]/10" />
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.members.map((member, i) => {
                const globalIdx = teamIdx * 3 + i;
                return (
                  <motion.div
                    key={globalIdx}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    whileHover={{ y: -10, scale: 1.04 }}
                    className="glass-card p-8 text-center group cursor-default relative overflow-hidden"
                  >
                    {/* Card radial glow on hover */}
                    <div className="absolute inset-0 radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* CX-style Monogram Logo */}
                    <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-[#6D28D9]/10 border border-[#6D28D9]/25 flex items-center justify-center group-hover:bg-[#6D28D9]/20 group-hover:border-[#6D28D9]/50 group-hover:shadow-[0_0_30px_rgba(109,40,217,0.5)] transition-all duration-400">
                      <span className="text-[#6D28D9] font-bold text-2xl font-sora tracking-wider animate-text-glow">
                        {member.monogram}
                      </span>
                    </div>

                    <h3 className="relative z-10 text-lg font-semibold font-sora text-white">
                      {member.name}
                    </h3>
                    <p className="relative z-10 text-[#6D28D9] mt-1.5 text-sm font-inter font-medium">
                      {member.role}
                    </p>
                    <p className="relative z-10 text-gray-600 text-xs mt-1 font-inter tracking-wide uppercase">
                      {member.dept}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}

        {/* ===== NEON DIVIDER ===== */}
        <div className="neon-divider max-w-4xl mx-auto mb-20" />

        {/* ===== TEAM STATS ===== */}
        <section className="max-w-4xl mx-auto px-6 md:px-10 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: String(allMembers.length) + "+", label: "Team Members" },
              { value: "3", label: "Core Teams" },
              { value: "5+", label: "Departments" },
              { value: "100%", label: "Passion" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="glass-card p-6 text-center"
              >
                <h4 className="text-2xl md:text-3xl font-bold text-[#6D28D9] font-sora">
                  {stat.value}
                </h4>
                <p className="text-gray-500 mt-2 text-xs font-inter tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CTA ===== */}
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
              Want to Join the <span className="text-[#6D28D9]">Team?</span>
            </h3>
            <p className="text-gray-500 font-inter text-sm mb-10 max-w-md mx-auto">
              We&apos;re always looking for passionate people to build with.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-2xl bg-[#6D28D9] text-white font-inter font-semibold text-sm hover:shadow-[0_0_40px_rgba(109,40,217,0.5)] transition-all duration-300"
            >
              Apply Now
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}