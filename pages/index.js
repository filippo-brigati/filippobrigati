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
      <div className="grid grid-cols-3 gap-x-10 gap-y-8">
        <div className="col-span-3 mt-5 sm:mt-12">
          <p className="text-4xl font-semibold">Hi! Welcome</p>
        </div>
        <div className="col-span-3 sm:col-span-2 space-y-8">
          <p className="text-slate-700 font-normal">
            Hi, my name is{" "}
            <span className="font-semibold">Filippo Brigati</span>, i am {age}{" "}
            years old, lives is Reggio Emilia ~Italy~ and this is my space in
            the internet. I have a lot of passion like hiking, climbing, wathing
            series, listening music, travel and code. I am also a Scout and I
            like everything is connected with tecnology.
          </p>
          <p className="text-slate-700 font-normal">
            Now i currently working as a younior developer at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.gabtamagnini.it/"
              className="font-semibold text-sky-600"
            >
              GAB Tamagnini
            </a>
            . But negli anni precedenti i have studied IT at school, At the
            beginning we learned{" "}
            <span className="font-semibold text-red-600">
              Java, C++ and PHP
            </span>
            , in the next years we studied some JavaScript framework like{" "}
            <span className="font-semibold text-green-600">
              ReactJS, NextJS
            </span>{" "}
            and now at GAB i am learning{" "}
            <span className="font-semibold text-green-600">AngularJS</span>. For
            the backend i use{" "}
            <span className="font-semibold text-indigo-600">
              .NET with C#, NodeJS{" "}
            </span>
            (little) finally database side i know{" "}
            <span className="font-semibold text-blue-600">
              SQL, mongoDB and Supabase
            </span>
            .
          </p>
          <div className="flex flex-row gap-x-5">
            <span className="text-slate-900">
              <a target="_blank" href="https://github.com/filippo-brigati" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="fa-1x" />
              </a>
            </span>
            <span className="text-pink-600">
              <a target="_blank" href="https://www.instagram.com/fillo.brigati" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
              </a>
            </span>
            <span className="text-sky-600">
              <a target="_blank" href="https://www.gabtamagnini.it/" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
              </a>
            </span>
            <span className="text-blue-600">
              <a target="_blank" href="https://www.gabtamagnini.it/" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="relative mt-5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-2 bg-white text-sm text-gray-500">
            {" "}
            Some of my{" "}
            <span className="text-slate-900 font-semibold">Project</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 my-6">
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
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://api.github.com/users/filippo-brigati/repos");
  const projects = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      projects,
    },
  };
}
