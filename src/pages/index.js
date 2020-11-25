import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Logo from "../../static/media/svg/wt-logo-wt.svg";

const BASE_CLASS = 'page-home';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[
          "Balz",
          "balzundbalz",
          "Hamburg",
          "Hoheluft",
          "Café",
          "Kaffee",
          "Delikatessen",
          "Homemade",
          "Espresso",
          "Latte",
          "Cappuccino",
        ]}
        title="Home"
      />

      <section className={`${ BASE_CLASS} flex flex-col items-center`}>
          <h1 className={`${ BASE_CLASS}__logo text-5xl mb-4`}>
            <img src={Logo} alt="" />
          </h1>
          <h2 className={`${ BASE_CLASS} text-xl mb-4`}>CAFÉ UND FEINE KOST</h2>
          <div className={`divider w-full h-px bg-white mb-4`}></div>
          <p className="text-sm text-left mb-4">
            Wir sind Kathrin und Chris. Geschwister, Gastgeber aus Leidenschaft
            und total versessen auf spitzenmäßigen Kaffee. Unsere Herausforderung
            ist es, euch mit dem Bestmöglichen aus kostbaren Bohnen,
            außergewöhnlich gut belegten Stullen und hausgemachtem Blechkuchen
            glücklich zu machen.
            <br />
            <br />
            Schaut vorbei, wir freuen uns auf euch!
          </p>
          <video
            width="100%"
            controls
            poster="/media/video/balzubalz-video-poster.jpg"
          >
            <source src="/media/video/BalzuBalz.mp4" type="video/mp4" />
            <source src="/media/video/BalzuBalz.ogv" type="video/ogg" />
          </video>
      </section>
    </Layout>
  );
}

export default IndexPage;
