import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About | Coderush',
  description: 'Learn about Coderush and our mission to revolutionize coding education',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#0f1535] to-[#1a1f3a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <section className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              About Coderush
            </h1>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
              Empowering developers through innovative learning experiences and cutting-edge technology
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-2 hover:border-blue-400/40">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-base text-blue-100/90 leading-relaxed mb-4">
                At Coderush, we believe that learning to code should be accessible, engaging, and effective for everyone. 
                Our mission is to break down barriers in technical education and provide world-class resources that help 
                aspiring developers achieve their goals.
              </p>
              <p className="text-base text-blue-100/90 leading-relaxed">
                We combine cutting-edge technology with proven teaching methodologies to create an immersive learning 
                experience that accelerates your journey from beginner to professional developer.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-10 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly evolving our platform with the latest technologies and modern teaching methods to stay ahead.',
                  icon: '🚀',
                  delay: '0.3s',
                  gradient: 'from-blue-600/30 to-cyan-600/30'
                },
                {
                  title: 'Community',
                  description: 'Building a supportive environment where learners collaborate, share knowledge, and grow together.',
                  icon: '🤝',
                  delay: '0.4s',
                  gradient: 'from-purple-600/30 to-pink-600/30'
                },
                {
                  title: 'Excellence',
                  description: 'Committed to delivering premium educational content with exceptional user experience and support.',
                  icon: '⭐',
                  delay: '0.5s',
                  gradient: 'from-indigo-600/30 to-blue-600/30'
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${value.gradient} backdrop-blur-xl border border-blue-400/20 shadow-lg transition-all duration-500 animate-card-fade-in hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-3 hover:scale-105 hover:border-blue-400/50`}
                  style={{ animationDelay: value.delay }}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-100 group-hover:text-white transition-colors duration-300">{value.title}</h3>
                  <p className="text-blue-200/80 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 rounded-2xl p-10 text-white animate-slide-up shadow-lg" style={{ animationDelay: '0.6s' }}>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: '50K+', label: 'Active Learners', icon: '👥' },
                { number: '500+', label: 'Courses Available', icon: '📚' },
                { number: '95%', label: 'Completion Rate', icon: '🎯' },
                { number: '150+', label: 'Expert Instructors', icon: '👨‍🏫' }
              ].map((stat, index) => (
                <div key={index} className="transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer group">
                  <div className="text-3xl mb-2 transform group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-4xl font-bold mb-2 group-hover:text-white transition-colors">{stat.number}</div>
                  <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Story Section */}
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in bg-gradient-to-br from-indigo-950/40 to-blue-950/40 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/20 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-2 hover:border-purple-400/40" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Our Story</h2>
            <div className="prose prose-invert mx-auto">
              <p className="text-blue-100/90 text-base leading-relaxed mb-4">
                Coderush was founded in 2024 by passionate educators and software engineers who recognized a critical gap 
                in online coding education. Traditional programming courses often felt disconnected—either too theoretical 
                without real-world application, or too practical without foundational understanding.
              </p>
              <p className="text-blue-100/90 text-base leading-relaxed mb-4">
                We built Coderush to bridge this gap, creating a platform where theory meets practice. Our curriculum is 
                designed by industry professionals who understand both what beginners need to learn and what employers 
                expect from developers.
              </p>
              <p className="text-blue-100/90 text-base leading-relaxed">
                Today, we serve thousands of learners worldwide, from complete beginners to experienced developers 
                looking to upskill. Every feature, course, and resource is designed with one goal: helping you become 
                the confident, capable developer you aspire to be.
              </p>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Why Choose Coderush</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Industry-Relevant Curriculum',
                  description: 'Learn technologies and practices that employers actually use, updated regularly to match market demands.'
                },
                {
                  title: 'Hands-On Projects',
                  description: 'Build real-world applications from day one. Every course includes practical projects for your portfolio.'
                },
                {
                  title: 'Expert Mentorship',
                  description: 'Get guidance from experienced developers who have worked at top tech companies worldwide.'
                },
                {
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with lifetime access to all course materials and future updates.'
                }
              ].map((item, index) => (
                <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-blue-950/30 to-purple-950/30 border border-blue-500/20 shadow-md animate-card-fade-in hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-blue-400/40">
                  <h3 className="text-lg font-bold mb-2 text-blue-200">{item.title}</h3>
                  <p className="text-blue-300/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
