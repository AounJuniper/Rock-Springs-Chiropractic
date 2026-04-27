import { useState, type FormEvent } from 'react';
import { Calendar, Clock, User, Mail, ChevronRight, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Chiropractic Adjustment',
    date: '',
    time: '',
    website: '', // Honeypot field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Security: Honeypot check
    if (formData.website) {
      console.warn('Bot detected');
      return; 
    }

    // Basic Validation
    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      setError('Please finalize all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Invalid email dimension detected.');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-white scroll-mt-32">
        <div className="w-[90%] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-blue rounded-[3rem] p-12 md:p-24 text-center text-white"
          >
            <div className="w-20 h-20 bg-brand-teal rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Booking Initiated.</h2>
            <p className="text-white/60 max-w-md mx-auto mb-10 leading-relaxed">
              Our clinical concierge has received your request. We will verify your appointment pathway via priority correspondence within 2 business hours.
            </p>
            <button 
              onClick={() => { setIsSubmitted(false); setStep(1); }}
              className="px-10 py-5 bg-white text-brand-blue rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-teal hover:text-white transition-all"
            >
              Return to Form
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-white scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="bg-[#F9FBFA] rounded-[3rem] border border-slate-100 overflow-hidden grid lg:grid-cols-5 shadow-[0_40px_100px_-20px_rgba(12,16,20,0.05)]">
          <div className="lg:col-span-2 bg-brand-blue p-10 md:p-14 text-white relative flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal rounded-full -mr-40 -mt-40 blur-[100px] opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">Healing <br />Consultation</h2>
              <p className="text-white/60 mb-12 leading-relaxed text-sm md:text-base font-light">
                Initiate your healing journey with a comprehensive evaluation. Secure your preferred time slot in minutes.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Clock, text: 'Clinical Response within 2hrs' },
                  { icon: User, text: 'Neurological Baseline Audit' },
                  { icon: Calendar, text: 'Seamless Schedule Integration' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-5">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <span className="font-medium text-sm text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 p-8 bg-white/5 rounded-3xl border border-white/5 backdrop-blur-sm">
              <p className="text-[10px] uppercase font-black tracking-widest text-white/40 mb-2">Priority Helpline</p>
              <p className="text-xl md:text-2xl font-bold">(307) 382-3090</p>
            </div>
          </div>

          <div className="lg:col-span-3 p-10 md:p-14 bg-white">
            <div className="flex items-center space-x-6 mb-12">
              <div className="flex flex-col">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 ${step >= 1 ? 'text-brand-teal' : 'text-slate-300'}`}>01 Information</span>
                <div className={`h-1 rounded-full transition-all duration-500 ${step >= 1 ? 'w-24 bg-brand-teal' : 'w-12 bg-slate-100'}`} />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 ${step >= 2 ? 'text-brand-teal' : 'text-slate-300'}`}>02 Schedule</span>
                <div className={`h-1 rounded-full transition-all duration-500 ${step >= 2 ? 'w-24 bg-brand-teal' : 'w-12 bg-slate-100'}`} />
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-xs font-bold rounded-2xl animate-pulse">
                {error}
              </div>
            )}

            {step === 1 ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Your Identity</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="John Mitchell" 
                        className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/5 outline-none transition-all placeholder:text-slate-300 text-sm font-medium"
                        value={formData.name}
                        autoComplete="name"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Pathway</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="john@clinic.care" 
                        className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/5 outline-none transition-all placeholder:text-slate-300 text-sm font-medium"
                        value={formData.email}
                        autoComplete="email"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal outline-none text-sm font-medium"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  {/* Honeypot Field */}
                  <div className="hidden whitespace-nowrap sr-only opacity-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
                    <label>Website</label>
                    <input 
                      type="text" 
                      name="website" 
                      value={formData.website} 
                      onChange={(e) => setFormData({...formData, website: e.target.value})} 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clinical Focus</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal outline-none transition-all appearance-none cursor-pointer text-sm font-medium"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Chiropractic Adjustment</option>
                    <option>Dry Needling</option>
                    <option>Massage Therapy</option>
                    <option>Initial Consultation</option>
                  </select>
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full py-5 bg-brand-blue text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center space-x-3 hover:bg-brand-teal transition-all shadow-xl shadow-brand-blue/10"
                >
                  <span>Proceed to Schedule</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Date</label>
                    <input 
                      type="date" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal outline-none text-sm font-medium"
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Time</label>
                    <input 
                      type="time" 
                      className="w-full px-5 py-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:border-brand-teal outline-none text-sm font-medium"
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4 text-brand-teal" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">
                    Our clinical concierge will verify your session within 2 operating hours. You'll receive a confirmation email with preparation protocols.
                  </p>
                </div>

                <div className="flex space-x-4">
                  <button 
                    onClick={() => setStep(1)}
                    className="px-8 py-5 border border-slate-200 text-slate-600 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-slate-50"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleSubmit}
                    className="flex-1 py-5 bg-brand-blue text-white rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-teal transition-all shadow-xl shadow-brand-blue/10"
                  >
                    Confirm Booking
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

