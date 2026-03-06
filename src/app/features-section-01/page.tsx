import { SwatchBookIcon, SearchIcon, StarIcon, SmartphoneIcon, LockKeyholeIcon, ShieldBanIcon } from 'lucide-react'

import Features from '@/components/shadcn-studio/blocks/features-section-01/features-section-01'

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

const FeaturesPage = () => {
  return <Features featuresList={featuresList} />
}

export default FeaturesPage
