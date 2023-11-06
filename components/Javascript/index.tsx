import Image from 'next/image';

export default function Javascript() {
  return (
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
