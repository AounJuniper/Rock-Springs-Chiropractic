import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="w-[90%] mx-auto relative z-10">
        <div className="bg-brand-blue p-10 md:p-32 rounded-[3.5rem] text-white text-center relative overflow-hidden">
          {/* Decorative accents */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full -mr-32 -mt-32 blur-[120px]" 
          />
          <motion.div 
            animate={{ x: [-20, 20, -20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-20 -mb-20 blur-3xl" 
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto relative z-10"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight font-serif">
              Ready to <span className="text-brand-teal font-normal">Thrive</span> <br />
              Natural & Holistic.
            </h2>
            <p className="text-sm md:text-[17px] text-white/50 mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Dr. Rebecca Vessels is ready to help you achieve superior health. Download our patient forms or call us to schedule your evaluation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#forms"
                className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-teal hover:text-white transition-all shadow-2xl shadow-black/10 hover:-translate-y-1"
              >
                Patient Forms
              </a>
              <a
                href="tel:3073823090"
                className="px-10 py-5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/5 transition-all"
              >
                (307) 382-3090
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
