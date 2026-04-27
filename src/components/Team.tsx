import { motion } from 'motion/react';

const practitioners = [
  {
    name: 'Dr. Rebecca Vessels',
    role: 'Founder & Lead Chiropractor',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b9642ca3?auto=format&fit=crop&q=80&w=400',
    bio: 'Providing gentle and current techniques to address variety of health problems in Rock Springs.'
  },
  {
    name: 'On-Staff Therapist',
    role: 'Massage Therapist',
    image: 'https://images.unsplash.com/photo-1544161515-450ce418465b?auto=format&fit=crop&q=80&w=400',
    bio: 'Specializing in therapeutic massage to support the natural healing process.'
  },
  {
    name: 'Clinical Support',
    role: 'Patient Coordinator',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400',
    bio: 'Helping you understand the steps needed to improve your quality of life.'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-32 bg-brand-light relative overflow-hidden scroll-mt-32">
      <div className="w-[90%] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-teal mb-6">Our Care Collective</h2>
          <p className="text-3xl sm:text-5xl md:text-7xl font-serif text-brand-blue tracking-tight leading-[0.9]">Guided by <span className="font-normal">expertise</span> and empathy.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          {practitioners.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <div className="relative mb-10">
                <div className="aspect-[4/5] rounded-[60px] md:rounded-[100px_20px_100px_20px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/5 rounded-full blur-3xl -z-10" />
              </div>
              <h3 className="text-3xl font-serif font-medium text-brand-blue mb-2">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-teal font-black mb-6">{member.role}</p>
              <p className="text-slate-500 text-base leading-relaxed font-light">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
