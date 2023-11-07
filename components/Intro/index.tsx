import Image from 'next/image';
import { m, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function Intro() {
  const [offset, setOffset] = useState(0);

  const handleScroll = () => {
    const pageOffset = window.scrollY;
    window.requestAnimationFrame(() => {
      setOffset(pageOffset);
    });
  };

  useEffect(() => {
    // const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex flex-col justify-center lg:relative lg:mx-auto lg:h-screen lg:max-w-screen-2xl lg:flex-row">
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
        <Image
          className="hero__image"
          style={{ top: `${offset * -0.1 + 100}px`, position: 'absolute' }}
          src="/gradient-left.jpg"
          width={280}
          height={630}
          quality={100}
          priority
          alt="A gradient fade between yellow and orange"
        />

        <Image
          className="hero__image "
          style={{ top: `${offset * -0.1 + 100}px`, position: 'absolute' }}
          src="/gradient-right.jpg"
          width={280}
          height={670}
          quality={100}
          priority
          alt="A gradient fade between yellow and orange"
        />
        <div
          className="hero__image hero__blur"
          style={{
            top: `${offset * -0.2 + 100}px`,
            position: 'absolute',
          }}
        ></div>
        <div
          className="hero__image hero__blur"
          style={{ top: `${offset * -0.2 + 100}px`, position: 'absolute' }}
        ></div>
      </section>
    </section>
  );
}
