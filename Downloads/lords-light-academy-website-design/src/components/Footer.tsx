import { motion } from 'framer-motion';
import { Sun, MapPin, Phone, Mail, Heart } from 'lucide-react';

const quickLinks = ['Home', 'About', 'Programs', 'Facilities', 'Achievements', 'Contact'];
const programs = ['Early Childhood (Nursery–KG)', 'Basic Education (Grade 1–10)', 'Higher Secondary (+2)'];

export default function Footer() {
  return (
    <footer className="bg-[#0d1f5c] text-white relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="#eef3ff" />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-white/3 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#f5c518]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2756c5] to-[#1a3a8a] border-2 border-[#f5c518]/30 flex items-center justify-center">
                <Sun size={20} className="text-[#f5c518]" />
              </div>
              <div>
                <div className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  LORD'S LIGHT
                </div>
                <div className="text-[#f5c518] text-xs font-semibold tracking-widest">ACADEMY</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Nurturing minds and illuminating futures since 2005. A premier educational institution in the heart of Kathmandu, Nepal.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: 'FB', href: '#' },
                { label: 'YT', href: '#' },
                { label: 'IG', href: '#' },
              ].map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#f5c518] hover:text-[#1a3a8a] flex items-center justify-center transition-colors duration-300 text-xs font-bold"
                  aria-label={label}
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#f5c518] mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/60 hover:text-[#f5c518] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f5c518] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#f5c518] mb-5">Programs</h4>
            <ul className="space-y-3">
              {programs.map((prog) => (
                <li key={prog}>
                  <a
                    href="#programs"
                    className="text-white/60 hover:text-[#f5c518] text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f5c518] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#f5c518] mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#f5c518] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">Gokarneshwor-6, Nayabasti, Boudha-Jorpati, Kathmandu</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#f5c518] flex-shrink-0" />
                <span className="text-white/60 text-sm">+977-1-4913XXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#f5c518] flex-shrink-0" />
                <span className="text-white/60 text-sm">info@lordslightacademy.edu.np</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Lord's Light Academy. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1">
            Made with <Heart size={13} className="text-red-400" fill="currentColor" /> for the light of education
          </p>
        </div>
      </div>
    </footer>
  );
}
