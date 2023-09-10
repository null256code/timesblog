import { Link, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";

export default function TagList(props: Props) {
  const { tags } = props;
  return (
    <Stack direction={"row"} spacing={2}>
      {tags.map((t, index) =>
        t.link ? (
          // TODO: MUIのLinkとnextjsのLinkを合わせて使う方法
          <Link
            key={`TagList-${index}`}
            // as={NextLink}
            href={t.link}
            fontSize={"sm"}
          >
            {t.tagName}
          </Link>
        ) : (
          <Typography
            key={`TagList-${index}`}
            fontSize={"sm"}
            textColor={"neutral.700"}
          >
            {t.tagName}
          </Typography>
        )
      )}
    </Stack>
  );
}

type Props = {
  tags: {
    tagName: string;
    link?: string;
  }[];
};
