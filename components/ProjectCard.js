export default function ProjectCard({ project }) {
  return (
    <>
      <div
        className="relative rounded-lg border border-gray-300 dark:border-gray-100 bg-white dark:bg-zinc-800 px-6 py-4 shadow-sm flex items-center space-x-3 hover:border-gray-400 hover:dark:border-gray-400"
        key={project.node_id}
      >
        <div className="flex-1 min-w-0">
          <a
            target="_blank"
            href={project.html_url}
            className="focus:outline-none"
            rel="noreferrer"
          >
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-100 truncate mt-1">
              {project.description}
            </p>
          </a>
        </div>
      </div>
    </>
  );
}
