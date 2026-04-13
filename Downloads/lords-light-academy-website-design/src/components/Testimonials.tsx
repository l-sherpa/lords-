import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Grade 8 Student',
    text: "Lord's Light Academy has been transformative for my daughter. The teachers are incredibly dedicated, and the holistic approach to education has helped her grow not just academically but as a person.",
    initials: 'PS',
    color: '#2756c5',
  },
  {
    name: 'Rajesh Thapa',
    role: 'SEE Graduate, 2023',
    text: "I scored GPA 3.95 in my SEE. The science labs and dedicated faculty at Lord's Light gave me the confidence to aim for the best. I owe my success to this institution.",
    initials: 'RT',
    color: '#f0a500',
  },
  {
    name: 'Anita Maharjan',
    role: 'Parent of KG Student',
    text: "The Montessori approach in early childhood is excellent. My son loves going to school every day. The safe environment and caring teachers make all the difference.",
    initials: 'AM',
    color: '#22c55e',
  },
  {
    name: 'Suresh Karki',
    role: 'Alumni, Class of 2020',
    text: "The values instilled at Lord's Light Academy — integrity, excellence, and compassion — continue to guide me in my university life and beyond. Truly a life-shaping institution.",
    initials: 'SK',
    color: '#e85d75',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,0 1080,60 1440,30 L1440,0 L0,0 Z" fill="#eef3ff" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#f5c518]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2756c5]/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#2756c5]/10 text-[#2756c5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Voices of Our Community
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8a] mb-4">
            What People{' '}
            <span className="text-[#f0a500]">Say</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Stories from our students, alumni, and parents who've experienced the Lord's Light difference.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="bg-gradient-to-br from-[#f8faff] to-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-50"
            >
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2756c5] to-[#1a3a8a] flex items-center justify-center mb-6">
                <Quote size={20} className="text-[#f5c518]" fill="currentColor" />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                "{testimonials[active].text}"
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}99)` }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <div className="font-bold text-[#1a3a8a] text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {testimonials[active].name}
                  </div>
                  <div className="text-gray-400 text-sm">{testimonials[active].role}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-[#2756c5]/20 hover:border-[#2756c5] hover:bg-[#2756c5] hover:text-white text-[#2756c5] flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: i === active ? '#2756c5' : '#d1d5db',
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-[#2756c5]/20 hover:border-[#2756c5] hover:bg-[#2756c5] hover:text-white text-[#2756c5] flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Mini testimonial grid below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
                active === i
                  ? 'border-[#2756c5] bg-[#2756c5]/5 shadow-md'
                  : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
              }`}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold mb-2"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </div>
              <div className="text-xs font-bold text-[#1a3a8a] truncate">{t.name}</div>
              <div className="text-xs text-gray-400 truncate">{t.role}</div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
