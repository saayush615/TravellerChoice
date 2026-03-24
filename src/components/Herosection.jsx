import React from 'react'
import heroImg from '../assets/bg-image.jpg'
import logo from '../assets/logo.png'
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
      <div className="relative z-10 min-h-screen w-full px-6 py-6 text-white md:px-12">
        {/* navbar */}
        <nav className="flex items-center justify-between">
          <img src={logo} alt='Logo' />
          <h2 className="text-xl font-semibold md:text-2xl">Traveller Choice</h2>
          <button className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            Sign In
          </button>
        </nav>

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