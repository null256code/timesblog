import {
  Box,
  Card,
  List,
  ListDivider,
  ListItem,
  Stack,
  Typography,
} from "@mui/joy";
import { WpLink } from "./wrapper/WpLink";

export default function Menu(props: Props) {
  const { tags } = props;
  return (
    <Card>
      <Box>
        <List
          sx={{
            "--List-padding": "0px",
          }}
        >
          <Stack divider={<ListDivider inset={"gutter"} />}>
            {tags.map((t, index) => (
              <ListItem key={`menuTagList-${index}`}>
                <WpLink href={`/posts/tag/${t.tagKey}`}>
                  <Typography>
                    #{t.tagName} ({t.count})
                  </Typography>
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
