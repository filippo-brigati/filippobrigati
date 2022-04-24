import fs from "fs";
import matter from "gray-matter";
import PostLink from "../../components/PostLink";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function PostHome({ posts }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-white dark:bg-zinc-800">
        <div className="mb-3 dark:text-white">
        Go back{" "}
        <Link href="/" passHref>
          <a className="underline decoration-pink-500/60">home</a>
        </Link>
        </div>
        {posts.map(({ slug, frontmatter }) => (
          <PostLink key={slug} slug={slug} frontmatter={frontmatter}></PostLink>
        ))}
      </div>
    </>
  );
}
