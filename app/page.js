'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Barbers from '@/components/sections/Barbers'
import OurWork from '@/components/sections/OurWork'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Barbers />
      <OurWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App