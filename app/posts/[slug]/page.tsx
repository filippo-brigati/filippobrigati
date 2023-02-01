import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/posts/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="">
        <h1 className="text-xl text-neutral-900 dark:text-neutral-50">
          {post.data.title}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-200 mt-2">
          {post.data.date}
        </p>
      </div>

      <article className="prose-base dark:text-white overflow-y-auto">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
