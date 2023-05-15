import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <>
      <div className="w-full flex flex-col gap-y-5 leading-7 text-slate-800 dark:text-gray-200 my-9">
        <p>
          Here’re the projects that I’ve built during my free time. Most
          of them are open sourced, and I hope to maintain them for the long
          term.
        </p>
      </div>
      <div className="w-full flex flex-row">
        <ProjectCard />
      </div>
    </>
  );
}
