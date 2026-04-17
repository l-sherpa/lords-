import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Gokarneshwor-6, Nayabasti, Boudha-Jorpati, Kathmandu, Nepal',
    color: '#2756c5',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+977-1-4913XXX / +977-98XXXXXXXX',
    color: '#22c55e',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@lordslightacademy.edu.np',
    color: '#f0a500',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Sun – Fri: 9:00 AM – 5:00 PM',
    color: '#e85d75',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef3ff 100%)' }}>
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#0d2461" />
        </svg>
      </div>

      <div className="absolute top-1/3 left-0 w-64 h-64 bg-[#2756c5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#f5c518]/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#f5c518]/20 text-[#c47f00] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3a8a] mb-4">
            Contact{' '}
            <span className="text-[#f0a500] relative">
              Us
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#f5c518] to-[#f0a500] rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We'd love to hear from you. Reach out to learn more about our programs or schedule a campus visit.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 mb-10">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: info.color + '15' }}
                    >
                      <Icon size={20} style={{ color: info.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                        {info.label}
                      </div>
                      <div className="text-[#1a3a8a] font-medium text-sm">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-[#1a3a8a] to-[#2756c5] rounded-2xl p-6 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                {/* Grid pattern */}
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              <div className="relative z-10 flex items-center gap-3 mb-3">
                <MapPin size={20} className="text-[#f5c518]" />
                <h4 className="font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>Our Location</h4>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Conveniently located in Boudha-Jorpati area, easily accessible from all parts of Kathmandu.
              </p>
              <a
                href="https://maps.google.com/maps?q=Lord's+Light+Academy+Kathmandu+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c518] text-[#1a3a8a] font-bold text-sm px-5 py-2.5 rounded-full hover:bg-[#f0a500] transition-colors cursor-pointer"
              >
                <MapPin size={14} />
                View on Google Maps
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
