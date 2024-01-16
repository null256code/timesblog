import Post from "@/components/Post";
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
  const post = await getPostDetail(id);

  if (!post) {
    notFound();
  }

  return (
    <Post
      key={`post-${post.id}`}
      contentId={post.id}
      title={post.title}
      postedTime={new Date(post.createdAt)}
      tags={post.tags}
    >
      {parse(post.content, htmlParserOptions)}
    </Post>
  );
}
