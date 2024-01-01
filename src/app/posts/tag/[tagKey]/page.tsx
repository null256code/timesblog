import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { BlogResponse, getBlogList } from "@/libs/microcms/blogApi";
import { getMenuTagList } from "@/libs/microcms/tagApi";
import { Stack } from "@mui/joy";
import parse from "html-react-parser";
import { notFound } from "next/navigation";
import { getTagDetailByTagKey } from "./../../../../libs/microcms/tagApi";

export const revalidate = 60 * 60;

export async function generateStaticParams() {
  const { contents } = await getMenuTagList();

  return contents.map((tag) => ({ tagKey: tag.tagKey }));
}

export default async function PostsByTag({
  params: { tagKey },
}: {
  params: { tagKey: string };
}) {
  const tag = await getTagDetailByTagKey(tagKey);
  if (!tag) {
    notFound(); // TODO: 記事が何もないことが分かるページを作る
  }

  const keyOfTags: keyof BlogResponse = "tags";
  const { contents } = await getBlogList({
    filters: `${keyOfTags}[contains]${tag.id}`,
  });

  if (!contents || contents.length === 0) {
    notFound(); // TODO: 記事が何もないことが分かるページを作る
  }

  return (
    <Stack spacing={2}>
      {contents.map((blog) => (
        <Post
          key={`post-${blog.id}`}
          title={blog.title}
          postedTime={new Date(blog.createdAt)}
          tags={blog.tags}
        >
          {parse(blog.content, htmlParserOptions)}
        </Post>
      ))}
    </Stack>
  );
}
