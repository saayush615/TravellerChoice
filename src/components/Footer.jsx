import React from 'react'
import { Globe, DollarSign } from 'lucide-react'
import logo from '../assets/logo.png'

const companyLinks = ['About Us', 'Careers', 'Press', 'Blog', 'Sustainability']
const supportLinks = ['Help Center', 'Terms of Service', 'Legal', 'Privacy Policy', 'Status']
const routeLinks = [
  'Flights to London',
  'Flights to Paris',
  'Flights to Tokyo',
  'Flights to New York',
  'Flights to Dubai',
]

const Footer = () => {
  return (
    <footer className="bg-[#020b2f] text-white">
      <div className="mx-auto w-full max-w-350 px-6 py-14 md:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand block */}
          <div className="lg:pr-10">
            <div className="flex items-center gap-1">
              <img
                src={logo}
                alt="Traveller Choice logo"
                className="h-16 w-16 rounded-md object-contain"
              />
              <h3 className="text-lg font-bold uppercase tracking-tight">Traveller Choice</h3>
            </div>

            <p className="mt-2 max-w-md text-md text-slate-300">
              Your trusted partner for AI-powered travel planning. We make
              exploring the world seamless, from visa applications to luxury
              stays.
            </p>

            
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-5 space-y-2">
              {companyLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="mt-5 space-y-2">
              {supportLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Routes */}
          <div>
            <h4 className="text-lg font-semibold">Top Routes</h4>
            <ul className="mt-5 space-y-2">
              {routeLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-slate-200 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-xs text-slate-400">
              © 2025 TRAVELLER CHOICEInc. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Globe className="h-5 w-5" />
                English (US)
              </span>
              <span className="inline-flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                USD
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer