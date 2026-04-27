import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "3073823090";
  const message = "Hello Rock Springs Chiropractic, I would like to book an appointment.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] w-12 h-12 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-colors"
      aria-label="Contact us on WhatsApp"
    >
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-[#25D366] rounded-full"
      />
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8 relative z-10" />
    </motion.a>
  );
}
