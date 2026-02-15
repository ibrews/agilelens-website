import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Variation C: Immersive/Dark | Agile Lens',
};

export default function VariationC() {
  return (
    <div>
      {/* Rationale Banner */}
      <div className="bg-cyan-950 border-b border-cyan-800 py-3 px-6 text-center text-sm text-cyan-200">
        <strong>Variation C — Immersive/Dark:</strong> Striking, professional, cutting-edge. Cyan + green accents on pure black. Sci-fi grid patterns, glowing elements. Signals &quot;we are the future.&quot; For tech-forward clients.
        <Link href="/" className="ml-4 underline">← Back to default</Link>
      </div>

      {/* Hero - Matrix/Tron aesthetic */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(0,212,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-green-500/6 blur-[150px]" />
        
        {/* Scan lines */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-lg shadow-cyan-400/50" />
            <span className="text-cyan-400 text-sm font-mono tracking-wider">SYSTEM ONLINE</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter">
            <span className="text-white">AGILE</span>
            <br />
            <span style={{ background: 'linear-gradient(90deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              LENS
            </span>
          </h1>
          <div className="mt-8 max-w-xl">
            <p className="text-lg text-white/50 font-mono leading-relaxed">
              &gt; Immersive design studio<br />
              &gt; XR / VR / AR / MR<br />
              &gt; Architecture × Entertainment<br />
              &gt; New York City, est. 2014
            </p>
          </div>
          <div className="mt-12 flex gap-4">
            <Link href="/portfolio" className="group px-8 py-4 bg-cyan-400 text-black font-bold font-mono tracking-wider hover:bg-cyan-300 transition animate-glow rounded">
              ENTER →
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-cyan-400/30 text-cyan-400 font-mono tracking-wider hover:bg-cyan-400/10 transition rounded">
              CONTACT
            </Link>
          </div>
        </div>
      </section>

      {/* Products - Terminal style */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <h2 className="text-sm font-mono text-green-400 uppercase tracking-wider">Products.sys</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'BLUEPRINT IMMERSIVE', desc: 'Architectural previz engine. Configure venues in real-time VR.', status: 'ACTIVE' },
              { name: 'HOLODECK ANYWHERE', desc: 'Wireless co-located PCVR. 82×65ft photoreal environments.', status: 'ACTIVE' },
              { name: 'STAGE PRESENCE', desc: 'VR/MR theater platform. Rehearse and perform virtually.', status: 'ACTIVE' },
              { name: 'PERFORMR', desc: 'Live mocap → MetaHuman pipeline. Real-time avatar control.', status: 'ACTIVE' },
              { name: 'FLOOR TOUR', desc: 'Self-service VR floor plan visualization.', status: 'ACTIVE' },
              { name: 'HYPERREAL ESTATE', desc: 'Raytraced architectural viz. 90 FPS VR-optimized.', status: 'ACTIVE' },
            ].map(p => (
              <div key={p.name} className="p-6 border border-cyan-400/10 bg-cyan-400/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] transition-all rounded">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono font-bold text-white tracking-wider">{p.name}</h3>
                  <span className="text-xs font-mono text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> {p.status}
                  </span>
                </div>
                <p className="text-sm text-white/40 font-mono">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - data visualization style */}
      <section className="py-24 bg-black border-t border-cyan-400/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '10+', label: 'YEARS' },
              { val: '50+', label: 'PROJECTS' },
              { val: '$100M+', label: 'CLIENT REV' },
              { val: '6', label: 'PRODUCTS' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-4xl md:text-6xl font-black font-mono" style={{ background: 'linear-gradient(90deg, #00d4ff, #00ff88)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {s.val}
                </div>
                <div className="text-xs font-mono text-white/30 tracking-wider mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - holographic */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.03] to-transparent relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 rounded-full blur-3xl" />
            <p className="text-2xl md:text-4xl text-white font-light leading-relaxed mb-8">
              &ldquo;The Holodeck is so ambitious no single hardware provider has been able to make everything work. <span className="text-cyan-400 font-semibold">And yet, it does work.</span>&rdquo;
            </p>
            <p className="font-mono text-sm text-cyan-400/60">IAN HAMILTON // EDITOR-IN-CHIEF, UPLOADVR</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            INITIALIZE<br /><span className="text-cyan-400">YOUR PROJECT</span>
          </h2>
          <p className="text-white/40 font-mono mb-10">&gt; Ready to build something that doesn&apos;t exist yet?</p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-cyan-400 text-black font-bold font-mono tracking-wider text-lg hover:bg-cyan-300 transition animate-glow rounded">
            INITIATE CONTACT →
          </Link>
        </div>
      </section>
    </div>
  );
}
