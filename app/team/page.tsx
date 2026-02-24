import { Metadata } from 'next';
import Navbar from '@/components/Landing/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Team | Coderush',
  description: 'Meet the talented team behind Coderush',
};

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former Google engineer with 15+ years of experience in tech education and software development',
    image: '/team/placeholder-1.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.2s'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    bio: 'Full-stack architect and open-source contributor specializing in scalable educational platforms',
    image: '/team/placeholder-2.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.3s'
  },
  {
    name: 'Emily Watson',
    role: 'Head of Curriculum',
    bio: 'PhD in CS Education with expertise in designing effective learning pathways for developers',
    image: '/team/placeholder-3.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.4s'
  },
  {
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Expert in building interactive coding environments and real-time collaboration tools',
    image: '/team/placeholder-4.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.5s'
  },
  {
    name: 'Priya Patel',
    role: 'Head of Design',
    bio: 'Award-winning UI/UX designer focused on creating intuitive and accessible learning experiences',
    image: '/team/placeholder-5.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.6s'
  },
  {
    name: 'James Anderson',
    role: 'Community Manager',
    bio: 'Building thriving developer communities and fostering collaborative learning environments',
    image: '/team/placeholder-6.jpg',
    linkedin: '#',
    twitter: '#',
    delay: '0.7s'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_50%)]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Meet Our Team
            </h1>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
              A diverse group of passionate individuals dedicated to transforming coding education
            </p>
          </section>

          {/* Team Grid */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-950/50 to-purple-950/50 backdrop-blur-xl border border-blue-400/20 shadow-lg transition-all duration-500 animate-card-fade-in hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-3 hover:scale-105 hover:border-blue-400/50"
                  style={{ animationDelay: member.delay }}
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 overflow-hidden group-hover:brightness-110 transition-all duration-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold opacity-30 group-hover:opacity-40 transform group-hover:scale-110 transition-all duration-500">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-100 group-hover:text-white transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-3 text-sm group-hover:text-blue-300 transition-colors duration-300">
                      {member.role}
                    </p>
                    <p className="text-blue-200/80 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a
                        href={member.linkedin}
                        className="text-blue-300/60 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-rotate-6"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a
                        href={member.twitter}
                        className="text-blue-300/60 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-6"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Join Us Section */}
          <section className="text-center max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-2xl p-10 text-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-2 hover:scale-105">
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-base mb-6 text-blue-50 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for education and technology. 
                Help us shape the future of coding education.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg">
                View Open Positions →
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
