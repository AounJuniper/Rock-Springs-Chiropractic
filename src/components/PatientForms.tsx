import { motion } from 'motion/react';
import { FileText, Download, ArrowRight } from 'lucide-react';

export default function PatientForms() {
  const forms = [
    { title: 'New Patient Intake', type: 'PDF', size: '2.4 MB' },
    { title: 'Privacy Policy (HIPAA)', type: 'PDF', size: '1.1 MB' },
    { title: 'Insurance Verification', type: 'PDF', size: '0.8 MB' },
  ];

  return (
    <section id="forms" className="py-24 bg-[#F9FBFA] scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Efficiency in Care</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-blue leading-tight tracking-tight mb-8">
              Digital <span className="text-brand-teal font-normal">Onboarding.</span>
            </h3>
            <p className="text-sm md:text-[17px] text-slate-500 font-light leading-relaxed mb-8">
              Save time at your first visit by downloading and completing your paperwork in advance. We prioritize a seamless experience from the moment you connect with us.
            </p>
          </div>

          <div className="w-full lg:max-w-md space-y-4">
            {forms.map((form, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between hover:border-brand-teal/20 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue text-sm">{form.title}</h4>
                    <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest">{form.type} • {form.size}</p>
                  </div>
                </div>
                <Download className="w-5 h-5 text-slate-300 group-hover:text-brand-teal group-hover:translate-y-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
