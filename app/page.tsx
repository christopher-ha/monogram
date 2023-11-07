'use client';

import Intro from '../components/Intro';
import Javascript from '../components/Javascript';
import Logos from '../components/Logos';
import API from '../components/API';
import Markup from '../components/Markup';
import Scores from '../components/Scores';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <main className="flex flex-col justify-center">
        {/* Title, CTA, and Gradients */}
        <Intro />

        {/* Javascript*/}
        <Javascript />

        {/* Logos */}
        <Logos />

        {/* API */}
        <API />

        {/* Markup */}
        <Markup />

        {/* Top Audit Scores */}
        <Scores />
      </main>
    </LazyMotion>
  );
}
