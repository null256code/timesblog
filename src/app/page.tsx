import ImageWithModal from "@/components/ImageWithModal";
import Post from "@/components/Post";
import { getBlogList } from "@/libs/microcms-client";
import { Stack } from "@mui/joy";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";

export default async function Home() {
  const { contents, totalCount, limit, offset } = await getBlogList();

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === "tag") {
        if (domNode.name === "img") {
          // TODO: ひとつ上の <figure /> にonClickをつけるようにしたい
          const src = domNode.attribs["src"];
          const alt = domNode.attribs["alt"];
          return <ImageWithModal src={src} alt={alt} />;
        }
      }
    },
  };

  return (
    <Stack spacing={2}>
      {contents.map((blog) => (
        <Post
          key={`post-${blog.id}`}
          title={blog.title}
          postedTime={new Date(blog.createdAt)}
        >
          {parse(blog.content, options)}
        </Post>
      ))}
    </Stack>
  );
}
