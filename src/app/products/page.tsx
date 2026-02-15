import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Products | Agile Lens',
  description: 'Explore Agile Lens products: Blueprint Immersive for architects, Holodeck Anywhere for wireless PCVR, Stage Presence for theater, and more.',
  keywords: 'Blueprint Immersive, Holodeck Anywhere, Stage Presence, PerforMR, Floor Tour, VR architecture, theater VR, immersive design tools',
};

const products = [
  {
    id: 'blueprint',
    name: 'Blueprint Immersive',
    tagline: 'Design spaces before they exist',
    category: 'For Architects & Designers',
    desc: 'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning, evaluate sightlines, and iterate on spatial designs in real-time VR.',
    features: ['Real-time venue configuration', 'Sightline analysis', 'Construction planning optimization', 'Collaborative review sessions', 'Photorealistic rendering'],
    icon: '',
    color: 'from-blue-500/20 to-cyan-500/20',
    image: '/products/blueprint-immersive.png',
  },
  {
    id: 'holodeck',
    name: 'Holodeck Anywhere',
    tagline: 'Walk through your vision, wirelessly',
    category: 'For Architecture & Luxury Real Estate',
    desc: 'Wireless photoreal co-located PCVR that lets multiple users walk freely through virtual spaces together. Our Four Seasons deployment drove 9-figures in pre-construction sales across an 82×65-foot holodeck space.',
    features: ['Wireless multi-user VR', 'Photoreal Unreal Engine rendering', 'Large-scale tracking (80+ ft)', 'Co-located collaboration', 'Turnkey luxury deployment'],
    icon: '',
    color: 'from-emerald-500/20 to-teal-500/20',
    image: '/products/holodeck-anywhere.png',
  },
  {
    id: 'stagepresence',
    name: 'Stage Presence',
    tagline: 'Rehearse and perform in virtual space',
    category: 'For Theater & Live Events',
    desc: 'Standalone VR/MR rehearsal tool and performance platform designed to integrate with existing media and live event industry practices. From blocking to full performances, Stage Presence bridges physical and virtual stages.',
    features: ['Standalone VR/MR support', 'Theater-native workflows', 'Rehearsal & performance modes', 'Integrates with existing event tech', 'Multi-performer support'],
    icon: '',
    color: 'from-purple-500/20 to-pink-500/20',
    image: '/products/stage-presence.png',
  },
  {
    id: 'performr',
    name: 'PerforMR',
    tagline: 'Animate avatars with your body',
    category: 'For Performers & Creators',
    desc: 'Live-actor animation pipeline. A multi-source mocap tool for performers to animate one or many MetaHumans, real-time or saved for playback, in Virtual Reality or Mixed Reality.',
    features: ['Multi-source motion capture', 'Real-time MetaHuman animation', 'VR and MR output', 'Playback recording', 'Multi-avatar control'],
    icon: '',
    color: 'from-orange-500/20 to-red-500/20',
    image: '/products/performr.png',
  },
  {
    id: 'floortour',
    name: 'Floor Tour',
    tagline: 'Walk your floor plans in VR',
    category: 'For Real Estate & Design',
    desc: 'Self-service, real-world scale floor plan visualization software. Walk your portfolio of designs and renders in VR with just a few clicks.',
    features: ['Self-service setup', 'Real-world scale', 'Quick import workflow', 'Portfolio management', 'VR walkthrough'],
    icon: '',
    color: 'from-amber-500/20 to-yellow-500/20',
    image: '/products/floor-tour.png',
  },
  {
    id: 'hyperreal',
    name: 'Hyperreal Estate',
    tagline: 'Photoreal visualization, optimized for VR',
    category: 'For Developers & Architects',
    desc: 'Photoreal 3D architectural and design visualization. Raytraced with Unreal Engine and optimized for high-end VR at 90 FPS.',
    features: ['Raytraced rendering', 'Unreal Engine pipeline', '90 FPS VR optimization', 'Material accuracy', 'Client presentation ready'],
    icon: '',
    color: 'from-slate-500/20 to-zinc-500/20',
    image: '/products/hyperreal-estate.png',
  },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Our Products</h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Purpose-built tools for immersive workflows across architecture, entertainment, and real estate.
          </p>
        </div>
      </section>

      {/* Products */}
      {products.map((p, i) => (
        <section key={p.id} id={p.id} className={`py-24 ${i % 2 === 0 ? 'bg-[var(--color-surface)]' : ''}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">{p.category}</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{p.name}</h2>
                <p className="text-xl text-[var(--color-text-muted)] mb-6">{p.tagline}</p>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">{p.desc}</p>
                <ul className="space-y-3 mb-8">
                  {p.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="inline-block px-6 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:opacity-90 transition">
                  Learn More
                </Link>
              </div>
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${p.color} border border-[var(--color-border)] flex items-center justify-center text-6xl overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                {p.image ? (
                  <img src={`/agilelens-website${p.image}`} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <span className="text-white/30 text-sm font-medium tracking-wider uppercase">{p.name}</span>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
