import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    viewport={{ once: true, margin: "-10%" }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.1,
      ease: [0.21, 0.47, 0.32, 0.98] 
    }}
    className="grid grid-cols-12 gap-0 items-start group cursor-pointer w-full mb-12 last:mb-5"
  >
    {/* Left margin indentation */}
    <div className="hidden md:block md:col-span-2"></div>

    {/* Metadata column - right-aligned to the image gutter */}
    <div className="col-span-12 md:col-span-2 flex flex-col items-end pr-6 pt-0">
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white mb-6">
        {icon ? (
          <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        ) : (
          <span className="font-normal text-[18px] font-['Inter']">{initial}</span>
        )}
      </div>
      <h2 className="font-normal uppercase tracking-[0.1em] text-[12px] leading-[1.3] text-right max-w-[160px]">{title}</h2>
      <p className="text-neutral-400 uppercase tracking-[0.15em] text-[10px] mt-2 font-normal text-right">{location}</p>
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

const App = () => {
  const [activeCategory, setActiveCategory] = React.useState('ARCHITECTURE');
  const [activeSection, setActiveSection] = React.useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

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

  const projects = activeCategory === 'ARCHITECTURE' ? architectureProjects : interiorProjects;

  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white tonal-shift-via-opacity flex justify-between items-center px-16 py-8">
        <div className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-black select-none">Tashi Dhendup</div>
        <div className="hidden lg:flex gap-14 items-center">
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'ARCHITECTURE' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => setActiveCategory('ARCHITECTURE')}
          >
            ARCHITECTURE
          </a>
          <a
            className={`font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal cursor-pointer pb-1 transition-all duration-300 ${activeCategory === 'INTERIORS' ? 'text-black border-b border-black' : 'text-neutral-400 hover:text-black'}`}
            onClick={() => setActiveCategory('INTERIORS')}
          >
            INTERIORS
          </a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">BLOG</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">ABOUT</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">CONTACT ME</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-neutral-500 cursor-pointer text-[20px] font-light">search</span>
          <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-neutral-400 cursor-pointer hover:text-black transition-colors duration-300">SEARCH</span>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-28 px-16 pb-24 max-w-[1920px] mx-auto min-h-[60vh]">
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
            {projects.map((project, index) => (
              <ProjectEntry key={`${activeCategory}-${index}`} index={index} {...project} />
            ))}
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
        <div className="flex flex-wrap justify-center gap-[4.5cm] items-start text-center">
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
