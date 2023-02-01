import React from "react";
import {
  TwitterLogoIcon,
  InstagramLogoIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const About = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">About</h1>
        <p className="font-normal text-base text-neutral-900 dark:text-neutral-50 mt-5 leading-7">
          Hey, I'm Filippo, but you can call me{" "}
          <span className="font-serif">Brix</span>, and welcome in my space on
          the web.
        </p>
        <p className="font-normal text-base text-neutral-900 dark:text-neutral-50 mt-5 leading-7">
          I'm currently studing computer science at{" "}
          <span className="font-semibold">University of Bologna</span> (first
          year), were we are learning java and web technologies. In addition to{" "}
          <span className="font-semibold">
            computer science and telecommunications
          </span>{" "}
          we also take courses of{" "}
          <span className="font-semibold">economics</span>.
        </p>
        <hr className="my-12 text-gray-400" />
        <p className="font-normal text-base text-neutral-900 dark:text-neutral-50 leading-7">
          I'm 20 y.o and currently leaving in Reggio Emilia, Italy. I'm
          passionate about many pursuits, including music, hike, clim, ski, I
          like being in contact with nature and for this I am also a scout and
          (finally) of course, coding.
        </p>
        <p className="font-normal text-base text-neutral-900 dark:text-neutral-50 leading-7 mt-5">
          I love building things for the web, especially frontend. I started few
          years ago with simple HTML page and now I'm building web apps with
          <span className="font-semibold">ReactJS and NextJS</span> with
          Typescript obv. I also made some backend project using{" "}
          <span className="font-semibold">C# with .NET</span>
          and, of course, <span className="font-semibold">NodeJS</span>.
        </p>
        <p className="font-normal text-base text-neutral-900 dark:text-neutral-50 leading-7 mt-5">
          Before starting University I{" "}
          <span className="font-semibold">worked as a Software Developer</span>{" "}
          for one year at GAB Tamagnini, during this period I developed web app
          both frontend and backend side. During my study I'm building some side
          project, you can you can take a look of{" "}
          <span className="font-mono text-sm bg-gray-100 dark:bg-neutral-700 p-1 rounded-md">
            /project
          </span>{" "}
          page or checking my GitHub profile. Of course I{" "}
          <span className="font-semibold">love and belive </span> in Open
          Source.
        </p>
      </div>
      <div className="w-full mt-8 mb-2 sm:mb-8 flex flex-col sm:flex-row gap-y-6 sm:gap-y-0 sm:gap-x-6">
        <a
          className="w-full sm:w-1/4 px-2 py-3 flex flex-row justify-center items-center border border-neutral-900 dark:border-neutral-50 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-900 hover:dark:bg-neutral-50 hover:text-white dark:hover:text-black cursor-pointer"
          href="https://twitter.com/brigati_filippo"
          target={'_blank'}
        >
          <TwitterLogoIcon className="h-4 w-4 mr-2" />
          <p className="font-base text-base">Twitter</p>
        </a>
        <a
          className="w-full sm:w-1/4 px-2 py-3 flex flex-row justify-center items-center border border-neutral-900 dark:border-neutral-50 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-900 hover:dark:bg-neutral-50 hover:text-white dark:hover:text-black cursor-pointer"
          href="https://github.com/filippo-brigati"
          target={'_blank'}
        >
          <GitHubLogoIcon className="h-4 w-4 mr-2" />
          <p className="font-base text-base">GitHub</p>
        </a>
        <a
          className="w-full sm:w-1/4 px-2 py-3 flex flex-row justify-center items-center border border-neutral-900 dark:border-neutral-50 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-900 hover:dark:bg-neutral-50 hover:text-white dark:hover:text-black cursor-pointer"
          href="https://www.linkedin.com/in/filippo-brigati-6569981b2/"
          target={'_blank'}
        >
          <LinkedInLogoIcon className="h-4 w-4 mr-2" />
          <p className="font-base text-base">LinkedIn</p>
        </a>
        <a
          className="w-full sm:w-1/4 px-2 py-3 flex flex-row justify-center items-center border border-neutral-900 dark:border-neutral-50 rounded-md bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-900 hover:dark:bg-neutral-50 hover:text-white dark:hover:text-black cursor-pointer"
          href="https://www.instagram.com/fillo.brigati/"
          target={'_blank'}
        >
          <InstagramLogoIcon className="h-4 w-4 mr-2" />
          <p className="font-base text-base">Instagram</p>
        </a>
      </div>
    </>
  );
};

export default About;
