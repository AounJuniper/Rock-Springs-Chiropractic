import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 20); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled 
          ? 'bg-white border-b border-slate-100 py-3 shadow-sm' 
          : 'bg-transparent py-6 md:py-8'
      )}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 group cursor-pointer shrink-0">
            <div className="p-2 rounded-xl bg-[#2a3c35] text-white">
              <Activity className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-sm md:text-lg font-black text-[#2a3c35] uppercase tracking-tight">
                Rock Springs
              </span>
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] text-[#4ade80] font-bold">
                Chiropractic
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <div className="flex items-center space-x-5 xl:space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.25em] text-[#2a3c35] hover:text-[#4ade80] transition-all relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#4ade80] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <a
              href="#booking"
              className="px-8 py-4 bg-[#2a3c35] text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-[#4ade80] transition-all shadow-xl active:scale-95"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2a3c35] outline-none"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE NAV DRAWER ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:w-[380px] bg-white z-[120] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="p-6 flex justify-between items-center border-b border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="p-1.5 rounded-lg bg-[#2a3c35] text-white">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-sm font-black text-[#2a3c35] uppercase">Rock Springs</span>
                    <span className="text-[8px] uppercase tracking-widest text-[#4ade80] font-bold">Chiropractic</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 bg-slate-100 rounded-full text-[#2a3c35]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Reduced Font Size Nav Links */}
              <div className="flex-1 overflow-y-auto px-10 py-8">
                <nav className="flex flex-col space-y-5">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl font-bold text-[#2a3c35] hover:text-[#4ade80] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer (Green Theme) */}
              <div className="p-4 mb-2">
                <div className="bg-[#2a3c35] rounded-[2.5rem] p-6 text-white">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Scheduling</h4>
                      <a href="tel:3073823090" className="text-xs font-bold hover:text-[#4ade80] transition-colors">
                        (307) 382-3090
                      </a>
                    </div>
                    <div>
                      <h4 className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Enquiries</h4>
                      <a href="mailto:info@rockspringschiro.com" className="text-xs font-bold border-b border-white/20 pb-0.5 hover:text-[#4ade80] transition-colors">
                        Email Us
                      </a>
                    </div>
                  </div>
                  <a
                    href="#booking"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 bg-[#4ade80] text-[#1a2823] text-center rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg active:scale-95 transition-all"
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
}
