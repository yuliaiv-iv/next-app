import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <title>Isinka Copy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:url" content={process.env.DOMAIN + router.asPath} /> */}
        {/* if domain exist */}
        <meta property="og:locale" content="en_EN" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
