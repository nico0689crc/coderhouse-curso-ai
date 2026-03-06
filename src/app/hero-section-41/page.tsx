import Header from '@/components/shadcn-studio/blocks/hero-section-41/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-41/hero-section-41'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'

const navigationData: NavigationSection[] = [
  {
    title: 'Platform',
    href: '#features'
  },
  {
    title: 'Intelligence',
    href: '#intelligence'
  },
  {
    title: 'Enterprise',
    href: '#pricing'
  },
  {
    title: 'Ecosystem',
    href: '#'
  }
]

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

const HeroSectionPage = () => {
  return (
    <div className='overflow-x-hidden'>
      {/* Header Section */}
      <Header navigationData={navigationData} />

      {/* Main Content */}
      <main className='flex flex-col pt-17.5'>
        <HeroSection menudata={menudata} />
      </main>
    </div>
  )
}

export default HeroSectionPage
