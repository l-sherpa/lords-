import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Trophy, Star, Award } from 'lucide-react';

function CountUp({ to, suffix = '', duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const achievements = [
  {
    icon: Trophy,
    value: 100,
    suffix: '%',
    label: 'First Division Results',
    desc: 'Consistently achieving 100% first division in SEE examinations year after year.',
    color: '#f5c518',
    bgColor: '#fffbeb',
  },
  {
    icon: Star,
    value: 50,
    suffix: '%',
    label: 'Distinction Rate',
    desc: 'Averaging 50% distinction from 2067 to 2071 BS, setting a benchmark for excellence.',
    color: '#2756c5',
    bgColor: '#eff6ff',
  },
  {
    icon: Award,
    value: 60,
    suffix: '%',
    label: 'A+ Grades',
    desc: 'Students achieving top grades with 60% A grades — a testament to our teaching quality.',
    color: '#22c55e',
    bgColor: '#f0fdf4',
  },
];

const milestones = [
  { year: '2005', label: 'Academy Founded', icon: '🏫' },
  { year: '2010', label: 'First SEE Batch', icon: '🎓' },
  { year: '2015', label: '500+ Students', icon: '👨‍👩‍👧‍👦' },
  { year: '2019', label: 'New Campus Wing', icon: '🏗️' },
  { year: '2023', label: '+2 Management Added', icon: '📊' },
  { year: '2025', label: '750+ Students & Growing', icon: '🌟' },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="py-24 relative overflow-hidden section-blue">
      {/* Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f5c518]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
        {/* Dotted pattern */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/10"
            style={{ left: `${(i % 5) * 25 + 5}%`, top: `${Math.floor(i / 5) * 25 + 5}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/10 text-[#f5c518] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase border border-white/10">
            Our Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic{' '}
            <span className="shimmer-text">Achievements</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Years of consistent excellence reflected in our students' outstanding results.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2, type: 'spring', bounce: 0.3 }}
                whileHover={{ scale: 1.04, y: -6 }}
                className="bg-white rounded-3xl p-8 text-center shadow-2xl overflow-hidden relative"
              >
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: item.color }} />

                {/* Glow bg */}
                <div
                  className="absolute inset-0 opacity-30 rounded-3xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}20, transparent 70%)` }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: i }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <Icon size={30} style={{ color: item.color }} />
                  </motion.div>

                  {/* Circular progress */}
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                      <motion.circle
                        cx="50" cy="50" r="42" fill="none"
                        stroke={item.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 42}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        animate={inView ? { strokeDashoffset: 2 * Math.PI * 42 * (1 - item.value / 100) } : {}}
                        transition={{ duration: 2, delay: i * 0.2 + 0.5, ease: 'easeOut' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold" style={{ color: item.color, fontFamily: 'Playfair Display, serif' }}>
                        <CountUp to={item.value} suffix={item.suffix} />
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a3a8a] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Journey Through the Years
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-white/20 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5c518] to-[#f0a500] flex items-center justify-center text-xl mb-3 shadow-lg shadow-[#f5c518]/30 relative z-10"
                  >
                    {m.icon}
                  </motion.div>
                  <div className="text-[#f5c518] font-bold text-lg">{m.year}</div>
                  <div className="text-white/60 text-xs mt-1 leading-tight">{m.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
