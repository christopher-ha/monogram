import Image from 'next/image';
import {
  m,
  useScroll,
  useMotionValueEvent,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Intro() {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'start end'],
  });

  const y1 = useTransform(scrollY, (value) => value * -0.1 + 100);
  const y2 = useTransform(scrollY, (value) => value * -0.2 + 100);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center lg:relative lg:mx-auto lg:h-screen lg:max-w-screen-2xl lg:flex-row"
    >
      {/* Header and Description */}
      <section className="relative z-10 m-12 flex flex-col items-center justify-center text-center md:m-16 md:mb-32 lg:z-10 lg:m-24 lg:items-start lg:justify-start lg:text-left">
        <h1>
          jamstack{' '}
          <span className="bg-gradient-to-r from-orange-300 via-red-300 to-purple-400 bg-clip-text text-transparent">
            101
          </span>
        </h1>
        <h3 className="bg-gradient-to-t from-neutral-800 to-neutral-400 bg-clip-text pt-4 text-center text-transparent md:w-10/12 lg:w-5/12 lg:text-left">
          Uncover the synergy of JavaScript, APIs, and Markup to build faster,
          more secure, and scalable websites.
        </h3>
      </section>
      <Image
        className="mouse"
        src="/mouse.png"
        width={285}
        height={705}
        quality={100}
        priority
        alt="A computer mouse trailing a dotted line"
      />
      {/* Rectangular gradients and blur + Javascript */}
      <section className="hero h-[700px] md:h-[1200px] lg:h-[1400px]">
        <m.div style={{ y: y1 }}>
          <Image
            style={{
              transform: `translateX(-50%) translateX(-80%) translateY(30%)`,
            }}
            className="hero__image"
            src="/gradient-left.jpg"
            width={280}
            height={630}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
        </m.div>

        <m.div style={{ y: y1 }}>
          <Image
            className="hero__image"
            style={{
              transform: `translateX(-50%) translateX(35%) translateY(0%)`,
            }}
            src="/gradient-right.jpg"
            width={280}
            height={670}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
        </m.div>

        <m.div style={{ y: y2 }}>
          <div
            className="hero__image hero__blur"
            style={{
              transform: `translateX(-50%) translateX(-20%) translateY(70%)`,
            }}
          ></div>
        </m.div>

        <m.div style={{ y: y2 }}>
          <div
            className="hero__image hero__blur"
            style={{
              transform: `translateX(-50%) translateX(90%) translateY(50%)`,
            }}
          ></div>
        </m.div>
      </section>
    </section>
  );
}
