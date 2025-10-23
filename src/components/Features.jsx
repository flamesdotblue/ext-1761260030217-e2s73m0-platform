import React from 'react';
import { Coins, Shield, Zap, Rocket } from 'lucide-react';

const features = [
  {
    title: 'Crypto-ready',
    desc: 'Showcase tokens, wallets, and on-chain activity with confidence.',
    icon: Coins,
    accent: 'from-amber-500 to-rose-500',
  },
  {
    title: 'Bank-grade security',
    desc: 'Zero-trust architecture with encryption at rest and in transit.',
    icon: Shield,
    accent: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Blazing performance',
    desc: 'Optimized rendering, edge caching, and instant page transitions.',
    icon: Zap,
    accent: 'from-sky-500 to-indigo-500',
  },
  {
    title: 'Launch-ready UI',
    desc: 'Beautiful components, responsive layouts, and dark-mode friendly.',
    icon: Rocket,
    accent: 'from-violet-500 to-fuchsia-500',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to shine</h2>
          <p className="mt-3 text-slate-600">A clean set of opinions and components so you can launch faster and look great doing it.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.accent} text-white shadow-sm`}>
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
