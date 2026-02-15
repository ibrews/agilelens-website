import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Variation B: Bold/Theatrical | Agile Lens',
};

export default function VariationB() {
  return (
    <div>
      {/* Rationale Banner */}
      <div className="bg-orange-950 border-b border-orange-800 py-3 px-6 text-center text-sm text-orange-200">
        <strong>Variation B — Bold/Theatrical:</strong> Playful, memorable, reflects theater + XR roots. Warm orange accents, dramatic typography, stage-curtain energy. For a studio born from architecture AND theater.
        <Link href="/" className="ml-4 underline">← Back to default</Link>
      </div>

      {/* Hero - Theatrical curtain reveal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0015, #1a0028, #2d0040)' }}>
        {/* Stage lights */}
        <div className="absolute top-0 left-1/4 w-64 h-[600px] bg-gradient-to-b from-orange-500/20 to-transparent rotate-12 blur-3xl" />
        <div className="absolute top-0 right-1/4 w-64 h-[600px] bg-gradient-to-b from-purple-500/20 to-transparent -rotate-12 blur-3xl" />
        
        {/* Curtain borders */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-red-900/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-red-900/30 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-8 text-orange-400 text-sm uppercase tracking-[0.5em]">✦ Act I ✦</div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] mb-8">
            <span className="text-white">The</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg, #ff6b35, #c77dff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Stage
            </span>
            <br />
            <span className="text-white">is</span>{' '}
            <span className="italic font-light text-purple-300">Everywhere</span>
          </h1>
          <p className="text-xl text-purple-200/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            We build worlds where architecture meets performance, where the virtual becomes visceral, and where every space tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-lg shadow-orange-500/25">
              🎭 Enter the Portfolio
            </Link>
            <Link href="/contact" className="px-10 py-5 border-2 border-purple-400/40 text-purple-200 font-semibold rounded-full text-lg hover:bg-purple-500/10 transition">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Products as "Acts" */}
      <section className="py-24" style={{ background: '#0d0015' }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">The Program</h2>
          <p className="text-center text-purple-300/60 mb-16 text-lg">Our lineup of immersive tools and experiences</p>
          
          <div className="space-y-8">
            {[
              { act: 'I', name: 'Blueprint Immersive', desc: 'Design spaces before they exist. High-fidelity venue previz for architects.', emoji: '📐' },
              { act: 'II', name: 'Holodeck Anywhere', desc: 'Walk through $300M of real estate that hasn\'t been built yet. Wirelessly.', emoji: '🌐' },
              { act: 'III', name: 'Stage Presence', desc: 'Rehearse on virtual stages. Perform across realities. Take a bow.', emoji: '🎭' },
              { act: 'IV', name: 'PerforMR', desc: 'Become your avatar. Motion capture meets live performance.', emoji: '🎬' },
            ].map(p => (
              <div key={p.act} className="group flex items-center gap-8 p-8 rounded-2xl border border-purple-500/20 hover:border-orange-500/40 bg-purple-900/10 hover:bg-purple-900/20 transition-all">
                <div className="text-5xl">{p.emoji}</div>
                <div>
                  <span className="text-xs text-orange-400 uppercase tracking-wider">Act {p.act}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{p.name}</h3>
                  <p className="text-purple-200/60 mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - dramatic */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0d0015, #1a0028)' }}>
        <div className="absolute inset-0 flex items-center justify-center text-[20rem] font-black text-purple-500/5 select-none">
          &ldquo;
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            An XR <span className="text-orange-400">SEAL Team Six.</span>
            <br />What the team has built is a <span className="text-purple-300 italic">time machine.</span>
          </blockquote>
          <p className="text-purple-300/60 text-sm uppercase tracking-wider">Jonathan Coon · CEO, Impossible Ventures</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ background: '#0d0015' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for your <span className="text-orange-400">standing ovation</span>?</h2>
          <p className="text-purple-200/60 text-lg mb-10">Let&apos;s create something the audience won&apos;t forget.</p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-gradient-to-r from-orange-500 to-purple-500 text-white font-bold rounded-full text-xl hover:scale-105 transition-transform shadow-lg">
            Take the Stage →
          </Link>
        </div>
      </section>
    </div>
  );
}
