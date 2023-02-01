import React from "react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

type ProjectData = {
  name: string;
  description: string;
  link: string;
};

const ProjectItem = (props: ProjectData) => {
  return (
    <>
      <div className="w-full my-3 flex flex-col mb-4">
        <a
          className="text-neutral-800 dark:text-neutral-50 font-normal text-base flex flex-row items-center justify-start hover:underline cursor-pointer"
          target={"_blank"}
          
          href={props.link}
        >
          <ArrowTopRightIcon className="text-neutral-800 dark:text-neutral-50 mr-1" />
          {props.name}
        </a>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm">{props.description}</p>
      </div>
    </>
  );
};

const Project = () => {
  const arr: ProjectData[] = [
    { name: "Tsks", description: "A simple and user friendly tasks app", link: "https://taks-client.vercel.app/" },
    { name: "Conventional Emoji Commit", description: "Documentation for more styled commit message in github", link: "https://conventionalemojicommit.vercel.app/" },
    { name: "Linkly", description: "Web app that shorts you looong links", link: "https://linklyapp.vercel.app/" }
  ];

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl text-black dark:text-white">Project</h1>
        <div className="mt-5">
          {arr.map(a => <ProjectItem key={a.name} {...a} />)}
        </div>
      </div>
    </>
  );
};

export default Project;
