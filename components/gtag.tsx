import Script from 'next/script'

const GA_MEASUREMENT_ID = 'UA-53217609-2';

const GA = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { 'anonymize_ip': true });
        `}
      </Script>
    </>
  )
}

export default GA