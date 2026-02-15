import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agile Lens | Immersive XR Design Studio",
  description: "Agile Lens crafts immersive XR experiences for architecture, entertainment, and real estate. VR, AR, and mixed reality solutions from NYC's leading immersive design studio.",
  keywords: "VR, AR, XR, immersive design, architecture visualization, virtual reality, mixed reality, Agile Lens, NYC, Blueprint Immersive, Holodeck Anywhere, Stage Presence",
  openGraph: {
    title: "Agile Lens | Immersive XR Design Studio",
    description: "Crafting immersive experiences for real and virtual worlds.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="immersive">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen">
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
