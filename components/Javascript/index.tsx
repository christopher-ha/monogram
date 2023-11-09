import Image from 'next/image';

export default function Javascript() {
  return (
    <section className="hero__full relative z-10 mx-4 flex h-[500px] flex-col items-center rounded-[3rem] bg-transparent md:m-0 md:mx-8 md:h-[900px] lg:mx-auto lg:mt-48 lg:max-w-screen-2xl">
      {/* Background */}
      <Image
        className="hero__background z-0 h-[450px] max-h-full max-w-full rounded-3xl md:h-[850px] md:rounded-[4rem] lg:w-[2048px]"
        src="/images/gradient-full.jpg"
        width={1024}
        height={768}
        alt="A gradient fade between yellow and orange"
      />
      {/* Mouse Trail */}
      <Image
        className="hidden lg:absolute lg:right-16 lg:top-48 lg:block lg:w-1/4"
        src="/images/mouse-trail.png"
        width={1024}
        height={768}
        alt="A gradient fade between yellow and orange"
      />
      {/* Text */}
      <div className="absolute z-50 flex flex-col items-center">
        <div className="flex flex-col items-center px-8 pb-0 pt-4 md:px-24 md:pt-8">
          <h1 className="text-center text-white">javascript</h1>
          <h4 className="pb-12 pt-8 text-center text-white lg:w-7/12">
            Statically generated pages are brought to life with client-side
            JavaScript libraries and frameworks, such as Algolia and Next.js.
          </h4>
        </div>
        {/* Render codeBlock as string*/}
        <div className="relative">
          <Image
            src="/images/computer-gradient.svg"
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
      </div>
    </section>
  );
}

const codeBlock = `
import Document, { Html, Head, Main, NextScript } from 'next/document'

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
