import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroImg from './assets/hero.png';
import profileImg from './assets/myphoto/tashib.webp';
import img1 from './assets/projectphoto/1.jpg';
import img2 from './assets/projectphoto/2.jpg';
import img3 from './assets/projectphoto/3.jpg';
import img4 from './assets/projectphoto/4.jpg';
import int1 from './assets/projectinterior/1.jpg';
import int2 from './assets/projectinterior/2.jpg';
import int3 from './assets/projectinterior/3.jpg';
import int4 from './assets/projectinterior/4.jpg';

const ProjectEntry = ({ initial, title, location, image, altText, icon, index }) => (
  <motion.section
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}
    className="grid grid-cols-12 gap-0 items-start group cursor-pointer w-full mb-12 last:mb-5"
  >
    {/* Left margin indentation */}
    <div className="hidden md:block md:col-span-2"></div>

    {/* Metadata column - right-aligned to the image gutter on desktop, left on mobile */}
    <div className="col-span-12 md:col-span-2 flex flex-col items-start md:items-end pr-0 md:pr-6 pt-0 mb-6 md:mb-0">
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white mb-4 md:mb-6">
        {icon ? (
          <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        ) : (
          <span className="font-normal text-[18px] font-['Inter']">{initial}</span>
        )}
      </div>
      <h2 className="font-normal uppercase tracking-[0.1em] text-[12px] leading-[1.3] text-left md:text-right max-w-[200px] md:max-w-[160px]">{title}</h2>
      <p className="text-neutral-400 uppercase tracking-[0.15em] text-[10px] mt-2 font-normal text-left md:text-right">{location}</p>
    </div>

    {/* Image column - 4 columns wide */}
    <div className="col-span-12 md:col-span-4 aspect-[1.3/1] overflow-hidden bg-neutral-100">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        title={altText}
      />
    </div>

    {/* Right large margin */}
    <div className="hidden md:block md:col-span-4"></div>
  </motion.section>
);

const BlogEntry = ({ title, date, category, excerpt, image, index }) => (
  <motion.article
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-5%" }}
    transition={{
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98]
    }}
    className="grid grid-cols-12 gap-0 items-start group cursor-pointer w-full mb-24"
  >
    <div className="hidden md:block md:col-span-2"></div>

    <div className="col-span-12 md:col-span-2 flex flex-col items-start md:items-end pr-0 md:pr-8 pt-0 text-left md:text-right mb-6 md:mb-0">
      <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-neutral-400 mb-2">{category}</span>
      <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] text-black font-medium">{date}</span>
    </div>

    <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
      <div className="aspect-[2/1] overflow-hidden bg-neutral-100 mb-6">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="font-['Inter'] font-normal uppercase tracking-[0.1em] text-[20px] md:text-[24px] leading-tight text-black max-w-2xl">
        {title}
      </h2>
      <p className="font-['Inter'] text-[14px] leading-relaxed text-neutral-500 max-w-xl">
        {excerpt}
      </p>
      <div className="flex items-center gap-2 mt-2 group/link">
        <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] font-medium text-black border-b border-black pb-1">Read Perspective</span>
        <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
      </div>
    </div>
  </motion.article>
);

const AboutView = () => (
  <div className="grid grid-cols-12 gap-0 pt-12 pb-32">
    <div className="hidden md:block md:col-span-2"></div>

    <div className="col-span-12 md:col-span-8 flex flex-col gap-24">
      {/* Intro Section */}
      <section className="flex flex-col gap-12 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-8">
            <h1 className="font-['Inter'] font-normal text-[32px] md:text-[48px] leading-[1.1] uppercase tracking-[-0.02em] text-black">
              Tashi Dhendup <br />
              <span className="text-neutral-400">Architectural Perspective</span>
            </h1>
            <p className="font-['Inter'] text-[15px] md:text-[18px] leading-relaxed text-neutral-600 max-w-2xl px-2 md:px-0">
              Currently pursuing a Bachelors in Architecture at the College of Science and Technology in Phuntsholing, Bhutan. My work focuses on the intersection of heritage, sustainability, and modern structural expression.
              Currently contributing to the design and build of significant hospitality and monastic projects across Bhutan as an intern at Saidpiece Architects.
            </p>
          </div>
          <div className="w-full md:w-48 h-80 md:h-64 flex-shrink-0 bg-neutral-100 overflow-hidden">
            <img src={profileImg} alt="Tashi Dhendup Portfolio" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 font-['Inter']" />
          </div>
        </div>
      </section>

      {/* Grid: Education & Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {/* Education */}
        <section className="flex flex-col gap-8">
          <h2 className="font-['Inter'] uppercase tracking-[0.2em] text-[12px] font-medium text-black border-b border-neutral-100 pb-4">Education</h2>
          <div className="flex flex-col gap-2">
            <span className="font-['Inter'] text-[14px] font-semibold text-black uppercase">Bachelors in Architecture</span>
            <span className="font-['Inter'] text-[14px] text-neutral-500 uppercase tracking-wider">College of Science and Technology</span>
            <span className="font-['Inter'] text-[13px] text-neutral-400">Phuntsholing, Bhutan</span>
          </div>
        </section>

        {/* Languages */}
        <section className="flex flex-col gap-8">
          <h2 className="font-['Inter'] uppercase tracking-[0.2em] text-[12px] font-medium text-black border-b border-neutral-100 pb-4">Languages</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-baseline">
              <span className="font-['Inter'] text-[14px] uppercase tracking-wider text-black">English</span>
              <span className="font-['Inter'] text-[11px] uppercase tracking-[0.1em] text-neutral-400 font-bold">Proficient</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="font-['Inter'] text-[14px] uppercase tracking-wider text-black">Dzongkha</span>
              <span className="font-['Inter'] text-[11px] uppercase tracking-[0.1em] text-neutral-400 font-bold">Native</span>
            </div>
          </div>
        </section>
      </div>

      {/* Experience Table */}
      <section className="flex flex-col gap-12">
        <h2 className="font-['Inter'] uppercase tracking-[0.2em] text-[12px] font-medium text-black border-b border-neutral-100 pb-4">Selected Experience</h2>
        <div className="flex flex-col overflow-hidden">
          {[
            {
              project: 'Yongkola ECO-Lodge',
              location: 'Mongar, Bhutan',
              type: 'Hospitality',
              cost: 'Nu. 100 Million',
              brief: 'Design and Build',
              status: 'August 2025 – Cont’d'
            },
            {
              project: 'Yangkhil Cafe',
              location: 'Trongsa, Bhutan',
              type: 'Commercial Building',
              cost: 'Nu. 30 Million',
              brief: 'Construction Drawing + Supervision',
              status: 'June 2025 – Cont’d'
            },
            {
              project: 'Yangkhil Resort Renovation',
              location: 'Trongsa, Bhutan',
              type: 'Interior Design',
              cost: 'Nu. 50 Million',
              brief: 'Conceptual + Interior Design',
              status: 'Dec 2025 – Cont’d'
            },
            {
              project: 'PHD Residence',
              location: 'Dodena, Thimphu',
              type: 'Monastic Building',
              cost: 'Nu. 50 Million',
              brief: 'Conceptual + Construction Drawing',
              status: 'Dec 2025 – Cont’d'
            }
          ].map((exp, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-neutral-50 last:border-none group">
              <div className="col-span-1 md:col-span-4 flex flex-col gap-1">
                <span className="font-['Inter'] text-[16px] font-medium text-black group-hover:underline underline-offset-4 decoration-1">{exp.project}</span>
                <span className="font-['Inter'] uppercase tracking-[0.15em] text-[10px] text-neutral-400">{exp.location}</span>
              </div>
              <div className="col-span-1 md:col-span-3 flex flex-col gap-1">
                <span className="font-['Inter'] text-[13px] text-neutral-600 font-medium">{exp.type}</span>
                <span className="font-['Inter'] text-[11px] text-neutral-400 uppercase tracking-widest">{exp.cost}</span>
              </div>
              <div className="col-span-1 md:col-span-3">
                <p className="font-['Inter'] text-[13px] text-neutral-500 leading-relaxed font-light">{exp.brief}</p>
              </div>
              <div className="col-span-1 md:col-span-2 text-left md:text-right">
                <span className="font-['Inter'] text-[11px] text-neutral-400 uppercase tracking-widest">{exp.status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

const ContactView = () => (
  <div className="grid grid-cols-12 gap-0 pt-12 pb-32">
    <div className="hidden md:block md:col-span-2"></div>

    <div className="col-span-12 md:col-span-8 flex flex-col gap-24">
      {/* Page Title */}
      <section className="flex flex-col gap-6 max-w-2xl">
        <h1 className="font-['Inter'] font-normal text-[32px] md:text-[48px] leading-[1.1] uppercase tracking-[-0.02em] text-black">
          Let's collaborate <br />
          <span className="text-neutral-400">on your next vision</span>
        </h1>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
        {/* Contact Form */}
        <div className="col-span-12 md:col-span-7">
          <form className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-2 border-b border-neutral-200 pb-2 focus-within:border-black transition-colors duration-300">
                <label className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] font-medium text-neutral-400">Name</label>
                <input type="text" placeholder="Your Name" className="bg-transparent border-none outline-none font-['Inter'] text-[14px] text-black placeholder:text-neutral-200 py-1" />
              </div>
              <div className="flex flex-col gap-2 border-b border-neutral-200 pb-2 focus-within:border-black transition-colors duration-300">
                <label className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] font-medium text-neutral-400">Email Address</label>
                <input type="email" placeholder="example@domain.com" className="bg-transparent border-none outline-none font-['Inter'] text-[14px] text-black placeholder:text-neutral-200 py-1" />
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b border-neutral-200 pb-2 focus-within:border-black transition-colors duration-300">
              <label className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] font-medium text-neutral-400">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="bg-transparent border-none outline-none font-['Inter'] text-[14px] text-black placeholder:text-neutral-200 py-1" />
            </div>
            <div className="flex flex-col gap-2 border-b border-neutral-200 pb-2 focus-within:border-black transition-colors duration-300">
              <label className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] font-medium text-neutral-400">Message</label>
              <textarea rows="4" placeholder="Tell us about your project..." className="bg-transparent border-none outline-none font-['Inter'] text-[14px] text-black placeholder:text-neutral-200 py-1 resize-none" />
            </div>
            <button className="w-max bg-black text-white px-10 py-4 font-['Inter'] uppercase tracking-[0.2em] text-[11px] font-medium transition-transform duration-300 active:scale-95 mt-4">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-16">
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter'] uppercase tracking-[0.2em] text-[11px] font-medium text-black border-b border-neutral-100 pb-3">New Business</h3>
              <a href="mailto:newbiz@tashidhendup.com" className="font-['Inter'] text-[14px] text-neutral-500 hover:text-black transition-colors duration-300 underline underline-offset-4 decoration-neutral-200">newbiz@tashidhendup.com</a>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter'] uppercase tracking-[0.2em] text-[11px] font-medium text-black border-b border-neutral-100 pb-3">Press & Media</h3>
              <a href="mailto:press@tashidhendup.com" className="font-['Inter'] text-[14px] text-neutral-500 hover:text-black transition-colors duration-300 underline underline-offset-4 decoration-neutral-200">press@tashidhendup.com</a>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter'] uppercase tracking-[0.2em] text-[11px] font-medium text-black border-b border-neutral-100 pb-3">Offices</h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-['Inter'] text-[13px] font-medium text-black">Thimphu, Bhutan</span>
                  <p className="font-['Inter'] text-[12px] text-neutral-400 leading-relaxed uppercase tracking-wider">Dodena, Thimphu</p>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-['Inter'] text-[13px] font-medium text-black">Phuntsholing, Bhutan</span>
                  <p className="font-['Inter'] text-[12px] text-neutral-400 leading-relaxed uppercase tracking-wider">College of Science and Tech</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-['Inter'] uppercase tracking-[0.2em] text-[11px] font-medium text-black border-b border-neutral-100 pb-3">Connect</h3>
              <div className="flex gap-8">
                <a href="#" className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] text-neutral-400 hover:text-black transition-colors duration-300 underline underline-offset-4 decoration-neutral-200">Instagram</a>
                <a href="#" className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] text-neutral-400 hover:text-black transition-colors duration-300 underline underline-offset-4 decoration-neutral-200">LinkedIn</a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeCategory, setActiveCategory] = React.useState('ARCHITECTURE');
  const [activeSection, setActiveSection] = React.useState(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection(null);
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const architectureProjects = [
    {
      icon: 'layers',
      title: 'GASTRONOMY OPEN ECOSYSTEM',
      location: 'SAN SEBASTIAN, SPAIN',
      image: img1,
      altText: 'Gastronomy Open Ecosystem'
    },
    {
      initial: 'U',
      title: 'EAST SIDE COASTAL RESILIENCY',
      location: 'NEW YORK, UNITED STATES',
      image: img2,
      altText: 'East Side Coastal Resiliency'
    },
    {
      initial: '+',
      title: 'THE PLUS',
      location: 'MAGNOR, NORWAY',
      image: img3,
      altText: 'The Plus'
    },
    {
      initial: 'M',
      title: 'MUSEE ATELIER AUDEMARS PIGUET',
      location: 'LE BRASSUS, SWITZERLAND',
      image: img4,
      altText: 'Musee Atelier'
    }
  ];

  const interiorProjects = [
    {
      icon: 'chairs',
      title: 'GASTRONOMY INTERIOR',
      location: 'SAN SEBASTIAN, SPAIN',
      image: int1,
      altText: 'Gastronomy Interior'
    },
    {
      initial: 'L',
      title: 'RESIDENTIAL LOFT',
      location: 'NEW YORK, UNITED STATES',
      image: int2,
      altText: 'Residential Loft'
    },
    {
      initial: 'N',
      title: 'NORDIC EXHIBITION',
      location: 'MAGNOR, NORWAY',
      image: int3,
      altText: 'Nordic Interior'
    },
    {
      initial: 'A',
      title: 'ATELIER LOUNGE',
      location: 'LE BRASSUS, SWITZERLAND',
      image: int4,
      altText: 'Atelier Lounge'
    }
  ];

  const blogPosts = [
    {
      title: 'THE FUTURE OF SUSTAINABLE OFFICE DESIGN',
      date: 'MAR 24, 2026',
      category: 'STUDIO',
      image: img1,
      excerpt: 'Exploring how integrated ecosystems and biophilic elements are transforming modern workspaces into carbon-negative environments.'
    },
    {
      title: 'MATERIALITY: BEYOND THE SURFACE',
      date: 'FEB 12, 2026',
      category: 'RESEARCH',
      image: int3,
      excerpt: 'A deep dive into the tactile qualities of timber and stone, and how they define the emotional resonance of a space.'
    },
    {
      title: 'URBAN RESILIENCY IN COASTAL CITIES',
      date: 'JAN 28, 2026',
      category: 'FIELD NOTES',
      image: img2,
      excerpt: 'Observations from our recent site visits to New York, examining how architecture can respond to rising sea levels.'
    }
  ];

  const renderContent = () => {
    if (activeCategory === 'CONTACT') {
      return <ContactView />;
    }

    if (activeCategory === 'ABOUT') {
      return <AboutView />;
    }

    if (activeCategory === 'BLOG') {
      return blogPosts.map((post, index) => (
        <BlogEntry key={index} index={index} {...post} />
      ));
    }

    const projects = activeCategory === 'ARCHITECTURE' ? architectureProjects : interiorProjects;
    return projects.map((project, index) => (
      <ProjectEntry key={`${activeCategory}-${index}`} index={index} {...project} />
    ));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white tonal-shift-via-opacity flex justify-between items-center px-8 md:px-16 py-5 md:py-8 border-b border-neutral-50/50">
        <div 
          className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium text-black select-none cursor-pointer"
          onClick={() => handleCategoryChange('ARCHITECTURE')}
        >
          Tashi Dhendup
        </div>
        <div className="hidden lg:flex gap-14 items-center">
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'ARCHITECTURE' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => handleCategoryChange('ARCHITECTURE')}
          >
            ARCHITECTURE
          </a>
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'INTERIORS' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => handleCategoryChange('INTERIORS')}
          >
            INTERIORS
          </a>
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'BLOG' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => handleCategoryChange('BLOG')}
          >
            BLOG
          </a>
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'ABOUT' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => handleCategoryChange('ABOUT')}
          >
            ABOUT
          </a>
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-medium cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'CONTACT' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => handleCategoryChange('CONTACT')}
          >
            CONTACT ME
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-black cursor-pointer text-[20px] font-light">search</span>
            <span className="hidden sm:inline font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-neutral-400 cursor-pointer hover:text-black transition-colors duration-300">SEARCH</span>
          </div>
          <button
            className="lg:hidden p-2 text-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </nav>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 top-[52px] bg-white z-[40] px-8 py-12 flex flex-col gap-8 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pt-4">
              {['ARCHITECTURE', 'INTERIORS', 'BLOG', 'ABOUT', 'CONTACT'].map((cat, i) => (
                <motion.a
                  key={cat}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.4 }}
                  className={`font-['Inter'] uppercase tracking-[0.25em] text-[18px] font-medium cursor-pointer transition-all duration-300 w-max ${activeCategory === cat ? 'text-black' : 'text-neutral-400'}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat === 'CONTACT' ? 'CONTACT ME' : cat}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto border-t border-neutral-100 pt-12 pb-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="font-['Inter'] uppercase tracking-[0.2em] text-[10px] text-neutral-400 font-bold">New Projects</span>
                <a href="mailto:newbiz@tashidhendup.com" className="font-['Inter'] text-[15px] text-black font-medium">newbiz@tashidhendup.com</a>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-8">
                  <a href="#" className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] text-neutral-500 font-medium hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] text-neutral-500 font-medium hover:text-black transition-colors">LinkedIn</a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Canvas */}
      <main className="pt-28 md:pt-32 px-6 md:px-16 pb-24 max-w-[1920px] mx-auto min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="w-full py-24 px-6 md:px-12 bg-white flex flex-col gap-16 border-t border-neutral-100">
        <div className="flex justify-center w-full mb-8">
          <a
            className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:text-black transition-colors duration-300 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            BACK TO TOP
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-12 md:gap-[4.5cm] items-start text-center">
          {/* EMAIL */}
          <div className="relative flex flex-col items-start">
            <a
              className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300 select-none cursor-pointer pb-2"
              onClick={() => toggleSection('email')}
            >
              EMAIL {activeSection === 'email' ? '–' : '+'}
            </a>
            {activeSection === 'email' && (
              <div className="absolute top-10 left-0 flex flex-col gap-6 transition-all duration-500 ease-in-out opacity-100 animate-in fade-in slide-in-from-top-4 w-max z-10 bg-white">
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">NEW PROJECTS</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="mailto:newbiz@tashidhendup.com">newbiz@tashidhendup.com</a>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">PRESS</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="mailto:press@tashidhendup.com">press@tashidhendup.com</a>
                </div>
              </div>
            )}
          </div>

          {/* OFFICE */}
          <div className="relative flex flex-col items-start">
            <a
              className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300 select-none cursor-pointer pb-2"
              onClick={() => toggleSection('office')}
            >
              OFFICE {activeSection === 'office' ? '–' : '+'}
            </a>
            {activeSection === 'office' && (
              <div className="absolute top-10 left-0 flex flex-col gap-6 transition-all duration-500 ease-in-out opacity-100 animate-in fade-in slide-in-from-top-4 w-max z-10 bg-white">
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">THIMPHU</span>
                  <span className="font-['Inter'] text-[11px] font-normal text-black uppercase tracking-[0.05em]">Dodena, Thimphu</span>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">PHUNTSHOLING</span>
                  <span className="font-['Inter'] text-[11px] font-normal text-black uppercase tracking-[0.05em]">CST, Bhutan</span>
                </div>
              </div>
            )}
          </div>

          {/* SOCIAL */}
          <div className="relative flex flex-col items-start">
            <a
              className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300 select-none cursor-pointer pb-2"
              onClick={() => toggleSection('social')}
            >
              SOCIAL {activeSection === 'social' ? '–' : '+'}
            </a>
            {activeSection === 'social' && (
              <div className="absolute top-10 left-0 flex flex-col gap-6 transition-all duration-500 ease-in-out opacity-100 animate-in fade-in slide-in-from-top-4 w-max z-10 bg-white">
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">INSTAGRAM</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="#">@tashi_dhendup</a>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">LINKEDIN</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="#">Tashi Dhendup</a>
                </div>
              </div>
            )}
          </div>

          {/* LEGAL */}
          <div className="relative flex flex-col items-start">
            <a
              className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300 select-none cursor-pointer pb-2"
              onClick={() => toggleSection('legal')}
            >
              LEGAL {activeSection === 'legal' ? '–' : '+'}
            </a>
            {activeSection === 'legal' && (
              <div className="absolute top-10 left-0 flex flex-col gap-6 transition-all duration-500 ease-in-out opacity-100 animate-in fade-in slide-in-from-top-4 w-max z-10 bg-white">
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">PRIVACY</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="#">Privacy Policy</a>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-x-16 text-left items-baseline">
                  <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-black">TERMS</span>
                  <a className="font-['Inter'] text-[11px] font-normal text-black hover:underline underline decoration-1 underline-offset-4" href="#">Terms of Use</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-48 flex flex-col items-center gap-4 text-center">
          <div className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-black">Tashi Dhendup</div>
          <div className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400">© 2026 TASHI DHENDUP</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
