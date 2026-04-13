import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Heart, Star, TrendingUp, MapPin, Calendar } from 'lucide-react';

const values = [
  { icon: Star, label: 'Excellence', color: '#f5c518', desc: 'Striving for the highest standards in everything we do' },
  { icon: Heart, label: 'Compassion', color: '#e85d75', desc: 'Caring for each student\'s unique journey and growth' },
  { icon: Shield, label: 'Integrity', color: '#2756c5', desc: 'Building character through honesty and strong values' },
  { icon: TrendingUp, label: 'Growth', color: '#22c55e', desc: 'Nurturing continuous learning and personal development' },
];

function ValueCard({ icon: Icon, label, color, desc, delay }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-2xl p-6 shadow-lg border border-blue-50 card-hover group"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color + '20' }}
      >
        <Icon size={24} style={{ color }} />
      </div>
      <h4 className="font-bold text-[#1a3a8a] text-lg mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{label}</h4>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 bg-f8faff relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2756c5]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f5c518]/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#2756c5]/10 text-[#2756c5] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8a] mb-4">
            About{' '}
            <span className="relative">
              <span className="text-[#f0a500]">Lord's Light</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#f5c518] to-[#f0a500] rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Two decades of shaping young minds in the heart of Kathmandu
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-16 bg-gradient-to-b from-[#2756c5] to-[#f5c518] rounded-full" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  Established in <strong className="text-[#1a3a8a]">2005 AD (2062 BS)</strong> in the
                  serene Boudha-Jorpati area of Kathmandu, Lord's Light Academy has grown into one
                  of the most respected educational institutions in Nepal.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 pl-4 border-l-2 border-blue-100">
                Our earthquake-resistant campus in <strong className="text-[#1a3a8a]">Gokarneshwor-6, Nayabasti</strong> provides
                a safe, nurturing environment where students from Nursery through Grade 10 and beyond
                discover their potential and develop into confident, responsible individuals.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 pl-4 border-l-2 border-[#f5c518]/40">
                We believe education extends beyond textbooks. Our holistic approach combines
                rigorous academics with <strong className="text-[#1a3a8a]">moral and spiritual development</strong>, creative arts,
                sports, and practical life skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2">
                  <MapPin size={15} className="text-[#2756c5]" />
                  <span className="text-[#1a3a8a] text-sm font-medium">Boudha-Jorpati, Kathmandu</span>
                </div>
                <div className="flex items-center gap-2 bg-yellow-50 rounded-full px-4 py-2">
                  <Calendar size={15} className="text-[#f0a500]" />
                  <span className="text-[#1a3a8a] text-sm font-medium">Est. 2005 AD</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Milestone card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#1a3a8a] to-[#2756c5] rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
              {/* Bg decoration */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f5c518]/10 rounded-full translate-y-1/3 -translate-x-1/4" />

              <div className="relative z-10">
                <div className="text-7xl font-bold text-[#f5c518] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>20</div>
                <div className="text-xl text-white/80 mb-8">Years of Shaping Futures</div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '750+', label: 'Current Students' },
                    { value: 'N–10', label: 'Grades Offered' },
                    { value: '+2', label: 'Higher Secondary' },
                    { value: '2005', label: 'Founded' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                      <div className="text-2xl font-bold text-[#f5c518]">{item.value}</div>
                      <div className="text-white/60 text-xs mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Campus badge */}
                <div className="mt-6 flex items-center gap-3 bg-white/10 rounded-xl p-3 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#f5c518]/20 flex items-center justify-center flex-shrink-0">
                    <Shield size={18} className="text-[#f5c518]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Earthquake-Resistant Campus</div>
                    <div className="text-white/50 text-xs">Safe & Certified Structure</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decorative card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f5c518] to-[#f0a500] flex items-center justify-center">
                <Star size={18} className="text-white" fill="currentColor" />
              </div>
              <div>
                <div className="text-[#1a3a8a] font-bold text-sm">Top Rated</div>
                <div className="text-gray-400 text-xs">Kathmandu, Nepal</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ValueCard key={v.label} {...v} delay={i * 0.1 + 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}
