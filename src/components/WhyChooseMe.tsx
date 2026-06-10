import { 
  DollarSign, Zap, Trophy, MessageSquare, 
  Users, HelpCircle, RefreshCcw, Layout 
} from "lucide-react";

export default function WhyChooseMe() {
  const highlights = [
    {
      title: "Affordable Pricing",
      desc: "Student-budget tailored packages and flexible milestones option.",
      icon: <DollarSign className="text-amber-600 dark:text-amber-450" size={24} />,
      bg: "bg-amber-100 dark:bg-amber-950/30"
    },
    {
      title: "Fast Delivery",
      desc: "Speed-oriented execution to beat difficult canvas deadlines.",
      icon: <Zap className="text-blue-600 dark:text-blue-450" size={24} />,
      bg: "bg-blue-100 dark:bg-blue-950/30"
    },
    {
      title: "High Quality Work",
      desc: "Robust code structures, neat comments, and precise reference formats.",
      icon: <Trophy className="text-emerald-600 dark:text-emerald-450" size={24} />,
      bg: "bg-emerald-100 dark:bg-emerald-950/30"
    },
    {
      title: "Direct Communication",
      desc: "Skip middlemen! Text and track changes on WhatsApp directly with Academic & Web Solutions.",
      icon: <MessageSquare className="text-purple-600 dark:text-purple-450" size={24} />,
      bg: "bg-purple-100 dark:bg-purple-950/30"
    },
    {
      title: "Student-Friendly",
      desc: "Walkthrough explainers provided so you speak confidently to committees.",
      icon: <Users className="text-pink-600 dark:text-pink-450" size={24} />,
      bg: "bg-pink-100 dark:bg-pink-950/30"
    },
    {
      title: "Unlimited Consultation",
      desc: "Get free initial brainstorming and roadmap definitions on your project briefs.",
      icon: <HelpCircle className="text-indigo-600 dark:text-indigo-455" size={24} />,
      bg: "bg-indigo-100 dark:bg-indigo-950/30"
    },
    {
      title: "Revisions Included",
      desc: "Dedicated support aligning files to instructions within 14 days.",
      icon: <RefreshCcw className="text-red-600 dark:text-red-450" size={24} />,
      bg: "bg-red-100 dark:bg-red-950/30"
    },
    {
      title: "Modern Responsive Designs",
      desc: "Ultra sleek styling utilizing Tailwind v4 parameters and custom motion.",
      icon: <Layout className="text-orange-600 dark:text-orange-450" size={24} />,
      bg: "bg-orange-100 dark:bg-orange-950/30"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200 border-y border-slate-200/50 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Head Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Designed for Trust & Velocity
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Why Students & Small Businesses Prefer Us
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Academic & Web Solutions brings comprehensive fullstack developer skillsets mixed with rigorous academic standards to ensure perfect peace of mind.
          </p>
        </div>

        {/* Bento features grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-6 rounded-3xl transition-all duration-200 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Visual Icon Header wrapper */}
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white font-display mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
