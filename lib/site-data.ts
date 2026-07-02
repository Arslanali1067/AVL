import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Cable,
  CalendarCheck,
  Church,
  ClipboardCheck,
  Clapperboard,
  Cpu,
  DraftingCompass,
  GraduationCap,
  Headphones,
  Hotel,
  Landmark,
  Lightbulb,
  Medal,
  Mic2,
  MonitorPlay,
  Network,
  PenTool,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Volleyball,
  Wrench,
} from "lucide-react";

export const clients = [
  "Saddleback Church",
  "Hope Church",
  "North Point",
  "Compass Group",
  "Western Governors",
  "Marriott",
];

export const services = [
  {
    title: "Audio Systems",
    description:
      "High-performance sound systems engineered for clarity, coverage and impact.",
    icon: Mic2,
  },
  {
    title: "Video Systems",
    description:
      "LED walls, projection, streaming and display systems built to impress.",
    icon: MonitorPlay,
  },
  {
    title: "Lighting Design",
    description:
      "Creative architectural and theatrical lighting that transforms spaces.",
    icon: Lightbulb,
  },
  {
    title: "System Integration",
    description:
      "Seamless coordination of audio, video, lighting, control and network systems.",
    icon: Network,
  },
  {
    title: "Live Event Production",
    description:
      "Full-service live support for launches, conferences, worship and broadcast.",
    icon: Clapperboard,
  },
  {
    title: "Technical Support",
    description:
      "Maintenance, training and responsive support for mission-critical systems.",
    icon: Headphones,
  },
];

export const whyPoints = [
  {
    title: "Engineered First",
    description: "Every recommendation is rooted in system design, not guesswork.",
    icon: DraftingCompass,
  },
  {
    title: "Single Team",
    description: "Strategy, installation and commissioning stay under one roof.",
    icon: Users,
  },
  {
    title: "Future Ready",
    description: "Infrastructure planning keeps your systems flexible as needs evolve.",
    icon: Cpu,
  },
  {
    title: "Support Built In",
    description: "Training and lifecycle care help your team operate with confidence.",
    icon: ShieldCheck,
  },
];

export const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "20+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Technical Support" },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Goals, budget, timeline and site realities.",
    icon: BadgeCheck,
  },
  {
    number: "02",
    title: "Engineering",
    description: "System architecture and equipment planning.",
    icon: Cable,
  },
  {
    number: "03",
    title: "Design",
    description: "Drawings, specs, schedules and documentation.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Installation",
    description: "Clean deployment with expert field teams.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Commissioning",
    description: "Tune, test and validate every component.",
    icon: ClipboardCheck,
  },
  {
    number: "06",
    title: "Training",
    description: "Hands-on education for operators and teams.",
    icon: Users,
  },
  {
    number: "07",
    title: "Support",
    description: "Ongoing care and responsive technical help.",
    icon: Headphones,
  },
];

export const industries = [
  {
    title: "Churches",
    icon: Church,
    image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.9),rgba(26,73,136,.45)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23091324%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M40 220h400M90 180h300M130 145h220%22 stroke=%22%234f8cff%22 stroke-width=%226%22/%3E%3Ccircle cx=%22240%22 cy=%22115%22 r=%2248%22 fill=%22%23f28c28%22 opacity=%22.22%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Corporate",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.55),rgba(248,249,251,.25)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23e9eef5%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M54 190h372v18H54zM96 86h288v94H96z%22 fill=%22%23ffffff%22/%3E%3Cpath d=%22M110 100h260v66H110z%22 fill=%22%23112d57%22 opacity=%22.72%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Education",
    icon: GraduationCap,
    image: "/industry-education.png",
    gradient:
      "bg-[linear-gradient(135deg,rgba(242,140,40,.28),rgba(17,45,87,.48)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23d6dce5%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M60 94h360v120H60z%22 fill=%22%23fff%22/%3E%3Cpath d=%22M92 130h296M92 166h296%22 stroke=%22%23112d57%22 stroke-width=%2210%22 opacity=%22.4%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Government",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.68),rgba(242,140,40,.18)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23715236%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M70 205h340M100 92h280M120 92v110M190 92v110M290 92v110M360 92v110%22 stroke=%22%23fff%22 stroke-width=%2210%22 opacity=%22.5%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Hospitality",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.48),rgba(242,140,40,.22)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23301e2d%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M70 210h340M90 80h300v110H90z%22 fill=%22%23f7c27f%22 opacity=%22.38%22/%3E%3Ccircle cx=%22240%22 cy=%2284%22 r=%2246%22 fill=%22%23fff%22 opacity=%22.32%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Performing Arts",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.25),rgba(9,19,36,.8)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23110018%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M40 88h400v132H40z%22 fill=%22%23b50024%22 opacity=%22.55%22/%3E%3Cpath d=%22M60 220h360%22 stroke=%22%23f28c28%22 stroke-width=%2210%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Sports Facilities",
    icon: Volleyball,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.35),rgba(25,79,157,.25)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%230f5e8b%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M70 80h340v160H70zM240 80v160M70 160h340%22 stroke=%22%23fff%22 stroke-width=%226%22 opacity=%22.62%22/%3E%3C/svg%3E')] bg-cover",
  },
  {
    title: "Event Venues",
    icon: CalendarCheck,
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
    gradient:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.6),rgba(242,140,40,.14)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22480%22 height=%22280%22 viewBox=%220 0 480 280%22%3E%3Crect fill=%22%23051024%22 width=%22480%22 height=%22280%22/%3E%3Cpath d=%22M70 210h340M130 90h220v92H130z%22 stroke=%22%2367a1ff%22 stroke-width=%228%22 opacity=%22.8%22/%3E%3Ccircle cx=%22240%22 cy=%22136%22 r=%2254%22 fill=%22%23f28c28%22 opacity=%22.2%22/%3E%3C/svg%3E')] bg-cover",
  },
];

export const projects = [
  {
    title: "Arbogast Performing Arts Center",
    location: "Troy, Ohio",
    category: "Performing Arts",
    image:
      "bg-[linear-gradient(135deg,rgba(9,19,36,.35),rgba(17,45,87,.88)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22380%22 viewBox=%220 0 640 380%22%3E%3Crect fill=%22%23071324%22 width=%22640%22 height=%22380%22/%3E%3Cpath d=%22M60 274h520M95 224h450M132 180h376%22 stroke=%22%232c6eea%22 stroke-width=%2212%22/%3E%3Cpath d=%22M120 70h400v104H120z%22 fill=%22%232870ff%22 opacity=%22.45%22/%3E%3Ccircle cx=%22320%22 cy=%22122%22 r=%2244%22 fill=%22%23f28c28%22 opacity=%22.35%22/%3E%3C/svg%3E')]",
  },
  {
    title: "North Point Church Main Campus",
    location: "Alpharetta, GA",
    category: "Church",
    image:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.2),rgba(9,19,36,.9)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22380%22 viewBox=%220 0 640 380%22%3E%3Crect fill=%22%2309172f%22 width=%22640%22 height=%22380%22/%3E%3Cpath d=%22M70 252h500M110 214h420M150 176h340%22 stroke=%22%234f8cff%22 stroke-width=%2210%22/%3E%3Cpath d=%22M140 72h360v84H140z%22 fill=%22%23ffffff%22 opacity=%22.18%22/%3E%3Cpath d=%22M188 72v84M452 72v84%22 stroke=%22%232870ff%22 stroke-width=%2220%22 opacity=%22.6%22/%3E%3C/svg%3E')]",
  },
  {
    title: "Global Corporate Headquarters",
    location: "Dallas, TX",
    category: "Corporate",
    image:
      "bg-[linear-gradient(135deg,rgba(248,249,251,.32),rgba(17,45,87,.82)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22380%22 viewBox=%220 0 640 380%22%3E%3Crect fill=%22%23eef2f6%22 width=%22640%22 height=%22380%22/%3E%3Cpath d=%22M74 106h492v180H74z%22 fill=%22%23fff%22/%3E%3Cpath d=%22M112 140h416v92H112z%22 fill=%22%23112d57%22 opacity=%22.68%22/%3E%3Cpath d=%22M144 262h352%22 stroke=%22%23f28c28%22 stroke-width=%2212%22/%3E%3C/svg%3E')]",
  },
  {
    title: "Civic Conference Hall",
    location: "Orlando, FL",
    category: "Government",
    image:
      "bg-[linear-gradient(135deg,rgba(17,45,87,.46),rgba(242,140,40,.16)),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22640%22 height=%22380%22 viewBox=%220 0 640 380%22%3E%3Crect fill=%22%2372573d%22 width=%22640%22 height=%22380%22/%3E%3Cpath d=%22M80 268h480M120 128h400M160 128v130M256 128v130M384 128v130M480 128v130%22 stroke=%22%23fff%22 stroke-width=%2212%22 opacity=%22.44%22/%3E%3C/svg%3E')]",
  },
];

export const testimonials = [
  {
    quote:
      "AVL transformed our worship experience. Their team is professional, responsive and incredibly talented.",
    name: "Kyle S.",
    role: "Saddleback Church",
  },
  {
    quote:
      "Their attention to detail and support throughout our project was exceptional. Highly recommended.",
    name: "Angela M.",
    role: "Compass Group",
  },
  {
    quote:
      "The team delivered beyond expectations. Our venue has never looked or sounded better.",
    name: "David R.",
    role: "Event Center Director",
  },
];

export const footerLinks = [
  {
    title: "Services",
    links: ["Audio Systems", "Video Systems", "Lighting Design", "Integration"],
  },
  {
    title: "Industries",
    links: ["Churches", "Corporate", "Education", "Government"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Process", "Careers", "Resources"],
  },
  {
    title: "Contact",
    links: ["(800) 123-4567", "info@avlsolutions.com", "Orlando, FL"],
  },
];
