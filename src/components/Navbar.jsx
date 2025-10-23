import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white shadow-md">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-lg">FlyFunds</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-700 hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="text-sm text-slate-700 hover:text-slate-900 transition">Pricing</a>
            <a href="#faq" className="text-sm text-slate-700 hover:text-slate-900 transition">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-slate-700 hover:text-slate-900">Sign in</a>
            <a href="#cta" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800">Get Started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-slate-700">Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
