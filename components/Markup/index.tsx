import Image from 'next/image';
import { useRef } from 'react';
import { m, useTransform, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Markup() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['center end', 'end start'],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <div className="mt-[12rem] flex justify-center  md:mt-[32rem]  lg:mt-[48rem]">
      <section
        ref={ref}
        className="justify-centerlg:relative relative flex flex-col lg:mx-auto lg:h-screen lg:flex-row"
      >
        {/* Text */}
        <section className="relative z-10 m-12 flex flex-col items-center justify-center text-center md:m-16 lg:z-10 lg:m-24 lg:max-w-screen-2xl lg:items-start lg:justify-start lg:text-left">
          <m.h1>markup</m.h1>
          <m.h4 className="py-4 md:p-12 lg:w-5/12 lg:p-0 lg:py-12">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </m.h4>
        </section>
        {/* Text */}
        {/* Rectangular gradients and blur + Javascript */}
        <section className="hero flex h-[900px] flex-col items-center justify-start pt-36 md:h-[1600px] md:pt-48 lg:left-[24rem] lg:h-[1400px]">
          <m.div className="absolute w-fit" style={{ y: y1 }}>
            <Image
              style={{
                transform: `translateX(-80%) translateY(30%)`,
              }}
              className="hero__image"
              src="/images/bricks.jpg"
              width={280}
              height={630}
              alt="A colorful brick wall made out of Legos, photographed by Omar Flores"
            />
          </m.div>

          <m.div className="absolute w-fit" style={{ y: y2 }}>
            <Image
              className="hero__image"
              style={{
                transform: `translateX(35%) translateY(0%)`,
              }}
              src="/images/bricks.jpg"
              width={280}
              height={670}
              alt="A colorful brick wall made out of Legos, photographed by Omar Flores"
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
          <m.div
            className="absolute bottom-24 w-9/12 md:bottom-48 lg:bottom-64 lg:hidden lg:w-1/3"
            style={{ y: y3 }}
          >
            <Image
              src="/images/brick-falling.svg"
              className="w-full"
              width={360}
              height={260}
              alt="A vector of bricks falling."
            />
          </m.div>
        </section>
        {/* Conditionally render on desktop to exit vertical flow*/}
        <m.div
          className="absolute hidden w-9/12 lg:bottom-0 lg:left-32 lg:block lg:w-1/3"
          style={{ y: y3 }}
        >
          <Image
            src="/images/brick-falling.svg"
            className="w-full"
            width={360}
            height={260}
            alt="A vector of bricks falling."
          />
        </m.div>
      </section>
    </div>
  );
}
