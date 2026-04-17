import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #2756c5, #f5c518, #f0a500)',
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <Achievements />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Back to top button */}
      <motion.a
        href="#home"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#2756c5] to-[#1a3a8a] text-white flex items-center justify-center shadow-xl shadow-blue-900/30 z-40 border-2 border-[#f5c518]/50"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.a>
    </div>
  );
}
