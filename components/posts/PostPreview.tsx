import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <>
      <div className="w-full my-5">
        {/*<p className="">{props.date}</p>*/}
        <Link href={`/posts/${props.slug}`}>
          <h2 className="text-base font-normal text-neutral-900 dark:text-neutral-50 hover:underline">
            {props.title}
          </h2>
        </Link>
        <p className="text-sm font-light text-neutral-600 dark:text-neutral-200">{props.subtitle}</p>
      </div>
    </>
  );
};

export default PostPreview;
