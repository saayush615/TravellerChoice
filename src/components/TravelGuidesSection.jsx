import React from 'react'

const sideArticles = [
  {
    id: 1,
    date: 'Feb 12, 2025',
    title: 'Safe Travel: A complete guide to travel insurance',
    desc: 'Understanding policies, deductibles, and emergency contacts.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    date: 'Jan 28, 2025',
    title: 'Top 10 Budget Destinations for 2025',
    desc: 'Explore the world without breaking the bank. Hidden gems included.',
    image:
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    date: 'Jan 10, 2025',
    title: 'Visa-Free countries for US Citizens',
    desc: 'Updated list of countries you can visit without a visa this year.',
    image:
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=600&auto=format&fit=crop',
  },
]

const TravelGuidesSection = () => {
  return (
    <section className="py-4 md:py-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 md:text-3xl">
          Travel Guides &amp; Tips
        </h2>

        <div className="mt-2 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Left featured card */}
          <article className="group relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1600&auto=format&fit=crop"
              alt="How to pack for a 2-week Europe trip"
              className="h-96 w-full cursor-pointer object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/25 to-transparent cursor-pointer" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-block rounded-md bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 md:text-sm">
                Tips
              </span>
              <h3 className="max-w-[90%] text-3xl font-bold leading-tight text-white md:text-3xl">
                How to pack for a 2-week Europe trip
              </h3>
            </div>
          </article>

          {/* Right list */}
          <div className="space-y-5">
            {sideArticles.map((item) => (
              <article key={item.id} className="flex gap-4">
                <div className='group overflow-hidden rounded-xl'>
                    <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-32 cursor-pointer object-cover md:h-28 md:w-40 transform-gpu transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400">{item.date}</p>
                  <h3 className="mt-1 text-sm font-bold leading-tight text-slate-900 md:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-snug text-slate-600 md:text-xs">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TravelGuidesSection