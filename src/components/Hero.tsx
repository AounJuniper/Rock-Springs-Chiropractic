import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 md:pt-24 lg:pt-32 lg:pb-0 overflow-hidden bg-[#F9FBFA]">
      {/* Structural Accents */}
      <motion.div 
        animate={{ x: [0, 20, 0], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/3 h-full bg-[#F3F6F5] rounded-l-[120px] -mr-20 hidden lg:block" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-48 h-48 md:w-64 md:h-64 bg-brand-teal/5 rounded-full blur-[80px] md:blur-[100px]" 
      />

      <div className="w-[90%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 text-center lg:text-left pt-8 md:pt-12 lg:pt-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-white shadow-sm border border-slate-100 text-brand-teal text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-6 md:mb-8"
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-brand-teal animate-pulse" />
              <span>Certified Neurological Care</span>
            </motion.div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-brand-blue leading-[1.1] md:leading-[1] mb-6 md:mb-8 tracking-tighter font-serif">
              Natural & <br />
              <span className="text-brand-teal font-normal">Holistic Health</span> <br />
              Care.
            </h1>
            
            <p className="text-sm md:text-base lg:text-[17px] text-slate-500 mb-8 md:mb-10 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light px-4 lg:px-0">
              Restore your balance through advanced chiropractic methods that honor the body's innate ability to be self-sustaining and self-healing.
            </p>
            
            <div className="flex flex-row items-center justify-center lg:justify-start space-x-4 md:space-x-8">
              <a
                href="#booking"
                className="px-6 md:px-10 py-4 md:py-5 bg-brand-blue text-white rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[9px] md:text-[11px] hover:bg-brand-teal transition-all shadow-2xl shadow-brand-blue/20 hover:-translate-y-1 flex items-center justify-center group"
              >
                Book Now
                <ArrowRight className="ml-2 md:ml-3 w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex -space-x-3 items-center">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                  </div>
                ))}
                <div className="pl-6 flex flex-col items-start translate-y-1">
                  <div className="flex text-amber-400 mb-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 bg-current rounded-full mr-0.5" />)}
                  </div>
                  <span className="text-[8px] md:text-[10px] uppercase font-black tracking-tighter text-slate-400">1.2k+ Success Stories</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative mt-8 lg:mt-0 flex justify-center w-full max-w-lg lg:max-w-none"
          >
            <div className="relative group w-full flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-[4/5] rounded-[40px] md:rounded-[120px_40px_120px_40px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] z-10 border-8 md:border-[12px] border-white ring-1 ring-brand-blue/5">
                <img
                  src="https://github.com/AounJuniper/Rock-Springs-Chiropractic/blob/main/src/assets/re.png?raw=true"
                  alt="Dr. Rebecca Vessels"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-12 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-[24px] md:rounded-[32px] shadow-2xl z-20 border border-brand-blue/5 max-w-[160px] md:max-w-[220px]"
              >
                <div className="text-brand-teal mb-2https://www.rockspringschiropractic.com/wp-content/uploads/2023/10/Rebecca-Vessels-portrait-768x600.jpg md:mb-3">
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] leading-tight">Board Certified</p>
                <p className="text-[12px] md:text-[14px] font-serif text-slate-800 mt-1">Dr. Rebecca Vessels, D.C.</p>
                <div className="mt-2 md:mt-3 flex items-center space-x-1">
                  <div className="flex -space-x-1">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full border border-white bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Reviewer" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[7px] md:text-[8px] font-bold text-slate-500 uppercase tracking-tighter">Top Rated</span>
                </div>
              </motion.div>
              
              {/* Decorative Circle */}
              <div className="absolute -top-10 -left-10 md:-top-20 md:-left-20 w-32 h-32 md:w-64 md:h-64 border border-brand-blue/5 rounded-full -z-0" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
