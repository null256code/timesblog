import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { PostResponse, getPostList } from "@/libs/microcms/postApi";
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

  const keyOfTags: keyof PostResponse = "tags";
  const { contents } = await getPostList({
    filters: `${keyOfTags}[contains]${tag.id}`,
  });

  if (!contents || contents.length === 0) {
    notFound(); // TODO: 記事が何もないことが分かるページを作る
  }

  return (
    <Stack spacing={2}>
      {contents.map((post) => (
        <Post
          key={`post-${post.id}`}
          contentId={post.id}
          title={post.title}
          postedTime={new Date(post.createdAt)}
          tags={post.tags}
        >
          {parse(post.content, htmlParserOptions)}
        </Post>
      ))}
    </Stack>
  );
}
