import { Service, Project, Testimonial, BlogPost, FAQ } from "./types";

export const SERVICES: Service[] = [
  // Academic Services
  {
    id: "acad-ass",
    category: "academic",
    title: "Assessment Assistance",
    description: "Personalized guidance to structure, research, and format complex college assessments according to university grading rubrics.",
    benefits: [
      "Rigorous alignment with university syllabus",
      "Comprehensive research-led argumentation",
      "Strict formatting (APA, Harvard, IEEE, MLA)",
      "Detailed references and bibliography generation"
    ],
    icon: "GraduationCap"
  },
  {
    id: "acad-asg",
    category: "academic",
    title: "Assignment Support",
    description: "Step-by-step assistance in resolving structured assignments, helping students master complex syllabus content.",
    benefits: [
      "Plagiarism-free original explanations",
      "Step-by-step mathematical or logical workouts",
      "Conceptual clarity and learning notes",
      "Guaranteed on-time delivery before submission portals open"
    ],
    icon: "BookOpen"
  },
  {
    id: "acad-doc",
    category: "academic",
    title: "Project Documentation",
    description: "Full lifecycle software engineering documentation, including UML diagrams, SRS specifications, ERDs, and testing logs.",
    benefits: [
      "Comprehensive IEEE-standard documentation",
      "Software Requirement Specifications (SRS)",
      "Database schema architectures & entity diagrams",
      "Detailed QA testing matrices & crash reports"
    ],
    icon: "FileText"
  },
  {
    id: "acad-rep",
    category: "academic",
    title: "Research Reports",
    description: "High-caliber scholarly papers investigating complex themes with thorough data compilation and source citations.",
    benefits: [
      "In-depth qualitative and quantitative research",
      "Proper evidence curation & analytical reviews",
      "High academic vocabulary and formatting",
      "Clear chapter structures with logical flows"
    ],
    icon: "FileSignature"
  },
  {
    id: "acad-lab",
    category: "academic",
    title: "Lab Reports",
    description: "Rigorous scientific lab summaries detailing experimental objectives, methodologies, collected metrics, and graphs.",
    benefits: [
      "Precise recording of experiment parameters",
      "Structured data tables and calculations",
      "Advanced plotting and logical deduction",
      "Thorough review of errors and limitations"
    ],
    icon: "Activity"
  },
  {
    id: "acad-ppt",
    category: "academic",
    title: "PowerPoint Presentations",
    description: "Visually stunning presentation decks crafted in modern typography to help you defense your projects and earn high grades.",
    benefits: [
      "High-impact slide layouts with premium UI/UX styles",
      "Concise content writing and bulleted speaker notes",
      "Academic tone optimization & structure review",
      "Custom charts, icons, and diagrams included"
    ],
    icon: "Presentation"
  },
  {
    id: "acad-case",
    category: "academic",
    title: "Case Studies",
    description: "Real-world business and technological analyses with extensive market research, SWOT analysis, and core resolutions.",
    benefits: [
      "Real industry dataset and situational deep-dives",
      "Strategic frameworks (SWOT, PESTLE, Porter's Five)",
      "Actionable recommendations with feasibility reviews",
      "Clear, executive-summary-first report layout"
    ],
    icon: "BarChart3"
  },
  {
    id: "acad-final",
    category: "academic",
    title: "Final-Year Project Guidance",
    description: "Expert mentorship throughout the entire engineering project pipeline, from synopses approvals to final code defenses.",
    benefits: [
      "Innovative project ideas and proposal blueprints",
      "End-to-end milestone planning and updates",
      "Code walkthroughs and preparation for viva exams",
      "Backup assets and presentation trial runs"
    ],
    icon: "Award"
  },
  {
    id: "acad-rev",
    category: "academic",
    title: "Project Review Support",
    description: "Pre-submission diagnostic audits scoring your files against grading guides, correcting flaws before your professor sees them.",
    benefits: [
      "Comprehensive syntax and formatting checks",
      "Detailed diagnostic reports highlighting weak zones",
      "Rubric-grade evaluation by professional eyes",
      "Express overnight review service available"
    ],
    icon: "ShieldAlert"
  },

  // WebDev Services
  {
    id: "web-front",
    category: "webdev",
    title: "Frontend Website Development",
    description: "Engineering top-tier semantic, high-performance, and visually gorgeous React.js, Tailwind, and HTML5 responsive web interfaces.",
    benefits: [
      "Highly responsive layouts conforming to all viewports",
      "Pixel-perfect translation of wireframes & design ideas",
      "Lightning-fast bundle optimization and performance scores",
      "Semantic HTML5 structures for standard-compliant rendering"
    ],
    technologies: ["React.js", "Tailwind CSS", "HTML5", "TypeScript", "Vite", "Motion"],
    features: ["Responsive", "Interactive Transitions", "Semantic SEO Structure", "Fluid Grids"],
    icon: "Code"
  },
  {
    id: "web-port",
    category: "webdev",
    title: "Portfolio Websites",
    description: "Bespoke personal branding websites highlighting your research, resume, designs, and skills for recruitment and freelancing.",
    benefits: [
      "Stunning UI designs reflecting your professional vibe",
      "Contact forms directly hooked to email and WhatsApp",
      "SEO customized keyword injections for search appearances",
      "Integrated resume downloaders & interactive bio sliders"
    ],
    technologies: ["React", "Tailwind CSS", "Lucide Icons", "Motion"],
    features: ["Interactive Bio", "Instant PDF Download", "WhatsApp Quick Call", "Custom Gallery"],
    icon: "Briefcase"
  },
  {
    id: "web-student",
    category: "webdev",
    title: "Student Project Websites",
    description: "Tailored frontend projects designed to satisfy final-year requirements, complete with clean source code and documentation guidance.",
    benefits: [
      "Very neat and highly commented codebase structure",
      "Prepares you for oral project defenses (viva panels)",
      "Zero-fluff modern tech stack (React, Lucide, Tailwind)",
      "Deployment guides for Netlify, Vercel, or GitHub Pages"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Vite"],
    features: ["Interactive Features", "Clean Comments", "Presentation Readme", "Easy Execution"],
    icon: "FolderGit"
  },
  {
    id: "web-react",
    category: "webdev",
    title: "React.js Applications",
    description: "Rich, stateful frontend applications utilizing modern React 19 architecture, local states, context APIs, and dynamic data integration.",
    benefits: [
      "Rigorous component modularity & DRY structures",
      "State management using hooks (useState, useEffect, useMemo)",
      "Interactive grids, filtering, search, and dynamic forms",
      "Robust integration with Node.js and Express APIs"
    ],
    technologies: ["React 19", "TypeScript", "Tailwind v4", "Context API"],
    features: ["Global State Panels", "Instant Searching", "Interactive Models", "Form Management"],
    icon: "Cpu"
  },
  {
    id: "web-design",
    category: "webdev",
    title: "Responsive Web Design",
    description: "Upgrading legacy clunky systems with mobile-first grid systems, gorgeous flex boxes, and scalable adaptive elements.",
    benefits: [
      "Rigorous testing across iPhone, Android, and Desktop sizes",
      "Fluid typography and layout scales built on Tailwind rem units",
      "Touch-target optimization preventing click misfires",
      "Accessibility audit compliant (WCAG contrast thresholds)"
    ],
    technologies: ["Tailwind CSS", "Tailwind v4 theme variables", "CSS Grid"],
    features: ["Mobile First", "Fluid Spacing", "Interactive Drags", "High Accessibility"],
    icon: "TabletSmartphone"
  },
  {
    id: "web-hobbies",
    category: "webdev",
    title: "HTML/CSS/JavaScript Projects",
    description: "Lightweight, pure vanilla codebase development with strict execution, avoiding bulky libraries when static ease is needed.",
    benefits: [
      "No bundle dependencies — raw native execution",
      "Highly legible JS animations and transition classes",
      "Optimized load times under 200 milliseconds",
      "Perfect for academic assignments on basic coding"
    ],
    technologies: ["Vanilla HTML5", "Vanilla CSS3", "Pure JavaScript ES6"],
    features: ["Zero Dependency", "High-Legibility Code", "Fast Deployment", "Clean Syntax"],
    icon: "FileCode"
  },
  {
    id: "web-business",
    category: "webdev",
    title: "Business Websites",
    description: "Client-converting corporate business cards, service presentation systems, and interactive service menus.",
    benefits: [
      "Clear call-to-actions maximizing lead conversions",
      "Embedded Google Maps and direct contact routers",
      "SEO keyword optimizations targeting local queries",
      "Highly professional typography pairing and modern palette"
    ],
    technologies: ["React.js", "Express", "Tailwind CSS", "SEO schema"],
    features: ["Lead Form Integrators", "Google Maps Embed", "SEO Meta Enriched", "CTA Funnels"],
    icon: "Globe"
  },
  {
    id: "web-landing",
    category: "webdev",
    title: "Landing Pages",
    description: "Ultra-high-converting specific marketing pages built around premium aesthetic features and persistent signup CTA panels.",
    benefits: [
      "Designed specifically for conversion optimization patterns",
      "Clear headers, social-proof rows, and pricing tables",
      "No-scroll sticky forms capturing emails and phone numbers",
      "High performance layouts with lazy-loaded resources"
    ],
    technologies: ["React.js", "Tailwind", "Motion Animations"],
    features: ["Frictionless Lead Forms", "Sticky WhatsApp Floating Row", "Testimonial Slides"],
    icon: "Sparkles"
  },
  {
    id: "web-ui",
    category: "webdev",
    title: "UI Development",
    description: "Creating gorgeous custom interactive visualizer engines, charts, canvas layouts, and premium widget clusters.",
    benefits: [
      "Elegant visual aesthetics drawing inspiration from Stripe and Linear",
      "Custom components matching your personalized color schemes",
      "Smooth micro-interactions on hovers, focuses, and selected state",
      "Accessible markup utilizing correct WAI-ARIA states"
    ],
    technologies: ["React", "Lucide Icons", "Motion transitions", "Lucide React"],
    features: ["Stripe-like Elegance", "Interactive Chart Panels", "Animated Widgets", "SVG Path Tracing"],
    icon: "Palette"
  }
];

export const PORTFOLIO: Project[] = [
  {
    id: "proj-1",
    title: "Student Portfolio Website",
    description: "A custom personal marketing and recruitment hub engineered with pure HTML5, CSS3, and JavaScript, helping computer science students showcase projects and secure dream interviews.",
    category: "webdev",
    technologies: ["HTML5", "CSS3", "JavaScript ES6", "Responsive design"],
    features: ["Custom interactive biography timeline", "Live direct WhatsApp inquiry linkage", "Interactive skill level radar bars", "One-click resume downloader PDF"],
    highlight: true,
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    id: "proj-2",
    title: "Responsive Restaurant Website",
    description: "A premium React.js single-page visual dining concept featuring dynamic interactive menu cards, custom seat reservation requests, and smooth Framer Motion cart items sliding panels.",
    category: "webdev",
    technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    features: ["Interactive real-time meal filtering engine", "Frictionless Table Booking scheduler form", "Stunning ambient food menus", "Mobile touch-swipe gesture menu display"],
    highlight: true,
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    id: "proj-3",
    title: "College Project Website",
    description: "Visual computer science thesis presentation website engineered to deliver clean, modern dashboard layouts representing student projects under professional reviews.",
    category: "academic",
    technologies: ["React.js", "Tailwind CSS", "Recharts Visuals", "Lucide Icons"],
    features: ["Integrated algorithm visualizer steps", "Document summary reading pane", "Fully commented educational source code", "Interactive grading scorecard calculator"],
    highlight: true,
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    id: "proj-4",
    title: "Business Lead Landing Page",
    description: "An optimization-first landing page crafted for service-based agency business models, featuring sticky dynamic CTA rows, FAQ accordions, and structural lead forms.",
    category: "webdev",
    technologies: ["React", "Tailwind CSS v4", "Motion", "Express API"],
    features: ["Optimized lead capture form with instant notifications", "Persistently available hover support chat triggers", "High-contrast visually separated pricing blocks", "Strict SEO metadata injection modules"],
    highlight: false,
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    id: "proj-5",
    title: "React Analytics Dashboard",
    description: "A high-performance SaaS executive portal mimicking server resource statistics, financial tracking, user actions, and interactive charts.",
    category: "webdev",
    technologies: ["React 19", "Tailwind CSS", "Recharts", "Lucide React", "Motion/react"],
    features: ["Fluid CSS grid responsive layouts", "Interactive bar charts, line graphs, and donut metrics", "Mock client inquiry pipeline tracker", "Dark and Light theme switching models"],
    highlight: false,
    demoUrl: "#",
    sourceUrl: "#"
  },
  {
    id: "proj-6",
    title: "E-Commerce Shopping UI",
    description: "A responsive shopping frontend containing modern grid listings, dynamic items filtering, multi-criteria searches, and functional slides panels for carts.",
    category: "webdev",
    technologies: ["React.js", "Tailwind CSS", "Lucide React", "Framer Motion"],
    features: ["Instant local cart storage management", "Smooth, responsive product category tabs", "Multi-stage responsive checkout UI", "High-legibility typography pricing listings"],
    highlight: false,
    demoUrl: "#",
    sourceUrl: "#"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Aarav Sharma",
    role: "Final Year CSE Student",
    rating: 5,
    text: "Academic & Web Solutions's assignment support was a complete lifesaver! I received my operating systems documentation and algorithms report full 48 hours before the university limit. The formatting was impeccable, and I scored an A+ grade!",
    category: "Assignment Support",
    studentAvatarLetter: "A"
  },
  {
    id: "test-2",
    name: "Sneha Patel",
    role: "Computer Science Graduate",
    rating: 5,
    text: "The React website built by Academic & Web Solutions for my capstone project was stunning. Visually highly professional, extremely fast, and the code comments were so logical that I easily explained my defense thesis to the jury panels.",
    category: "Website Development",
    studentAvatarLetter: "S"
  },
  {
    id: "test-3",
    name: "Vikram Reddy",
    role: "Mechanical Engineering Student",
    rating: 5,
    text: "The project defense slides and speaker notes Academic & Web Solutions designed look like they came from a premium McKinsey report! Clear layout, stunning graphics, and zero clutter. I felt exceptionally confident speaking in front of my board.",
    category: "Presentation Assistance",
    studentAvatarLetter: "V"
  },
  {
    id: "test-4",
    name: "Anjali Rao",
    role: "Information Technology Student",
    rating: 5,
    text: "Unbelievable service! Academic & Web Solutions assisted me through diagnostic project review and SRS compiling. He responded within minutes on WhatsApp, answered my questions patiently, and handled multiple correction loops without complaints.",
    category: "Assessment Guidance",
    studentAvatarLetter: "A"
  }
];

export const FAQS: FAQ[] = [
  {
    id: "faq-1",
    question: "How do I place an order?",
    answer: "Placing an order is simple and quick! Use our contact form to detail your requirements, send a direct WhatsApp message to +91 9246710026, or click 'Contact Now'. Academic & Web Solutions will review your submission and connect with you shortly to finalize details.",
    category: "general"
  },
  {
    id: "faq-2",
    question: "What is the typical delivery period?",
    answer: "Delivery timelines depend on assignment complexity and web features. Basic homework assignments and slide decks usually take 24 to 48 hours. Enterprise-level landing pages, comprehensive software requirements documents (SRS), and custom React websites average 3 to 7 business days. Rush overnight deliveries can be discussed.",
    category: "process"
  },
  {
    id: "faq-3",
    question: "Do you provide revisions if I require updates?",
    answer: "Absolutely! We focus on delivering top tier work. Standard projects include unlimited formatting and structural iterations within 14 days of project deliveries. We will align with your grading sheets or UI layouts until you are fully satisfied.",
    category: "services"
  },
  {
    id: "faq-4",
    question: "Can you develop custom websites for university defenses?",
    answer: "Yes, this is one of our key specialties! We design complete frontend project sites (React, HTML5, Tailwind) configured around student topics. Code is structured cleanly, commented heavily, and delivered alongside step-by-step setup guides to ensure you easily pass and explain your viva examinations.",
    category: "services"
  },
  {
    id: "faq-5",
    question: "What payment methods are supported?",
    answer: "We support safe, student-friendly digital payment formats, including UPI (GPay, PhonePe, Paytm), net banking, standard credit/debit cards, and split payment milestones where you render partial payments during development phases.",
    category: "pricing"
  },
  {
    id: "faq-6",
    question: "How do I contact support directly?",
    answer: "Academic & Web Solutions is directly available on WhatsApp (+91 9246710026) or via email (academicwebsolutions@gmail.com). Additionally, you can trigger the floating contact controls at the margins of the screen to start a conversation.",
    category: "general"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "5 Essential Tips for Completing College Assignments Successfully",
    slug: "five-tips-college-assignments",
    excerpt: "Learn the core strategies for parsing academic grading guides, carrying out thorough qualitative research, and formatting clean IEEE/APA bibliographies.",
    content: "### Introduction\nCompleting college assignments can often feel like steering through a stormy sea. Professors expect deep rigorous analysis, precise formatting, and original research. If you struggle to meet deadlines, following these structural practices will ensure you increase your grades.\n\n### 1. Master the Grading Rubric First\nBefore you write a single word, read your university's grading document from start to finish. Rubrics define exactly how points are distributed. If 30% of the grade goes to 'UML Architecture' or 'Comparative Analysis', make sure those topics have physical subheadings in your files.\n\n### 2. Standardize Your Citation Methodology\nMixing APA, Harvard, and IEEE citations is a rapid recipe to lose valuable marks. Use automatic citation tools like Zotero or Mendeley, and construct clear bibliographies. The bibliography is the foundation of high academic credibility.\n\n### 3. Clear Paragraph Outlines\nEvery paragraph should follow the PEEL structure:\n- **Point**: Establish your topic argument.\n- **Evidence**: Provide data, facts, or literature citations.\n- **Explanation**: Unpack the relevance of the evidence.\n- **Link**: Connect this paragraph back to the overarching homework theme.",
    date: "June 05, 2026",
    readTime: "4 min read",
    category: "Academic Support",
    tags: ["Assignments", "College Tips", "Academic Writing"]
  },
  {
    id: "blog-2",
    title: "How to Build a High-End Frontend Engineering Portfolio",
    slug: "build-high-end-frontend-portfolio",
    excerpt: "A comprehensive developer guide on highlighting interactive UI designs, organizing modular state trees, and generating beautiful README files.",
    content: "### Introduction\nIn today's competitive job market, standard PDF resumes are no longer sufficient. Recruiters look for live portfolios highlighting semantic coding, fast bundle speed, and exceptional interactive UX. Let's see how you can elevate your portfolio website.\n\n### 1. Show, Don't Just Tell\nRather than listing 'React' in a plain bubble, embed responsive playgrounds or interactive dashboards directly into your panels. Allow recruiters to filter projects, flip layouts to dark modes, or click live links showing functional applications.\n\n### 2. Establish High Performance Foundations\nOptimize your graphics, implement lazy-loading components, and utilize modern CSS layers like Tailwind v4. A portfolio that takes longer than two seconds to parse will fail to hold a hiring manager's focus.",
    date: "May 28, 2026",
    readTime: "6 min read",
    category: "Web Development",
    tags: ["Portfolio", "React", "Tailwind CSS", "UI/UX"]
  },
  {
    id: "blog-3",
    title: "React.js Best Practices for Final-Year Student Projects",
    slug: "react-best-practices-student-projects",
    excerpt: "Ensure your university capstone project code is modular, robust, highly commented, and ready for strict jury scrutinies.",
    content: "### Introduction\nFinal-year visual defense juries frequently review student code. If your project is a giant, spaghetti-like continuous chunk of lines inside a single file, you will face tough questioning. Structuring modern code correctly guarantees success.\n\n### 1. Strict Folder Isolation\nOrganize components cleanly. Keep UI cards, layout sections, utility hooks, and types strictly separate. Use clear names like `/src/components/`, `/src/types.ts`, and `/src/data/`.\n\n### 2. Document Your Development Work\nWrite rich comments before key components, explaining parameters, data flows, and state hooks. Not only does this show professors your original understanding, but it also primes you for the live viva questions.",
    date: "May 15, 2026",
    readTime: "5 min read",
    category: "Web Development",
    tags: ["React.js", "Student Projects", "Code Cleanliness"]
  },
  {
    id: "blog-4",
    title: "The Golden Guidelines for Stunning Academic Presentations",
    slug: "golden-guidelines-academic-presentations",
    excerpt: "Unlock public speaking confidence and visual slide design patterns to impress strict university project evaluation boards.",
    content: "### Introduction\nDefending your final-year thesis in front of a cold board is nerve-wracking. However, having a visually breathtaking slide deck acts as an impressive anchor. Here is how to style your presentation slides:\n\n### 1. Drastically Limit Word Densities\nYour slides are visual aids, not a textbook. Each slide should feature a single prominent headline, clean icons, a diagram, and a maximum of three core bullet points containing key phrases. Speak the details aloud; never read long blocks from the screen.\n\n### 2. Pick a High-End Modern Color Palette\nAvoid default PowerPoint templates. Select clean, luxury-looking combinations like off-white and charcoal gray with elegant blue highlights. Dark background themes look outstanding in low-light auditoriums.",
    date: "April 29, 2026",
    readTime: "4 min read",
    category: "Academic Support",
    tags: ["Presentations", "PowerPoint", "Viva Preparation"]
  }
];
