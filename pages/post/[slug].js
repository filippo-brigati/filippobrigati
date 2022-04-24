import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Head from "next/head";
import Link from 'next/link';

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="prose dark:prose-invert sm:m-auto mx-4 my-3">
        <h2 className="text-gray-900 dark:text-white">{frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <Link href={"/post"}><a className="pb-6">Go back</a></Link>
      </div>
    </>
  );
}
