'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const basePath = '/agilelens-website';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={`${basePath}/logo-black-bg.png`} alt="Agile Lens" width={40} height={40} className="rounded" />
          <span className="text-xl font-bold tracking-tight">Agile Lens</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-[var(--color-text)]" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-surface)] border-t border-[var(--color-border)] px-6 py-4 space-y-3">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-[var(--color-text-muted)] hover:text-[var(--color-text)]">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
