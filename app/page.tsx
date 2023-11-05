'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);

  return (
    <main className="flex flex-col justify-center">
      {/* Title, CTA, and Gradients */}
      <section className="flex flex-col justify-center lg:relative lg:mx-auto lg:h-screen lg:max-w-screen-2xl lg:flex-row">
        {/* Header and Description */}
        <section className="relative z-10 m-12 flex flex-col items-center justify-center overflow-hidden text-center md:m-16 md:mb-32 lg:z-10 lg:m-24 lg:items-start lg:justify-start lg:text-left">
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
            src="/gradient-left.jpg"
            width={280}
            height={630}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
          <Image
            className="hero__image "
            src="/gradient-right.jpg"
            width={280}
            height={670}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
          <div className="hero__image hero__blur"></div>
          <div className="hero__image hero__blur"></div>
        </section>
      </section>

      {/* Javascript*/}
      <section className="hero__full z-10 mx-4 flex h-[500px] flex-col items-center rounded-[48px] bg-transparent p-8 md:m-0 md:mx-16 md:h-[900px] md:p-16 lg:mx-auto lg:mt-48 lg:max-w-screen-2xl">
        <h1 className="text-center text-white">javascript</h1>
        <h4 className="pb-12 pt-8 text-center text-white lg:w-1/2">
          Statically generated pages are brought to life with client-side
          JavaScript libraries and frameworks, such as Algolia and Next.js.
        </h4>
        {/* Render codeBlock as string*/}
        <div className="relative">
          <Image
            src="/computer-gradient.svg"
            className="max-w-none md:w-[675px]"
            width={350}
            height={350}
            alt="A vector rendering of a CRT computer."
          />
          <pre>
            <code className="hero__code font-mono text-cyan-300">
              {codeBlock}
            </code>
          </pre>
        </div>
      </section>

      {/* Logos */}
      <section className="relative z-0 m-0 bg-neutral-900 pt-48 md:pt-72">
        <Image
          className="absolute -top-48 w-full scale-y-[500%]"
          alt="Wave"
          src="/wave-top.svg"
          width={400}
          height={200}
        />
        <div className="flex flex-col items-center lg:mx-auto lg:max-w-screen-2xl">
          <Image
            className="logo md:w-[220px]"
            alt="React.js Logo"
            src="/react.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo md:w-[180px]"
            alt="Next.js Logo"
            src="/next.svg"
            width={128}
            height={64}
          />
          <Image
            className="logo md:w-[200px]"
            alt="Vue.js Logo"
            src="/vue.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo pb-12 md:w-[200px]"
            alt="Svelte.js Logo"
            src="/svelte.svg"
            width={150}
            height={64}
          />
        </div>
      </section>

      {/* API */}
      <section className="relative bg-neutral-900 text-center">
        {/* Text */}
        <section className="relative p-12 pb-36 md:pb-96 lg:mx-auto lg:max-w-screen-2xl lg:pb-[32rem]">
          <h1 className="text-neutral-100">api</h1>
          <h4 className="py-8 text-neutral-200 md:p-12 lg:px-72">
            At build time, a Jamstack website uses data from one or more APIs to
            generate markup. These APIs can be a headless CMS like Prismic, a
            database like Supabase, or even a local JSON file!
          </h4>
        </section>
        <Image
          className="absolute w-full"
          alt="Wave"
          src="/wave-bottom.svg"
          width={400}
          height={200}
        />
        {/* 3D Sphere */}
        <section className="absolute -bottom-[16rem] z-20 flex aspect-square w-screen flex-col items-center border-2 border-solid border-purple-300 md:-bottom-[32rem] lg:-bottom-[42rem] lg:left-1/2 lg:mx-auto lg:aspect-auto lg:h-screen lg:max-w-screen-2xl lg:-translate-x-1/2"></section>
      </section>

      {/* Markup */}
      <section className="relative mt-[16rem] flex flex-col justify-center md:mt-[36rem] lg:relative lg:mx-auto  lg:mt-[42rem] lg:h-screen lg:flex-row">
        {/* Text */}
        <section className=" relative z-10 m-12 flex flex-col items-center justify-center text-center md:m-16 lg:z-10 lg:m-24 lg:max-w-screen-2xl lg:items-start lg:justify-start lg:text-left">
          <h1>markup</h1>
          <h4 className="py-4 md:p-12 lg:w-5/12 lg:p-0 lg:py-12">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </h4>
        </section>
        {/* Text */}
        {/* Rectangular gradients and blur + Javascript */}
        <section className="hero h-[900px] md:h-[2000px] lg:h-[1400px]">
          <Image
            className="hero__image"
            src="/bricks.jpg"
            width={280}
            height={630}
            quality={100}
            alt="A colorful brick wall made out of Legos, photographed by Omar Flores"
          />
          <Image
            className="hero__image "
            src="/bricks.jpg"
            width={280}
            height={670}
            quality={100}
            alt="A colorful brick wall made out of Legos, photographed by Omar Flores"
          />
          <div className="hero__image hero__blur"></div>
          <div className="hero__image hero__blur"></div>
          <Image
            src="/brick-falling.svg"
            className="absolute bottom-16 left-1/2 z-20 w-9/12 -translate-x-1/2 md:bottom-72 md:w-9/12 lg:left-1/4 lg:w-1/3"
            width={360}
            height={260}
            alt="A vector of bricks falling."
          />
        </section>
      </section>
      <section className="overflow-hidden">
        {/* Relocate the brick wall image to use relative positioning to maintain the stack order above the audit scores. This resolves the issue of an undefined container height caused by absolute positioning. Change scale origin to bottom so that it scales upwards, and add padding to prevent it from clipping with overflow hidden.*/}
        <Image
          src="/brick-wall.svg"
          className="z-20 origin-bottom scale-[2.5] pt-24 md:pt-36 lg:w-full lg:scale-100 lg:pt-48 "
          width={900}
          height={120}
          alt="A vector of a brick wall."
        />
        {/* Top Audit Scores */}
        <section className="relative flex flex-col items-center bg-neutral-900">
          <section className="glass__border relative z-20 m-4 -translate-y-16 rounded-[36px] md:m-12 md:-translate-y-32 md:rounded-[64px] lg:w-8/12">
            <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-24 lg:p-32 lg:pb-48">
              <h2 className="py-4 text-center text-lime-50">
                top audit scores
              </h2>
              <div className="h-[100px]"></div>
              <div className="bg-gradient-to-b from-lime-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent lg:w-10/12 ">
                <p className="pb-4 text-transparent md:pb-8 lg:pb-12">
                  Search engines, business stakeholders, and end-users gauge a
                  website’s value using metric tools like Google Lighthouse,
                  which measures site performance, SEO, and accessibility.
                </p>
                <p className="pb-4 text-transparent md:pb-8 lg:pb-12">
                  Performance is one of the most difficult scores to get to 100.
                  This is especially true in a time when users demand
                  JavaScript-heavy, highly-interactive web experiences.
                </p>
                <p className="pb-4 text-transparent md:pb-8 lg:pb-12">
                  A Jamstack website, delivering SEO-friendly, lean & clean HTML
                  in milliseconds, promises higher search-engine ranking and a
                  more positive, responsive end-user experience.
                </p>
              </div>
            </div>
            <div className="glass__gradient absolute top-0 h-full w-full rounded-[36px] md:rounded-[64px]"></div>
          </section>
          <footer className="text-center">
            <h4 className="pb-8 text-neutral-200">
              Christopher Ha for Monogram
            </h4>
            <h4 className="pb-16 text-pink-600 md:pb-32">❤️</h4>
          </footer>
        </section>
      </section>
    </main>
  );
}

const codeBlock = `import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/*Fonts*/}
					<link rel="preconnect" href="https://rsms.me" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://kit.fontawesome.com" crossOrigin="anonymous" />
					<link rel="preload" href="https://rsms.me/inter/inter.css" as="style" />
					<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
					<noscript>
						<link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
					</noscript>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
`;
