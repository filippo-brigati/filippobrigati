import Head from "next/head";
import HomeLink from "../components/HomeLink";
import Timeline from "../components/Timeline";

export default function Home() {
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
      <div className="mx-auto w-full max-w-4xl px-4 py-12 pb-10 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:mt-20">
          <h4 className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-base md:font-normal md:text-opacity-40">
            About
          </h4>
          <div className="col-span-10">
            <p className="leading-relaxed text-gray-700">
              Hi, {` I'm` + ` `}Filippo. {` I'm` + ` `} {age} years old,{" "}
              <span className="italic">currently</span> living in Italy 🔥.{" "}
              {` I'm` + ` `}
              software developer, student, hiker, climber.
            </p>
            <p className="mt-8 leading-relaxed text-gray-700">
              Before starting to work as a developer i studied IT in high
              school. We learned the basics of programming, we used Java, C++,{" "}
              <span className="italic">HTML, CSS</span>, JavaScript, PHP and
              SQL.
            </p>
            <p className="mt-8 leading-relaxed text-gray-700">
              In the last years of high school I have been{" "}
              <span className="italic">focussed</span> about web development. So
              I learned some javascript frameworks: i started with React, after
              a few months i moved into Next.JS and currently
              {` I'm` + ` `} building web app using Angular and .NET with Entity
              Framework 😊.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              P.S - as a css framework I use{" "}
              <span className="italic">Tailwind CSS</span> ✨.
            </p>
            <button className="mt-8 border border-gray-300 py-1 px-2 rounded-lg hover:border-gray-300 hover:bg-gray-100 hover:text-gray-900">
              <p className="text-gray-800">view changelog</p>
            </button>
          </div>
        </div>
        <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 md:mt-12">
          <h4 className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-base md:font-normal md:text-opacity-40">
            Online
          </h4>
          <div className="col-span-10">
            <div className="flex flex-col space-y-3">
              <HomeLink
                key="01"
                nome="Twitter"
                link="https://twitter.com/filippo_brigati"
              ></HomeLink>
              <HomeLink
                key="02"
                nome="Instagram"
                link="https://instagram.com/fillo.brigati"
              ></HomeLink>
              <HomeLink
                key="03"
                nome="GitHub"
                link="https://github.com/filippo-brigati"
              ></HomeLink>
              <HomeLink
                key="04"
                nome="Linkedin"
                link="https://www.linkedin.com/in/filippo-brigati-6569981b2/"
              ></HomeLink>
            </div>
          </div>
        </div>
        <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12 md:mt-12">
        <h4 className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-base md:font-normal md:text-opacity-40">
            Timeline
          </h4>
          <div className="col-span-10">
            <div className="flex flex-col space-y-3">
              <Timeline
                key="05"
                name="GAB Tamagnini"
                link="https://www.gabtamagnini.it/"
                role="Developer"
                time="2021 - //"
              ></Timeline>
              <Timeline
                key="06"
                name="Blaise Pascal"
                link="https://www.pascal.edu.it/"
                role="Student"
                time="2017 - 21"
              ></Timeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}