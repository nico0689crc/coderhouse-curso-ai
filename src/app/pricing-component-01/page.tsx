import Pricing from '@/components/shadcn-studio/blocks/pricing-component-01/pricing-component-01'

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

const PricingPage = () => {
  return <Pricing pricingData={pricingData} />
}

export default PricingPage
