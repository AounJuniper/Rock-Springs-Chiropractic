import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F9FBFA] scroll-mt-32">
      <div className="w-[90%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Connect With Us</h2>
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-blue mb-10 leading-tight tracking-tight">
              A Direct Path to <br />
              <span className="text-brand-teal font-normal">Superior Health.</span>
            </h3>
            <p className="text-sm md:text-[17px] text-slate-500 mb-12 font-light leading-relaxed max-w-xl">
              Rock Springs Chiropractic does more than just make your pain go away. We help educate you to understand the steps you need to take to improve your quality of life.
            </p>

            <div className="space-y-8">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=215+Winston+Dr+Rock+Springs+WY+82901"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <ContactInfoItem 
                  icon={MapPin} 
                  title="Healing Center" 
                  detail="215 Winston Dr, Rock Springs, WY 82901" 
                />
              </a>
              <a href="tel:3073823090" className="block group">
                <ContactInfoItem 
                  icon={Phone} 
                  title="Direct Line" 
                  detail="(307) 382-3090" 
                />
              </a>
              <div className="block group cursor-default">
                <ContactInfoItem 
                  icon={Clock} 
                  title="Office Hours" 
                  detail="Mon/Thu: 8-12, 2-6 | Tue/Wed: 8-12, 2-5 | Fri: 8-12" 
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="h-full w-full bg-white rounded-[3rem] overflow-hidden shadow-[0_45px_100px_-25px_rgba(12,16,20,0.1)] border border-slate-100 relative min-h-[450px] lg:h-[600px]">
              <iframe
                title="Rock Springs Chiropractic Healing Center"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.362624838188!2d-109.243555!3d41.590215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875a6104c86cc687%3A0xb366b1be2f1e626e!2s215%20Winston%20Dr%2C%20Rock%20Springs%2C%20WY%2082901!5e0!3m2!1sen!2s!4v1714165181156!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-100"
              ></iframe>
              <div className="absolute bottom-8 left-8 right-8 p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-3xl border border-white/50 pointer-events-none">
                <h4 className="font-bold text-lg text-brand-blue mb-1">Dr. Rebecca Vessels</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-teal font-black">Healing Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon: Icon, title, detail }: { icon: any, title: string, detail: string }) {
  return (
    <div className="flex items-start space-x-6">
      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-50 cursor-pointer hover:border-brand-teal transition-colors">
        <Icon className="w-6 h-6 text-brand-teal" />
      </div>
      <div>
        <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wide mb-1">{title}</h4>
        <p className="text-slate-600 leading-relaxed font-medium">{detail}</p>
      </div>
    </div>
  );
}

