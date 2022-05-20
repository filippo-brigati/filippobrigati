export default function HomeLink(data) {
  return (
    <>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={data.link}
        className="flex items-center space-x-4 group"
      >
        <strong className="flex-none font-medium group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500 text-gray-700">
          { data.nome }
        </strong>
        <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800"></span>
        <span className="flex-none text-tertiary text-gray-600">Follow</span>
      </a>
    </>
  );
}
