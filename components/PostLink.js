import Link from "next/link";

export default function PostLink(data) {
  return (
    <>
      <Link href={`/post/${data.slug}`}>
        <a>
          <div className="flex flex-col mb-6">
            <p className="text-gray-800">{data.frontmatter.title}</p>
            <p className="text-gray-600 text-xs">{data.frontmatter.date}</p>
          </div>
        </a>
      </Link>
    </>
  );
}
