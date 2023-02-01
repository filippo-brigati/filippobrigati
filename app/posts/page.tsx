import React from "react";
import getPostMetadata from "dev/components/posts/getPostMetadata";
import PostPreview from "dev/components/posts/PostPreview";

const PostIndex = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div>
      <h1 className="font-bold text-3xl text-black dark:text-white">Blog</h1>
      {postPreviews}
    </div>
  );
};

export default PostIndex;
