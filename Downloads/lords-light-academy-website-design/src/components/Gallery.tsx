import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ZoomIn, Camera, Users, Heart, Sparkles } from 'lucide-react';

const photos = [
  { src: '/photos/619308470_1475071024624915_1613964708150977082_n.jpg', category: 'Academic', span: 'col-span-1 row-span-2' },
  { src: '/photos/632836647_1495468842585133_4792292355142999605_n.jpg', category: 'Events', span: 'col-span-1 row-span-1' },
  { src: '/photos/634188569_1495463295919021_6332958662890442617_n.jpg', category: 'Campus', span: 'col-span-1 row-span-1' },
  { src: '/photos/659834075_1538349771630373_4912635008898585844_n.jpg', category: 'Achievement', span: 'col-span-1 row-span-2' },
  { src: '/photos/661468278_1538347778297239_6429811639806735112_n.jpg', category: 'Sports', span: 'col-span-1 row-span-1' },
  { src: '/photos/661601261_1542155941249756_1446820555071595002_n.jpg', category: 'Culture', span: 'col-span-1 row-span-1' },
  { src: '/photos/662573278_1542154657916551_2596890830184131718_n.jpg', category: 'Milestone', span: 'col-span-1 row-span-1' },
  { src: '/photos/667738322_1542141474584536_682189491693608293_n.jpg', category: 'Community', span: 'col-span-1 row-span-1' },
];

const stats = [
  { icon: Camera, value: '2,500+', label: 'Photos Captured', color: '#f5c518' },
  { icon: Users, value: '750+', label: 'Happy Students', color: '#2756c5' },
  { icon: Heart, value: '20', label: 'Years of Memories', color: '#e85d75' },
  { icon: Sparkles, value: '100%', label: 'Joyful Moments', color: '#22c55e' },
];

function StatCard({ icon: Icon, value, label, color, delay }: any) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, type: 'spring', bounce: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 overflow-hidden group"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${color}15 0%, transparent 70%)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: color, opacity: 0.3 }}
          animate={{
            y: [-20, -40, -20],
            x: [0, (i - 1) * 10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          initial={{
            left: `${20 + i * 30}%`,
            top: '60%',
          }}
        />
      ))}

      <div className="relative z-10 text-center">
        <motion.div
          className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}20` }}
          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} style={{ color }} />
        </motion.div>

        <motion.div
          className="text-4xl md:text-5xl font-bold mb-2"
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}aa)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Playfair Display, serif',
          }}
        >
          {inView ? (
            <CountUp end={numericValue} suffix={suffix} />
          ) : (
            `0${suffix}`
          )}
        </motion.div>

        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </motion.div>
  );
}

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);

  if (count === 0) {
    let start = 0;
    const step = end / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);
  }

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Gallery() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8faff] via-white to-[#f8faff]" />

        {/* Floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              background: i % 2 === 0 ? 'rgba(39, 86, 197, 0.08)' : 'rgba(245, 197, 24, 0.08)',
              left: `${i * 25}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2756c5]/10 to-[#f5c518]/10 text-[#2756c5] text-sm font-semibold px-5 py-2 rounded-full mb-6"
          >
            <Camera size={16} className="text-[#f5c518]" />
            <span className="tracking-widest uppercase">Captured Moments</span>
            <Sparkles size={16} className="text-[#f5c518]" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-[#1a3a8a]">Our </span>
            <span className="relative inline-block">
              <span
                className="bg-gradient-to-r from-[#f5c518] via-[#f0a500] to-[#f5c518] bg-clip-text text-transparent"
                style={{
                  backgroundSize: '200% auto',
                  animation: 'shimmer 3s linear infinite',
                }}
              >
                Gallery
              </span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
              >
                <motion.path
                  d="M0 4 Q50 0, 100 4 T200 4"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f5c518" />
                    <stop offset="100%" stopColor="#f0a500" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Glimpses of joy, learning, and celebration from our vibrant school community
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.1 + 0.6} />
          ))}
        </motion.div>

        {/* Masonry Gallery Grid */}
        <motion.div
          style={{ scale }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.1 + 0.8,
                type: 'spring',
                bounce: 0.2,
              }}
              style={{
                y: i % 2 === 0 ? y1 : y2,
              }}
              className={`${photo.span} relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg`}
              onClick={() => setSelectedImage(i)}
            >
              {/* Image */}
              <motion.img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-[#1a3a8a]/90 via-[#1a3a8a]/40 to-transparent"
              />

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute top-4 left-4"
              >
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30">
                  {photo.category}
                </span>
              </motion.div>

              {/* Zoom Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
              >
                <ZoomIn size={18} className="text-white" />
              </motion.div>


              {/* Animated Border on Hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#f5c518]/0 group-hover:border-[#f5c518]/60 transition-colors duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.4 }}
          >
            Want to see more of our school life?
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(39, 86, 197, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2756c5] to-[#1a3a8a] text-white font-semibold shadow-xl"
          >
            <Camera size={20} />
            Schedule a Campus Visit
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 hover:bg-white/20 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </motion.button>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, type: 'spring', bounce: 0.3 }}
            className="relative max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.img
              src={photos[selectedImage].src}
              alt=""
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              layoutId={`photo-${selectedImage}`}
            />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-[#f5c518] text-[#1a3a8a] text-xs font-bold mb-2">
                {photos[selectedImage].category}
              </span>
            </motion.div>
          </motion.div>

          {/* Navigation */}
          <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between pointer-events-none">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: selectedImage > 0 ? 1 : 0.3, x: 0 }}
              whileHover={selectedImage > 0 ? { scale: 1.1 } : {}}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((p) => (p !== null && p > 0 ? p - 1 : photos.length - 1));
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: selectedImage < photos.length - 1 ? 1 : 0.3, x: 0 }}
              whileHover={selectedImage < photos.length - 1 ? { scale: 1.1 } : {}}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((p) => (p !== null && p < photos.length - 1 ? p + 1 : 0));
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </section>
  );
}
