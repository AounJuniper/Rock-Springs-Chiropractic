import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // Check if your package is 'framer-motion' or 'motion/react'
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Techniques', href: '#techniques' },
  { name: 'Expect', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Forms', href: '#forms' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled 
          ? 'bg-white border-b border-slate-100 py-4 shadow-sm' 
          : 'bg-transparent py-6 md:py-8'
      )}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <span className={cn(
              "text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap transition-colors",
              isScrolled ? "text-brand-blue" : "text-brand-blue" // Change first color to 'text-white' if hero bg is dark
            )}>
              Rock Springs <span className="text-brand-teal">Chiropractic</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <div className="flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.25em] transition-all relative group whitespace-nowrap",
                    isScrolled ? "text-brand-blue" : "text-brand-blue" // Adjust for scroll transparency if needed
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <a
              href="#booking"
              className="px-8 py-4 bg-brand-blue text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-teal transition-all shadow-xl shadow-brand-blue/10 active:scale-95 whitespace-nowrap"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-blue outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsOpen(false)}
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[380px] bg-white z-[70] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header inside drawer */}
              <div className="p-6 flex justify-between items-center border-b">
                <span className="text-lg font-bold text-brand-blue">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-brand-blue"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-8 py-10">
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-brand-blue hover:text-brand-teal transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer - चिपका हुआ bottom पर */}
              <div className="p-8 bg-brand-blue text-white rounded-t-[40px]">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Scheduling</h4>
                    <a href="tel:3073823090" className="text-sm font-bold">(307) 382-3090</a>
                  </div>
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-2">Enquiries</h4>
                    <a href="mailto:info@rockspringschiro.com" className="text-sm font-bold border-b border-white/20 pb-0.5">Email Us</a>
                  </div>
                </div>
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 bg-brand-teal text-white text-center rounded-xl font-bold uppercase tracking-widest text-[11px] shadow-lg active:scale-95 transition-all"
                >
                  Secure Your Booking
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
