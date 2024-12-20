import React from 'react'
import { AboutSection, BannerSection, GetstartedSection, HowItWorksSection } from './sub-component'

const Home = () => {
  return (
    <>
    <main>
      <BannerSection />
      <HowItWorksSection />
      <AboutSection />
     <GetstartedSection />
    </main>
    </>
  )
}

export default Home