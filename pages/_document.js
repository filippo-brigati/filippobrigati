import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-zinc-800">
        <div className="max-w-3xl m-auto px-4 sm:px-0 h-screen">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}