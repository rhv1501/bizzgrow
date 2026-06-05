import Services from "../components/Services";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="bg-background pt-32 min-h-screen">
      <div className="container mx-auto px-6 mb-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 transform rotate-2">
            <Sparkles className="w-5 h-5 text-brand-primary" />
            <span className="font-bold text-gray-900 uppercase tracking-widest text-sm">Everything We Do</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tight leading-[1] mb-8">
            Services Designed To <br/>
            <span className="bg-brand-primary text-white px-6 py-2 inline-block border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-4 -rotate-1">Destroy Competitors</span>
          </h1>
          <p className="text-2xl text-gray-600 font-bold max-w-3xl mx-auto">
            We don't do "cookie-cutter". We build comprehensive, attention-grabbing digital experiences that make your business impossible to ignore.
          </p>
        </div>
      </div>
      
      {/* We reuse the Services component we already designed */}
      <Services />
    </main>
  );
}
