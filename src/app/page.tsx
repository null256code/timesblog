import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getPostList } from "@/libs/microcms/postApi";
import { Stack } from "@mui/joy";
import parse from "html-react-parser";

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
        >
          {parse(post.content, htmlParserOptions)}
        </Post>
      ))}
    </Stack>
  );
}
