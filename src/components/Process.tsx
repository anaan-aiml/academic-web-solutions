import { FileText, Send, Code, BadgeCheck } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Submit Requirements",
      desc: "Paste your homework criteria sheets, code checklists, or design descriptions directly using our online Contact form or WhatsApp Academic & Web Solutions.",
      icon: <Send className="text-white" size={18} />,
      bg: "bg-blue-600 dark:bg-blue-500"
    },
    {
      step: "02",
      title: "Receive Quotation",
      desc: "Academic & Web Solutions reviews your instruction files and responds with a flat budget proposal, estimated hours breakdown, and delivery milestones timeline in under an hour.",
      icon: <FileText className="text-white" size={18} />,
      bg: "bg-purple-600 dark:bg-purple-500"
    },
    {
      step: "03",
      title: "Project Development",
      desc: "Development phase begins! Academic & Web Solutions personally builds, codes, and refines your project. Regular progress updates and milestones are shared directly with you via WhatsApp or Email.",
      icon: <Code className="text-white" size={18} />,
      bg: "bg-amber-600 dark:bg-amber-500"
    },
    {
      step: "04",
      title: "Delivery & Support",
      desc: "Receive your completed project drafts, academic reports, presentations, or web code archives directly via WhatsApp or Email. Everything includes formatting support and interactive walkthroughs.",
      icon: <BadgeCheck className="text-white" size={18} />,
      bg: "bg-emerald-600 dark:bg-emerald-500"
    }
  ];

  return (
    <section id="process" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200 border-y border-slate-200/40 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Slick Development Loop
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            How Simple Project Milestone Cycles Execute
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-sans">
            We follow a streamlined, client-friendly 4-step workflow to guarantee fast, premium delivery and perfect scores.
          </p>
        </div>

        {/* Timeline block */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central connecting line for desktop grids */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200/80 dark:bg-slate-800 -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-16">
            {steps.map((item, idx) => (
              <div 
                key={item.step}
                className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 relative ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Step number card */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:text-right">
                  <div className={`p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md transition-all max-w-md ${
                    idx % 2 === 1 ? "lg:text-left lg:justify-start" : ""
                  }`}>
                    <div className="flex items-center gap-3 mb-3 justify-start">
                      <span className="text-blue-600 dark:text-blue-400 font-black font-display text-lg tracking-widest">
                        {item.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white font-display">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Central Circle Pin Node */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full border-4 border-slate-100 dark:border-slate-950 flex items-center justify-center bg-white dark:bg-slate-900 shadow-sm hidden lg:flex">
                  <div className="w-2.5 h-2.5 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
                </div>

                {/* Empty buffer box to center the desktop items cleanly */}
                <div className="w-full lg:w-1/2 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
