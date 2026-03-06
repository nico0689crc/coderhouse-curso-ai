import Header from '@/components/shadcn-studio/blocks/navbar-component-01/navbar-component-01'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-41/hero-section-41'
import Features from '@/components/shadcn-studio/blocks/features-section-01/features-section-01'
import Testimonials from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'
import Pricing from '@/components/shadcn-studio/blocks/pricing-component-01/pricing-component-01'
import Footer from '@/components/shadcn-studio/blocks/footer-component-01/footer-component-01'

import { SwatchBookIcon, SearchIcon, StarIcon, SmartphoneIcon, LockKeyholeIcon, ShieldBanIcon } from 'lucide-react'

// --- Data Assembly ---

const menudata = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    imgAlt: 'AI Neural Network Visualization',
    userComment: 'The neural architecture provided by Antigravity is simply ahead of its time. Integration was seamless.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000',
    imgAlt: 'Future City AI Interface',
    userComment: 'We scaled our entire infrastructure in days, not months. The speed of inference is unprecedented.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000',
    imgAlt: 'Abstract Cybernetic Grid',
    userComment: 'Precision and security. Antigravity handles our most sensitive data patterns with complete integrity.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    imgAlt: 'Holographic Data Visualization',
    userComment: 'The most intuitive AI interface I have ever worked with. It feels like magic, but it is pure science.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png'
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    imgAlt: 'Deep Space Digital Network',
    userComment: 'Every node in our network is now empowered by real-time cognitive logic. A game changer.',
    userAvatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
  }
]

const featuresList = [
  {
    icon: SwatchBookIcon,
    title: 'Adaptive Neural Engine',
    description:
      'Our proprietary architecture evolves with your data patterns, providing increasingly precise insights and automation for complex workflows.',
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  },
  {
    icon: ShieldBanIcon,
    title: 'Zero-Knowledge Privacy',
    description:
      'We process sensitive intelligence at the edge. Your raw data never leaves your infrastructure, ensuring absolute compliance and security.',
    cardBorderColor: 'border-green-600/40 hover:border-green-600 dark:border-green-400/40 dark:hover:border-green-400',
    avatarTextColor: 'text-green-600 dark:text-green-400',
    avatarBgColor: 'bg-green-600/10 dark:bg-green-400/10'
  },
  {
    icon: SearchIcon,
    title: 'Cognitive Semantic Search',
    description:
      'Go beyond keywords. Our semantic engine understands intent and context, surfacing relevant knowledge across your entire fragmented ecosystem.',
    cardBorderColor: 'border-amber-600/40 hover:border-amber-600 dark:border-amber-400/40 dark:hover:border-amber-400',
    avatarTextColor: 'text-amber-600 dark:text-amber-400',
    avatarBgColor: 'bg-amber-600/10 dark:bg-amber-400/10'
  },
  {
    icon: StarIcon,
    title: 'Predictive Analytics',
    description:
      'Forecast market shifts and user behavior with high-fidelity simulations. Turn reactive data into proactive strategic advantages.',
    cardBorderColor: 'border-destructive/40 hover:border-destructive',
    avatarTextColor: 'text-destructive',
    avatarBgColor: 'bg-destructive/10'
  },
  {
    icon: SmartphoneIcon,
    title: 'Multi-Modal Integration',
    description:
      'Seamlessly connect via voice, text, or visual inputs. Our platform adapts to your communication style across all enterprise channels.',
    cardBorderColor: 'border-sky-600/40 hover:border-sky-600 dark:border-sky-400/40 dark:hover:border-sky-400',
    avatarTextColor: 'text-sky-600 dark:text-sky-400',
    avatarBgColor: 'bg-sky-600/10 dark:bg-sky-400/10'
  },
  {
    icon: LockKeyholeIcon,
    title: 'Enterprise Guardrails',
    description:
      'Robust governing logic that prevents hallucinations and ensures all AI outputs align with your brand voice and regulatory requirements.',
    cardBorderColor: 'border-primary/40 hover:border-primary',
    avatarTextColor: 'text-primary',
    avatarBgColor: 'bg-primary/10'
  }
]

const testimonials = [
  {
    name: 'Dr. Elena Vance',
    role: 'Head of Neural Research',
    company: 'Cognitive Frontiers',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-8.png',
    rating: 5,
    content: "Antigravity's inference engine has reduced nuestro latency by 40% almost overnight. It's the most stable platform we've ever deployed."
  },
  {
    name: 'Marcus Thorne',
    role: 'CTO',
    company: 'Synthetix AI labs',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png',
    rating: 5,
    content: "The semantic search capabilities are transformative. Our internal knowledge discovery is now truly global and context-aware."
  },
  {
    name: 'Sofia Rodriguez',
    role: 'AI Ethics Lead',
    company: 'Nexus Systems',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png',
    rating: 5,
    content:
      "What impressed me most was the zero-knowledge edge processing. Finally, an AI platform that takes enterprise privacy as seriously as performance."
  },
  {
    name: 'Julian Beck',
    role: 'Principal Engineer',
    company: 'Quantum Logic',
    avatar: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    rating: 5,
    content:
      "Integration was a dream. The API is clean, the documentation is perfect, and the adaptive logic actually works as advertised."
  }
]

const pricingData = [
  {
    id: 'developer',
    title: 'Developer',
    description: 'Perfect for building next-gen prototypes.',
    monthly: 49,
    annual: 490
  },
  {
    id: 'scale',
    title: 'Enterprise Scale',
    description: 'Mission-critical AI for global organizations.',
    monthly: 499,
    annual: 4990
  }
]

export default function Home() {
  const navigationData = [
    { title: 'Platform', href: '#features' },
    { title: 'Intelligence', href: '#intelligence' },
    { title: 'Enterprise', href: '#pricing' },
    { title: 'Ecosystem', href: '#' }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans dark:bg-black">
      <Header navigationData={navigationData} />
      <main className="flex flex-col">
        <section id="hero">
          <HeroSection menudata={menudata} />
        </section>

        <section id="features" className="py-20 lg:py-32">
          <Features featuresList={featuresList} />
        </section>

        <section id="intelligence" className="py-20 bg-zinc-50 dark:bg-zinc-950 lg:py-32">
          <Testimonials testimonials={testimonials} />
        </section>

        <section id="pricing" className="py-20 lg:py-32">
          <Pricing pricingData={pricingData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
