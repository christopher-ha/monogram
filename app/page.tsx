'use client';

import Intro from '../components/Intro';
import Javascript from '../components/Javascript';
import Logos from '../components/Logos';
import API from '../components/API';
import Markup from '../components/Markup';
import Scores from '../components/Scores';
import { LazyMotion, domAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'start end'],
  });

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
      <main ref={ref} className="flex flex-col justify-center">
        {/* Title, CTA, and Gradients */}
        <Intro scrollY={scrollY} />

        {/* Javascript*/}
        <Javascript scrollY={scrollY} />

        {/* Logos */}
        <Logos />

        {/* API */}
        <API />

        {/* Markup */}
        <Markup scrollY={scrollY} />

        {/* Top Audit Scores */}
        <Scores />
      </main>
    </LazyMotion>
  );
}
