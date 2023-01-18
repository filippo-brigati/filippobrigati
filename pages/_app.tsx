import "@/styles/globals.css";
//import { Inter } from "@next/font/google";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";

const font = localFont({ src: "./graphik/GraphikRegular.woff2" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className + ' dark:bg-black'}>
      <Component {...pageProps} />
    </main>
  );
}
