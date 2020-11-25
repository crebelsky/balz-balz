import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BASE_CLASS = 'page-imprint';

function ImprintPage() {
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
        title="Impressum"
      />

      <section className={`${ BASE_CLASS} flex flex-col items-center`}>
      <h2 className="big">Impressum</h2>
        <div className="spacer"></div>
        <div className="vertical-space"></div>
        <p><strong>Angaben gemäß § 5 TMG:</strong></p>
        <p>Balz und Balz GbR
            <br /> Lehmweg 6
            <br /> 20251 Hamburg
        </p>
        <p><strong>Vertreten durch:</strong></p>
        <p>Kathrin Balz, Christoph Balz</p>
        <p><strong>Kontakt:</strong></p>
        <table>
            <tr>
                <td>Telefon:</td>
                <td>04060438833</td>
            </tr>
            <tr>
                <td>E-Mail:</td>
                <td>hello@balzundbalz.de</td>
            </tr>
        </table>
        <div className="vertical-space"></div>
        <p>Quelle: <em><a href="https://www.e-recht24.de">eRecht24</a></em></p>
      </section>
    </Layout>
  );
}

export default ImprintPage;
