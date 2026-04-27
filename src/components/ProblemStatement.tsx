import { motion } from 'motion/react';
import { ShieldAlert, Fingerprint, HeartPulse } from 'lucide-react';

const painPoints = [
  { icon: ShieldAlert, text: 'Failed Surgeries & Injuries' },
  { icon: Fingerprint, text: 'Failed Chronic Pain Management' },
  { icon: HeartPulse, text: 'Degenerative Joint Conditions' },
];

export default function ProblemStatement() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-12 mb-10 md:mb-20"
          >
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-4">Patient Education</h2>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6 tracking-tight leading-tight font-serif">
                Why Is Chiropractic <br />
                <span className="text-brand-teal font-normal">Care Different?</span>
              </h3>
          </motion.div>

          <div className="lg:col-span-12 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 bg-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" 
                  alt="Stressed person with back pain" 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-50 hidden md:block"
              >
                <p className="text-3xl font-bold text-brand-blue mb-1">100%</p>
                <p className="text-[9px] uppercase font-black tracking-widest text-slate-400">Natural & <br />Systemic Approach</p>
              </motion.div>
            </motion.div>

            <div className="space-y-12">
              <div className="flex items-center space-x-4">
                <div className="h-[1px] w-12 bg-brand-teal" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal">The Manifestation</span>
              </div>
              
              <div className="grid gap-8">
                {painPoints.map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 }}
                    className="flex items-start space-x-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#F9FBFA] border border-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <point.icon className="w-5 h-5 text-brand-teal group-hover:text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-serif font-bold text-brand-blue mb-1">{point.text}</h4>
                      <p className="text-xs text-slate-400 font-light">Biological interference affecting neurological performance.</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-10 border-t border-slate-100">
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-light">
                  There is a natural and systemic approach to the healing process that we can and should use to our benefit. Our bodies are completely controlled by our brain through its connection to the spinal cord and its vast network of nerves. When this system is not working at its best, performance sufferings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
