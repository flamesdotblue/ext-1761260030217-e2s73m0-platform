import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const FlyingMoney = () => {
  const moneyItems = [
    { id: 1, size: 28, delay: 0, duration: 12, startY: '20%', endY: '10%', startX: '-10%', endX: '110%', rotate: 25 },
    { id: 2, size: 24, delay: 1.2, duration: 14, startY: '70%', endY: '30%', startX: '-15%', endX: '105%', rotate: -20 },
    { id: 3, size: 22, delay: 2.4, duration: 16, startY: '40%', endY: '60%', startX: '-20%', endX: '110%', rotate: 35 },
    { id: 4, size: 26, delay: 3.1, duration: 18, startY: '85%', endY: '20%', startX: '-10%', endX: '120%', rotate: -30 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {moneyItems.map((m) => (
        <motion.span
          key={m.id}
          initial={{ x: m.startX, y: m.startY, rotate: 0, opacity: 0 }}
          animate={{ x: m.endX, y: m.endY, rotate: m.rotate, opacity: [0, 1, 1, 0] }}
          transition={{ delay: m.delay, duration: m.duration, repeat: Infinity, ease: 'linear' }}
          style={{ fontSize: m.size, filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.15))' }}
          className="absolute select-none"
        >
          💸
        </motion.span>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[100svh] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <FlyingMoney />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            Now live — Make your money move
          </div>

          <h1 className="mt-4 font-extrabold tracking-tight text-slate-900" style={{ fontFamily: 'Mona Sans, Inter, ui-sans-serif, system-ui' }}>
            <span className="text-4xl sm:text-5xl md:text-6xl">A cool, modern hero with</span>
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl bg-gradient-to-r from-emerald-600 via-teal-600 to-sky-600 bg-clip-text text-transparent">flying money</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-slate-700">
            Showcase your fintech, crypto, or modern product with an immersive 3D cover and playful 💸 animations. Built with React, Tailwind, Framer Motion, and Spline.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-slate-900/10 hover:bg-slate-800">
              Get Started
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50">
              Explore Features
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">✓</span>
              Secure by design
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-sky-700">✓</span>
              Real-time insights
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">✓</span>
              Lightning fast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
