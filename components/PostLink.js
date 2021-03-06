import Link from "next/link";

export default function PostLink(data) {
  return (
    <>
      <Link href={`/post/${data.slug}`}>
        <a>
          <div className="flex flex-col mb-6">
            <p className="text-gray-800 dark:text-gray-50">{data.frontmatter.title}</p>
            <p className="text-gray-600 dark:text-gray-200 text-xs">{data.frontmatter.date}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
