import React from 'react'
import logo from '../assets/logo.png'
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

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

          <button className="rounded-full border border-white/60 px-4 py-2 text-sm hover:bg-white hover:text-black cursor-pointer transition hidden lg:block">
            Sign In
          </button>

          {/* mobile nav */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/40 bg-white/10 lg:hidden cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[85%] border-white/10 bg-slate-950 text-white sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-4 flex flex-col gap-2 px-4 pb-6">
                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </a>
                  </SheetClose>
                ))}

                <button className="mt-4 w-full rounded-full border border-white/60 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-black">
                  Sign Up
                </button>
              </div>
            </SheetContent>
        </Sheet>
        </div>
      </nav>
  )
}

export default Navbar