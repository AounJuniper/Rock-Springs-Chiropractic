import { motion } from 'motion/react';
import { CheckCircle2, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#F9FBFA] scroll-mt-32 overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Our Vision</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-8 leading-tight tracking-tight font-serif">
              Tailored Care for <br />
              <span className="text-brand-teal font-normal">Living Well.</span>
            </h3>
            
            <div className="space-y-6 text-slate-500 mb-12">
              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                Dr. Rebecca Vessels understands that many patients are diagnosed with the same or similar conditions, yet they respond differently to treatments.
              </p>
              <p className="text-sm md:text-[17px] leading-relaxed font-light">
                We make sure to tailor a particular plan of action to meet our patients' individual needs, situations, and goals. We consider each patient's unique medical and physical condition to help restore and maintain their health.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { label: 'Doctorate', val: 'Dr. Rebecca Vessels' },
                { label: 'Network', val: 'BCBS & Cigna' },
                { label: 'Philosophy', val: 'Natural & Holistic' },
                { label: 'Location', val: 'Rock Springs, WY' },
              ].map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="border-l-2 border-brand-teal/20 pl-4 py-1"
                >
                  <p className="text-[9px] uppercase font-black tracking-widest text-brand-teal mb-1">{stat.label}</p>
                  <p className="text-sm font-bold text-brand-blue">{stat.val}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ x: 10 }}
              className="group flex items-center space-x-6 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-brand-blue flex items-center justify-center text-white group-hover:bg-brand-teal transition-colors">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-blue mb-1">Our Core Commitment</p>
                <p className="text-xs text-slate-400 group-hover:text-brand-teal transition-colors">View Our Clinical Philosophy</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(12,16,20,0.2)]">
              <img
                src="https://github.com/AounJuniper/Rock-Springs-Chiropractic/blob/main/src/assets/re.png?raw=true"
                alt="Chiropractic Care Professional"
                loading="lazy"
                decoding="async"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Absolute Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -left-8 w-40 h-40 border border-slate-200 rounded-full flex items-center justify-center -z-10"
            >
              <div className="w-32 h-32 border border-slate-100 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

