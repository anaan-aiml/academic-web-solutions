import React from "react";
import { 
  GraduationCap, BookOpen, FileText, FileSignature, 
  Activity, Presentation, BarChart3, Award, ShieldAlert,
  Code, Briefcase, FolderGit, Cpu, TabletSmartphone, 
  FileCode, Globe, Sparkles, Palette, CheckCircle2 
} from "lucide-react";
import { SERVICES } from "../data";
import { Service } from "../types";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = React.useState<"academic" | "webdev">("academic");

  // Get matching icon based on database key string name
  const renderIcon = (iconName: string, className: string = "text-blue-600 dark:text-blue-400") => {
    switch (iconName) {
      case "GraduationCap": return <GraduationCap className={className} size={24} />;
      case "BookOpen": return <BookOpen className={className} size={24} />;
      case "FileText": return <FileText className={className} size={24} />;
      case "FileSignature": return <FileSignature className={className} size={24} />;
      case "Activity": return <Activity className={className} size={24} />;
      case "Presentation": return <Presentation className={className} size={24} />;
      case "BarChart3": return <BarChart3 className={className} size={24} />;
      case "Award": return <Award className={className} size={24} />;
      case "ShieldAlert": return <ShieldAlert className={className} size={24} />;
      case "Code": return <Code className={className} size={24} />;
      case "Briefcase": return <Briefcase className={className} size={24} />;
      case "FolderGit": return <FolderGit className={className} size={24} />;
      case "Cpu": return <Cpu className={className} size={24} />;
      case "TabletSmartphone": return <TabletSmartphone className={className} size={24} />;
      case "FileCode": return <FileCode className={className} size={24} />;
      case "Globe": return <Globe className={className} size={24} />;
      case "Sparkles": return <Sparkles className={className} size={24} />;
      case "Palette": return <Palette className={className} size={24} />;
      default: return <CheckCircle2 className={className} size={24} />;
    }
  };

  const filteredServices = SERVICES.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-12 sm:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/45 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Comprehensive Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Bespoke Services Configured For Success
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
            Whether you need premium assistance parsing difficult college scoring guidelines or wish to layout an interactive high-converting React interface, Academic & Web Solutions delivers premium, robust solutions.
          </p>
        </div>

        {/* Tab switcher buttons - styled like a segmented bento switch Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-150 dark:bg-slate-800 rounded-2xl border border-slate-200/60 dark:border-slate-700">
            <button
              onClick={() => setActiveTab("academic")}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "academic"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <GraduationCap size={16} />
              Academic Mentoring Assistance
            </button>
            <button
              onClick={() => setActiveTab("webdev")}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "webdev"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Code size={16} />
              Web Engineering & UI Development
            </button>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-slate-50 dark:bg-slate-800/20 hover:bg-white dark:hover:bg-slate-800/60 p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 relative flex flex-col justify-between"
            >
              <div>
                {/* Icon box */}
                <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-200/60 dark:border-slate-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:border-blue-600 dark:group-hover:border-blue-500 transition-all shadow-sm">
                  {renderIcon(service.icon, "text-blue-600 dark:text-blue-450 group-hover:text-white transition-colors")}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-5 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-405 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Benefits / Tech features rendered dynamically */}
                {service.category === "academic" ? (
                  <div className="space-y-2 mb-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Deliverables</p>
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-350">{b}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3 mb-6">
                    {/* Render technologies bubbles */}
                    {service.technologies && (
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Stack Used</p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-[9px] font-bold rounded-md text-slate-600 dark:text-slate-400 border border-slate-200/40 dark:border-slate-700">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* Render custom features */}
                    {service.features && (
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Key Features</p>
                        <div className="space-y-1">
                          {service.features.map((f, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card action trigger */}
              <button 
                onClick={() => onSelectService(service.title)}
                className="mt-4 w-full py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-pointer text-center"
              >
                Inquire About {service.title}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
