import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => (document.body.style.overflow = 'unset');
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 md:py-4 shadow-sm'
          : 'bg-transparent py-6 md:py-8'
      )}
    >
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-blue whitespace-nowrap">
              Rock Springs <span className="text-brand-teal">Chiropractic</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center flex-1 justify-end">

            {/* Links */}
            <div className="flex items-center gap-8 xl:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 text-[10px] font-black uppercase tracking-[0.25em] text-brand-blue hover:text-brand-teal transition-all relative group whitespace-nowrap"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal transition-all group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Button */}
            <a
              href="#booking"
              className="ml-10 px-8 py-4 bg-brand-blue text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-brand-teal transition-all shadow-xl shadow-brand-blue/10 hover:-translate-y-1 active:scale-95 whitespace-nowrap"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-blue"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-blue/20 backdrop-blur-sm z-[60] lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[380px] bg-white z-[70] lg:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col"
            >
              {/* Header */}
              <div className="p-8 flex justify-between items-center border-b border-slate-50">
                <span className="text-xl font-serif font-bold text-brand-blue">
                  Rock Springs Chiropractic
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all active:scale-90"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto px-8 py-12 flex flex-col justify-center">
                <nav className="space-y-5">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      onClick={() => setIsOpen(false)}
                      className="block group"
                    >
                      <span className="text-3xl font-serif text-brand-blue group-hover:pl-4 transition-all duration-500">
                        {link.name}
                      </span>
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-10 bg-brand-blue text-white rounded-t-[60px]">
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                        Scheduling
                      </h4>
                      <a href="tel:3073823090" className="block text-sm">
                        (307) 382-3090
                      </a>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                        Enquiries
                      </h4>
                      <a
                        href="mailto:info@rockspringschiro.com"
                        className="block text-sm underline"
                      >
                        Email Us
                      </a>
                    </div>
                  </div>

                  <a
                    href="#booking"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-5 bg-white text-brand-blue text-center rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-teal hover:text-white transition-all active:scale-95"
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
