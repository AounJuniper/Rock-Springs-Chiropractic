import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'James Anderson',
    role: 'Local Athlete',
    content: 'After years of lower back issues, Dr. Vessels helped me find a path to recovery. I now live pain-free and feel stronger than ever. Truly life-changing!',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Remote Worker',
    content: 'The headaches and neck strain from long hours at the computer were debilitating. Dr. Rebecca identified the root cause and fixed it. Professional and caring.',
    rating: 5,
  },
  {
    name: 'Michael Peterson',
    role: 'Rock Springs Resident',
    content: 'Rock Springs Chiropractic is more than just a clinic. They genuinely care about your holistic health and educate you on self-healing. Highly recommend!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Patient Perspectives</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-blue leading-tight tracking-tight">
              Real Impact, <br />
              <span className="text-brand-teal font-normal">Meaningful Results.</span>
            </h3>
          </div>
          <div className="flex items-center space-x-2 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-50 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Rating" loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
            <div className="pl-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-brand-blue">4.9/5 Rating</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase">Google Verified</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="p-10 bg-[#F9FBFA] rounded-3xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-[0_45px_90px_-25px_rgba(12,16,20,0.1)] transition-all duration-500"
            >
              <div>
                <div className="flex text-amber-400 mb-8 space-x-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-10">"{t.content}"</p>
              </div>
              <div className="flex items-center space-x-5 pt-10 border-t border-slate-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
                  <img src={`https://i.pravatar.cc/100?img=${idx + 35}`} alt={t.name} loading="lazy" decoding="async" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue text-[13px]">{t.name}</h4>
                  <p className="text-[9px] text-brand-teal font-black uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

