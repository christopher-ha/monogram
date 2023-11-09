'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import Intro from '../components/Intro';

const Javascript = dynamic(() => import('../components/Javascript'), {
  loading: () => <p>Loading...</p>,
});

const Logos = dynamic(() => import('../components/Logos'), {
  loading: () => <p>Loading...</p>,
});

const API = dynamic(() => import('../components/API'), {
  loading: () => <p>Loading...</p>,
});

const Markup = dynamic(() => import('../components/Markup'), {
  loading: () => <p>Loading...</p>,
});

const Scores = dynamic(() => import('../components/Scores'), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
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
