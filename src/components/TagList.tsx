import { Chip, Stack } from "@mui/joy";
import { WpLink } from "./wrapper/WpLink";

export default function TagList(props: TagListProps) {
  const { tags } = props;
  return (
    <Stack direction="row" flexWrap="wrap" gap={2}>
      {tags.map((t, index) =>
        t.link ? (
          <WpLink key={`TagList-${index}`} href={t.link} underline="none">
            <Chip color="primary" size="sm">
              {t.tagName}
            </Chip>
          </WpLink>
        ) : (
          <Chip key={`TagList-${index}`} disabled variant="solid" size="sm">
            {t.tagName}
          </Chip>
        ),
      )}
    </Stack>
  );
}

export type TagListProps = {
  tags: {
    tagName: string;
    link?: string;
  }[];
};
