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
  );
}
