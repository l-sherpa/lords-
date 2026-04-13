import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Baby, BookOpen, GraduationCap, ChevronRight } from 'lucide-react';

const programs = [
  {
    icon: Baby,
    badge: 'Foundation',
    title: 'Early Childhood',
    range: 'Nursery – KG',
    description:
      'Montessori-based fun learning environment where young minds blossom through play, discovery, and creative expression.',
    features: ['Montessori Methodology', 'Activity-Based Learning', 'Creative Arts & Music'],
    color: '#22c55e',
    bgFrom: '#dcfce7',
    bgTo: '#bbf7d0',
  },
  {
    icon: BookOpen,
    badge: 'Core Program',
    title: 'Basic Education',
    range: 'Grade 1 – 10',
    description:
      'Comprehensive curriculum leading to SEE examination, combining academic rigor with character development and practical skills.',
    features: ['SEE Preparation', 'Science & Computer Labs', 'Sports & ECA Programs'],
    color: '#2756c5',
    bgFrom: '#dbeafe',
    bgTo: '#bfdbfe',
    featured: true,
  },
  {
    icon: GraduationCap,
    badge: 'Higher Studies',
    title: 'Higher Secondary',
    range: '+2 Management',
    description:
      'Two-year management program preparing students for higher education and professional careers in business and commerce.',
    features: ['Management Stream', 'Career Counseling', 'Leadership Development'],
    color: '#f0a500',
    bgFrom: '#fef9c3',
    bgTo: '#fde68a',
  },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="programs" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef3ff 100%)' }}>
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#2756c5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-[#f5c518]/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f5c518]/20 text-[#c47f00] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Academic Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8a] mb-4">
            Our{' '}
            <span className="text-[#f0a500] relative">
              Programs
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#f5c518] to-[#f0a500] rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From early childhood to higher secondary — a complete educational journey crafted for every learner.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg border transition-all duration-400 overflow-hidden ${
                  prog.featured ? 'border-[#2756c5]/30 ring-2 ring-[#2756c5]/20' : 'border-gray-100'
                }`}
              >
                {/* Featured label */}
                {prog.featured && (
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-[#2756c5] to-[#4a90d9] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Top gradient bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
                  style={{ background: `linear-gradient(90deg, ${prog.color}, ${prog.color}88)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `linear-gradient(135deg, ${prog.bgFrom}, ${prog.bgTo})` }}
                >
                  <Icon size={26} style={{ color: prog.color }} />
                </div>

                {/* Badge */}
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
                  style={{ backgroundColor: prog.color + '15', color: prog.color }}
                >
                  {prog.badge}
                </span>

                <h3 className="text-2xl font-bold text-[#1a3a8a] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {prog.title}
                </h3>
                <p className="text-sm font-semibold text-gray-400 mb-4">{prog.range}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{prog.description}</p>

                {/* Features */}
                <ul className="space-y-2.5 mb-8">
                  {prog.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-600">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: prog.color + '20' }}
                      >
                        <ChevronRight size={12} style={{ color: prog.color }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: prog.featured
                      ? `linear-gradient(135deg, ${prog.color}, ${prog.color}cc)`
                      : 'transparent',
                    color: prog.featured ? 'white' : prog.color,
                    border: prog.featured ? 'none' : `2px solid ${prog.color}40`,
                  }}
                >
                  Learn More
                  <ChevronRight size={16} />
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
