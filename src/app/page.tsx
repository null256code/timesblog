import Post from "@/components/Post";
import { htmlParserOptions } from "@/libs/html-parser-option";
import { getBlogList } from "@/libs/microcms/blogApi";
import { Stack } from "@mui/joy";
import parse from "html-react-parser";

export default async function Home() {
  const { contents } = await getBlogList();

  return (
    <Stack spacing={2}>
      {contents.map((blog) => (
        <Post
          key={`post-${blog.id}`}
          contentId={blog.id}
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
