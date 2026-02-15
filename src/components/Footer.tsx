import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-4">Agile Lens</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            Crafting immersive experiences for real and virtual worlds since 2014.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">Products</h4>
          <div className="space-y-2">
            <Link href="/products#blueprint" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Blueprint Immersive</Link>
            <Link href="/products#holodeck" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Holodeck Anywhere</Link>
            <Link href="/products#stagepresence" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Stage Presence</Link>
            <Link href="/products#performr" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">PerforMR</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">Company</h4>
          <div className="space-y-2">
            <Link href="/portfolio" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Portfolio</Link>
            <Link href="/team" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Team</Link>
            <Link href="/contact" className="block text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)]">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-[var(--color-text-muted)]">Connect</h4>
          <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
            <p>22 West 19th Street, 6th Floor</p>
            <p>New York, NY 10011</p>
            <p><a href="tel:+12126913020" className="hover:text-[var(--color-text)]">+1 (212) 691 3020</a></p>
            <p><a href="mailto:info@agilelens.com" className="hover:text-[var(--color-text)]">info@agilelens.com</a></p>
          </div>
          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-sm">Newsletter</h4>
            <form action="https://buttondown.com/api/emails/embed-subscribe/agilelens" method="post" target="popupwindow" className="flex gap-2">
              <input type="email" name="email" placeholder="your@email.com" required className="flex-1 px-3 py-2 bg-[var(--color-bg)] border border-[var(--color-border)] rounded text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]" />
              <button type="submit" className="px-4 py-2 bg-[var(--color-accent)] text-black text-sm font-semibold rounded hover:opacity-90 transition">Go</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--color-border)] py-6 text-center text-xs text-[var(--color-text-muted)]">
        <p>© {new Date().getFullYear()} Agile Lens. All rights reserved.</p>
        <p className="mt-1">
          Sister companies: <a href="https://www.fisherdachs.com/" target="_blank" rel="noopener" className="underline hover:text-[var(--color-text)]">Fisher Dachs Associates</a> · <a href="https://www.fmsp.com/" target="_blank" rel="noopener" className="underline hover:text-[var(--color-text)]">Fisher Marantz Stone</a>
        </p>
      </div>
    </footer>
  );
}
