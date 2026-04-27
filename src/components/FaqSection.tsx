import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Do you work with my insurance?",
    answer: "Yes, we are in-network with Blue Cross Blue Shield, Cigna, and Wyoming Worker's Compensation. We also handle most major private insurance billing."
  },
  {
    question: "Is Dr. Rebecca Vessels taking new patients?",
    answer: "Yes, we are currently welcoming new patients. We tailor our plans to meet each individual's unique needs and health goals."
  },
  {
    question: "What should I expect on my first visit?",
    answer: "Your initial consultation involves a detailed health history and physical examination. Dr. Vessels seeks to understand the root cause of your discomfort to create a tailored healing strategy."
  },
  {
    question: "Do you offer dry needling and massage?",
    answer: "Yes! We now offer dry needling services and have a professional massage therapist on staff to supplement your chiropractic care."
  },
  {
    question: "What conditions do you treat?",
    answer: "In addition to neck and back pain, we help manage headaches, insomnia, allergies, fibromyalgia, sciatica, and joint pain."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div>
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Patient Inquiries</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-8 leading-tight tracking-tight font-serif">
              Understanding Your <br />
              <span className="text-brand-teal font-normal">Clinical Journey.</span>
            </h3>
            <p className="text-sm md:text-[17px] text-slate-500 mb-12 max-w-md font-light leading-relaxed">
              We prioritize education and clinical transparency. Understanding your treatment trajectory is fundamental to optimal recovery.
            </p>
            <div className="p-8 bg-[#F9FBFA] rounded-3xl border border-slate-100 flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-teal shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-brand-blue mb-1">Direct Assistance</p>
                <p className="text-xs text-slate-400 mb-4 font-light leading-relaxed">Require specialized technical clarification?</p>
                <a href="#contact" className="text-[10px] font-black uppercase tracking-widest text-brand-teal hover:underline underline-offset-4">Connect with Clinicians</a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:border-brand-teal/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left transition-colors"
                >
                  <span className="text-sm md:text-base font-bold text-brand-blue pr-6">{faq.question}</span>
                  <motion.div
                    animate={{ 
                      rotate: openIndex === idx ? 180 : 0,
                      backgroundColor: openIndex === idx ? '#2D5A5A' : '#F9FBFA'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-colors", openIndex === idx ? "text-white" : "text-brand-teal")} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-xs md:text-sm text-slate-500 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
