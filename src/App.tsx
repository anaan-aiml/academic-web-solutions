import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import Process from "./components/Process";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import { Sparkles, Phone, MessageSquare, Clock, Heart, Download, HelpCircle, X, Check } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [prefilledService, setPrefilledService] = React.useState("");
  
  // Custom overlays / Quick Popups
  const [showExitIntent, setShowExitIntent] = React.useState(false);
  const [showConsultationOverlay, setShowConsultationOverlay] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState("");

  // Handle standard hook for theme setting
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Handle simulated exit-intent mouse detection out of viewport
  React.useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30) {
        // Trigger popup exit intent if not already clicked during session
        const hasSeen = sessionStorage.getItem("exit_seen");
        if (!hasSeen) {
          setShowExitIntent(true);
          sessionStorage.setItem("exit_seen", "true");
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleInquireService = (title: string) => {
    setPrefilledService(title);
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Fire dynamic notification toast
    setShowNotification(`Preloaded "${title}" into inquiry calculator.`);
    setTimeout(() => setShowNotification(""), 4000);
  };

  const handleAssignedCodeCallback = (code: string) => {
    setShowNotification("Inquiry saved! Academic & Web Solutions will contact you shortly.");
    setTimeout(() => setShowNotification(""), 8000);
  };

  // Structured Data Schema injection directly into document
  React.useEffect(() => {
    const ldJson = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Academic & Web Solutions",
      "image": "https://wa.me/919246710026",
      "@id": "",
      "url": "https://wa.me/919246710026",
      "telephone": "+919246710026",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hyderabad Regional Hub",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.3850,
        "longitude": 78.4867
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://wa.me/919246710026"
      ]
    };

    const scriptId = "structured-data-jsonld";
    let existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      existingScript = document.createElement("script");
      existingScript.setAttribute("type", "application/ld+json");
      existingScript.setAttribute("id", scriptId);
      existingScript.innerHTML = JSON.stringify(ldJson);
      document.head.appendChild(existingScript);
    }
  }, []);

  return (
    <div className={`min-h-screen text-slate-800 dark:text-slate-100 transition-colors duration-200 ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}>
      
      {/* Dynamic Toast Prompt Notification */}
      {showNotification && (
        <div className="fixed top-20 right-6 z-50 p-4 bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-700/30 rounded-2xl shadow-xl flex items-center gap-3 animate-fade-in max-w-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <p className="text-xs font-bold leading-tight flex-1">{showNotification}</p>
        </div>
      )}

      {/* Navigation Header */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenConsultation={() => setShowConsultationOverlay(true)}
      />

      {/* Hero Bento Banner Section */}
      <Hero 
        onOpenConsultation={() => setShowConsultationOverlay(true)}
        onOpenWhatsApp={() => window.open("https://wa.me/919246710026", "_blank")}
      />

      {/* Why Choose Me section */}
      <WhyChooseMe />

      {/* Services component panel */}
      <Services onSelectService={handleInquireService} />

      {/* Timeline process flow block */}
      <Process />

      {/* Verified client review cards */}
      <Testimonials />

      {/* FAQ interactive accordion block */}
      <FAQs />

      {/* SEO blog panels */}
      <Blog />

      {/* Call to leads capture submission form */}
      <Contact 
        prefilledService={prefilledService} 
        onSuccess={handleAssignedCodeCallback}
      />

      {/* Primary Footer rows */}
      <footer className="border-t bg-white dark:bg-slate-900 border-slate-250/60 dark:border-slate-800 py-10 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Logo and pitch columns */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-display text-white font-bold text-sm">
                  A
                </div>
                <span className="font-extrabold text-slate-900 dark:text-white font-display text-sm tracking-tight">
                  Academic & Web Solutions
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Get premium expert college tutoring support with operating reports, slide defense files, and complete custom React.js frontend sites.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="pulse-dot"></span> Active Hyderabad Support Hub
              </div>
            </div>

            {/* Quick routes columns */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">Sitemap Menu</h4>
              <ul className="space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <li><a href="#services" className="hover:text-blue-600">Offered Services</a></li>
                <li><a href="#process" className="hover:text-blue-600">Project Process</a></li>
                <li><a href="#faq" className="hover:text-blue-600">Academic FAQs</a></li>
              </ul>
            </div>

            {/* Support parameters details columns */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400 mb-3">Owner Communications</h4>
              <ul className="space-y-2 text-xs text-slate-500 dark:text-slate-400">
                <li>Owner: <strong>Academic & Web Solutions</strong></li>
                <li>Phone: <a href="tel:+919246710026" className="hover:underline font-mono font-bold text-slate-900 dark:text-white">+91 9246710026</a></li>
                <li className="truncate">Email: <a href="mailto:academicwebsolutions@gmail.com" className="hover:underline font-bold text-blue-600 dark:text-blue-450">academicwebsolutions@gmail.com</a></li>
              </ul>
            </div>
            
          </div>

          <div className="pt-8 mt-8 border-t border-slate-150 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
            <p>© 2026 Specialized Academic & Tech Solutions.</p>
            <div className="flex gap-4">
              <span className="hover:underline cursor-pointer">Scribner Schema</span>
              <span>•</span>
              <span className="hover:underline cursor-pointer">Privacy System</span>
              <span>•</span>
              <span className="text-blue-600 italic">Vercel & Cloud Run Certified</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Quick WhatsApp Floating Call Actions */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-2">
        {/* Call Trigger */}
        <a 
          href="tel:+919246710026"
          className="bg-slate-900 text-white dark:bg-white dark:text-slate-950 p-3 rounded-full shadow-lg hover:scale-105 transition-all outline-none border border-slate-800/20"
          aria-label="Direct owner voice hotline call"
        >
          <Phone size={18} />
        </a>
        
        {/* WhatsApp Trigger */}
        <a 
          href="https://wa.me/919246710026" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:scale-105 transition-all outline-none"
          aria-label="Direct WhatsApp channel router link"
        >
          <MessageSquare size={18} />
        </a>
      </div>

      {/* Exit Intent Dialog Box Overlay Modal */}
      {showExitIntent && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl max-w-md w-full shadow-2xl relative animate-fade-in text-center">
            
            {/* Close */}
            <button
              onClick={() => setShowExitIntent(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 cursor-pointer"
              aria-label="Clear exit intent overlay"
            >
              <X size={15} />
            </button>

            <span className="text-3xl mb-1 block">💡</span>
            <span className="px-2 py-0.5 bg-amber-100 text-amber-700 dark:bg-amber-950/30 dark:text-amber-450 rounded-full font-bold text-[9px] uppercase tracking-widest inline-block mb-3">
              Complimentary Blueprint Offer
            </span>
            
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display mb-2">
              Before You Navigate Away...
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed mb-6 font-sans">
              Get an absolute free structural project proposal roadmap outline detailing your college assignments or web dev guidelines! compiles this free of cost.
            </p>

            <div className="space-y-2">
              <a
                href="https://wa.me/919246710026"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowExitIntent(false)}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black rounded-xl block transition-all"
              >
                Claim Free Milestone Outline via WhatsApp
              </a>

              <button
                onClick={() => {
                  setShowExitIntent(false);
                  setShowConsultationOverlay(true);
                }}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black rounded-xl transition-all cursor-pointer"
              >
                Request Consultation Form
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Free Consultation overlay modal */}
      {showConsultationOverlay && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 p-6 sm:p-8 rounded-3xl max-w-sm w-full shadow-2xl relative animate-fade-in text-center">
            
            {/* Close */}
            <button
              onClick={() => setShowConsultationOverlay(false)}
              className="absolute top-4 right-4 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 cursor-pointer"
              aria-label="Clear interactive overlay"
            >
              <X size={15} />
            </button>

            <span className="text-3xl mb-1 block">📱</span>
            
            <h3 className="text-lg font-black text-slate-900 dark:text-white font-display mb-1">
              Complimentary Consultation Router
            </h3>
            
            <p className="text-xs text-slate-500 mb-6 font-sans">
              Choose your favorite communication format to schedule a direct milestone briefing:
            </p>

            <div className="space-y-2 text-xs font-bold font-display">
              <a
                href="https://wa.me/919246710026"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowConsultationOverlay(false)}
                className="w-full py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="text-sm">💬</span> Text Academic & Web Solutions on WhatsApp
              </a>

              <a
                href="tel:+919246710026"
                onClick={() => setShowConsultationOverlay(false)}
                className="w-full py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-950 rounded-xl hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="text-sm">📞</span> Voice Call +91 9246710026
              </a>

              <button
                onClick={() => {
                  setShowConsultationOverlay(false);
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="text-sm">📄</span> Open Project Inquiry Form
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
