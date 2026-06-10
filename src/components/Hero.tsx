import { GraduationCap, Code, Phone, Mail, Award, Star, MessageSquare } from "lucide-react";

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenWhatsApp: () => void;
}

export default function Hero({ onOpenConsultation, onOpenWhatsApp }: HeroProps) {
  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-8 sm:py-12 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile-first stack that seamlessly reveals a glorious Bento Grid on Large/lg viewports */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto">
          
          {/* Bento Card 1: Core Value Proposition (Span 8 columns, row-span 3) */}
          <div className="order-1 md:col-span-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center relative overflow-hidden transition-all hover:shadow-md">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full -mr-16 -mt-16 opacity-70 pointer-events-none"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-500/5 rounded-full blur-xl pointer-events-none"></div>

            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-extrabold rounded-full w-fit mb-4 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 animate-ping"></span>
              Academic & Web Solutions • Professional Freelancer
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 dark:text-white font-display mb-4">
              Professional Academic Support & <br />
              <span className="text-blue-600 dark:text-blue-400 drop-shadow-sm">Frontend Web Solutions</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl mb-6 sm:mb-8 leading-relaxed">
              Get premium expert mentoring with computer science projects, assignments, report drafts, and bespoke responsive React.js sites tailored to pass rigorous evaluations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-md shadow-blue-500/10 active:scale-95 cursor-pointer text-sm sm:text-base"
              >
                Get Free Consultation
              </button>
              
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/40 px-4 py-2.5 rounded-2xl border border-slate-200/50 dark:border-slate-800/50">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center font-bold text-slate-700 text-xs font-display">A</div>
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white dark:border-slate-900 flex items-center justify-center font-bold text-blue-700 text-xs font-display">S</div>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-white dark:border-slate-900 flex items-center justify-center font-bold text-emerald-700 text-xs font-display">V</div>
                </div>
                <div className="text-[11px] sm:text-xs">
                  <div className="font-bold text-slate-800 dark:text-slate-250">120+ Students Guided</div>
                  <div className="text-slate-405 dark:text-slate-500">Passed with Top Grades</div>
                </div>
              </div>
            </div>

            {/* Quick trust metrics line */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
              <div className="flex items-center gap-1">✓ Plagiarism-Free Work</div>
              <div className="flex items-center gap-1">✓ Express Fast Delivery</div>
              <div className="flex items-center gap-1">✓ Fully Responsive Code</div>
              <div className="flex items-center gap-1">✓ Unlimited Revisions</div>
            </div>
          </div>

          {/* Bento Card 2: Contact channels (Span 4 columns, row-span 1) */}
          <div className="order-2 md:col-span-4 bg-slate-900 dark:bg-slate-920 border border-slate-800 text-white rounded-3xl p-6 flex flex-col justify-between transition-all hover:border-slate-700">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold font-display">Let's Connect</h3>
                <span className="px-2 py-0.5 bg-green-500/20 text-green-400 font-extrabold text-[9px] uppercase rounded-full tracking-wider animate-pulse">
                  ● Direct Active
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Need urgent assignment support or wish to discuss software thesis projects with Academic & Web Solutions? Connect instantly!
              </p>
            </div>

            <div className="space-y-2 mt-4">
              <a
                href="tel:+919246710026"
                className="flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-750 rounded-xl border border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-display text-sm">📞</span>
                  <div className="text-left">
                    <p className="text-[9px] text-slate-400 uppercase font-bold">Call Owner</p>
                    <p className="text-xs font-mono font-bold">+91 9246710026</p>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 text-sm">→</span>
              </a>

              <a
                href="mailto:academicwebsolutions@gmail.com"
                className="flex items-center justify-between p-3 bg-slate-800 hover:bg-slate-750 rounded-xl border border-slate-700 transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-display text-sm">✉️</span>
                  <div className="text-left font-sans">
                    <p className="text-[9px] text-slate-400 uppercase font-bold">Mail Inquiry</p>
                    <p className="text-xs truncate max-w-[140px] xxs:max-w-none">academicwebsolutions@gmail.com</p>
                  </div>
                </div>
                <span className="text-slate-400 group-hover:text-white transition-transform group-hover:translate-x-1 text-sm">→</span>
              </a>
            </div>
          </div>

          {/* Bento Card 4: Detailed visual services list: Academic support highlights (Span 4 columns) */}
          <div className="order-4 md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 transition-all hover:shadow-md">
            <h3 className="font-bold text-base text-slate-900 dark:text-white font-display mb-3 flex items-center gap-2">
              <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
              Academic Support
            </h3>
            
            <div className="space-y-2 text-xs">
              {[
                { name: "Assignment Support", tag: "Fast Delivery" },
                { name: "Project Documentation", tag: "Full SRS / UML" },
                { name: "Laboratory Logs / PowerPoints", tag: "Rubric Aligned" },
                { name: "Final-Year Guidance", tag: "Viva Prep" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 rounded-xl">
                  <span className="text-slate-800 dark:text-slate-300 font-semibold">{item.name}</span>
                  <span className="text-[9px] px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-md font-bold uppercase">{item.tag}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => handleScrollToId("services")}
              className="mt-4 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 w-fit cursor-pointer"
            >
              View all 9 academic support services →
            </button>
          </div>

          {/* Bento Card 5: Modern frontend stack representation (Span 4 columns) */}
          <div className="order-5 md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 transition-all hover:shadow-md flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white font-display mb-3 flex items-center gap-2">
                <Code size={18} className="text-blue-600 dark:text-blue-400" />
                Frontend Web Solutions
              </h3>
              
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold uppercase">
                <div className="bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 p-2 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-all">
                  <div className="text-base mb-1">⚛️</div>
                  React
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl border border-indigo-500/10 hover:border-indigo-500/20 transition-all">
                  <div className="text-base mb-1">🍃</div>
                  Tailwind
                </div>
                <div className="bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 p-2 rounded-xl border border-purple-500/10 hover:border-purple-500/20 transition-all">
                  <div className="text-base mb-1">⚡</div>
                  Vite
                </div>
              </div>

              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-4 leading-normal">
                Bespoke high-performance portfolios, student research mockups, and modern company dashboards built with semantic, accessible code structures.
              </p>
            </div>

            <button
              onClick={() => handleScrollToId("services")}
              className="mt-4 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 w-fit cursor-pointer"
            >
              Browse portfolio builders →
            </button>
          </div>

          {/* Bento Card 6: Dynamic stats banner cards (Two halves in md span 4 columns) */}
          <div className="order-6 md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 h-full">
            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 flex items-center gap-3.5 transition-all hover:shadow-md">
              <div className="w-11 h-11 bg-amber-100 dark:bg-amber-950/30 rounded-2xl flex items-center justify-center text-amber-505 font-display text-lg shadow-sm">🏆</div>
              <div>
                <div className="text-xl font-black text-slate-900 dark:text-white leading-none font-display">100+</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mt-1">Client projects completed</div>
              </div>
            </div>

            <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 flex items-center gap-3.5 transition-all hover:shadow-md">
              <div className="w-11 h-11 bg-emerald-100 dark:bg-emerald-950/30 rounded-2xl flex items-center justify-center text-emerald-600 font-display text-lg shadow-sm">⭐</div>
              <div>
                <div className="text-xl font-black text-slate-900 dark:text-white leading-none font-display">5.0</div>
                <div className="text-[9px] text-slate-400 uppercase font-bold tracking-wider mt-1">Direct client ratings score</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
