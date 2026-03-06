import TestimonialsComponent from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'
import type { TestimonialItem } from '@/components/shadcn-studio/blocks/testimonials-component-01/testimonials-component-01'

const testimonials: TestimonialItem[] = [
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

const TestimonialsComponentPage = () => {
  return <TestimonialsComponent testimonials={testimonials} />
}

export default TestimonialsComponentPage
