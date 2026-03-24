import React, { useState } from 'react'
import { Star, ThumbsUp } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import {
  visaDestinations,
  budgetFilters,
  budgetTrips,
  trendingDestinations,
  testimonials,
  themeCards,
  offers,
  seasonTabs,
  seasonPackages,
  travelArticles,
} from '@/data/travelCarouselsData'

const TravelCarouselsSection = () => {
  const [selectedBudget, setSelectedBudget] = useState('Under 50K')
  const [offerTab, setOfferTab] = useState('Tour Packages')
  const [selectedSeason, setSelectedSeason] = useState('Summer Special')

  return (
    <section>
      <div>

        {/* Sub-section: Explore Tour Packages by Theme */}
        <div className='py-3 md:py-4'>
          <h3 className="text-md font-bold text-slate-900 md:text-lg">Explore Tour Packages by Theme</h3>
          <Carousel className="mt-4 px-6 md:px-8" opts={{ align: 'start' }}>
            <CarouselContent>
              {themeCards.map((item,index) => (
                <CarouselItem key={index} className="basis-45 md:basis-50">
                  <article className="group relative h-55 overflow-hidden rounded-3xl">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                    <h4 className="absolute bottom-4 left-4 text-md font-bold text-white">{item.name}</h4>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Travel Offers by traveller */}
        <div className='py-9 md:py-8'>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h3 className="text-md font-bold text-slate-900 md:text-lg">Travel Offers by traveller</h3>
            <div className="inline-flex rounded-full bg-white p-1 shadow-sm">
              {['Tour Packages', 'Hotels'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setOfferTab(tab)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold ${
                    offerTab === tab ? 'bg-blue-700 text-white' : 'text-slate-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <Carousel className="px-10 md:px-8 sm:h-44" opts={{ align: 'start' }}>
            <CarouselContent>
              {offers.map((item) => (
                <CarouselItem key={item.title} className="basis-full md:basis-1/2 xl:basis-1/3">
                  <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm sm:grid-cols-2">
                    <img src={item.image} alt={item.title} className="h-44 w-96 object-fir sm:h-48" />
                    <div className="p-5">
                      <h4 className="text-md text-slate-900">{item.title}</h4>
                      <div className="mt-2 flex gap-1 text-yellow-500">
                        {Array.from({ length: item.stars }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-10 text-md text-slate-500">Starting From</p>
                      <p className="text-md font-bold text-slate-900">₹ {item.price}</p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Top Trending Travel Destinations */}
        <div className='py-3 md:py-4'>
          <h3 className="text-md font-bold text-slate-900 md:text-lg">Top Trending Travel Destinations</h3>
          <Carousel className="mt-6 px-6 md:px-8" opts={{ align: 'start' }}>
            <CarouselContent>
              {trendingDestinations.map((item) => (
                <CarouselItem key={item.title} className="basis-55 md:basis-65">
                  <article className="group relative h-75 overflow-hidden rounded-3xl">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-white/80">
                        {item.packages} <span className="font-bold text-emerald-400">From ₹ {item.price}</span>
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Happy Travellers */}
        <div className='py-3 md:py-4'>
          <h3 className="text-md font-bold text-slate-900 md:text-lg">Happy Travellers</h3>
          <Carousel className="mt-6 px-8 md:px-10" opts={{ align: 'start' }}>
            <CarouselContent>
              {testimonials.map((t, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-md font-semibold text-slate-900">{t.title}</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-500">{t.name}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{t.text}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <a href="#" className="text-blue-600 font-semibold">read more</a>
                      <img src={t.avatar} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-slate-400">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{t.region}</span>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>


        {/* Sub-section: Easy-visa destinations */}
        <div className='py-3 md:py-4'>
          <h3 className="text-md font-bold text-slate-900 md:text-lg">Easy-visa destinations</h3>
          <Carousel className="mt-6 px-6 md:px-8" opts={{ align: 'start' }}>
            <CarouselContent>
              {visaDestinations.map((item) => (
                <CarouselItem key={item.name} className="basis-35 md:basis-37.5">
                  <div className="text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="mx-auto h-24 w-24 rounded-full border-2 border-white object-cover shadow"
                    />
                    <p className="mt-3 text-md font-semibold text-slate-900">{item.name}</p>
                    <p className="text-base text-slate-500">{item.tours}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Best Budget Travel Destinations */}
        <div className='py-3 md:py-4'>
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h3 className="text-md font-bold text-slate-900 md:text-lg">Best Budget Travel Destinations</h3>
            <div className="inline-flex rounded-xl border border-slate-300 bg-white p-1">
              {budgetFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedBudget(filter)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    selectedBudget === filter ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <Carousel className="px-6 md:px-8" opts={{ align: 'start' }}>
            <CarouselContent>
              {budgetTrips.map((trip) => (
                <CarouselItem key={trip.title} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div className="relative">
                      <img src={trip.image} alt={trip.title} className="h-48 w-full object-cover" />
                      <span className="absolute bottom-3 right-3 rounded-md bg-white/90 px-2 py-1 text-xs font-bold">
                        {trip.days}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="text-md font-bold text-slate-900">{trip.title}</h4>
                      <p className="mt-1 text-sm text-slate-500">{trip.route}</p>
                      <p className="mt-3 text-xl font-extrabold text-slate-900">₹ {trip.price}</p>
                      <p className="text-sm text-slate-500">per person</p>
                      <div className='flex items-center justify-between'>
                        <button className="mt-4 rounded-md border border-blue-300 px-2 py-1 text-sm font-semibold text-blue-600 cursor-pointer">
                          View Details
                        </button>
                        <button className="mt-4 rounded-md border border-red-300 px-2 py-1 text-sm font-semibold text-red-600 cursor-pointer">
                          Buy now
                        </button>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Top Packages By Season */}
        <div className='py-3 md:py-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6'>
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <h3 className="text-md font-bold text-slate-900 md:text-lg">Top Packages By Season</h3>
            <div className="inline-flex gap-2">
              {seasonTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedSeason(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    selectedSeason === tab ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <Carousel className="px-5 md:px-7" opts={{ align: 'start' }}>
            <CarouselContent>
              {seasonPackages.map((pkg) => (
                <CarouselItem key={pkg.title} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <p className="py-2 text-center text-xs font-bold text-slate-900">{pkg.tag}</p>
                    <div className="relative">
                      <img src={pkg.image} alt={pkg.title} className="h-28 w-full object-cover" />
                      <span className="absolute bottom-2 right-2 rounded bg-white px-2 py-1 text-[11px] font-semibold">
                        {pkg.days}
                      </span>
                    </div>
                    <div className="p-3">
                      <h4 className="line-clamp-1 text-md font-bold text-slate-900">{pkg.title}</h4>
                      <p className="mt-1 text-xs text-slate-500">{pkg.route}</p>
                      <p className="mt-3 text-xl font-extrabold text-slate-900">₹ {pkg.price}</p>
                      <p className="text-xs text-slate-500">per person</p>
                      <button className="mt-3 rounded border border-slate-300 px-3 py-1.5 text-xs font-semibold">
                        View Details
                      </button>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>

        {/* Sub-section: Trending travel articles */}
        <div className='py-3 md:py-4 rounded-2xl border border-slate-200 bg-white p-5 md:p-6'>
          <h3 className="text-md font-bold text-slate-900 md:text-lg">Trending travel articles</h3>

          <Carousel className="mt-5 px-7" opts={{ align: 'start' }}>
            <CarouselContent>
              {travelArticles.map((article) => (
                <CarouselItem key={article.title} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5">
                  <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img src={article.image} alt={article.title} className="h-32 w-full object-cover" />
                    <div className="p-3">
                      <h4 className="line-clamp-2 text-md font-semibold text-slate-900">{article.title}</h4>
                      <p className="mt-2 line-clamp-2 text-xs text-slate-500">{article.summary}</p>
                      <p className="mt-3 text-xs font-semibold text-slate-900">{article.meta}</p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-1 md:-left-3" />
            <CarouselNext className="-right-1 md:-right-3" />
          </Carousel>
        </div>
        
      </div>
    </section>
  )
}

export default TravelCarouselsSection