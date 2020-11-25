import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BASE_CLASS = 'page-home';

function OpeningHoursPage() {
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
        title="Öffnungszeiten"
      />

      <section className={`${ BASE_CLASS} flex flex-col items-center`}>
      <h2 className="big">Öffnungszeiten</h2>
        <div className="vertical-space"></div>
        <div className="spacer"></div>
        <div className="vertical-space"></div>
        <p>Balz und Balz GbR
            <br /> Lehmweg 6
            <br /> 20251 Hamburg
        </p>
        <div className="vertical-space"></div>
        <table>
            <tr>
                <td width="50%"><p>Dienstag - Freitag</p></td>
                <td><p>8.00 Uhr - 18.00 Uhr</p></td>
            </tr>
            <tr>
                <td width="50%"><p>Samstag - Sonntag&nbsp;</p></td>
                <td><p>9.00 Uhr - 17.00 Uhr</p></td>
            </tr>
            <tr>
                <td colSpan="2"><p>Montags ist kreative Pause.</p></td>
            </tr>
        </table>
      </section>
    </Layout>
  );
}

export default OpeningHoursPage;
