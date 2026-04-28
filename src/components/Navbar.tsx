import { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Techniques', href: '#techniques' },
  { name: 'Expect', href: '#how-it-works' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Testimonials', href: '#testimonials' },
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
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 transition-all duration-300 z-[100]',
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-slate-100 py-3 md:py-4 shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        )}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center">

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
                    className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-blue hover:text-brand-teal"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <a
                href="#booking"
                className="ml-10 px-8 py-4 bg-brand-blue text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 w-screen h-screen bg-black/70 backdrop-blur-md z-[999]"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[380px] bg-white z-[1000] flex flex-col"
            >
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand-blue" />
                  <span className="font-bold text-brand-blue">Rock Springs</span>
                </div>

                <button onClick={() => setIsOpen(false)}>
                  <X />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 flex items-center justify-center">
                <nav className="space-y-6 text-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl font-semibold text-brand-blue"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Footer */}
              <div className="p-6 bg-brand-blue text-white">
                <p>(307) 382-3090</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
