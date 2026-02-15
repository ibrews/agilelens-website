import Link from 'next/link';

const basePath = '/agilelens-website';

const products = [
  {
    id: 'blueprint',
    name: 'Blueprint Immersive',
    category: 'Pre-construction',
    desc: 'High-fidelity event venue configuration and previs software. Used by top architects and design professionals to optimize construction planning.',
    icon: '📐',
  },
  {
    id: 'holodeck',
    name: 'Holodeck Anywhere',
    category: 'Pre-construction & Entertainment',
    desc: 'Wireless photoreal co-located PCVR for architecture and luxury real estate. Multiuser experiences in ultra-high fidelity.',
    icon: '🌐',
  },
  {
    id: 'stagepresence',
    name: 'Stage Presence',
    category: 'Entertainment',
    desc: 'Standalone VR/MR rehearsal tool and performance platform designed to integrate with existing media and live event industry practices.',
    icon: '🎭',
  },
  {
    id: 'performr',
    name: 'PerforMR',
    category: 'Entertainment',
    desc: 'Live-actor animation pipeline. Multi-source mocap tool for performers to animate MetaHumans in real-time VR or MR.',
    icon: '🎬',
  },
  {
    id: 'floortour',
    name: 'Floor Tour',
    category: 'Pre-construction',
    desc: 'Self-service, real-world scale floor plan visualization. Walk your portfolio of designs and renders in VR with just a few clicks.',
    icon: '🏗️',
  },
  {
    id: 'hyperreal',
    name: 'Hyperreal Estate',
    category: 'Pre-construction',
    desc: 'Photoreal 3D architectural and design visualization. Raytraced with Unreal Engine and optimized for high-end VR.',
    icon: '🏛️',
  },
];

const testimonials = [
  {
    quote: "Agile Lens is an XR SEAL Team Six. What the team has built is a time machine.",
    author: "Jonathan Coon",
    title: "CEO, Impossible Ventures",
    context: "on the Four Seasons Holodeck",
  },
  {
    quote: "Agile Lens works like engineers but think like storytellers. They pursue excellence in the details.",
    author: "Amanda Watson",
    title: "Inventor of Air Link and CTO of REK",
  },
  {
    quote: "Agile Lens creates a visionary experience that skillfully breaks the fourth wall and invites audiences to the center of a 150-year-old story.",
    author: "Raindance Immersive",
    context: 'on "A Christmas Carol VR"',
  },
  {
    quote: "The Holodeck is so ambitious no single hardware provider has been able to make everything work. And yet, it does work.",
    author: "Ian Hamilton",
    title: "Editor-in-Chief, UploadVR",
  },
  {
    quote: "Few are more experienced and knowledgeable when it comes to deploying immersive experiences on the latest devices.",
    author: "Gabriele Romagnoli",
    title: "Host of XR AI Spotlight",
  },
];

const stats = [
  { value: '10+', label: 'Years in XR' },
  { value: '50+', label: 'Projects Delivered' },
  { value: '$100M+', label: 'Client Revenue Driven' },
  { value: '5', label: 'Product Lines' },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#001020] to-black" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent-2)]/10 rounded-full blur-[120px]" />
          {/* Grid overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/5 text-[var(--color-accent)] text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
            NYC&apos;s Leading XR Design Studio
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-8">
            <span className="gradient-text">Immersive</span>
            <br />
            experiences for
            <br />
            <span className="text-[var(--color-text-muted)]">real & virtual worlds</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            From architectural visualization that drives 9-figure sales to award-winning VR performances — we craft the spectacles within.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="px-8 py-4 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:opacity-90 transition text-lg">
              See Our Work
            </Link>
            <Link href="/contact" className="px-8 py-4 border border-[var(--color-border)] text-[var(--color-text)] font-semibold rounded-lg hover:bg-[var(--color-surface)] transition text-lg">
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] text-xs">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-black gradient-text">{s.value}</div>
              <div className="text-sm text-[var(--color-text-muted)] mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Innovation for Two Worlds</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-16 max-w-2xl mx-auto">Two worlds. One studio. We bridge architecture and entertainment with cutting-edge XR.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 md:p-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]/50 transition-all">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-2xl font-bold mb-4">Pre-construction</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For industrial and real estate developers going beyond, we offer the opportunity to be in the most visceral virtual environment you can envision before it&apos;s built. Our solutions have saved millions in design review and driven 9-figures in pre-construction sales.
              </p>
            </div>
            <div className="group p-8 md:p-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent-2)]/50 transition-all">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold mb-4">Entertainment</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                For media, brands, and performing artists, we lead in blending experimental and experiential for large, live audiences, complex production facilitation, and high-flow rate activations. We streamline performance capture and virtual production management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Products</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-16">Purpose-built tools for immersive workflows</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p => (
              <Link key={p.id} href={`/products#${p.id}`} className="group p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] hover:border-[var(--color-accent)]/40 transition-all hover:translate-y-[-2px]">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="text-xs uppercase tracking-wider text-[var(--color-accent)] mb-2">{p.category}</div>
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What People Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                <p className="text-[var(--color-text)] leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{t.author}</div>
                  {t.title && <div className="text-xs text-[var(--color-text-muted)]">{t.title}</div>}
                  {t.context && <div className="text-xs text-[var(--color-accent)]">{t.context}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
            Founded in 2014, Agile Lens was born from a mission to redefine storytelling through immersive technology, merging design, architecture, and XR to create transformative spatial experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/team" className="px-6 py-3 bg-[var(--color-accent)] text-black font-semibold rounded-lg hover:opacity-90 transition">Meet the Team</Link>
            <Link href="/portfolio" className="px-6 py-3 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-bg)] transition">View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)]/10 to-[var(--color-accent-2)]/10" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something immersive?</h2>
          <p className="text-[var(--color-text-muted)] mb-8 text-lg">Let&apos;s talk about your next project.</p>
          <Link href="/contact" className="inline-block px-10 py-4 bg-[var(--color-accent)] text-black font-bold rounded-lg text-lg hover:opacity-90 transition">
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Homepage Variations Link */}
      <section className="py-12 text-center border-t border-[var(--color-border)]">
        <p className="text-sm text-[var(--color-text-muted)] mb-4">Explore alternative homepage designs:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/variations/a" className="px-4 py-2 text-sm border border-[var(--color-border)] rounded hover:border-[var(--color-accent)] transition">Variation A: Clean/Minimal</Link>
          <Link href="/variations/b" className="px-4 py-2 text-sm border border-[var(--color-border)] rounded hover:border-[var(--color-accent)] transition">Variation B: Bold/Theatrical</Link>
          <Link href="/variations/c" className="px-4 py-2 text-sm border border-[var(--color-border)] rounded hover:border-[var(--color-accent)] transition">Variation C: Immersive/Dark</Link>
        </div>
      </section>
    </div>
  );
}
