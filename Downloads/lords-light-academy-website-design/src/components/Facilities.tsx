import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, FlaskConical, Laptop, Library, Music, Trophy } from 'lucide-react';

const facilities = [
  {
    icon: Monitor,
    title: 'Modern Classrooms',
    desc: 'CCTV-monitored, audio-visual enabled learning spaces with ergonomic furniture for optimal learning.',
    color: '#2756c5',
    emoji: '🏫',
  },
  {
    icon: FlaskConical,
    title: 'Science Laboratories',
    desc: 'Well-equipped physics, chemistry, and biology labs for hands-on experimentation and discovery.',
    color: '#22c55e',
    emoji: '🔬',
  },
  {
    icon: Laptop,
    title: 'Computer Labs',
    desc: 'State-of-the-art computer facilities with high-speed internet access and digital resources.',
    color: '#8b5cf6',
    emoji: '💻',
  },
  {
    icon: Library,
    title: 'Library & E-Library',
    desc: 'Extensive collection of books, journals, and digital learning materials for every learner.',
    color: '#f0a500',
    emoji: '📚',
  },
  {
    icon: Music,
    title: 'Arts & Culture',
    desc: 'Dedicated spaces for music, dance, art, and cultural activities to nurture creative talents.',
    color: '#e85d75',
    emoji: '🎨',
  },
  {
    icon: Trophy,
    title: 'Sports Facilities',
    desc: 'Spacious grounds for outdoor sports and indoor games promoting health and teamwork.',
    color: '#06b6d4',
    emoji: '⚽',
  },
];

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="facilities" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#eef3ff" />
        </svg>
      </div>

      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#2756c5]/4 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#f5c518]/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#2756c5]/10 text-[#2756c5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            World-Class Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8a] mb-4">
            Our{' '}
            <span className="text-[#f0a500] relative">
              Facilities
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#f5c518] to-[#f0a500] rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            State-of-the-art campus designed to inspire learning, creativity, and excellence in every student.
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, i) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `linear-gradient(135deg, ${facility.color}, transparent)` }}
                />

                {/* Left color bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full transition-all duration-300 group-hover:top-0 group-hover:bottom-0"
                  style={{ backgroundColor: facility.color }}
                />

                <div className="pl-4">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: facility.color + '15' }}
                    >
                      <Icon size={22} style={{ color: facility.color }} />
                    </div>
                    <span className="text-3xl">{facility.emoji}</span>
                  </div>

                  <h3
                    className="text-lg font-bold text-[#1a3a8a] mb-2 group-hover:text-[#2756c5] transition-colors duration-300"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {facility.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-[#1a3a8a] via-[#2756c5] to-[#1a6fa8] rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/5"
                style={{
                  width: `${60 + i * 30}px`,
                  height: `${60 + i * 30}px`,
                  left: `${i * 18}%`,
                  top: '50%',
                  translateY: '-50%',
                }}
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Experience Our Campus Firsthand
            </h3>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">
              Schedule a visit to see our world-class facilities and meet our dedicated faculty.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,197,24,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#f5c518] to-[#f0a500] text-[#1a3a8a] font-bold shadow-lg"
            >
              Book a Campus Visit
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
