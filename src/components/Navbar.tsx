import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative z-[100] bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer group shrink-0">
          <div className="p-2 rounded-xl bg-brand-blue text-white">
            <Activity className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs md:text-base font-extrabold text-brand-blue whitespace-nowrap">
              ROCK SPRINGS
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-brand-teal whitespace-nowrap">
              CHIROPRACTIC
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          <div className="flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-blue hover:text-brand-teal transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            className="ml-10 px-8 py-4 bg-brand-blue text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-teal transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-blue"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar / Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[400px] bg-white z-[90] flex flex-col shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-brand-blue tracking-tight">
                    Rock Springs
                  </span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Main Links Area */}
              <div className="flex-1 flex flex-col justify-center px-10">
                <nav className="space-y-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl font-bold text-brand-blue hover:text-brand-teal transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Styled Footer (As per your Image) */}
              <div className="p-4 mb-4">
                <div className="bg-[#0e1116] rounded-[2.5rem] p-8 text-white">
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {/* Scheduling Section */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3">
                        Scheduling
                      </p>
                      <a 
                        href="tel:55501234567" 
                        className="text-lg font-medium whitespace-nowrap hover:text-brand-teal transition-colors"
                      >
                        (555) 0123-4567
                      </a>
                    </div>

                    {/* Enquiries Section */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-3">
                        Enquiries
                      </p>
                      <a 
                        href="mailto:hello@example.com" 
                        className="text-lg font-medium border-b border-white/20 pb-1 hover:text-brand-teal transition-colors inline-block"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>

                  {/* Secure Your Booking Button */}
                  <a
                    href="#booking"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-5 bg-white text-black text-center rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-teal hover:text-white transition-all duration-300"
                  >
                    Secure Your Booking
                  </a>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
