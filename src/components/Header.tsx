import React from "react";
import { Sun, Moon, Phone, MessageSquare, Menu, X } from "lucide-react";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  onOpenConsultation: () => void;
}

export default function Header({ darkMode, setDarkMode, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md transition-colors duration-200 border-b bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <div className="w-9 h-9 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20">
            <span className="text-white font-bold text-lg font-display">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white font-display">
              Academic & Web Solutions
            </span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase -mt-1">
              Premium Freelance Portal
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</button>
          <button onClick={() => scrollToSection("process")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Process</button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">FAQ</button>
          <button onClick={() => scrollToSection("blog")} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</button>
        </nav>

        {/* Header Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Dark Mode Switcher */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer"
            aria-label="Toggle theme mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Quick WhatsApp */}
          <a
            href="https://wa.me/919246710026"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 rounded-xl hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 transition-all flex items-center gap-1.5"
          >
            WhatsApp
          </a>

          {/* Contact CTA */}
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl transition-all shadow-md shadow-blue-500/10 active:scale-95 cursor-pointer"
          >
            Contact Now
          </button>
        </div>

        {/* Mobile controls row items */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Open */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/60"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden p-4 border-t bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 space-y-3 animate-fade-in">
          <div className="grid grid-cols-2 gap-2 text-sm text-center">
            <button
              onClick={() => scrollToSection("services")}
              className="py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("blog")}
              className="py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              Blog
            </button>
          </div>

          <div className="flex gap-2">
            <a
              href="https://wa.me/919246710026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 text-center rounded-xl bg-emerald-600 text-white font-bold text-xs"
            >
              WhatsApp Me
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="flex-1 py-3 text-center rounded-xl bg-blue-600 text-white font-bold text-xs"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
