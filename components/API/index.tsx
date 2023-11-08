'use client';

import { useState, useEffect, Suspense, lazy } from 'react';

const Experience = lazy(() => import('./Experience'));

export default function API() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <section className="relative  bg-neutral-900 text-center">
        {/* Text */}
        <section className="relative p-12 pb-32 md:pb-[16rem] lg:mx-auto lg:max-w-screen-2xl lg:pb-[24rem]">
          <h1 className="text-neutral-100">api</h1>
          <h4 className="py-8 text-neutral-200 md:p-12 lg:px-72">
            At build time, a Jamstack website uses data from one or more APIs to
            generate markup. These APIs can be a headless CMS like Prismic, a
            database like Supabase, or even a local JSON file!
          </h4>
        </section>
        <svg
          className="absolute"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#171717"
            fillOpacity="1"
            d="M0,224L60,234.7C120,245,240,267,360,250.7C480,235,600,181,720,154.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        {/* 3D Sphere */}
        <section className="absolute -bottom-[16rem] z-20 flex aspect-square w-screen flex-col items-center md:-bottom-[32rem] lg:-bottom-[42rem] lg:left-1/2 lg:mx-auto lg:aspect-auto lg:h-screen lg:max-w-screen-2xl lg:-translate-x-1/2">
          {!isMounted ? null : (
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          )}
        </section>
      </section>
    </>
  );
}
