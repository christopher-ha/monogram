import { useRef } from 'react';
import Image from 'next/image';

export default function Scores() {
  return (
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
            <h2 className="py-4 text-center text-lime-50">top audit scores</h2>
            <div></div>
            <div className="bg-gradient-to-b from-lime-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent lg:w-10/12 ">
              <p className="pb-4 text-transparent md:pb-8 lg:pb-12">
                Search engines, business stakeholders, and end-users gauge a
                website’s value using metric tools like Google Lighthouse, which
                measures site performance, SEO, and accessibility.
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
          <h4 className="pb-8 text-neutral-200">Christopher Ha for Monogram</h4>
          <h4 className="pb-16 text-pink-600 md:pb-32">❤️</h4>
        </footer>
      </section>
    </section>
  );
}
