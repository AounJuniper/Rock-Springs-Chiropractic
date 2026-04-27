import { motion } from 'motion/react';
import { Bone, Car, Activity, Trophy, Sparkles, HeartPulse, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Neck & Back Pain',
    description: 'Specialized care for chronic spinal discomfort, associated with surgeries, diseases, and injuries.',
    icon: Bone,
    color: 'bg-brand-blue',
    id: '01'
  },
  {
    title: 'Auto Accident Injury',
    description: 'Expert treatment for whiplash, strained ligaments, and soft tissue damage following a collision.',
    icon: Car,
    color: 'bg-brand-teal',
    id: '02'
  },
  {
    title: 'Headache Relief',
    description: 'Eliminate the root cause of your headaches rather than just offering temporary symptom suppression.',
    icon: Activity,
    color: 'bg-brand-blue',
    id: '03'
  },
  {
    title: 'Sports Injury',
    description: 'Soft tissue injury specialization for active athletes looking to maintain high performance.',
    icon: Trophy,
    color: 'bg-brand-teal',
    id: '04'
  },
  {
    title: 'Dry Needling',
    description: 'Precision physical therapy technique for muscle trigger points and neuromuscular recovery.',
    icon: Sparkles,
    color: 'bg-brand-blue',
    id: '05'
  },
  {
    title: 'Massage Therapy',
    description: 'Therapeutic and relaxation massage services available on-staff to support your healing journey.',
    icon: HeartPulse,
    color: 'bg-brand-teal',
    id: '06'
  },
];

export default function Services() {
  return (
    <section id="techniques" className="py-24 sm:py-32 bg-white relative scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Expertise & Innovation</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue leading-tight tracking-tight font-serif">
              Clinical Excellence in <br />
              <span className="text-brand-teal font-normal">Neurological Wellness</span>
            </h3>
          </div>
          <div className="h-px w-full lg:w-32 bg-slate-200 hidden lg:block mb-6 md:mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative p-8 md:p-10 bg-[#F9FBFA] rounded-3xl border border-slate-100 hover:bg-white hover:border-brand-teal/20 hover:shadow-[0_40px_80px_-20px_rgba(45,90,90,0.1)] transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-10 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  <service.icon className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold font-serif text-brand-blue mb-5 group-hover:text-brand-teal transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue/30 group-hover:text-brand-teal/40 transition-colors">Path {service.id}</span>
                  <ArrowRight className="w-4 h-4 text-brand-blue/20 group-hover:text-brand-teal group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
