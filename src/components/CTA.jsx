import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-10 shadow-sm sm:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Ready to make your money move?</h3>
            <p className="mt-3 text-slate-600">Deploy this hero, connect your data, and give your brand a modern, premium feel.</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800">
                Start for free
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">
                Book a demo
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">No credit card required — 14-day free trial</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
