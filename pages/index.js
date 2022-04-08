import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../components/ProjectCard";

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
        <title>Filippo Brigati | Junior Developer</title>
        <meta
          name="description"
          content="Hi, I am Filippo Brigati, a Junior (web) developer."
        />
        <meta
          name="keywords"
          content="portfolio, filippo brigati, brigati filippo, filippo, brigati, web-dev, web, angular, next, js"
        />
      </Head>
      <div className="grid grid-cols-3 gap-x-10">
        <div className="col-span-3 sm:col-span-2 mt-1">
          <span className="font-base text-gray-700 dark:text-white text-lg">About me</span>
        </div>
        <div className="col-span-3 sm:col-span-2 mt-2">
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            Hi, my name is{" "}
            <span className="font-semibold">Filippo Brigati</span>, i am {age}{" "}
            years old. I like developing things for the web, I also like travel,
            hiking, wathing series and listen to music.
          </p>
        </div>
        <div className="col-span-3 sm:col-span-2 mt-4">
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            Currently i am using{" "}
            <span className="font-semibold">AngularJS</span> fontend side and{" "}
            <span className="font-semibold">.NET</span> for backend, i also
            learned
            <span className="font-semibold"> ReactJS, NextJS</span>, at school i
            studied <span className="font-semibold">Java, C++</span>. I used{" "}
            <span className="font-semibold">NodeJS and PHP</span> to build APIs.
            I like <span className="font-semibold">SQL</span> but i also use
            <span className="font-semibold"> MongoBD</span>.
          </p>
        </div>
        <div className="col-span-3 sm:col-span-2 mt-4">
          <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed">
            Now i am working as a software Developer at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gabtamagnini.it/"
              className="font-semibold"
            >
              GAB Tamagnini
            </a>
          </p>
        </div>
        <div className="col-span-3 mt-4">
          <div className="flex flex-row gap-x-5">
            <span className="text-slate-900 dark:text-white">
              <a
                target="_blank"
                href="https://github.com/filippo-brigati"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="fa-1x" />
              </a>
            </span>
            <span className="text-pink-600">
              <a
                target="_blank"
                href="https://instagram.com/fillo.brigati"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
              </a>
            </span>
            <span className="text-sky-600">
              <a
                target="_blank"
                href="https://twitter.com/brigati_filippo"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
              </a>
            </span>
            <span className="text-blue-600">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/filippo-brigati-6569981b2"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                href="mailto:filippobrigati2@gmail.com"
                rel="noreferrer"
              >
                <span className="px-2 py-1 text-green-800 dark:text-green-100 text-xs font-medium bg-green-100 dark:bg-green-700 rounded-full">
                  Send Email
                </span>
              </a>
            </span>
          </div>
        </div>
        <div className="col-span-3 relative mt-5">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300 dark:border-white"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-white text-sm text-gray-500 dark:bg-zinc-800 dark:text-gray-100">
              {" "}
              Some of my{" "}
              <span className="text-slate-900 dark:text-white font-semibold">Project</span>
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4 pb-4">
        {projects.map((p) => (
          <div className="col-span-4 sm:col-span-2" key={p.node_id}>
            <ProjectCard project={p} />
          </div>
        ))}
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
