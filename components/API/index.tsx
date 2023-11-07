'use client';

import Image from 'next/image';
import { useState, useEffect, Suspense, lazy } from 'react';

const Experience = lazy(() => import('./Experience'));

export default function API() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative bg-neutral-900 text-center">
      {/* Text */}
      <section className="relative p-12 pb-32 md:pb-[16rem] lg:mx-auto lg:max-w-screen-2xl lg:pb-[24rem]">
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
      <section className="absolute -bottom-[16rem] z-20 flex aspect-square w-screen flex-col items-center md:-bottom-[32rem] lg:-bottom-[42rem] lg:left-1/2 lg:mx-auto lg:aspect-auto lg:h-screen lg:max-w-screen-2xl lg:-translate-x-1/2">
        {!isMounted ? null : (
          <Suspense fallback={null}>
            <Experience />
          </Suspense>
        )}
      </section>
    </section>
  );
}
