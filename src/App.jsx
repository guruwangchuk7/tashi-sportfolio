import React from 'react';
import img1 from './assets/projectphoto/1.jpg';
import img2 from './assets/projectphoto/2.jpg';
import img3 from './assets/projectphoto/3.jpg';
import img4 from './assets/projectphoto/4.jpg';
import img5 from './assets/projectphoto/5.jpg';

const ProjectEntry = ({ initial, title, location, image, altText, icon }) => (
  <section className="grid grid-cols-12 gap-0 items-start group cursor-pointer w-full mb-5 last:mb-5">
    {/* Left margin indentation */}
    <div className="hidden md:block md:col-span-2"></div>

    {/* Metadata column - right-aligned to the image gutter */}
    <div className="col-span-12 md:col-span-2 flex flex-col items-end pr-6 pt-0">
      <div className="w-10 h-10 bg-black flex items-center justify-center text-white mb-6">
        {icon ? (
          <span className="material-symbols-outlined text-white text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
        ) : (
          <span className="font-black text-[18px] font-['Inter']">{initial}</span>
        )}
      </div>
      <h2 className="font-normal uppercase tracking-[0.1em] text-[12px] leading-[1.3] text-right max-w-[160px]">{title}</h2>
      <p className="text-neutral-400 uppercase tracking-[0.15em] text-[10px] mt-2 font-normal text-right">{location}</p>
    </div>

    {/* Image column - 4 columns wide */}
    <div className="col-span-12 md:col-span-4 aspect-[1.3/1] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
        title={altText}
      />
    </div>

    {/* Right large margin */}
    <div className="hidden md:block md:col-span-4"></div>
  </section>
);

const App = () => {
  const projects = [
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

  return (
    <div className="bg-white min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white tonal-shift-via-opacity flex justify-between items-center px-16 py-8">
        <div className="text-4xl font-black tracking-tighter text-black select-none">BIG</div>
        <div className="hidden lg:flex gap-14 items-center">
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-black border-b border-black pb-1 active" href="#">ARCHITECTURE</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">INTERIORS</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">LANDSCAPE</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">PLANNING</a>
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400 hover:text-black transition-colors duration-300" href="#">PRODUCTS</a>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-neutral-500 cursor-pointer text-[20px] font-light">search</span>
          <span className="font-['Inter'] uppercase tracking-[0.15em] text-[11px] font-normal text-neutral-400 cursor-pointer hover:text-black transition-colors duration-300">MUSEUM</span>
        </div>
      </nav>

      {/* Main Content Canvas */}
      <main className="pt-48 px-16 pb-24 max-w-[1920px] mx-auto">
        {projects.map((project, index) => (
          <ProjectEntry key={index} {...project} />
        ))}
      </main>

      {/* Footer */}
      <footer className="w-full py-24 px-6 md:px-12 bg-white flex flex-col gap-16 border-t border-neutral-100">
        <div className="flex justify-center w-full mb-8">
          <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:text-black transition-colors duration-300" href="#">BACK TO TOP</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:underline decoration-1 underline-offset-4" href="#">EMAIL +</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:underline decoration-1 underline-offset-4" href="#">OFFICE +</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:underline decoration-1 underline-offset-4" href="#">SOCIAL +</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-500 hover:underline decoration-1 underline-offset-4" href="#">LEGAL +</a>
          </div>
        </div>
        <div className="mt-24 flex flex-col items-start gap-4">
          <div className="text-4xl font-black tracking-tighter text-black">BIG</div>
          <div className="font-['Inter'] uppercase tracking-[0.15em] text-[12px] font-normal text-neutral-400">© 2024 BJARKE INGELS GROUP</div>
        </div>
      </footer>
    </div>
  );
};

export default App;
