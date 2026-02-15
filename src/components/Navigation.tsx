'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const basePath = '/agilelens-website';

const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#about', label: 'About' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={`${basePath}/logos/Icon.svg`} alt="Agile Lens" width={32} height={32} />
          <span className="text-lg font-bold tracking-tight text-white">Agile Lens</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-[#aaa] hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-2 bg-[#e94d8a] text-white text-sm font-semibold rounded-full hover:bg-[#d63d7a] transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-6 py-4 space-y-3">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[#aaa] hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-[#e94d8a] font-semibold">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
