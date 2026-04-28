import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity, Phone, Mail, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Techniques', href: '#techniques' },
    { name: 'Contact', href: '#contact' },
    { name: 'Book Now', href: '#booking' },
  ];

  return (
    <nav className="relative z-[100] bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2 cursor-pointer group shrink-0">
          <div className="p-2 rounded-xl bg-[#2a3c35] text-white">
            <Activity className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs md:text-base font-extrabold text-[#2a3c35] whitespace-nowrap uppercase">
              Rock Springs
            </span>
            <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#4ade80] whitespace-nowrap font-bold">
              Chiropractic
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 justify-end">
          <div className="flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2a3c35] hover:text-[#4ade80] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#booking"
            className="ml-10 px-8 py-4 bg-[#2a3c35] text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#4ade80] transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#2a3c35]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white z-[90] flex flex-col shadow-2xl"
            >
              {/* Drawer Header */}
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#2a3c35]" />
                  <span className="font-bold text-[#2a3c35] text-lg">Rock Springs</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col justify-center px-10">
                <nav className="space-y-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-4xl font-bold text-[#2a3c35] hover:text-[#4ade80] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Styled Footer (Based on your Images) */}
              <div className="p-4 mb-4">
                <div className="bg-[#2a3c35] rounded-[2.5rem] p-8 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {/* Scheduling */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-black mb-3">
                        Scheduling
                      </p>
                      <a 
                        href="tel:3073823090" 
                        className="text-base sm:text-lg font-bold whitespace-nowrap hover:text-[#4ade80] transition-colors"
                      >
                        (307) 382-3090
                      </a>
                    </div>

                    {/* Enquiries */}
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 font-black mb-3">
                        Enquiries
                      </p>
                      <a 
                        href="mailto:info@rockspringschiro.com" 
                        className="text-base sm:text-lg font-bold border-b border-white/20 pb-0.5 hover:text-[#4ade80] transition-colors inline-block"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href="#booking"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-5 bg-[#4ade80] text-[#1a2823] text-center rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:brightness-105 active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/20"
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
