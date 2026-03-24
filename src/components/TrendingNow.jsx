import React from 'react'
import { Flame } from 'lucide-react'

const trendingPlaces = [
  {
    id: 1,
    title: 'Cappadocia, Turkey',
    subtitle: 'Hot air balloon season',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Agra, India',
    subtitle: 'Cultural heritage tours',
    image:
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'The Maldives',
    subtitle: 'Luxury overwater villas',
    image:
      'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1400&auto=format&fit=crop',
  },
]

const TrendingNow = () => {
  return (
    <section>
      <div className="py-8 md:py-8 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 md:text-2xl">
            <Flame className="h-6 w-6 text-orange-500" />
            Trending Now
          </h2>

          <a
            href="#"
            className="text-sm hover:underline text-slate-900 transition hover:text-slate-700"
          >
            See all
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {trendingPlaces.map((place) => (
            <article
              key={place.id}
              className="group relative h-70 overflow-hidden rounded-3xl shadow-md"
            >
              <img
                src={place.image}
                alt={place.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5">
                <h3 className="text-3xl font-bold text-white md:text-2xl">
                  {place.title}
                </h3>
                <p className="mt-1 text-xl text-white/90 md:text-lg">
                  {place.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingNow