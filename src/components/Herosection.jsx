import React from 'react'
import heroImg from '../assets/bg-image.jpg'
import Navbar from './Navbar'

const Herosection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content section */}
      <div className="relative z-10 min-h-screen w-full px-4 py-4 text-white md:px-12">
        <Navbar />

        {/* hero-content */}
        <div className="mt-24 max-w-2xl md:mt-36">
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Explore the world your way
          </h1>
          <p className="mt-4 text-base text-white/90 md:text-lg">
            Find destinations, plan smarter, and travel with confidence.
          </p>
        </div>

      </div>
    </section>
  )
}

export default Herosection