import React from 'react'
import logo from '../assets/logo.png'

const navItems = [
  'Home',
  'Flights',
  'Hotels',
  'Visa Services',
  'Travel Packages',
  'Cruise',
  'Forex',
  'Contact',
]

const Navbar = () => {
  return (
      <nav className="mx-auto w-full max-w-340 text-white">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-0">
            <img
              src={logo}
              alt="logo"
              className="h-24 w-24 shrink-0 object-contain"
            />
            <h2 className="text-xl font-bold uppercase leading-none tracking-tight">
              Traveller Choice
            </h2>
          </div>

          {/* Links */}
          <ul className="hidden items-center gap-6 text-sm font-semibold lg:flex">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-white transition-colors hover:text-black"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black cursor-pointer transition">
            Sign In
          </button>
        </div>
      </nav>
  )
}

export default Navbar