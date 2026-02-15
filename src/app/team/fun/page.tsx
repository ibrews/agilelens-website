import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The REAL Team Page | Agile Lens',
  description: '100% accurate bios. We definitely asked permission.',
};

const team = [
  {
    name: 'Alex Coulombe',
    role: 'CEO',
    creature: '🐙 Octopus',
    image: '/team/alex.png',
    bio: "Legend has it Alex once gave a keynote at Unreal Fest while simultaneously debugging a Christmas Carol VR build, reviewing sightlines for a 600-seat opera house, and somehow also being on two podcasts. The eyebrows are load-bearing.",
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Joshua Dachs',
    role: 'President / Co-Founder',
    creature: '🐋 Whale',
    image: '/team/josh.png',
    bio: "Josh emerged from the depths of Cornell Architecture to become one of the world's premier theatre consultants. He founded Agile Lens with Alex after deciding that regular 3D wasn't 3D enough. Fisher Dachs Associates trembles when he gets that 'what if we made it VR' look.",
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Yu-Jun Yeh (Jun)',
    role: 'Sr. XR Creative Technologist',
    creature: '🐢 Sea Turtle',
    image: '/team/jun.png',
    bio: "Jun has shipped more Unreal Engine projects than most people have started. Rumor has it the Four Seasons Holodeck runs on his sheer willpower and a very long Blueprint graph.",
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Dante Cameron',
    role: 'XR Technical Artist',
    creature: '🐟 Swordfish',
    image: '/team/dante.png',
    bio: "Dante loves fabrication, Maya, and making things that shouldn't exist in VR somehow exist in VR. He once asked Sam the intern how memory works. Sam is still thinking about it.",
    color: 'from-sky-500/20 to-blue-500/20',
  },
  {
    name: 'Marshall Nowak',
    role: 'XR Artist',
    creature: '🦀 Hermit Crab',
    image: '/team/marshall.png',
    bio: "Marshall mashes things together. Blueprint? C++? IT networking? 3D modeling? On-site ops? Yes. He has most VR headsets and admits Apple Vision Pro is the best one. We respect that level of honesty.",
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Kevin Laibson',
    role: 'Sr. Experience Director',
    creature: '🐬 Dolphin',
    image: '/team/kevin.png',
    bio: "Self-described 'personality hire.' Co-founded Magic Futurebox, teaches at NYU Tisch, directs theatrical performances, and is the point person for all things theater. He plays Scrooge... wait no, that's Ari.",
    color: 'from-indigo-500/20 to-violet-500/20',
  },
  {
    name: 'Whitt Sellers',
    role: 'XR Creative Technologist',
    creature: '🪼 Jellyfish',
    image: '/team/whitt.png',
    bio: "MFA from Parsons. Explores 'novel forms of creative expression at the intersection of immersive technology and live performance.' We're not 100% sure what that means but it sounds extremely cool.",
    color: 'from-fuchsia-500/20 to-pink-500/20',
  },
  {
    name: 'Ari Tarr',
    role: 'Performance Consultant',
    creature: '🤡🐠 Clownfish',
    image: '/team/ari.png',
    bio: "Award-winning performer for Disney, Google, and Facebook. Professor of Media Arts. ACTUALLY plays Scrooge in A Christmas Carol VR. Probably the only person alive who's been directed by both a human and a MetaHuman.",
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    name: 'Henry Keyser',
    role: 'Director of Operations',
    creature: '🦈 Shark',
    image: '/team/henry.png',
    bio: "MSJ from Northwestern. DevOps background. Said mocopi was 'almost forgettably easy' in a Sony case study, which is the most Henry thing ever. Not particularly interested in holding conversations with AIs. Sorry, Henry.",
    color: 'from-slate-500/20 to-gray-500/20',
  },
  {
    name: 'Elizabeth Coulombe',
    role: 'Program & Operations Strategist',
    creature: '🦈 Seahorse',
    image: '/team/elizabeth.png',
    bio: "'Urgency not Emergency' is her mantra. She keeps the trains running while everyone else is in VR. Logistics queen.",
    color: 'from-rose-500/20 to-pink-500/20',
  },
  {
    name: 'Stef Buckner',
    role: 'Production Manager',
    creature: '⭐ Starfish',
    image: '/team/stef.png',
    bio: "Background in Theatre, Live Events, TV/Film. Excited to find new ways to do things that haven't been done before. A starfish because she regenerates entire production schedules overnight.",
    color: 'from-yellow-500/20 to-amber-500/20',
  },
  {
    name: 'Saurabh Saxena',
    role: 'XR Technologist',
    creature: '🦐 Mantis Shrimp',
    image: '/team/saurabh.png',
    bio: "Building 'Gamify-The-Robotics-World' with Unreal 5.5 + Meta Quest. Once asked Sam what his limitations were. Sam gave a very long answer.",
    color: 'from-rainbow-500/20 to-teal-500/20',
  },
  {
    name: 'Zander Leff',
    role: 'Architecture Student / Junior Tech',
    creature: '🐡 Pufferfish',
    image: '/team/zander.png',
    bio: "Syracuse architecture student. Finalist in a spacecraft design competition called 'Scythe' in 2021. Made Alex's robo-lobster drawing on his first night meeting Sam. The future is bright.",
    color: 'from-lime-500/20 to-green-500/20',
  },
];

export default function FunTeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black mb-4">🐙 The REAL Team Page 🐙</h1>
        <p className="text-lg text-[var(--color-text-muted)] italic">100% accurate bios. We definitely asked permission.</p>
        <p className="mt-4">
          <Link href="/team" className="text-[var(--color-accent)] hover:underline">← Back to the boring team page</Link>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className={`group p-6 rounded-2xl border border-[var(--color-border)] bg-gradient-to-br ${member.color} hover:scale-[1.02] transition-all duration-300`}>
            <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-[var(--color-accent)]/30">
              <Image
                src={member.image}
                alt={`${member.name} as a ${member.creature}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center mb-3">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <div className="text-sm text-[var(--color-accent)]">{member.role}</div>
              <div className="text-xs text-[var(--color-text-muted)]">{member.creature}</div>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed italic">&ldquo;{member.bio}&rdquo;</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 text-[var(--color-text-muted)] text-sm">
        <p>Sea creature avatars generated by AI. No actual sea creatures were consulted.</p>
        <p className="mt-2">
          <Link href="/team" className="text-[var(--color-accent)] hover:underline">← Back to the real (boring) team page</Link>
        </p>
      </div>
    </div>
  );
}
