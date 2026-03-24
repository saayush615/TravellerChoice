import React, { useState } from 'react'

const tabs = ['Flights', 'Hotels', 'Rentals']

const BookingCard = () => {
  const [activeTab, setActiveTab] = useState('Flights')

  return (
    <div className="w-full max-w-150 rounded-2xl bg-white/95 p-5 text-slate-800 shadow-2xl backdrop-blur-sm md:p-6">
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
              activeTab === tab
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            From
          </label>
          <input
            type="text"
            defaultValue="New York (JFK)"
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-base outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
            To
          </label>
          <input
            type="text"
            placeholder="City or Airport"
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-base outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
          Departure
        </label>
        <input
          type="date"
          className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-base outline-none ring-0 focus:border-slate-300"
        />
      </div>

      <button
        type="button"
        className="mt-5 h-12 w-full rounded-lg bg-slate-900 text-lg font-semibold text-white transition hover:bg-slate-800"
      >
        Search Flights
      </button>
    </div>
  )
}

export default BookingCard