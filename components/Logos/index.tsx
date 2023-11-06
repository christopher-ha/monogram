import Image from 'next/image';

export default function Logos() {
  return (
    <section className="relative z-0 m-0 bg-neutral-900 pt-48 md:pt-72">
      <Image
        className="absolute -top-48 w-full scale-y-[500%]"
        alt="Wave"
        src="/wave-top.svg"
        width={400}
        height={200}
      />
      <div className="flex flex-col items-center lg:mx-auto lg:max-w-screen-2xl">
        {/* Desktop: Row, 2 - Space Around */}
        <div className="flex flex-col items-center lg:flex lg:w-full lg:flex-row lg:justify-around">
          <Image
            className="logo opacity-100 md:w-[220px] lg:opacity-100"
            alt="React.js Logo"
            src="/logos/react.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo opacity-75 md:w-[180px] lg:opacity-100"
            alt="Next.js Logo"
            src="/logos/next.svg"
            width={128}
            height={64}
          />
        </div>
        {/* Desktop: Row, 1 */}
        <Image
          className="logo opacity-20 md:w-[200px] lg:opacity-50"
          alt="Vue.js Logo"
          src="/logos/vue.svg"
          width={140}
          height={64}
        />
        {/* Desktop, Row, 2 - Space Between */}
        <div className="lg:flex lg:w-full lg:flex-row lg:justify-between">
          <Image
            className="logo pb-12 opacity-10 md:w-[200px] lg:opacity-30"
            alt="Svelte.js Logo"
            src="/logos/svelte.svg"
            width={150}
            height={64}
          />
          {/* Begin: Additional Logos (Desktop) -- All items below this point are only rendered on desktop.  */}
          <Image
            className="logo hidden lg:block lg:w-[220px] lg:opacity-30"
            alt="React.js Logo"
            src="/logos/react.svg"
            width={140}
            height={64}
          />
        </div>
        {/* Desktop: Row, 1 */}
        <Image
          className="logo hidden lg:block lg:w-[180px] lg:opacity-20"
          alt="Next.js Logo"
          src="/logos/next.svg"
          width={128}
          height={64}
        />
        {/* Desktop: Row, 2 - Space Around */}
        <div className="lg:flex lg:w-full lg:flex-row lg:justify-around">
          <Image
            className="logo hidden lg:block lg:w-[200px] lg:opacity-10"
            alt="Vue.js Logo"
            src="/logos/vue.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo hidden pb-12 lg:block lg:w-[200px] lg:opacity-10"
            alt="Svelte.js Logo"
            src="/logos/svelte.svg"
            width={150}
            height={64}
          />
        </div>
      </div>
    </section>
  );
}
