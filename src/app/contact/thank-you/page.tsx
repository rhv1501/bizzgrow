"use client";

import { useEffect } from "react";
import Link from "next/link";
import { consumeContactSuccessFlag } from "../../utils/gtm";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  Home,
  Phone,
  MessageCircle,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

const ThankYouPage = () => {
  const router = useRouter();
  useEffect(() => {
    // We check if they came from the contact form
    if (!consumeContactSuccessFlag()) {
      // In production you might want to redirect them back, but for testing it's fine to let them see it
      // router.replace("/contact");
    }
  }, [router]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  const checkmarkVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
      } 
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-20 bg-background relative selection:bg-brand-primary selection:text-foreground flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center"
      >
        {/* HUGE CHECKMARK */}
        <motion.div variants={checkmarkVariants} className="mb-12 inline-flex justify-center relative">
          <div className="w-32 h-32 md:w-40 md:h-40 bg-emerald-500 rounded-full border-4 border-background shadow-2xl flex items-center justify-center z-10">
            <CheckCircle2
              className="w-20 h-20 md:w-24 md:h-24 text-white"
              strokeWidth={3}
            />
          </div>
          {/* Decorative breathing shadow behind checkmark */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500 rounded-full blur-3xl opacity-40 pointer-events-none"
          />
        </motion.div>

        {/* MAIN MESSAGE */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tight uppercase leading-[1.1] mb-6">
            You&apos;re <span className="text-emerald-500">All Set.</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-muted max-w-2xl mx-auto mb-16 leading-relaxed">
            We&apos;ve received your project details. Our team is already reviewing your goals and will be in touch shortly.
          </p>
        </motion.div>

        {/* NEXT STEPS CARDS */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16 text-left">
          <div className="bg-surface p-8 rounded-4xl border border-border shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-brand-primary text-white rounded-full border border-border flex items-center justify-center shadow-md mb-6 text-2xl font-black">
              1
            </div>
            <h3 className="text-2xl font-black text-foreground uppercase mb-3">
              Strategic Review
            </h3>
            <p className="text-lg font-bold text-muted">
              We analyze your request against your industry landscape to pinpoint the exact tools and strategies you need.
            </p>
          </div>
          <div className="bg-surface p-8 rounded-4xl border border-border shadow-md hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
            <div className="w-14 h-14 bg-brand-secondary text-foreground rounded-full border border-border flex items-center justify-center shadow-md mb-6 text-2xl font-black">
              2
            </div>
            <h3 className="text-2xl font-black text-foreground uppercase mb-3">
              Action Plan
            </h3>
            <p className="text-lg font-bold text-muted">
              We&apos;ll reach out with a tailored roadmap and schedule a high-impact discovery call to map out execution.
            </p>
          </div>
        </motion.div>

        {/* DIRECT CONTACT OPTIONS */}
        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mb-16 bg-surface rounded-4xl border border-border p-8 md:p-12 shadow-lg text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10">
            <h3 className="text-3xl font-black text-foreground uppercase mb-4">
              Need immediate answers?
            </h3>
            <p className="text-xl font-bold text-muted mb-8 max-w-xl mx-auto">
              If your timeline is urgent, skip the queue and speak directly with our execution team.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:+919150302455"
                className="bg-background text-foreground hover:text-brand-primary border-2 border-border hover:border-brand-primary rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wider shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Us
              </a>
              <a
                href="https://wa.me/919150302455"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white hover:bg-[#128C7E] border border-transparent rounded-2xl px-8 py-4 text-lg font-black uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* CTAS */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/"
            className="w-full sm:w-auto bg-foreground text-background hover:bg-brand-primary border border-transparent rounded-full px-10 py-5 text-lg font-black uppercase tracking-widest shadow-md hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            Back to Home
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto bg-surface text-foreground hover:text-brand-primary border-2 border-border hover:border-brand-primary rounded-full px-10 py-5 text-lg font-black uppercase tracking-widest shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group"
          >
            Explore Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ThankYouPage;
