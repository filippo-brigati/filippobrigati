import Head from "next/head";
import Link from "next/link";

export default function Home({ projects }) {
  const birthday = new Date("2002-07-14");

  const calculateAge = (birthday) => {
    let difference = Date.now() - birthday.getTime();
    let date = new Date(difference);
    return Math.abs(date.getUTCFullYear() - 1970);
  };

  const age = calculateAge(birthday);

  return (
    <>
      <Head>
        <title>Filippo Brigati</title>
        <meta
          name="description"
          content="Hi, I am Filippo Brigati, a Junior (web) developer."
        />
        <meta
          name="keywords"
          content="portfolio, filippo brigati, brigati filippo, filippo, brigati, web-dev, web, angular, next, js"
        />
      </Head>
      <div className="flex h-screen justify-center items-center bg-white dark:bg-zinc-800">
      <div className="mx-4 sm:mx-0 m-auto sm:max-w-xl text-slate-900 dark:text-gray-50">
        <p>
          Hi,{` I'm` + ` `}
          <a
            className="underline decoration-pink-500/60"
            target="_blank"
            href="https://instagram.com/fillo.brigati"
            rel="noreferrer"
          >
            Filippo
          </a>
          . {`I'm ` + age} years old, I live in Reggio Emilia, Italy.
        </p>
        <p className="pt-2">
          I like to make things for the Web. I am currenly working at GAB
          Tamagnini as a Software Developer. Some of my projects are stored{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/brixlist"
            className="underline decoration-sky-500/60"
          >
            here
          </a>
          {` `} and if you want you can read some stuff on my{` `}
          <Link href="/post" passHref>
            <a
              className="underline decoration-pink-500/60"
            >
              blog
            </a>
          </Link>
          .
        </p>
        <p className="pt-2">
          Feel free to say{` `}
          <a
            className="underline decoration-yellow-500/60"
            target="_blank"
            href="mailto:filippobrigati2@gmail.com"
            rel="noreferrer"
          >
            hello
          </a>
          , fork my{` `}
          <a
            className="underline decoration-lime-500/60"
            target="_blank"
            href="https://github.com/filippo-brigati"
            rel="noreferrer"
          >
            code
          </a>
          , or read my{` `}
          <a
            className="underline decoration-blue-500/60"
            target="_blank"
            href="https://twitter.com/brigati_filippo"
            rel="noreferrer"
          >
            tweets
          </a>
          .
        </p>
      </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/filippo-brigati/repos");
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
}
