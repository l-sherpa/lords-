import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <img
                src="/lords-logo.png"
                alt="Lord's Light Academy"
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-bold text-lg tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-[#1a3a8a]' : 'text-white'
                }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                LORD'S LIGHT
              </span>
              <span
                className={`text-xs font-semibold tracking-[0.2em] transition-colors duration-300 ${
                  scrolled ? 'text-[#f0a500]' : 'text-[#f5c518]'
                }`}
              >
                ACADEMY
              </span>
            </div>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className={`nav-link text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  scrolled ? 'text-[#1a3a8a] hover:text-[#f0a500]' : 'text-white/90 hover:text-[#f5c518]'
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#f5c518] to-[#f0a500] text-[#1a3a8a] text-sm font-bold shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              Enroll Now
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              scrolled ? 'text-[#1a3a8a]' : 'text-white'
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-blue-100 shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#1a3a8a] font-semibold py-2 border-b border-blue-50 hover:text-[#f0a500] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center px-5 py-3 rounded-full bg-gradient-to-r from-[#f5c518] to-[#f0a500] text-[#1a3a8a] font-bold shadow-md"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
