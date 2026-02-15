'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  name: string;
  year: string;
  client?: string;
  desc: string;
  category: string;
  awards?: string;
  tech?: string;
  video?: string;
  image?: string;
};

const projects: Project[] = [
  { name: 'Four Seasons Private Residences Lake Austin', year: '2023', client: 'Four Seasons / DBOX', desc: 'A 5,300 sq ft "Holodeck" allowing guests to wirelessly explore $300M worth of amenities in photoreal VR across an 82×65-foot space.', category: 'Architecture', tech: 'Unreal Engine, Optitrack, Antilatency', video: 'https://youtu.be/6la2yieiCG0', image: '/portfolio/four-seasons-holodeck.jpg' },
  { name: 'Body of Mine', year: '2024', client: 'KOST / Meta Quest Store', desc: 'Award-winning full-body VR experience inviting users to inhabit the body of another gender. Agile Lens handled Meta Quest port and optimization.', category: 'Entertainment', awards: 'Producers Guild Innovation Award, BAFTA, SXSW', image: '/portfolio/body-of-mine.jpg' },
  { name: 'La Pasión XR', year: '2024', client: 'Gateway Chamber Orchestra', desc: 'Ephemeral, audio-reactive journey through Osvaldo Golijov\'s La Pasion según San Marcos with point cloud scans and volumetric highlights.', category: 'Entertainment', tech: 'Unreal Engine', image: '/portfolio/la-pasion-xr.png' },
  { name: 'A Christmas Carol VR', year: '2021–Present', desc: 'Live, real-time immersive adaptation of Dickens\' classic with facial/motion capture performers in virtual Victorian London. Annual R&D tradition.', category: 'Entertainment', tech: 'Unreal Engine, Facial/Motion Capture', image: '/portfolio/xmas-carol.jpg' },
  { name: 'The Orchard', year: '2022', client: 'Arlekin Players / Baryshnikov Arts Center', desc: 'Hybrid performance starring Mikhail Baryshnikov and Jessica Hecht. Created the virtual side of this Cherry Orchard adaptation.', category: 'Entertainment', image: '/portfolio/the-orchard.png' },
  { name: 'Song of the Ambassadors', year: '2022', client: 'Alice Tully Hall @ Lincoln Center', desc: 'Previz for an experimental AI opera with lighting design by Refik Anadol.', category: 'Entertainment', tech: 'Unreal Engine', image: '/portfolio/song-of-ambassadors.png' },
  { name: 'Dell Cybersecurity VR Challenge', year: '2023', client: 'Dell / Fair Worlds', desc: 'Narrative VR experience teaching cybersecurity tenets through a hacked booth scenario with motion capture and Metahumans.', category: 'Marketing', tech: 'Move.ai, Unreal Engine', image: '/portfolio/dell-cybersecurity.png' },
  { name: 'Vodafone DAB Showroom', year: '2023', client: 'Vodafone / Infinite Reality', desc: 'Immersive VR car showroom with an AI car salesman and vehicle customization.', category: 'Marketing' },
  { name: 'Rice University Music & Performing Arts Center', year: '2014–2020', client: 'Allan Greenberg / Fisher Dachs', desc: 'VR used from concept to completion for a 600-seat opera theatre. Evaluated sightlines, aisles, and aesthetics.', category: 'Architecture', tech: 'Unity, Unreal, Revit', image: '/portfolio/rice-opera.jpg' },
  { name: 'The Shed @ Hudson Yards', year: '2016–2019', client: 'Diller Scofidio + Renfro / Fisher Dachs', desc: 'Custom AR and VR for parametric design options and seat count optimization.', category: 'Architecture', image: '/portfolio/the-shed.png' },
  { name: 'Ghosted', year: '2019', desc: 'AR "dating simulator for ghosts" with volumetrically captured actors across a table.', category: 'Entertainment', awards: 'Most Innovative Immersive Experience (NBFF)', tech: 'Magic Leap, Depthkit, Unreal Engine', image: '/portfolio/ghosted.png' },
  { name: 'Loveseat', year: '2019', client: 'Double Eye Studios / Venice Film Festival', desc: 'Comedy performed simultaneously to virtual and real-world audiences where performers intersect realities.', category: 'Entertainment' },
  { name: 'Jettison / On Board XR', year: '2020–2021', desc: 'Live theater in open-source, browser-based VR using Mozilla Hubs.', category: 'Entertainment', image: '/portfolio/onboard.jpg' },
  { name: 'Frederic Church Ombra Exhibition', year: '2019', client: 'Sage and Coombe Architects', desc: 'iOS AR app for an architectural exhibition at Olana.', category: 'Architecture', tech: 'iOS AR' },
  { name: 'Statue of Liberty Museum', year: '2017', client: 'FXCollaborative', desc: 'Photoreal VR tour of Liberty Island with the new museum, optimized for 90 FPS.', category: 'Architecture', image: '/portfolio/statue-of-liberty.jpg' },
  { name: 'Ed Sullivan Theater', year: '2017', client: 'Bravo Media', desc: 'GearVR/Browser tool to determine optimal projection locations for stained-glass effect.', category: 'Architecture' },
  { name: 'Intel Project Arena', year: '2018', client: 'Intel / The Glimpse Group / HOK', desc: 'Massive VR arena with thousands of AI fans showcasing Intel Core i9 processors.', category: 'Marketing', tech: 'Unreal Engine', image: '/portfolio/intel-project-arena.png' },
  { name: 'Blueprint Immersive', year: '2024+', desc: 'Tools and previz software for architects — high-fidelity venue configuration.', category: 'R&D', image: '/products/blueprint-immersive.png' },
  { name: 'Star Wars - Halcyon VR', year: '2024+', desc: 'Entertainment experience (in progress).', category: 'R&D' },
  { name: 'PerforMR', year: '2024+', desc: 'Performance research — live-actor animation pipeline.', category: 'R&D', image: '/products/performr.png' },
  { name: 'Virtually Tonight', year: '2024+', desc: 'Entertainment project (in progress).', category: 'R&D' },
];

const categories = ['All', 'Architecture', 'Entertainment', 'Marketing', 'R&D'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Portfolio</h1>
        <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
          A decade of pushing boundaries in immersive technology across architecture, entertainment, and beyond.
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`px-4 py-1.5 text-sm rounded-full border transition-all ${
              activeCategory === c
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/40 transition-all">
            <div className="w-full h-40 rounded-lg bg-gradient-to-br from-[var(--color-accent)]/5 to-[var(--color-accent-2)]/5 border border-[var(--color-border)] mb-4 flex items-center justify-center text-3xl overflow-hidden">
              {p.image ? (
                <img src={`/agilelens-website${p.image}`} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
              ) : (
                <span className="text-white/40 text-sm font-medium tracking-wider uppercase">{p.category}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs uppercase tracking-wider text-[var(--color-accent)]">{p.category}</span>
              <span className="text-xs text-[var(--color-text-muted)]">· {p.year}</span>
            </div>
            <h3 className="text-lg font-bold mb-2">{p.name}</h3>
            {p.client && <div className="text-xs text-[var(--color-text-muted)] mb-2">Client: {p.client}</div>}
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-3">{p.desc}</p>
            {p.awards && <div className="text-xs text-yellow-400 mb-2">{p.awards}</div>}
            {p.tech && <div className="text-xs text-[var(--color-text-muted)]">Tech: {p.tech}</div>}
            {p.video && (
              <a href={p.video} target="_blank" rel="noopener" className="inline-block mt-3 text-sm text-[var(--color-accent)] hover:underline">Watch Video →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
