import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-12">
      <div className="flex flex-col gap-7 sm:gap-4">
        {allPosts.map((post) => (
          <Link
            href={post.slug}
            className="-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#F5F4F4] dark:hover:bg-zinc-800 sm:py-3"
            key={post._id}
          >
            <span>{post.title}</span>
            {post.description && (
              <span className="text-gray-600 dark:text-gray-500">{post.description}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
