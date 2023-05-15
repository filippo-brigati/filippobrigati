import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Filippo Brigati",
  description: "Welcome in my space in the web",
};

const myFont = localFont({
  src: "../public/fonts/InterDisplay-Regular.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className + " bg-white dark:bg-zinc-900 text-black dark:text-white"}>
      <body className="max-w-2xl mx-4 sm:m-auto my-6 sm:my-20">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
