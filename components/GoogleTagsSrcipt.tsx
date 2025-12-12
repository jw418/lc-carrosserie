"use client";

import Script from "next/script";

const GtagScripts = () => {
  const id = process.env.NEXT_PUBLIC_GOOGLE_AW_ID;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}

            gtag('consent', 'default', {
              ad_storage: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });

            gtag('js', new Date());
            gtag('config', '${id}');
          `,
        }}
      />
    </>
  );
};

export default GtagScripts;
