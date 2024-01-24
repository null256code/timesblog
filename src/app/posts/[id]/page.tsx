import Post from "@/components/Post";
import ThreadPost from "@/components/ThreadPost";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getPostDetail, getPostList } from "@/libs/microcms/postApi";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

export const revalidate = 60 * 60;

export async function generateStaticParams() {
  const { contents } = await getPostList();

  return contents.map((post) => ({ id: post.id }));
}

export default async function PostDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const requestPost = await getPostDetail(id);

  if (!requestPost) {
    notFound();
  }

  const rootPost = requestPost.rootPost
    ? await getPostDetail(requestPost.rootPost.id) // XXX: requestPost.rootPostを使うとtagsからid以外取れないので、とりあえず…
    : requestPost;
  const childPostsFilter = requestPost.rootPost
    ? `rootPost[equals]${requestPost.rootPost.id}`
    : `rootPost[equals]${id}`;
  const { contents: childPosts } = await getPostList({
    filters: childPostsFilter,
    orders: "createdAt",
  });

  const hasChildPosts = childPosts.length !== 0;
  const rootPostComponent = (
    <Post
      key={`post-${rootPost.id}`}
      contentId={rootPost.id}
      title={rootPost.title}
      postedTime={new Date(rootPost.createdAt)}
      tags={rootPost.tags}
      variant={hasChildPosts ? "plain" : "outlined"}
      sx={{ p: hasChildPosts ? 0 : undefined }}
    >
      {parse(rootPost.content, htmlParserOptions)}
    </Post>
  );

  const childPostComponents = childPosts.map((post) => (
    <Post
      key={`childpost-${post.id}`}
      variant="soft"
      contentId={post.id}
      // title={post.title}
      postedTime={new Date(post.createdAt)}
      tags={post.tags}
      sx={{ py: 0 }}
    >
      {parse(post.content, htmlParserOptions)}
    </Post>
  ));

  return (
    <>
      {hasChildPosts ? (
        <ThreadPost
          rootPost={rootPostComponent}
          childPosts={childPostComponents}
        />
      ) : (
        rootPostComponent
      )}
    </>
  );
}
