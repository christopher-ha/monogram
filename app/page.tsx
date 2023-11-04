import Image from 'next/image';

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

export default function Home() {
  return (
    <main className="flex flex-col content-center justify-center">
      {/* Title, CTA, and Gradients */}
      <section className="flex flex-col content-center justify-center">
        {/* Header and Description */}
        <section className="relative z-10 m-12 text-center">
          <h1>
            jamstack{' '}
            <span className="bg-gradient-to-r from-orange-300 via-red-300 to-purple-400 bg-clip-text text-transparent">
              101
            </span>
          </h1>
          <h3 className="bg-gradient-to-t from-neutral-800 to-neutral-400 bg-clip-text  pt-4 text-center text-transparent">
            Uncover the synergy of JavaScript, APIs, and Markup to build faster,
            more secure, and scalable websites.
          </h3>
        </section>
        {/* Rectangular gradients and blur + Javascript */}
        <section className="hero relative h-[1400px]">
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
            className="hero__image"
            src="/gradient-right.jpg"
            width={280}
            height={670}
            quality={100}
            priority
            alt="A gradient fade between yellow and orange"
          />
          <div className="hero__image hero__blur"></div>
          <div className="hero__image hero__blur"></div>
          {/* Javascript*/}
          <section className="hero__full absolute bottom-0 z-10 p-8">
            <h1 className="text-center text-white">javascript</h1>
            <h4 className="pb-20 pt-8 text-center text-white">
              Statically generated pages are brought to life with client-side
              JavaScript libraries and frameworks, such as Algolia and Next.js.
            </h4>
            {/* Render codeBlock as string*/}
            <div className="relative">
              <pre className="absolute z-20">
                <code className="hero__code text font-mono text-[0.25rem] text-cyan-300">
                  {codeBlock}
                </code>
              </pre>
              <Image
                src="/computer.png"
                className="scale-125"
                width={360}
                height={360}
                alt="A vector rendering of a CRT computer."
              />
            </div>
          </section>
        </section>
      </section>

      {/* Logos */}
      <section className="z-0 m-0 bg-neutral-900 ">
        <div className="flex flex-col items-center pt-16">
          <Image
            className="logo"
            alt="React.js Logo"
            src="/react.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo"
            alt="Next.js Logo"
            src="/next.svg"
            width={128}
            height={64}
          />
          <Image
            className="logo"
            alt="Vue.js Logo"
            src="/vue.svg"
            width={140}
            height={64}
          />
          <Image
            className="logo"
            alt="Svelte.js Logo"
            src="/svelte.svg"
            width={150}
            height={64}
          />
        </div>
      </section>
      {/* API */}
      <section className=" bg-neutral-900 text-center">
        {/* Text */}
        <section className="p-12">
          <h1 className="text-neutral-100">api</h1>
          <h4 className="py-8 text-neutral-200">
            At build time, a Jamstack website uses data from one or more APIs to
            generate markup. These APIs can be a headless CMS like Prismic, a
            database like Supabase, or even a local JSON file!
          </h4>
        </section>
        {/* 3D Sphere */}
        <section className="h-[400px] w-screen bg-purple-300 p-0"></section>
      </section>
      <section className="text-center">
        {/* Text */}
        <section className="p-12">
          <h1>markup</h1>
          <h4 className="py-8">
            When ready for deployment, a static-site generator such as Astro or
            Next.js is used to compile the website. The end result is a
            collection of pre-rendered HTML pages that can be delivered
            lightning-fast over a CDN like Vercel’s Edge Network.
          </h4>
        </section>
        {/* Rectangular brick walls and blur + Vectors of colourful bricks */}
        <section className="hero relative h-[1100px]">
          <Image
            className="hero__image"
            src="/bricks.jpg"
            width={280}
            height={630}
            quality={100}
            priority
            alt="A colorful brick wall made out of Legos, photographed by Omar Flores."
          />
          <Image
            className="hero__image"
            src="/bricks.jpg"
            width={280}
            height={670}
            quality={100}
            priority
            alt="A colorful brick wall made out of Legos, photographed by Omar Flores."
          />
          <div className="hero__image hero__blur"></div>
          <div className="hero__image hero__blur"></div>
          {/* Vectors of colourful bricks falling */}
          <section className="absolute bottom-0 z-20 flex flex-col items-center">
            <Image
              src="/brick-falling.svg"
              className="pb-20"
              width={360}
              height={260}
              alt="A vector of bricks falling."
            />
            <Image
              src="/brick-wall.svg"
              className="opacity-20"
              width={900}
              height={120}
              alt="A vector of a brick wall."
            />
          </section>
        </section>
      </section>
      <section className="flex  flex-col items-center bg-neutral-900">
        <section className="glass__border relative z-20 m-4 -translate-y-16 rounded-[36px]">
          <div className="relative z-10 p-8">
            <h2 className="py-4 text-lime-50">top audit scores</h2>
            <div className="h-[100px]"></div>
            <p className="pb-4 text-neutral-300 opacity-60">
              Search engines, business stakeholders, and end-users gauge a
              website’s value using metric tools like Google Lighthouse, which
              measures site performance, SEO, and accessibility.
            </p>
            <p className="pb-4 text-neutral-300 opacity-50">
              Performance is one of the most difficult scores to get to 100.
              This is especially true in a time when users demand
              JavaScript-heavy, highly-interactive web experiences.
            </p>
            <p className="pb-4 text-zinc-300 opacity-40">
              A Jamstack website, delivering SEO-friendly, lean & clean HTML in
              milliseconds, promises higher search-engine ranking and a more
              positive, responsive end-user experience.
            </p>
          </div>
          <div className="glass__gradient absolute top-0 h-full w-full rounded-[36px]"></div>
        </section>
        <h4 className="pb-8 text-neutral-200">Christopher Ha for Monogram</h4>
        <h4 className="pb-16 text-pink-600">❤️</h4>
      </section>
    </main>
  );
}
