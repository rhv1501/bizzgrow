"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Kamlesh Marlecha",
      role: "Client",
      content: "One stop solution for all ur needs and pocket friendly. Has quite good knowledge about the subjects and gives ears and implements best of required for business.",
      color: "bg-brand-mint"
    },
    {
      name: "Krish",
      role: "Client",
      content: "A professional organization with strong expertise in digital marketing and web solutions. Their structured workflow and result-driven mindset make them a valuable growth partner for any business.",
      color: "bg-brand-primary"
    },
    {
      name: "HAKASH R",
      role: "Client",
      content: "Knowledgeable and provides best suitable service for your requirements. Great experience, best place for growing your business.",
      color: "bg-brand-accent"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-32 relative bg-white overflow-hidden border-y-2 border-gray-900">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 border-2 border-gray-900 bg-white rounded-full px-5 py-2.5 text-sm font-bold text-gray-900 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Star className="w-5 h-5 text-brand-primary" fill="currentColor" />
            <span className="uppercase tracking-widest">Social Proof</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 text-gray-900 tracking-tight leading-tight"
          >
            Don't Just <span className="text-white bg-brand-secondary px-4 py-1 rounded-2xl rotate-2 inline-block">Take Our Word</span> For It
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-medium text-gray-600 max-w-2xl mx-auto"
          >
            We didn't even pay them to say this. (Okay, maybe a little. Kidding.)
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${testimonial.color} p-10 rounded-[3rem] border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex gap-1 mb-8 bg-white border-2 border-gray-900 px-4 py-2 rounded-full w-max shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gray-900" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-900 text-2xl font-bold leading-snug mb-8">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm p-4 rounded-3xl border-2 border-gray-900">
                <div className="w-14 h-14 rounded-full border-2 border-gray-900 flex-shrink-0 bg-white flex items-center justify-center text-gray-900 font-black text-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
