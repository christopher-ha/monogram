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
        {/* Rectangular gradients and blur */}
        <section className="hero">
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
        </section>
        {/* Pop out section with computer */}
        <section className="hero__full z-10 flex-col content-center justify-center p-8">
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
      {/* Logos */}
      <section className="z-0 m-0 flex h-[1200px] w-screen -translate-y-96 justify-center bg-neutral-900 pt-96">
        <div className="flex flex-col items-center pt-16 text-center">
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
    </main>
  );
}
