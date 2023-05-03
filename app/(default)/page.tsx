export const metadata = {
  title: 'Home | Interviewly.ai',
  description: 'Interviewly.ai Landing Page',
}

import  { Analytics }  from   '@vercel/analytics/react' ;
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      {/*<Features />*/}
      {/*<FeaturesBlocks />*/}
      {/*<Testimonials />*/}
      {/*<Newsletter />*/}
      <Analytics />
    </>
  )
}
