import Image from 'next/image';
import {
  m,
  motion,
  useTransform,
  useScroll,
  MotionValue,
  useMotionValueEvent,
} from 'framer-motion';
import { useRef } from 'react';

interface MotionProps {
  scrollY: MotionValue<number>;
}

export default function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="flex flex-col justify-center lg:relative lg:mx-auto lg:h-screen lg:max-w-screen-2xl lg:flex-row"
    >
      {/* Header and Description */}
      <section className="relative z-10 m-12 flex flex-col items-center justify-center text-center md:m-16 md:mb-32 lg:z-10 lg:m-24 lg:items-start lg:justify-start lg:text-left">
        <m.h1 style={{ y: y2 }}>
          jamstack{' '}
          <span className="bg-gradient-to-r from-orange-300 via-red-300 to-purple-400 bg-clip-text text-transparent">
            101
          </span>
        </m.h1>
        <m.h3
          style={{ y: y1 }}
          className="bg-gradient-to-t from-neutral-800 to-neutral-400 bg-clip-text pt-4 text-center text-transparent md:w-10/12 lg:w-5/12 lg:text-left"
        >
          Uncover the synergy of JavaScript, APIs, and Markup to build faster,
          more secure, and scalable websites.
        </m.h3>
      </section>
      <m.div
        style={{ rotate: rotation }}
        className="md: absolute -bottom-[5rem] left-[3rem] origin-[-150px] md:-bottom-[12rem] md:left-[8rem] md:origin-[-400px] lg:-bottom-[32rem] lg:left-64 lg:origin-[-450px]"
      >
        <Image
          className="w-[200px] md:w-[300px] lg:w-[350px]"
          src="/images/mouse.png"
          width={285}
          height={705}
          quality={100}
          priority
          alt="A computer mouse trailing a dotted line"
        />
      </m.div>
      {/* Rectangular gradients and blur + Javascript */}
      <section className="hero flex h-[800px] flex-col items-center justify-center md:h-[1200px] lg:left-[24rem] lg:h-[1400px]">
        <m.div className="absolute w-fit" style={{ y: y1 }}>
          <Image
            style={{
              transform: `translateX(-80%) translateY(30%)`,
            }}
            className="hero__image"
            src="/images/gradient-left.jpg"
            width={280}
            height={630}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
        </m.div>

        <m.div className="absolute w-fit" style={{ y: y2 }}>
          <Image
            className="hero__image"
            style={{
              transform: `translateX(35%) translateY(0%)`,
            }}
            src="/images/gradient-right.jpg"
            width={280}
            height={670}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
        </m.div>

        <m.div className="absolute w-fit" style={{ y: y1 }}>
          <div
            className="hero__image hero__blur"
            style={{
              transform: `translateX(-20%) translateY(70%)`,
            }}
          ></div>
        </m.div>

        <m.div className="absolute w-fit" style={{ y: y2 }}>
          <div
            className="hero__image hero__blur"
            style={{
              transform: `translateX(90%) translateY(50%)`,
            }}
          ></div>
        </m.div>
      </section>
    </section>
  );
}
