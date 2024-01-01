import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getBlogDetail, getBlogList } from "@/libs/microcms/blogApi";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

export const revalidate = 60 * 60;

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  return contents.map((blog) => ({ id: blog.id, }));
}

export default async function PostDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const blog = await getBlogDetail(id);

  if (!blog) {
    notFound();
  }

  return (
    <Post
      key={`post-${blog.id}`}
      title={blog.title}
      postedTime={new Date(blog.createdAt)}
      tags={blog.tags}
    >
      {parse(blog.content, htmlParserOptions)}
    </Post>
  );
}
