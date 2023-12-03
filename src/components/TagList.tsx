import { Chip, Stack, Typography } from "@mui/joy";
import { WpLink } from "./wrapper/WpLink";

export default function TagList(props: Props) {
  const { tags } = props;
  return (
    <Stack direction={"row"} spacing={2}>
      {tags.map((t, index) =>
        t.link ? (
          <WpLink key={`TagList-${index}`} href={t.link} underline="none">
            <Chip color="primary">{t.tagName}</Chip>
          </WpLink>
        ) : (
          <Chip key={`TagList-${index}`} disabled>{t.tagName}</Chip>
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
