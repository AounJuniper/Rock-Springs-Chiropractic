import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Precision Assessment',
    description: 'We seek out and implement the most current techniques and therapies to address a wide variety of health problems.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-blue',
  },
  {
    number: '02',
    title: 'Tailored Recovery',
    description: "Dr. Vessels makes sure to tailor a particular plan of action to meet each patient's individual needs and health goals.",
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    color: 'bg-brand-teal',
  },
  {
    number: '03',
    title: 'Natural Healing',
    description: 'Our gentle care helps restore and maintain your health through the bodies innate ability to self-heal.',
    image: 'https://www.rockspringschiropractic.com/wp-content/uploads/2023/10/Rebecca-Vessels-Chiropractor.jpg',
    color: 'bg-brand-blue',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white overflow-hidden scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-teal">The Methodology</h2>
          <h3 className="text-3xl md:text-6xl font-serif font-bold text-brand-blue">Path to <span className="font-normal">Thriving</span></h3>
        </div>

        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className={`absolute -top-4 -left-4 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${step.color} flex items-center justify-center text-white text-lg md:text-2xl font-serif font-bold z-20 shadow-xl shadow-brand-blue/10 group-hover:scale-110 transition-transform`}>
                    {step.number}
                  </div>
                  <div className="aspect-[16/10] rounded-[30px] md:rounded-[50px] overflow-hidden shadow-2xl border-2 md:border-4 border-white ring-1 ring-slate-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-blue/5 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex-1 space-y-4 md:space-y-8 text-center lg:text-left"
              >
                <h4 className="text-2xl md:text-4xl font-serif font-bold text-brand-blue leading-tight">{step.title}</h4>
                <p className="text-base md:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">{step.description}</p>
                <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-sm mx-auto lg:mx-0">
                  {['Clinically Proven', 'Safe & Gentle', 'Neurological Care', 'Lasting Results'].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-brand-green" />
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <a href="#booking" className="inline-flex items-center text-sm font-bold text-brand-blue hover:text-brand-teal transition-colors group">
                    Book This Assessment
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
