import fs from "fs";
import matter from "gray-matter";
import PostLink from "../../components/PostLink";
import Head from "next/head";

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
      <Head>
        <title>Filippo Brigati | Blog</title>
      </Head>
      {posts.map(({ slug, frontmatter }) => (
        <PostLink key={slug} slug={slug} frontmatter={frontmatter}></PostLink>
      ))}
    </>
  );
}
