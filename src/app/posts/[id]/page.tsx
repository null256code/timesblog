import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getBlogDetail, getBlogList } from "@/libs/microcms/blogApi";
import parse from "html-react-parser";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  const paths = contents.map((blog) => {
    return {
      id: blog.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
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
