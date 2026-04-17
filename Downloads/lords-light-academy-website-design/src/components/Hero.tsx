import { motion } from 'framer-motion';
import { BookOpen, Star, Award } from 'lucide-react';

const stats = [
  { value: '750+', label: 'Students', icon: '🎓' },
  { value: '20', label: 'Years of Excellence', icon: '⭐' },
  { value: '100%', label: 'First Division', icon: '🏆' },
];

// SVG Sun Logo
function SunLogo() {
  return (
    <div className="relative w-48 h-48 md:w-60 md:h-60 mx-auto mb-8">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-[#f5c518]/20 blur-2xl animate-sun-pulse" />

      <svg viewBox="0 0 200 200" className="relative z-10 w-full h-full drop-shadow-2xl">
        <defs>
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff9c4" />
            <stop offset="40%" stopColor="#ffb800" />
            <stop offset="100%" stopColor="#f0a500" />
          </radialGradient>
          <radialGradient id="bgGrad" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#4a90d9" />
            <stop offset="60%" stopColor="#2756c5" />
            <stop offset="100%" stopColor="#1a3a8a" />
          </radialGradient>
          <clipPath id="semicircle">
            <rect x="0" y="0" width="200" height="130" />
          </clipPath>
        </defs>

        {/* Background semicircle */}
        <circle cx="100" cy="130" r="95" fill="url(#bgGrad)" clipPath="url(#semicircle)" />

        {/* Rotating rays group */}
        <g transform="translate(100, 100)" className="ray-burst" style={{ transformOrigin: '0 0' }}>
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 38;
            const y1 = Math.sin(rad) * 38;
            const x2 = Math.cos(rad) * 75;
            const y2 = Math.sin(rad) * 75;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#f5c518"
                strokeWidth={i % 3 === 0 ? 2 : 1}
                strokeOpacity={i % 3 === 0 ? 0.9 : 0.5}
              />
            );
          })}
        </g>

        {/* Sun circle */}
        <circle cx="100" cy="100" r="32" fill="url(#sunGrad)" />
        {/* Sun shine highlight */}
        <circle cx="92" cy="90" r="8" fill="white" opacity="0.25" />

        {/* Book pages */}
        <path
          d="M20 128 Q60 118 100 124 Q140 118 180 128 L180 135 Q140 125 100 131 Q60 125 20 135 Z"
          fill="white"
          opacity="0.95"
        />
        {/* Book spine */}
        <ellipse cx="100" cy="130" rx="3" ry="6" fill="#2756c5" />

        {/* Bottom fill */}
        <rect x="5" y="130" width="190" height="65" fill="url(#bgGrad)" opacity="0.98" />
        <circle cx="100" cy="130" r="95" fill="none" stroke="#2756c5" strokeWidth="4" clipPath="url(#semicircle)" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center hero-gradient overflow-hidden pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glowing orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#f5c518]/5 blur-3xl" />

        {/* Floating stars */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Star className="text-[#f5c518]/40" size={i % 3 === 0 ? 12 : 8} fill="currentColor" />
          </motion.div>
        ))}

        {/* Wave bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="#f8faff"
            fillOpacity="0.95"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Est badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6"
        >
          <Star size={14} className="text-[#f5c518]" fill="currentColor" />
          <span className="text-white/90 text-sm font-medium tracking-widest uppercase">
            Est. 2005 · Kathmandu, Nepal
          </span>
          <Star size={14} className="text-[#f5c518]" fill="currentColor" />
        </motion.div>

        {/* Sun Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        >
          <SunLogo />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-2">
            LORD'S LIGHT
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="shimmer-text">ACADEMY</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Nurturing Minds,{' '}
          <span className="text-[#f5c518] font-semibold">Illuminating Futures</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-white/60 max-w-xl mx-auto mb-10 text-base"
        >
          A premier educational institution in Kathmandu, Nepal, dedicated to academic excellence
          and holistic development. Where tradition meets innovation, and every child shines.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <motion.a
            href="#programs"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,197,24,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#f5c518] to-[#f0a500] text-[#1a3a8a] font-bold text-lg shadow-lg flex items-center justify-center gap-2"
          >
            <BookOpen size={20} />
            Explore Programs
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Award size={20} />
            Our Story
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-3 gap-3 max-w-xl mx-auto mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.15, type: 'spring', bounce: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl py-3 px-2 border-2 border-white shadow-lg"
            >
              <div className="text-2xl mb-0.5">{stat.icon}</div>
              <div className="text-xl md:text-2xl font-bold text-[#1a3a8a] drop-shadow-sm">{stat.value}</div>
              <div className="text-[#1a3a8a]/80 text-xs mt-0.5 font-semibold leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
