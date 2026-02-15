'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const basePath = '/agilelens-website';

const logos = [
  { src: 'Disney.png', alt: 'Disney' },
  { src: 'CBS.png', alt: 'CBS' },
  { src: 'Kennedy.png', alt: 'Kennedy Center' },
  { src: 'FourSeasons.png', alt: 'Four Seasons' },
  { src: 'RSC.png', alt: 'RSC' },
  { src: 'Waldorf.png', alt: 'Waldorf Astoria' },
  { src: 'Dell.png', alt: 'Dell' },
];

const products = [
  {
    category: 'Pre-construction',
    items: [
      { name: 'Hyperreal Estate', desc: 'Photorealistic virtual tours of unbuilt properties that sell spaces before ground is broken. Walk through future penthouses, lobbies, and amenity spaces as if they already exist.' },
      { name: 'Blueprint Immersive', desc: 'Transform architectural plans into navigable 3D environments. Stakeholders can review designs at true scale, catching issues and refining details before construction begins.' },
      { name: 'Floor Tour', desc: 'Interactive floor plan exploration that lets buyers customize finishes, furniture layouts, and lighting in real-time within a photorealistic virtual environment.' },
    ],
  },
  {
    category: 'Entertainment',
    items: [
      { name: 'Holodeck Anywhere', desc: 'A portable, room-scale immersive experience that transforms any space into a fully interactive virtual environment. Originally developed for Four Seasons Hotels.' },
      { name: 'Stage Presence', desc: 'Live theatrical performances enhanced with real-time XR elements. Actors interact with virtual sets and characters, blending physical and digital storytelling.' },
      { name: 'PerforMR', desc: 'Mixed reality performance capture and broadcast platform. Enables remote audiences to experience live events as volumetric, spatial content.' },
    ],
  },
];

const testimonials = [
  { quote: "Agile Lens is an XR SEAL Team Six. They came in, assessed the situation, built something nobody else could, and delivered a 'wow' that exceeded expectations.", author: 'Jonathan Coon', title: 'CEO, Impossible Ventures', context: 'On the Four Seasons Holodeck' },
  { quote: "What Agile Lens did, it's not what others do. They don't just build tech — they build feelings. The experience they created was emotional, visceral, and unforgettable.", author: 'Hope Hutman', title: 'Artist & Experiential Producer', context: '' },
  { quote: "Agile Lens works like engineers but think like storytellers. That combination is incredibly rare and incredibly powerful.", author: 'Amanda Watson', title: 'CTO of REK', context: '' },
  { quote: "From Vision Pro to Galaxy XR, Agile Lens is building the creative infrastructure for spatial computing. They're not waiting for the future — they're constructing it.", author: 'Gabriele Romagnoli', title: 'Host, XR AI Spotlight', context: '' },
  { quote: "Agile Lens creates a visionary experience that transports you to another time and place. Their Christmas Carol VR is a masterclass in immersive storytelling.", author: 'Raindance Immersive', title: '', context: 'On A Christmas Carol VR' },
  { quote: "The Holodeck is so ambitious no single hardware provider could contain it. Agile Lens had to invent new ways to stitch together technologies that weren't designed to work together.", author: 'Ian Hamilton', title: 'Editor-in-Chief, UploadVR', context: '' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade in
      gsap.from('.hero-content > *', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Pink circle rotation
      gsap.to('.hero-circle', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none',
      });

      // Logo marquee scroll
      if (marqueeInnerRef.current) {
        gsap.to(marqueeInnerRef.current, {
          xPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: marqueeRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Products sticky scroll - cards fade in
      gsap.utils.toArray<HTMLElement>('.product-card').forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 1,
          },
        });
      });

      // About fade in
      gsap.from('.about-content > *', {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Testimonial auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const allProducts = products.flatMap(cat =>
    cat.items.map(item => ({ ...item, category: cat.category }))
  );

  return (
    <div className="bg-[#0a0a0a] text-white overflow-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6">
        {/* Pink gradient circle */}
        <div className="hero-circle absolute w-[600px] h-[600px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, #e94d8a 0%, #c026d3 40%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          filter: 'blur(80px)',
        }} />
        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6">
            Agile Lens
          </h1>
          <p className="text-lg md:text-xl text-[#aaa] max-w-2xl mx-auto leading-relaxed">
            Crafting immersive experiences for real and virtual worlds and the spectacles within.
          </p>
          <div className="mt-12 text-sm uppercase tracking-[0.2em] text-[#666]">
            Innovation for everyone
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <section ref={marqueeRef} className="py-20 overflow-hidden">
        <div ref={marqueeInnerRef} className="flex items-center gap-16 w-max px-8" style={{ willChange: 'transform' }}>
          {/* Duplicate logos for seamless scroll */}
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 opacity-50 hover:opacity-80 transition-opacity">
              <Image
                src={`${basePath}/logos/${logo.src}`}
                alt={logo.alt}
                width={140}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" ref={productsRef} className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h2>
          <p className="text-[#888] text-lg mb-16 max-w-2xl">
            Spatial computing solutions for pre-construction visualization and live entertainment.
          </p>

          {products.map((cat, ci) => (
            <div key={ci} className="mb-20">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[#e94d8a] font-semibold mb-8">
                {cat.category}
              </h3>
              <p className="text-[#888] mb-10 max-w-xl">
                {cat.category === 'Pre-construction'
                  ? 'Sell unbuilt spaces with photorealistic immersive experiences that let buyers walk through projects before they exist.'
                  : 'Transform live performance and hospitality with mixed reality experiences that blur the line between physical and digital.'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, ii) => (
                  <div key={ii} className="product-card bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#e94d8a]/40 transition-colors">
                    <span className="text-xs uppercase tracking-wider text-[#e94d8a] font-semibold">{cat.category}</span>
                    <h4 className="text-xl font-bold mt-3 mb-3">{item.name}</h4>
                    <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">What People Say</h2>

          <div className="relative min-h-[280px] flex items-center justify-center">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#ddd] italic max-w-3xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-8">
                  <p className="font-semibold text-white">{t.author}</p>
                  {t.title && <p className="text-sm text-[#888]">{t.title}</p>}
                  {t.context && <p className="text-xs text-[#e94d8a] mt-1">{t.context}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === activeTestimonial ? 'bg-[#e94d8a] scale-125' : 'bg-[#333] hover:bg-[#555]'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="about-content max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Us</h2>
          <p className="text-[#aaa] text-lg leading-relaxed mb-6">
            Founded in 2014, Agile Lens is an immersive experience design studio based in New York City.
            We craft spatial computing solutions that bridge architecture, entertainment, and technology —
            building experiences for real and virtual worlds.
          </p>
          <p className="text-[#aaa] text-lg leading-relaxed mb-10">
            Our sister companies include{' '}
            <a href="https://www.fisherdachs.com/" target="_blank" rel="noopener" className="text-[#e94d8a] hover:underline">
              Fisher Dachs Associates
            </a>{' '}
            (theatre planning and design) and{' '}
            <a href="https://www.fmsp.com/" target="_blank" rel="noopener" className="text-[#e94d8a] hover:underline">
              Fisher Marantz Stone
            </a>{' '}
            (architectural lighting design).
          </p>

          {/* Newsletter */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 max-w-md">
            <h3 className="font-bold text-lg mb-2">Stay in the loop</h3>
            <p className="text-sm text-[#888] mb-4">Get updates on our latest projects and products.</p>
            <form
              action="https://buttondown.com/api/emails/embed-subscribe/agilelens"
              method="post"
              target="popupwindow"
              className="flex gap-2"
            >
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 bg-[#0a0a0a] border border-[#333] rounded-lg text-sm text-white placeholder:text-[#555] focus:border-[#e94d8a] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#e94d8a] text-white text-sm font-semibold rounded-lg hover:bg-[#d63d7a] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
