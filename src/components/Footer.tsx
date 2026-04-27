import { Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue text-white py-16 md:py-20">
      <div className="w-[90%] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 items-start mb-16">
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-8">
              <span className="text-xl font-bold tracking-tight text-white leading-none whitespace-nowrap">
                Rock Springs <span className="text-brand-teal">Chiropractic</span>
              </span>
            </div>
            <p className="text-white text-sm leading-relaxed font-normal mb-8 max-w-[240px]">
              Natural and holistic health care focused on restoring biological balance and improving quality of life.
            </p>
            <div className="flex space-x-3">
              {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand-teal hover:border-brand-teal group transition-all">
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:pl-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-teal mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium text-white">
              <li><a href="#about" className="hover:text-brand-teal transition-colors">About</a></li>
              <li><a href="#techniques" className="hover:text-brand-teal transition-colors">Techniques</a></li>
              <li><a href="#contact" className="hover:text-brand-teal transition-colors">Contact</a></li>
              <li><a href="#booking" className="hover:text-brand-teal transition-colors">Book Now</a></li>
            </ul>
          </div>
          
          <div className="lg:pl-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-teal mb-8">Hours</h4>
            <ul className="space-y-4 text-sm font-medium text-white">
              <li className="flex justify-between items-center pb-2 border-b border-white/10">
                <span>Mon / Thu</span>
                <span className="text-white font-bold">08:00 — 18:00</span>
              </li>
              <li className="flex justify-between items-center pb-2 border-b border-white/10">
                <span>Tue / Wed</span>
                <span className="text-white font-bold">08:00 — 17:00</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Friday</span>
                <span className="text-white font-bold">08:00 — 12:00</span>
              </li>
            </ul>
          </div>
          
          <div className="lg:pl-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-brand-teal mb-8">Direct Contact</h4>
            <div className="space-y-6">
               <a 
                 href="https://www.google.com/maps/search/?api=1&query=215+Winston+Dr+Rock+Springs+WY+82901"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-start space-x-3 group"
               >
                 <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                 <p className="text-white text-sm leading-relaxed group-hover:text-brand-teal transition-colors font-medium">
                   215 Winston Dr, Rock Springs, WY 82901
                 </p>
               </a>
               <div className="space-y-4">
                 <a href="tel:3073823090" className="flex items-center space-x-3 group">
                   <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                   <p className="text-white text-sm group-hover:text-brand-teal transition-colors font-bold">(307) 382-3090</p>
                 </a>
                 <div className="flex items-center space-x-3 group text-white">
                   <Mail className="w-4 h-4 text-brand-teal shrink-0" />
                   <p className="text-sm font-bold">Healing Center</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center text-white/90 text-[11px] font-bold uppercase tracking-[0.2em] gap-6">
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
    
    <p>
      © {currentYear} Rock Springs Chiropractic.
      <span className="mx-2 text-white/20">|</span>
      <span className="text-brand-teal font-bold uppercase text-[9px] tracking-widest">
        Created by Aoun
      </span>
    </p>

    <div className="flex gap-6">
      <a href="#" className="hover:text-white transition-colors">Privacy</a>
      <a href="#" className="hover:text-white transition-colors">Terms</a>
    </div>

  </div>
</div>
      </div>
    </footer>
  );
}

