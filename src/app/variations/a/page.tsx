import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Variation A: Clean/Minimal | Agile Lens',
};

export default function VariationA() {
  return (
    <div style={{ '--color-bg': '#fafafa', '--color-surface': '#ffffff', '--color-border': '#e5e5e5', '--color-text': '#1a1a1a', '--color-text-muted': '#666', '--color-accent': '#1a1a1a', '--color-accent-2': '#555' } as React.CSSProperties}>
      {/* Rationale Banner */}
      <div className="bg-yellow-50 border-b border-yellow-200 py-3 px-6 text-center text-sm text-yellow-800">
        <strong>Variation A — Clean/Minimal:</strong> Matches the current Agile Lens tone. Restrained palette, generous whitespace, typography-forward. Lets the work speak. Professional trust signal for architecture clients.
        <Link href="/" className="ml-4 underline">← Back to default</Link>
      </div>

      {/* Hero */}
      <section className="min-h-screen flex items-center bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6 py-32">
          <p className="text-sm uppercase tracking-[0.3em] text-[#999] mb-8">Agile Lens — NYC</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-[#1a1a1a] leading-[1.05] mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Crafting immersive
            <br />experiences for real
            <br /><em className="font-normal italic">& virtual</em> worlds
          </h1>
          <p className="text-xl text-[#666] max-w-xl mb-12 leading-relaxed font-light">
            We merge architecture, performance, and cutting-edge XR technology to create spatial experiences that transform how people see, feel, and interact with space.
          </p>
          <div className="flex gap-6">
            <Link href="/portfolio" className="px-8 py-4 bg-[#1a1a1a] text-white text-sm font-medium tracking-wider uppercase hover:bg-[#333] transition">
              View Work
            </Link>
            <Link href="/contact" className="px-8 py-4 text-[#1a1a1a] text-sm font-medium tracking-wider uppercase border border-[#ccc] hover:border-[#1a1a1a] transition">
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Services - minimal grid */}
      <section className="py-32 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#999] mb-4">01</p>
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Pre-construction</h2>
              <p className="text-[#666] leading-relaxed">Photoreal architectural visualization and holodeck experiences that have driven nine-figure pre-construction sales and saved millions in design review.</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#999] mb-4">02</p>
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Entertainment</h2>
              <p className="text-[#666] leading-relaxed">Award-winning VR performances, virtual production management, and live interactive experiences for media, brands, and performing artists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 bg-[#fafafa] border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-4xl font-light text-[#1a1a1a] leading-relaxed italic" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            &ldquo;Agile Lens works like engineers but think like storytellers.&rdquo;
          </blockquote>
          <p className="mt-8 text-sm text-[#999] uppercase tracking-wider">Amanda Watson — CTO of REK</p>
        </div>
      </section>

      {/* Founded */}
      <section className="py-32 bg-white border-t border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-[#999] mb-8">Since 2014</p>
          <p className="text-xl text-[#666] leading-relaxed font-light">
            Founded in New York City, Agile Lens was born from a mission to redefine storytelling through immersive technology — merging design, architecture, and XR to create transformative spatial experiences.
          </p>
          <Link href="/team" className="inline-block mt-10 text-sm uppercase tracking-wider text-[#1a1a1a] border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition">
            Meet the Team →
          </Link>
        </div>
      </section>
    </div>
  );
}
