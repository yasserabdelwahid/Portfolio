"use client";

import { FileUser, Github, Linkedin, Mail, Terminal, Code2, Cpu, Globe, Menu, X, Smile, Users, Clock, MessageCircle, Repeat, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image"
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TextToType } from "@/components/TextToType"
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState("overview");
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const terminalRef = useRef<HTMLDivElement>(null);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showTerminal && terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput, showTerminal]);

  const handleTerminalCommand = (command: string) => {
    switch (command.toLowerCase().trim()) {
      case 'help':
        return [
          'Available commands:',
          '  help       - Show this help message',
          '  about      - About me',
          '  skills     - List my skills',
          '  projects   - View my projects',
          '  experience - View my experience',
          '  clear      - Clear terminal',
          '  exit       - Close terminal'
        ].join('\n');
      case 'about':
        return 'Student in software and network engineering,\n currently studying at the Moroccan School of Engineering Science.\n Looking for opportunities to apply my knowledge and develop my skills in a professional environment.';
      case 'skills':
        return [
          'Technical Skills:',
          '  • Frontend: React, Next.js, TypeScript, Swift, JavaScript.',
          '  • Backend: Node.js, Python, PHP, Java, C#, C++.',
          '  • Cloud: AWS, Docker, Oracle, Azure.',
          '  • Database: PL-SQL, T-SQL, PostgreSQL, MongoDB.',
          '  • System and Network: Bash, PowerShell, Unix, Cisco Packet Tracer, Eve-ng.',
          '  • SoftSkills: Problem-solving, Team collaboration, Time management, Effective communication, Adaptability.'
        ].join('\n');
      case 'projects':
        return projects.map(project => `• ${project.title}`).join('\n');
      case 'experience':
        return experience.map(job => `• ${job.role} at ${job.company}`).join('\n');
      case 'clear':
        setTerminalOutput([]);
        return null;
      case 'exit':
        setShowTerminal(false);
        return null;
      default:
        return `Command not found: ${command}. Type 'help' for available commands.`;
    }
  };

  const handleTerminalSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && terminalInput.trim()) {
      const command = terminalInput.trim();
      const response = handleTerminalCommand(command);

      if (response !== null) {
        setTerminalOutput(prev => [...prev, `> ${command}`, ...response.split('\n')]);
      }
      setTerminalInput('');
    }
  };

  if (!mounted) return null;

  const navItems: (keyof typeof translations['en'])[] = ["overview", "experience", "projects", "skills", "certifications", "education", "contact"];

  const experience = [
    {
      role: "Network and Systems Intern",
      company: "Intelcom (SATEC GROUP) – Temara",
      logo: "/intelcom-logo.png",
      period: "July 2024 – August 2024",
      responsibilities: [
        "Designed and implemented a LAN network for the company.",
        "Configured switches and routers using EVE–NG.",
        "Studied network infrastructures and optimized performance."
      ],
      role_fr: "Stagiaire en Réseaux et Systèmes",
      responsibilities_fr: [
        "Conception et mise en œuvre d'un réseau LAN pour l'entreprise.",
        "Configuration des commutateurs et des routeurs à l'aide de EVE–NG.",
        "Étude des infrastructures réseau et optimisation des performances."
      ]
    },
    {
      role: "Observation Intern",
      company: "Maroc Telecom – Agadir",
      logo: "/maroc-telecom-logo.svg",
      period: "July 2023 – August 2023",
      responsibilities: [
        "Gained insights into network management infrastructures and processes.",
        "Observed system administration and maintenance operations."
      ],
      role_fr: "Stagiaire d'Observation",
      responsibilities_fr: [
        "Acquisition de connaissances sur les infrastructures et les processus de gestion de réseau.",
        "Observation des opérations d'administration et de maintenance du système."
      ]
    }
  ];

  const projects = [
    {
      title: "Restaurant's Reservation System",
      description: "Built a full-stack Restaurent Website",
      tags: ["Python", "Django", "JavaScript"],
      icon: <Globe className="w-10 h-10 text-chart-1" />,
      title_fr: "Système de Réservation de Restaurant",
      description_fr: "Construction d'un site web de restaurant full-stack"
    },
    {
      title: "Library Management System",
      description: "Build a Java application for library management",
      tags: ["Java", "Swing", "MVC"],
      icon: <Cpu className="w-10 h-10 text-chart-2" />,
      title_fr: "Système de Gestion de Bibliothèque",
      description_fr: "Construction d'une application Java pour la gestion de bibliothèque"
    },
    {
      title: "School Portal",
      description: "Built a full-stack school portal",
      tags: ["React", "C#", "Node.js", "SqlServer"],
      icon: <Code2 className="w-10 h-10 text-chart-3" />,
      title_fr: "Portail Scolaire",
      description_fr: "Construction d'un portail scolaire full-stack"
    }
  ];

  const skills = {
    frontend: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" },
    ],
    backend: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
    cloudDatabase: [
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    ],
    softskills: [
      { name: "Problem-solving", icon: <Smile className="text-yellow-500" /> },
      { name: "Team collaboration", icon: <Users className="text-blue-500" /> },
      { name: "Time management", icon: <Clock className="text-green-500" /> },
      { name: "Good communication", icon: <MessageCircle className="text-purple-500" /> },
      { name: "Adaptability", icon: <Repeat className="text-orange-500" /> },
    ],
  };

  const translations = {
    en: {
      hello: "Hello, I am ",
      subtitle: "Turning ideas into elegant solutions",
      description: "Student in software and network engineering, currently studying at the Moroccan School of Engineering Science. Looking for opportunities to apply my knowledge and develop my skills in a professional environment.",
      overview: "Overview",
      experience: "Experience",
      projects: "Projects",
      moreProjects: "More projects coming soon!",
      skills: "Skills",
      certifications: "Certifications",
      education: "Education",
      diploma: "Engineering Degree in Computer Science",
      contact: "Contact",
      connect: "Let's Connect",
      view: "View",
      issued: "Issued",
      expires: "Expires",
      softwareDevelopment: "IT Methodologies Applied to Business Management",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email Me"
    },
    fr: {
      hello: "Bonjour, je suis ",
      subtitle: "Transformer des idées en d'élégantes solutions",
      description: "Etudiant en ingénierie logicielle et réseau, actuellement étudiant à l'Ecole Marocaine des Sciences de l'Ingénieur. A la recherche d'opportunités pour appliquer mes connaissances et développer mes compétences dans un environnement professionnel.",
      overview: "Aperçu",
      experience: "Expérience",
      projects: "Projets",
      moreProjects: "Plus de projets à venir bientôt!",
      skills: "Compétences",
      certifications: "Certifications",
      education: "Éducation",
      diploma: "Diplôme d'Ingénieur en Génie Informatique",
      contact: "Contact",
      connect: "Restons en contact",
      view: "Voir",
      issued: "Délivré",
      expires: "Expire",
      softwareDevelopment: "Méthodologies Informatiques Appliquées a la Gestion des Entreprises",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Envoyez-moi un email"
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`nav-link text-muted-foreground hover:text-primary transition-colors \${
                      activeSection === item.toLowerCase() ? 'text-primary font-medium' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = item.toLowerCase();
                      const element = document.getElementById(sectionId);
                      if (element) {
                        element.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start'
                        });
                        setActiveSection(sectionId);
                      }
                    }}
                  >
                    {translations[language][item]}
                  </a>
                ))}
              </div>
            </div>

            {/* Language and Theme Controls */}
            <div className="flex items-center space-x-2 ml-auto">
              <Button
                variant="ghost"
                onClick={() => setLanguage(prev => prev === 'en' ? 'fr' : 'en')}
                className="hover:bg-accent transition-colors w-12 h-10 flex items-center justify-center"
                aria-label={language === 'en' ? 'Passer au français' : 'Switch to English'}
              >
                <span className="text-xs">{language.toUpperCase()}</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="hover:bg-accent transition-colors w-12 h-10 flex items-center justify-center"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden hover-scale w-12 h-10 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background slide-in">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-accent text-center transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language][item]}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden" id="overview">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-90" />
        <div className="relative z-10 text-center px-4 max-w-3xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">{translations[language].hello}</span>
            <br />
            <TextToType
              text="ABDELWAHID Yasser"
              typingSpeed={100}
              className="bg-clip-text text-transparent bg-gradient-to-r from-chart-1 via-chart-2 to-chart-3 glowing"
            />
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 slide-in" style={{ animationDelay: '0.2s' }}>
            {translations[language].subtitle}
          </p>
          <p className="text-muted-foreground mb-8 slide-in" style={{ animationDelay: '0.4s' }}>
            {translations[language].description}
          </p>
          <div className="flex gap-4 justify-center slide-in" style={{ animationDelay: '0.6s' }}>
            <Button
              variant="default"
              size="lg"
              className="hover-lift fade-in w-auto"
              style={{ animationDelay: '0.2s' }}
              asChild
            >
              <a href="/cv.pdf" download="Abdelwahid_Yasser_CV.pdf">
                <FileUser className="mr-2 h-5 w-5" />
                curriculum vitae
              </a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <Button
            onClick={() => setShowTerminal(true)}
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 hover-scale floating"
          >
            <Terminal className="w-6 h-6" />
          </Button>
        </div>
      </div>

      {/* Terminal Modal */}
      {showTerminal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 terminal-fade-in">
          <Card className="w-full max-w-2xl bg-black border-primary">
            <div className="flex items-center justify-between bg-primary p-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="ml-2 text-primary-foreground text-sm font-medium">Terminal</span>
              </div>
              <button
                onClick={() => setShowTerminal(false)}
                className="text-primary-foreground hover:opacity-80 transition-opacity"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 font-mono text-sm">
              <div ref={terminalRef} className="h-64 overflow-y-auto mb-4 space-y-2">
                <p className="text-green-500">Welcome to the interactive terminal! Type 'help' for available commands.</p>
                {terminalOutput.map((line, i) => (
                  <p key={i} className={line.startsWith('>') ? 'text-blue-500' : 'text-green-500'}>
                    {line}
                  </p>
                ))}
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">{'>'}</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleTerminalSubmit}
                  className="flex-1 bg-transparent border-none outline-none text-green-500 font-mono"
                  autoFocus
                />
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Experience Section */}
      <section className="py-20 px-4 md:px-8" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].experience}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />

            <div className="space-y-20">
              {experience.map((job, index) => (
                <div key={index} className="relative fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 rounded-full border-4 border-border bg-background overflow-hidden hover-glow">
                      <Image
                        src={job.logo}
                        alt={job.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={`w-5/12 ${index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'}`}>
                    <Card className="p-6 hover-lift transition-all duration-300">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-primary">{language === 'en' ? job.role : job.role_fr}</h3>
                        <p className="text-muted-foreground">{language === 'en' ? job.company : job.company}</p>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {(language === 'en' ? job.responsibilities : job.responsibilities_fr).map((item, i) => (
                          <li key={i} className="flex items-start slide-in" style={{ animationDelay: `${i * 0.1}s` }}>
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 md:px-8 bg-card" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].projects}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift transition-all duration-300 bg-background fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="mb-4 hover-scale">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{language === 'en' ? project.title : project.title_fr}</h3>
                <p className="text-muted-foreground mb-4">{language === 'en' ? project.description : project.description_fr}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="hover-scale">{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <p className="text-center mt-8 text-muted-foreground">
            {translations[language].moreProjects}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].skills}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="text-2xl font-semibold mb-6 text-center capitalize">
                {category.replace(/([a-z])([A-Z])/g, "$1 & $2")}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex flex-col items-center p-4 bg-card rounded-lg hover:bg-primary transition-all duration-300 hover-lift fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {typeof skill.icon === "string" ? (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-12 h-12 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </div>
                    )}
                    <span className="relative z-10 group-hover:text-primary-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 md:px-8 bg-card" id="certifications">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].certifications}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              className="p-6 hover-lift transition-all duration-300 fade-in"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg">
                  <Image src="/oracle.svg" alt="Oracle Logo" className="w-8 h-8" /> {/* Oracle Logo */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Oracle Database Administration 2019 Certified Professional</h3>
                  <p className="text-muted-foreground mb-2">Oracle</p>
                  <p className="text-sm text-muted-foreground">{translations[language].issued} June 2025 · {translations[language].expires} June 2027</p>
                  <a href="https://www.example.com/google-cloud-certification" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`mt-4 px-6 py-2 rounded-lg transition duration-200 ${
                        theme === "dark" ? "bg-primary text-black hover:bg-primary-dark" : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                    >
                      {translations[language].view}
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
            <Card
              className="p-6 hover-lift transition-all duration-300 fade-in"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg">
                  <Image src="/oracle.svg" alt="Oracle Logo" className="w-8 h-8" /> {/* Oracle Logo */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Oracle Cloud Infrastructure 2024 Certified Foundations Associate</h3>
                  <p className="text-muted-foreground mb-2">Oracle</p>
                  <p className="text-sm text-muted-foreground">{translations[language].issued} December 2024 · {translations[language].expires} December 2026</p>
                  <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=A205112A3594D28DA4A152B9A53DAAFC4709A76C605A7C0D830D858EF2632DFB" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`mt-4 px-6 py-2 rounded-lg transition duration-200 ${
                        theme === "dark" ? "bg-primary text-black hover:bg-primary-dark" : "bg-primary text-white hover:bg-primary-dark"
                      }`}
                    >
                      {translations[language].view}
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 md:px-8" id="education">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].education}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>
          <div className="space-y-8">
            <Card className="p-6 hover-lift transition-all duration-300 fade-in">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg">
                  <Image src="/EMSI.svg" alt="Ecole Marocaine Des Sciences de l'Ingenieur Logo" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{translations[language].diploma}</h3>
                  <p className="text-muted-foreground mb-2">Ecole Marocaine Des Sciences de l'Ingenieur</p>
                  <p className="text-sm text-muted-foreground mb-4">2021 - 2026</p>
                  <p className="text-muted-foreground">
                    {translations[language].softwareDevelopment}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 bg-card" id="contact">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in">
            {translations[language].connect}
            <div className="w-20 h-1 bg-primary mx-auto mt-4" />
          </h2>

          <div className="grid grid-cols-1 gap-12">
            {/* Social Links */}
            <div className="space-y-6 flex flex-col justify-center items-center">
              <div className="w-full max-w-xs space-y-4">

                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift fade-in w-full"
                  style={{ animationDelay: '0.4s' }}
                  asChild
                >
                  <a href="https://github.com/yasserabdelwahid" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    {translations[language].github}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift fade-in w-full"
                  style={{ animationDelay: '0.6s' }}
                  asChild
                >
                  <a href="https://www.linkedin.com/in/yasser-abdelwahid-889876257/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    {translations[language].linkedin}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="hover-lift fade-in w-full"
                  style={{ animationDelay: '0.8s' }}
                  asChild
                >
                  <a href="mailto:abdelwahidyasser1@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    {translations[language].email}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
