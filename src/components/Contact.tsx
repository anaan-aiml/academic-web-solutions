import React from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

interface ContactProps {
  prefilledService: string;
  onSuccess: (assignedCode: string) => void;
}

export default function Contact({ prefilledService, onSuccess }: ContactProps) {
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [serviceRequired, setServiceRequired] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [deadline, setDeadline] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [loading, setLoading] = React.useState(false);
  const [formSuccess, setFormSuccess] = React.useState(false);
  const [spawnedCode, setSpawnedCode] = React.useState("");
  const [whatsappMsgUrl, setWhatsappMsgUrl] = React.useState("");

  // Keep prefilled service in sync if user selects something
  React.useEffect(() => {
    if (prefilledService) {
      setServiceRequired(prefilledService);
    }
  }, [prefilledService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !serviceRequired || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    let trackerId = `ANA-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          serviceType: serviceRequired,
          budget,
          deadline,
          description
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.trackerId) {
          trackerId = data.trackerId;
        }
      } else {
        console.warn("Backend server failed to register inquiry. Falling back to local tracking ID.");
      }
    } catch (err) {
      console.warn("Network error registering inquiry on server. Falling back to local tracking ID:", err);
    }

    // Formulate WhatsApp message before clearing inputs
    const wsText = `Hi Academic & Web Solutions, I just submitted a Project Inquiry on your portal!\n\n` +
      `*Project Brief details:*\n` +
      `• *Name:* ${fullName}\n` +
      `• *Email:* ${email}\n` +
      `• *Phone:* ${phone || "N/A"}\n` +
      `• *Service Required:* ${serviceRequired}\n` +
      `• *Urgency Level:* ${budget || "Standard"}\n` +
      `• *Deadline Plan:* ${deadline || "N/A"}\n\n` +
      `*Project Description & Requirements:*\n${description}`;

    const encodedText = encodeURIComponent(wsText);
    const whatsappUrl = `https://wa.me/919246710026?text=${encodedText}`;
    setWhatsappMsgUrl(whatsappUrl);

    setFormSuccess(true);
    setSpawnedCode(trackerId);
    onSuccess(trackerId);

    // Reset form variables
    setFullName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setDeadline("");
    setDescription("");

    // Attempt redirect immediately
    try {
      const newTab = window.open(whatsappUrl, "_blank");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        // Redirect current tab as automatic fallback to bypass popup blockers
        window.location.href = whatsappUrl;
      }
    } catch (e) {
      window.location.href = whatsappUrl;
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-200 border-t border-slate-200/50 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 bg-blue-105 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full uppercase tracking-widest mb-3 inline-block">
            Lead Capture Portal
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-display mb-4">
            Request A Free Project Proposal
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-sans">
            Submit your instruction sheets, project rubrics, or coding outlines below. Academic & Web Solutions will compile a structured proposal outline.
          </p>
        </div>

        {/* Form and Contact row representation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          
          {/* LEFT PANEL: Professional leads capture contact form - Span 7 */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            {formSuccess ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Inquiry Registered Successfully!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Hi from Academic & Web Solutions! We have received your project criteria. Academic & Web Solutions will review your requirements and reach out to you via WhatsApp or Email shortly.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row justify-center gap-2">
                  <a
                    href={whatsappMsgUrl || "https://wa.me/919246710026"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
                  >
                    Message Academic & Web Solutions on WhatsApp
                  </a>
                  <button
                    onClick={() => setFormSuccess(false)}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full name input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Vikram Reddy"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Email address input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      placeholder="e.g. vikram@college.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone number input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  {/* Service selection checklist dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Service Required *</label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      required
                    >
                      <option value="">-- Choose Option --</option>
                      <option value="Assessment Assistance">Assessment Assistance</option>
                      <option value="Assignment Support">Assignment Support</option>
                      <option value="Project Documentation">Project Documentation</option>
                      <option value="Research Reports">Research Reports</option>
                      <option value="Lab Reports">Lab Reports</option>
                      <option value="PowerPoint Presentations">PowerPoint Presentations</option>
                      <option value="Case Studies">Case Studies</option>
                      <option value="Final-Year Project Guidance">Final-Year Project Guidance</option>
                      <option value="Project Review Support">Project Review Support</option>
                      <option value="Frontend Website Development">Frontend Website Development</option>
                      <option value="Portfolio Websites">Portfolio Websites</option>
                      <option value="Student Project Websites">Student Project Websites</option>
                      <option value="React.js Applications">React.js Applications</option>
                      <option value="Responsive Web Design">Responsive Web Design</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Urgency Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Urgency Level</label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="">-- Choose Urgency Level --</option>
                      <option value="Standard">Standard (Flexible timeline)</option>
                      <option value="Urgent">Urgent (Needed within a few days)</option>
                      <option value="Extremely Urgent">Extremely Urgent (Next 24-48 hours)</option>
                    </select>
                  </div>

                  {/* Deadline date picker */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Deadline Plan date</label>
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Description Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Project Description & Requirements *</label>
                  <textarea
                    placeholder="Enter your university scoring guidelines, formatting requests (IEEE, APA), specific actors, coding pages needed..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none h-28"
                    required
                  />
                </div>

                {/* Anti Spam check notice */}
                <p className="text-[10px] text-slate-400">
                  🔒 By submitting, you authorize Academic & Web Solutions Academic & Web Solutions to process your project request. Secure connections established.
                </p>

                {/* Submit action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md shadow-blue-500/10 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span>Registering Brief in Database...</span>
                  ) : (
                    <>
                      <Send size={15} />
                      Submit Blueprint Brief & Request Quote
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT PANEL: Owner particulars and maps - Span 5 */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 xl:flex xl:flex-col xl:space-y-6">
            
            {/* Particulars Card */}
            <div className="bg-slate-900 border border-slate-800 text-white p-6 sm:p-8 rounded-3xl">
              <span className="text-[9px] uppercase font-black text-amber-400 tracking-wider">Freelancer profile</span>
              <h3 className="text-xl font-black font-display text-white mt-1 mb-1">Academic & Web Solutions</h3>
              <p className="text-xs text-slate-400 mb-6">Founder • Specialist Academic Tutor & React Developer</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Call Directly</p>
                    <a href="tel:+919246710026" className="text-xs font-mono font-bold hover:underline">+91 9246710026</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-purple-450">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Email Inbox</p>
                    <a href="mailto:academicwebsolutions@gmail.com" className="text-xs hover:underline truncate">academicwebsolutions@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Location Origin</p>
                    <p className="text-xs font-semibold">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>

              {/* Action buttons list */}
              <div className="mt-8 grid grid-cols-2 gap-2 text-xs font-bold font-display">
                <a 
                  href="tel:+919246710026"
                  className="py-3 text-center bg-white text-slate-900 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-1"
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919246710026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-center bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={14} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps placeholder visual */}
            <div className="bg-white dark:bg-slate-900 border border-slate-205 dark:border-slate-800 p-5 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-extrabold text-xs uppercase tracking-widest text-slate-400">Service Coverage Coverage</h3>
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              </div>
              
              {/* Fake aesthetic grid showing Hyderabad map coords */}
              <div className="bg-slate-100 dark:bg-slate-950/80 h-36 rounded-2xl relative overflow-hidden flex items-center justify-center border border-slate-100 dark:border-slate-840">
                <div className="absolute inset-0 opacity-15 dark:opacity-5 bg-[radial-gradient(#2563EB_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                {/* Visual marker */}
                <div className="absolute left-[45%] top-[40%] text-center z-10 animate-bounce">
                  <span className="text-2xl drop-shadow-md">📍</span>
                </div>
                
                <div className="text-center p-4 z-10">
                  <p className="font-extrabold text-slate-900 dark:text-white text-xs font-display">Hyderabad Regional Node</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Assisting global college campuses via digital remote systems.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
