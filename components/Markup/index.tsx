import Image from 'next/image';

export default function Markup() {
  return (
    <section className="relative mt-[16rem] flex flex-col justify-center md:mt-[36rem] lg:relative lg:mx-auto  lg:mt-[42rem] lg:h-screen lg:flex-row">
      {/* Text */}
      <section className=" relative z-10 m-12 flex flex-col items-center justify-center text-center md:m-16 lg:z-10 lg:m-24 lg:max-w-screen-2xl lg:items-start lg:justify-start lg:text-left">
        <h1>markup</h1>
        <h4 className="py-4 md:p-12 lg:w-5/12 lg:p-0 lg:py-12">
          When ready for deployment, a static-site generator such as Astro or
          Next.js is used to compile the website. The end result is a collection
          of pre-rendered HTML pages that can be delivered lightning-fast over a
          CDN like Vercel’s Edge Network.
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
  );
}
