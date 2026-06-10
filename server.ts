import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Standard ESM equivalents for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key || key === "MY_GEMINI_API_KEY") {
      throw new Error("GEMINI_API_KEY environment variable is not defined or is placeholder.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        }
      }
    });
  }
  return aiClient;
}

// Simulated data-store tables
interface InqRecord {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  deadline: string;
  description: string;
  createdAt: string;
  status: "pending" | "reviewed" | "quoted" | "completed";
  quotedPrice?: number;
}

interface TrackRecord {
  id: string;
  clientId: string;
  clientName: string;
  projectTitle: string;
  category: "academic" | "webdev";
  status: "received" | "quoted" | "in_development" | "delivered" | "completed";
  progress: number;
  originalDeadline: string;
  quotedPrice: number;
  paymentStatus: "pending" | "partially_paid" | "fully_paid";
  timeline: {
    status: string;
    title: string;
    date: string;
    completed: boolean;
    remark?: string;
  }[];
  files: {
    id: string;
    name: string;
    uploadedBy: "client" | "admin";
    uploadedAt: string;
    size: string;
  }[];
  revisions: {
    id: string;
    description: string;
    status: "requested" | "ongoing" | "resolved";
    createdAt: string;
  }[];
  messages: {
    id: string;
    sender: "client" | "admin" | "ai";
    senderName: string;
    text: string;
    timestamp: string;
  }[];
}

// Seed templates
let inquiries: InqRecord[] = [
  {
    id: "inq-1",
    fullName: "Aryan Patel",
    email: "aryan.patel@college.edu",
    phone: "+91 8877665544",
    serviceType: "React.js Applications",
    budget: "₹8,000 - ₹12,000",
    deadline: "2026-06-25",
    description: "Need a clean React 19 single-page dashboard using Tailwind UI grids and mock statistics for my semester-end lab project submission. Codeline comments must be well detailed.",
    createdAt: "2026-06-08T10:30:00.000Z",
    status: "reviewed"
  },
  {
    id: "inq-2",
    fullName: "Pooja Hegde",
    email: "pooja.hegde@uni.edu",
    phone: "+91 9900887766",
    serviceType: "Project Documentation",
    budget: "₹3,000 - ₹5,000",
    deadline: "2026-06-18",
    description: "Looking for complete Software Requirements Specifications (SRS) document and structured UML state/use-case diagrams for a restaurant booking application.",
    createdAt: "2026-06-09T08:15:00.000Z",
    status: "pending"
  }
];

let tracks: TrackRecord[] = [
  {
    id: "TRACK-VIKRAM",
    clientId: "client-vikram",
    clientName: "Vikram Reddy",
    projectTitle: "UML Architecture & Documentation",
    category: "academic",
    status: "in_development",
    progress: 45,
    originalDeadline: "2026-06-18",
    quotedPrice: 4500,
    paymentStatus: "partially_paid",
    timeline: [
      { status: "received", title: "Project Brief Submission", date: "2026-06-07T09:00:00Z", completed: true, remark: "Prerequisites matched cleanly" },
      { status: "quoted", title: "Milestone Agreement & Initial Deposit", date: "2026-06-07T14:30:00Z", completed: true, remark: "Advance 50% processed" },
      { status: "in_development", title: "Drafting UML Diagrams & Use Case Maps", date: "2026-06-09T11:00:00Z", completed: true, remark: "Ongoing documentation compiling" },
      { status: "delivered", title: "Pre-review Draft Delivery", date: "2026-06-14", completed: false },
      { status: "completed", title: "Final Version Approved", date: "2026-06-17", completed: false }
    ],
    files: [
      { id: "f-1", name: "Requirements_v1.pdf", uploadedBy: "client", uploadedAt: "2026-06-07T09:12:00Z", size: "1.2 MB" },
      { id: "f-2", name: "System_Architecture_Draft.png", uploadedBy: "admin", uploadedAt: "2026-06-09T10:00:00Z", size: "430 KB" }
    ],
    revisions: [],
    messages: [
      { id: "m-1", sender: "client", senderName: "Vikram Reddy", text: "Hi Academic & Web Solutions, I just uploaded the updated requirements document. Please check the section on system actors.", timestamp: "2026-06-07T09:14:00Z" },
      { id: "m-2", sender: "admin", senderName: "Academic & Web Solutions", text: "Got it, Vikram! Analyzing actors now. I'll post the preliminary use-case drafts here today.", timestamp: "2026-06-07T11:20:00Z" }
    ]
  },
  {
    id: "TRACK-SNEHA",
    clientId: "client-sneha",
    clientName: "Sneha Patel",
    projectTitle: "Interactive Designer Portfolio Website",
    category: "webdev",
    status: "delivered",
    progress: 95,
    originalDeadline: "2026-06-12",
    quotedPrice: 15000,
    paymentStatus: "fully_paid",
    timeline: [
      { status: "received", title: "Structure Brief", date: "2026-05-30T10:00:00Z", completed: true },
      { status: "quoted", title: "Quotation Confirmed", date: "2026-05-31T08:00:00Z", completed: true },
      { status: "in_development", title: "Development phase: React components", date: "2026-06-04T18:00:00Z", completed: true },
      { status: "delivered", title: "Full Portfolio Live Link Draft", date: "2026-06-09T09:00:00Z", completed: true, remark: "Sent live build preview Link" },
      { status: "completed", title: "Signoff & Code Archive Sent", date: "2026-06-12", completed: false }
    ],
    files: [
      { id: "f-3", name: "Asset_Pack_Zip.zip", uploadedBy: "client", uploadedAt: "2026-05-31T12:00:00Z", size: "18.5 MB" },
      { id: "f-4", name: "Production_Build_Vite_Release.zip", uploadedBy: "admin", uploadedAt: "2026-06-09T08:45:00Z", size: "2.8 MB" }
    ],
    revisions: [
      { id: "r-1", description: "Adjust biography transition speed to be slightly slower.", status: "resolved", createdAt: "2026-06-09T09:15:00Z" }
    ],
    messages: [
      { id: "m-3", sender: "admin", senderName: "Academic & Web Solutions", text: "Hello Sneha, the complete portfolio is now uploaded. You can test it online or download the Vite build code above.", timestamp: "2026-06-09T09:00:00Z" },
      { id: "m-4", sender: "client", senderName: "Sneha Patel", text: "Wow, this is gorgeous! Perfect layout. Re-checked transitions and they feel awesome now.", timestamp: "2026-06-09T09:30:00Z" }
    ]
  }
];

// Helper to generate IDs
const generateId = (prefix: string) => `${prefix}-${Math.floor(1000 + Math.random() * 9000)}`;

// ==========================================
// API REST ENDPOINTS
// ==========================================

// Get all inquiries (Admin dashboard view)
app.get("/api/inquiries", (req: Request, res: Response) => {
  res.json(inquiries);
});

// Submit a new inquiry (Front-end contact triggers this)
app.post("/api/inquiries", (req: Request, res: Response) => {
  const { fullName, email, phone, serviceType, budget, deadline, description } = req.body;
  if (!fullName || !email || !serviceType || !description) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  const newInq: InqRecord = {
    id: generateId("inq"),
    fullName,
    email,
    phone: phone || "",
    serviceType,
    budget: budget || "TBD",
    deadline: deadline || "N/A",
    description,
    createdAt: new Date().toISOString(),
    status: "pending"
  };

  inquiries.unshift(newInq);

  // Auto-generate a corresponding interactive project tracker so students can log in to track instantly!
  const hasPhoneCode = phone ? phone.replace(/[^0-9]/g, "").slice(-4) : "1234";
  const userTrackId = `TRACK-${fullName.split(" ")[0].toUpperCase()}-${hasPhoneCode}`;

  const newTrack: TrackRecord = {
    id: userTrackId,
    clientId: `client-${fullName.split(" ")[0].toLowerCase()}`,
    clientName: fullName,
    projectTitle: `${serviceType} - Assistance`,
    category: serviceType.toLowerCase().includes("website") || serviceType.toLowerCase().includes("react") || serviceType.toLowerCase().includes("frontend") ? "webdev" : "academic",
    status: "received",
    progress: 10,
    originalDeadline: deadline || "flexible",
    quotedPrice: 0,
    paymentStatus: "pending",
    timeline: [
      { status: "received", title: "Project Scope Lodged Successfully", date: new Date().toISOString(), completed: true, remark: "Inquiry registered into Academic & Web Solutions Solutions router." },
      { status: "quoted", title: "Awaiting Admin Review & Price Quote", date: "TBD", completed: false },
      { status: "in_development", title: "Design & Assembly Blueprint", date: "TBD", completed: false }
    ],
    files: [],
    revisions: [],
    messages: [
      { id: generateId("m"), sender: "ai", senderName: "Academic & Web Solutions Virtual Assistant", text: `Hi ${fullName}! Thanks for choosing Academic & Web Solutions Academic & Web Solutions. Academic & Web Solutions has been automatically paged and will send you a price offer and custom roadmap directly here on this portal and on your WhatsApp within an hour!`, timestamp: new Date().toISOString() }
    ]
  };

  tracks.unshift(newTrack);

  res.status(201).json({
    success: true,
    message: "Inquiry received and custom project tracker spawned successfully.",
    inquiry: newInq,
    trackerId: userTrackId
  });
});

// Update inquiry status or price offer from admin panel
app.post("/api/inquiries/:id/status", (req: Request, res: Response) => {
  const { id } = req.params;
  const { status, quotedPrice } = req.body;

  const inqIndex = inquiries.findIndex(i => i.id === id);
  if (inqIndex === -1) {
    return res.status(404).json({ error: "Inquiry not found." });
  }

  inquiries[inqIndex].status = status;
  if (quotedPrice !== undefined) {
    inquiries[inqIndex].quotedPrice = Number(quotedPrice);

    // Sync back to corresponding project trackers if available
    const fullNameFirst = inquiries[inqIndex].fullName.split(" ")[0].toUpperCase();
    const phoneSuffix = inquiries[inqIndex].phone ? inquiries[inqIndex].phone.replace(/[^0-9]/g, "").slice(-4) : "1234";
    const trackId = `TRACK-${fullNameFirst}-${phoneSuffix}`;
    const trackIdx = tracks.findIndex(t => t.id === trackId || t.clientName === inquiries[inqIndex].fullName);
    if (trackIdx !== -1) {
      tracks[trackIdx].quotedPrice = Number(quotedPrice);
      tracks[trackIdx].status = "quoted";
      tracks[trackIdx].progress = 25;
      tracks[trackIdx].timeline[1] = { status: "quoted", title: `Quotation Approved: ₹${quotedPrice}`, date: new Date().toISOString(), completed: true, remark: "报价/Price approved by admin." };
    }
  }

  res.json({ success: true, inquiry: inquiries[inqIndex] });
});

// Retrieve project tracks list (Admin visibility)
app.get("/api/tracks", (req: Request, res: Response) => {
  res.json(tracks);
});

// Retrieve a specific project tracker by index ID code
app.get("/api/tracks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const track = tracks.find(t => t.id.toUpperCase() === id.toUpperCase());
  if (!track) {
    return res.status(404).json({ error: `No interactive project tracker code aligns with [${id}]. Please verify the code typed.` });
  }
  res.json(track);
});

// Client Dashboard - Add interactive message
app.post("/api/tracks/:id/messages", (req: Request, res: Response) => {
  const { id } = req.params;
  const { sender, senderName, text } = req.body;

  if (!sender || !text) {
    return res.status(400).json({ error: "Missing sender or text contents." });
  }

  const trackIdx = tracks.findIndex(t => t.id.toUpperCase() === id.toUpperCase());
  if (trackIdx === -1) {
    return res.status(404).json({ error: "Tracker code mismatch." });
  }

  const newMsg = {
    id: generateId("m"),
    sender,
    senderName,
    text,
    timestamp: new Date().toISOString()
  };

  tracks[trackIdx].messages.push(newMsg);
  res.status(201).json(newMsg);
});

// Client Dashboard - Ask for updates/revision
app.post("/api/tracks/:id/revisions", (req: Request, res: Response) => {
  const { id } = req.params;
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ error: "Revision description required." });
  }

  const trackIdx = tracks.findIndex(t => t.id.toUpperCase() === id.toUpperCase());
  if (trackIdx === -1) {
    return res.status(404).json({ error: "Tracker mismatch." });
  }

  const newRev = {
    id: generateId("r"),
    description,
    status: "requested" as const,
    createdAt: new Date().toISOString()
  };

  tracks[trackIdx].revisions.push(newRev);

  // Add automated message alerting receipt
  tracks[trackIdx].messages.push({
    id: generateId("m"),
    sender: "admin",
    senderName: "Academic & Web Solutions",
    text: `Revision request for: "${description}" logged. I will adjust the project structures and update you here directly.`,
    timestamp: new Date().toISOString()
  });

  res.status(201).json(newRev);
});

// Client Dashboard - Simulated file upload
app.post("/api/tracks/:id/files", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, uploadedBy, size } = req.body;

  const trackIdx = tracks.findIndex(t => t.id.toUpperCase() === id.toUpperCase());
  if (trackIdx === -1) {
    return res.status(404).json({ error: "Tracker mismatch." });
  }

  const newFile = {
    id: generateId("f"),
    name: name || "requirements_doc.pdf",
    uploadedBy: uploadedBy || "client",
    uploadedAt: new Date().toISOString(),
    size: size || "1.5 MB"
  };

  tracks[trackIdx].files.push(newFile);
  res.status(201).json(newFile);
});

// Admin dashboard - update progress, timeline nodes, or payment
app.patch("/api/tracks/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const fields = req.body;

  const trackIdx = tracks.findIndex(t => t.id.toUpperCase() === id.toUpperCase());
  if (trackIdx === -1) {
    return res.status(404).json({ error: "Track record not found." });
  }

  const p = tracks[trackIdx];
  if (fields.progress !== undefined) p.progress = Number(fields.progress);
  if (fields.status !== undefined) p.status = fields.status;
  if (fields.paymentStatus !== undefined) p.paymentStatus = fields.paymentStatus;

  // Add simple milestone status check
  if (fields.status === "completed") {
    p.progress = 100;
    // Tick off final checkbox in timeline
    p.timeline.forEach(t => {
      if (t.status === "completed" || t.status === "delivered") t.completed = true;
    });
  }

  if (fields.timelineIndex !== undefined && fields.completed !== undefined) {
    const idx = Number(fields.timelineIndex);
    if (p.timeline[idx]) {
      p.timeline[idx].completed = fields.completed;
      p.timeline[idx].date = new Date().toISOString();
      if (fields.remark) {
        p.timeline[idx].remark = fields.remark;
      }
    }
  }

  res.json({ success: true, track: p });
});

// Contact and support numbers
const BUSINESS_KNOWLEDGE = `
Owner Name: Academic & Web Solutions
Business Name: Academic & Web Solutions
Owner Mobile Phone: +91 9246710026
Owner Email: academicwebsolutions@gmail.com
Target Audience: Intermediate, college, or university students needing assignment and assessment guides. Plus small businesses/students needing premium portfolios or custom React.js frontend work.

Services Offered:
1. Academic Assistance Services:
  - Assessment Assistance
  - Assignment Support
  - Project Documentation (SRS, UML layout diagrams)
  - Research Reports
  - Lab Reports
  - PowerPoint Presentations (visual grading designs)
  - Case Studies
  - Final-Year Project Guidance
  - Project Review Support (correction checks)
2. Frontend Web Development Services:
  - Frontend Website Development
  - Portfolio Websites (personal branding)
  - Student Project Websites (commented cleanly for viva preparation)
  - React.js Applications (state-driven components)
  - Responsive Web Design
  - HTML/CSS/JavaScript Projects
  - Business Websites
  - Landing Pages
  - UI Development

Pricing Plans Packages:
We offer fully customized, student-friendly plans based entirely on project specifications, guidelines, and deadlines. Contact us directly for a free, transparent proposal outline without any upfront charge.

Lead capturing instructions:
If users express interest in placing an order or acquiring services, capture their contact details and suggest that they submit an Inquiry form directly through our webpage portal or on WhatsApp.
`;

// AI Assistant Chat Route powered by Gemini Generative API
app.post("/api/chat", async (req: Request, res: Response) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing conversation message sequence." });
  }

  const prompt = messages[messages.length - 1]?.text;
  if (!prompt) {
    return res.status(400).json({ error: "Empty message payload." });
  }

  try {
    const ai = getGeminiClient();
    const systemPrompt = `You are a helpful, professional, friendly Virtual Assistant representing "Academic & Web Solutions" (founded and run by Academic & Web Solutions).
    Use your knowledge to answer prospective client queries logically, politely, and cleanly in professional formatted Markdown:
    ${BUSINESS_KNOWLEDGE}

    Guidelines:
    1. Be concise, respectful, academic-focused, and encourage them to submit an inquiry through the contact form or message Academic & Web Solutions directly on WhatsApp.
    2. If they ask about assignments, tell them we offer plagiarised-free guarantees, formatting matching, and timely completions.
    3. If they ask about web dev, tell them code is commented heavily so they pass university defenses.
    4. If they want a price offer, politely explain that we provide custom tailored suggestions on review of assignment guidelines, totally free of charge.
    5. Always state that Academic & Web Solutions is available directly at +91 9246710026 and academicwebsolutions@gmail.com.
    6. Ensure formatting is beautiful with bullet points.`;

    // Map conversation array to Gemini content structures
    const formattedContents = messages.map(msg => ({
      role: msg.sender === "client" ? "user" : "model",
      parts: [{ text: msg.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.7,
      }
    });

    const aiText = response.text || "Hello! How can Academic & Web Solutions Academic & Web Solutions help you with college reports or responsive portfolios today?";
    res.json({ text: aiText });
  } catch (error: any) {
    console.error("Gemini API Error:", error?.message || error);
    // Fallback static smart response in case API key is missing or invalid
    let answerText = "Thank you for reaching out! I am Academic & Web Solutions's automated customer companion. ";
    const textLower = prompt.toLowerCase();
    if (textLower.includes("price") || textLower.includes("cost") || textLower.includes("pricing") || textLower.includes("charge")) {
      answerText += "Our services feature customized, friendly rates structured around your specific instructions, scope, and deadlines. We do not charge anything upfront for outlining proposals! To get a free customized review, please submit our inquiry form or contact Academic & Web Solutions directly on his WhatsApp or Phone at +91 9246710026.";
    } else if (textLower.includes("assignment") || textLower.includes("report") || textLower.includes("ppt") || textLower.includes("homework")) {
      answerText += "We deliver plagiarism-free, highly analytical college assessments, lab logs, PowerPoints, and source-referenced essays. All files are matched to your university instruction rubric. Simply post your briefing via our contact form on this page or text us on WhatsApp.";
    } else if (textLower.includes("website") || textLower.includes("react") || textLower.includes("portfolio") || textLower.includes("development")) {
      answerText += "We develop top-notch frontend web projects, student portolios, and responsive React websites. Code is commented heavily to assist you during college viva defenses. We host builds on Vercel or Netlify for you! Let us know your criteria in the contact panel.";
    } else {
      answerText += "We specialize in standard-compliant academic support (lab reports, PPTs, assignment files) and premium React.js frontend portfolio websites. Please text Academic & Web Solutions directly at +91 9246710026 or email academicwebsolutions@gmail.com for a swift turnaround!";
    }
    res.json({ text: answerText });
  }
});

// ==========================================
// SEARCH ENGINE OPTIMIZATION FILES (SEO Router)
// ==========================================

// XML Sitemap Generator
app.get("/sitemap.xml", (req: Request, res: Response) => {
  res.header("Content-Type", "application/xml");
  const hostUrl = process.env.APP_URL || `https://${req.get("host")}`;
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${hostUrl}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  res.send(sitemapXml);
});

// Robots.txt
app.get("/robots.txt", (req: Request, res: Response) => {
  res.header("Content-Type", "text/plain");
  const hostUrl = process.env.APP_URL || `https://${req.get("host")}`;
  res.send(`User-agent: *
Allow: /
Sitemap: ${hostUrl}/sitemap.xml`);
});

// Vite / Production Asset serving setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server launched on port ${PORT}`);
  });
}

startServer();
