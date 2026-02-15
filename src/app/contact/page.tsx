import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Agile Lens',
  description: 'Get in touch with Agile Lens. NYC-based immersive XR design studio.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">Get in Touch</h1>
        <p className="text-lg text-[var(--color-text-muted)]">We typically respond to inquiries within 5 working days.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
          <div className="space-y-6 text-[var(--color-text-muted)]">
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Address</h3>
              <p>22 West 19th Street, 6th Floor</p>
              <p>New York, NY 10011</p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Phone</h3>
              <a href="tel:+12126913020" className="hover:text-[var(--color-text)]">+1 (212) 691 3020</a>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text)] mb-1">Email</h3>
              <a href="mailto:info@agilelens.com" className="hover:text-[var(--color-text)]">info@agilelens.com</a>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 aspect-video rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)]">
            <div className="text-center">
              <div className="text-4xl mb-2">📍</div>
              <p className="text-sm">Flatiron District, NYC</p>
            </div>
          </div>
        </div>

        {/* Contact Form - using Formspree free tier */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Leave us a message</h2>
          <form action="https://formspree.io/f/xpznqwkd" method="POST" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
              <select id="subject" name="subject" className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] transition">
                <option value="general">General Inquiry</option>
                <option value="blueprint">Blueprint Immersive</option>
                <option value="holodeck">Holodeck Anywhere</option>
                <option value="stagepresence">Stage Presence</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" name="message" rows={6} required className="w-full px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition resize-none" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="w-full py-4 bg-[var(--color-accent)] text-black font-bold rounded-lg hover:opacity-90 transition text-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
