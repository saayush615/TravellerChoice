import React from 'react'
import heroImg from '../assets/bg-image.jpg'
import Navbar from './Navbar'
import BookingCard from './BookingCard'

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
        <div className="mx-auto mt-14 grid w-full max-w-350 items-center gap-10 lg:mt-20 lg:grid-cols-2">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-sm font-semibold">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Your Best Trip Planner
            </span>

            <div className="mt-5">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Explore the world your way
              </h1>
              <p className="mt-4 text-base text-white/90 md:text-lg">
                Find destinations, plan smarter, and travel with confidence.
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <BookingCard />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Herosection