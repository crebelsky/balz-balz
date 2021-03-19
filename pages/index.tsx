import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/Navigation/Navigation";

//TODO: overlay toggle via context, mobile menu

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <header className="page-header flex w-full h-full items-center justify-between">
          <Navigation />
        </header>
        <main className="page-content">
          <section className="logo">
            <h1 className="relative h-28">
              <Image
                src="/svg/wt-logo-wt.svg"
                alt="Balz und Balz Logo"
                layout="fill"
                objectFit="contain"
              />
            </h1>
          </section>
          <section className="content">
            <h2 className="text-xl text-center">CAFÉ UND FEINE KOST</h2>
            <span className="divider"></span>
            <p className="text-sm">
              Wir sind Kathrin und Chris. Geschwister, Gastgeber aus
              Leidenschaft und total versessen auf spitzenmäßigen Kaffee. Unsere
              Herausforderung ist es, euch mit dem Bestmöglichen aus kostbaren
              Bohnen, außergewöhnlich gut belegten Stullen und hausgemachtem
              Blechkuchen glücklich zu machen.
              <br />
              <br />
              Schaut vorbei, wir freuen uns auf euch!
            </p>
          </section>
          <section className="video">
            <video
              width="100%"
              controls
              poster="/images/balzubalz-video-poster.jpg"
            >
              <source src="/videos/BalzuBalz.mp4" type="video/mp4" />
              <source src="/videos/BalzuBalz.ogv" type="video/ogg" />
            </video>
          </section>
        </main>
      </div>
    </>
  );
}
