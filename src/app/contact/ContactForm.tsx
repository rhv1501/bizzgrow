"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { markContactSuccess, trackLeadFormSuccess } from "../utils/gtm";
import { ShieldCheck, ArrowRight, ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm({
  prefillService,
  prefillSub,
  embedded = false,
}: {
  prefillService?: string;
  prefillSub?: string;
  embedded?: boolean;
} = {}) {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | "sending" | "sent" | "error">(null);

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    message: false,
  });

  const handleBlur = (field: keyof typeof touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  useEffect(() => {
    const mainService = prefillService || searchParams.get("service");
    const subService = prefillSub || searchParams.get("sub");
    const directMessage = searchParams.get("message");

    // Don't overwrite if the user already typed.
    if (message.trim() !== "") return;

    const selected = subService || mainService;
    if (!selected && !directMessage) return;

    const template =
      directMessage ||
      `Hi BizzGrow,\n\nI’d like a quote for: ${selected}\n\nBusiness goals (what should this improve?):\n- \n\nWhat’s your current situation? (website/ads/social/SEO):\n- \n\nTimeline (if any):\n- \n\nAnything else we should know:\n- `;

    setMessage(template);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const isValidEmailCheck = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneCheck = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 10;
  };

  const isNameValid = name.trim().length >= 2;
  const isCompanyValid = company.trim().length >= 2;
  const isEmailValid = isValidEmailCheck(email.trim());
  const isPhoneValid = isValidPhoneCheck(phone);
  const isMessageValid = message.trim().length >= 10;

  const isStep1Valid = isNameValid && isCompanyValid;
  const isStep2Valid = isEmailValid && isPhoneValid;
  const isStep3Valid = isMessageValid;

  const nextStep = () => {
    if (step === 1 && isStep1Valid) setStep(2);
    if (step === 2 && isStep2Valid) setStep(3);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const isFormValid = isStep1Valid && isStep2Valid && isStep3Valid;
  const isDisabled = !isFormValid || status === "sending";

  const getInputClass = (isValid: boolean, isTouched: boolean, value: string) => {
    const baseClass = "w-full bg-background border-2 rounded-2xl px-5 py-4 text-xl font-bold text-foreground focus:outline-none transition-all";
    if (value.length > 0 && isValid) {
      return `${baseClass} border-emerald-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20`;
    }
    if (isTouched && !isValid) {
      return `${baseClass} border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-500/20`;
    }
    return `${baseClass} border-border focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/20`;
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step !== 3) return; // Only submit on last step
    
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, company, message }),
      });

      if (res.ok) {
        setStatus("sent");
        markContactSuccess();
        trackLeadFormSuccess({
          formName: "contact_form",
          pagePath: "/contact",
          service: searchParams.get("sub") || searchParams.get("service"),
        });

        setTimeout(() => {
          window.location.replace("/contact/thank-you");
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const digits = value.replace(/\D/g, "");
    let formatted = digits;
    if (digits.length > 0) {
      if (digits.length <= 3) {
        formatted = `(${digits}`;
      } else if (digits.length <= 6) {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
      } else {
        formatted = `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      }
    }
    setPhone(formatted);
  };

  // Smart Keyboard Navigation
  const handleNameKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("company-input")?.focus();
    }
  };

  const handleCompanyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTouched(p => ({ ...p, name: true, company: true }));
      if (isStep1Valid) nextStep();
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("phone-input")?.focus();
    }
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setTouched(p => ({ ...p, email: true, phone: true }));
      if (isStep2Valid) nextStep();
    }
  };

  const handleMessageKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setTouched(p => ({ ...p, message: true }));
      if (isFormValid) handleSubmit(e as unknown as React.FormEvent);
    }
  };

  return (
    <div className={`${embedded ? "py-10" : "py-20 md:py-32 bg-background relative selection:bg-brand-primary selection:text-foreground"}`}>
      {!embedded && <div className="absolute inset-0 bg-pattern opacity-30 pointer-events-none"></div>}

      <div className={`container mx-auto ${embedded ? "px-0" : "px-4 md:px-6 relative z-10"}`}>
        {!embedded && (
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight leading-none mb-6">
              Let&apos;s Talk <span className="text-brand-primary">Business</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-muted max-w-2xl mx-auto mb-6">
              Have a project or question? Let&apos;s get started with a few quick details.
            </p>
            <div className="inline-flex items-center gap-2 bg-brand-mint/50 text-foreground border border-border/60 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-sm">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Your information is strictly confidential and 100% secure.
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm font-bold text-muted mb-3 uppercase tracking-widest">
              <span>Step {step} of {totalSteps}</span>
              <span>{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-surface border border-border h-2 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-brand-primary"
                initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </div>
          </div>

          <form
            id="leadform"
            onSubmit={handleSubmit}
            className="bg-surface rounded-4xl md:rounded-[3rem] p-6 md:p-12 border border-border shadow-md md:shadow-lg relative overflow-hidden min-h-[450px] flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 w-full"
                >
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">Welcome! What&apos;s your name?</h2>
                    <p className="text-muted text-lg mb-8">We like to know who we&apos;re talking to.</p>
                    
                    <label className="block mb-6">
                      <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">
                        Full Name
                      </span>
                      <div className="relative">
                        <input
                          id="name-input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onBlur={() => handleBlur('name')}
                          onKeyDown={handleNameKeyDown}
                          className={getInputClass(isNameValid, touched.name, name)}
                          required
                          placeholder="John Doe"
                          autoFocus
                        />
                        {name.length > 0 && isNameValid && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500 pointer-events-none" />}
                        {touched.name && !isNameValid && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-red-500 pointer-events-none" />}
                      </div>
                      {touched.name && !isNameValid && <p className="text-red-500 text-sm mt-2 font-bold">Please enter at least 2 characters.</p>}
                    </label>

                    <label className="block">
                      <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">
                        Company Name
                      </span>
                      <div className="relative">
                        <input
                          id="company-input"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          onBlur={() => handleBlur('company')}
                          onKeyDown={handleCompanyKeyDown}
                          className={getInputClass(isCompanyValid, touched.company, company)}
                          required
                          placeholder="Acme Corp"
                        />
                        {company.length > 0 && isCompanyValid && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500 pointer-events-none" />}
                        {touched.company && !isCompanyValid && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-red-500 pointer-events-none" />}
                      </div>
                      {touched.company && !isCompanyValid && <p className="text-red-500 text-sm mt-2 font-bold">Please enter your company name.</p>}
                    </label>
                  </div>

                  <div className="mt-4 flex items-center justify-end gap-4">
                    <span className="hidden sm:flex items-center text-sm font-bold text-muted uppercase tracking-widest gap-2">
                      Press Enter <kbd className="font-mono bg-background border border-border px-2 py-0.5 rounded-md text-xs shadow-sm">↵</kbd>
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setTouched(p => ({ ...p, name: true, company: true }));
                        nextStep();
                      }}
                      disabled={!isStep1Valid && (touched.name && touched.company)}
                      className="bg-brand-secondary text-foreground hover:bg-brand-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed border border-border shadow-sm hover:-translate-y-1 transition-all duration-300 font-black text-lg px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider"
                    >
                      Next <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 w-full"
                >
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">Nice to meet you, {name.split(' ')[0]}!</h2>
                    <p className="text-muted text-lg mb-8">How can we reach back to you?</p>
                    
                    <label className="block mb-6">
                      <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">
                        Email Address
                      </span>
                      <div className="relative">
                        <input
                          id="email-input"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => handleBlur('email')}
                          onKeyDown={handleEmailKeyDown}
                          className={getInputClass(isEmailValid, touched.email, email)}
                          required
                          placeholder="john@company.com"
                          autoFocus
                        />
                        {email.length > 0 && isEmailValid && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500 pointer-events-none" />}
                        {touched.email && !isEmailValid && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-red-500 pointer-events-none" />}
                      </div>
                      {touched.email && !isEmailValid && <p className="text-red-500 text-sm mt-2 font-bold">Please enter a valid email address.</p>}
                    </label>

                    <label className="block">
                      <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">
                        Phone Number
                      </span>
                      <div className="relative">
                        <input
                          id="phone-input"
                          type="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          onBlur={() => handleBlur('phone')}
                          onKeyDown={handlePhoneKeyDown}
                          className={getInputClass(isPhoneValid, touched.phone, phone)}
                          required
                          placeholder="(555) 123-4567"
                        />
                        {phone.length > 0 && isPhoneValid && <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500 pointer-events-none" />}
                        {touched.phone && !isPhoneValid && <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-red-500 pointer-events-none" />}
                      </div>
                      {touched.phone && !isPhoneValid && <p className="text-red-500 text-sm mt-2 font-bold">Please enter a valid phone number.</p>}
                    </label>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-muted hover:text-foreground font-bold flex items-center gap-2 transition-colors px-4 py-2"
                    >
                      <ArrowLeft className="w-5 h-5" /> Back
                    </button>
                    
                    <div className="flex items-center gap-4">
                      <span className="hidden sm:flex items-center text-sm font-bold text-muted uppercase tracking-widest gap-2">
                        Press Enter <kbd className="font-mono bg-background border border-border px-2 py-0.5 rounded-md text-xs shadow-sm">↵</kbd>
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setTouched(p => ({ ...p, email: true, phone: true }));
                          nextStep();
                        }}
                        disabled={!isStep2Valid && (touched.email && touched.phone)}
                        className="bg-brand-secondary text-foreground hover:bg-brand-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed border border-border shadow-sm hover:-translate-y-1 transition-all duration-300 font-black text-lg px-8 py-4 rounded-full flex items-center gap-2 uppercase tracking-wider"
                      >
                        Next <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 w-full"
                >
                  <div>
                    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-2">Final step.</h2>
                    <p className="text-muted text-lg mb-8">Tell us a bit about your project and goals.</p>
                    
                    <label className="block">
                      <span className="text-sm font-black uppercase tracking-widest text-foreground mb-2 block">
                        Project Details
                      </span>
                      <div className="relative">
                        <textarea
                          id="message-input"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          onBlur={() => handleBlur('message')}
                          onKeyDown={handleMessageKeyDown}
                          className={`${getInputClass(isMessageValid, touched.message, message)} resize-y min-h-64`}
                          required
                          placeholder="Tell us what you're looking to achieve..."
                          autoFocus
                        />
                        {message.length > 0 && isMessageValid && <CheckCircle2 className="absolute right-4 top-8 w-6 h-6 text-emerald-500 pointer-events-none" />}
                        {touched.message && !isMessageValid && <XCircle className="absolute right-4 top-8 w-6 h-6 text-red-500 pointer-events-none" />}
                      </div>
                      {touched.message && !isMessageValid && <p className="text-red-500 text-sm mt-2 font-bold">Please provide a bit more detail (at least 10 characters).</p>}
                    </label>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="text-muted hover:text-foreground font-bold flex items-center gap-2 transition-colors px-4 py-2 self-start sm:self-auto"
                    >
                      <ArrowLeft className="w-5 h-5" /> Back
                    </button>
                    
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <span className="hidden sm:flex items-center text-sm font-bold text-muted uppercase tracking-widest gap-2">
                        <kbd className="font-mono bg-background border border-border px-2 py-0.5 rounded-md text-xs shadow-sm">⌘</kbd> + <kbd className="font-mono bg-background border border-border px-2 py-0.5 rounded-md text-xs shadow-sm">↵</kbd>
                      </span>
                      <button
                        id="contact"
                        type="submit"
                        disabled={isDisabled}
                        onClick={() => setTouched(p => ({ ...p, message: true }))}
                        className={`w-full sm:w-auto ${
                          status === "sent"
                            ? "bg-brand-primary text-foreground"
                            : status === "error"
                              ? "bg-brand-primary text-white"
                              : "bg-brand-secondary text-foreground hover:bg-brand-primary hover:text-white"
                        } border border-border shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-black text-lg px-10 py-4 rounded-full flex items-center justify-center gap-3 uppercase tracking-wider ${isDisabled && status !== "sent" ? "opacity-50 hover:translate-y-0 hover:shadow-md cursor-not-allowed" : ""}`}
                      >
                        {status === "sending" && (
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        )}
                        {status === "sent" && (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                        {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Submit"}
                      </button>
                    </div>
                  </div>
                  
                  {status === "error" && (
                    <p className="text-sm font-bold text-foreground text-center bg-brand-primary/20 border border-brand-primary/50 text-brand-primary p-3 rounded-xl mt-4">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </div>
  );
}
