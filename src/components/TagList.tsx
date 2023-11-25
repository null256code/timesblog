import { Stack, Typography } from "@mui/joy";
import { WpLink } from "./wrapper/WpLink";

export default function TagList(props: Props) {
  const { tags } = props;
  return (
    <Stack direction={"row"} spacing={2}>
      {tags.map((t, index) =>
        t.link ? (
          <WpLink
            key={`TagList-${index}`}
            href={t.link}
            fontSize={"sm"}
          >
            {t.tagName}
          </WpLink>
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
