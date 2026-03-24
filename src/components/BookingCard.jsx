import React, { useState } from 'react'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const tabs = ['Flights', 'Hotels', 'Rentals']

const BookingCard = () => {
  const [activeTab, setActiveTab] = useState('Flights')
  const [date, setDate] = useState()

  return (
    <div className="w-full max-w-150 rounded-2xl bg-white/95 p-5 text-slate-800 shadow-2xl backdrop-blur-sm md:p-6">
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 rounded-xl bg-slate-100 p-1">
        {tabs.map((tab) => {
          const isDisabled = tab !== 'Flights'
          return (
            <button
              key={tab}
              type="button"
              disabled={isDisabled}
              onClick={() => !isDisabled && setActiveTab(tab)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500'
              } ${isDisabled ? 'cursor-not-allowed opacity-60' : 'hover:text-slate-700'}`}
            >
              {tab}
            </button>
          )
        })}
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

      {/* Shadcn Date Picker */}
      <div className="mt-4">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-500">
          Departure
        </label>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="h-12 w-full justify-between rounded-lg border-slate-200 bg-white px-4 text-left font-normal text-slate-800 hover:bg-white"
            >
              {date ? format(date, 'dd-MM-yyyy') : <span>dd-mm-yyyy</span>}
              <CalendarIcon className="h-4 w-4 opacity-70" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
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