import { motion } from 'motion/react';
import { Target, Smile, Sparkles, Activity } from 'lucide-react';

const benefits = [
  { 
    title: 'Precision Pain Relief', 
    desc: 'Targeted adjustments that reach the center of neurological tension.',
    icon: Target 
  },
  { 
    title: 'Structural Alignment', 
    desc: 'Restore your natural posture and stand taller with balanced weight distribution.',
    icon: Activity 
  },
  { 
    title: 'Enhanced Sleep', 
    desc: 'A relaxed nervous system leads to deeper, more restorative rest.',
    icon: Smile 
  },
  { 
    title: 'Vital Energy', 
    desc: 'Remove interference and let your body’s natural energy flow freely.',
    icon: Sparkles 
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-brand-teal mb-4">The Transformation</h2>
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-blue mb-6">
            Superior health and <br />
            <span className="font-normal text-brand-teal">balance in your life.</span>
          </h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
            Rock Springs Chiropractic does more than just make your pain go away. We help educate you to understand the steps you need to take to improve your quality of life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-brand-light border border-slate-100 group hover:bg-brand-blue hover:text-white transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 md:mb-8 group-hover:bg-white transition-all duration-500">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl md:text-2xl font-serif mb-3 md:mb-4 tracking-tight">{benefit.title}</h4>
              <p className="opacity-70 text-sm leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
