import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getPostList } from "@/libs/microcms/postApi";
import { Stack } from "@mui/joy";
import parse from "html-react-parser";

export const revalidate = 60 * 60;

export default async function Home() {
  const { contents } = await getPostList();

  return (
    <Stack spacing={2}>
      {contents.map((post) => (
        <Post
          key={`post-${post.id}`}
          contentId={post.id}
          title={post.title}
          postedTime={new Date(post.createdAt)}
          tags={post.tags}
          rootPost={
            post.rootPost
              ? {
                  contentId: post.rootPost.id,
                  title:
                    post.rootPost.title ??
                    // XXX: リッチテキストからタグを除去して本文のテキストを切り出してる、もっと賢い方法ありそう
                    `${post.rootPost.content
                      .substring(0, 100)
                      .replace(/<\/?.+?>/g, "")
                      .substring(0, 10)}...`,
                }
              : undefined
          }
        >
          {parse(post.content, htmlParserOptions)}
        </Post>
      ))}
    </Stack>
  );
}
