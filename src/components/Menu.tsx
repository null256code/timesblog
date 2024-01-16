import { Box, Card, List, ListDivider, ListItem, Stack } from "@mui/joy";
import { WpLink } from "./wrapper/WpLink";
import { Routes } from "@/constants/routes";

export default function Menu(props: Props) {
  const { tags } = props;
  return (
    <Card size="sm">
      <Box>
        <List
          sx={{
            "--List-padding": "0px",
            "--ListDivider-gap": "2px",
          }}
        >
          <Stack divider={<ListDivider inset="gutter" />}>
            {tags.map((t, index) => (
              <ListItem key={`menuTagList-${index}`}>
                <WpLink
                  href={Routes.PostsByTag.value(t.tagKey)}
                  level="body-sm"
                >
                  #{t.tagName} ({t.count})
                </WpLink>
              </ListItem>
            ))}
          </Stack>
        </List>
      </Box>
    </Card>
  );
}

type Props = {
  tags: {
    tagKey: string;
    tagName: string;
    count: number;
  }[];
};
