import Card from "@mui/joy/Card";
import Profile from "./Profile";
import { Box, Typography } from "@mui/joy";

export default function BlogDescription(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <Card>
      <Box pb={1}>
        <Typography level="h2" fontWeight={700}>
          TimesBlog
        </Typography>
      </Box>
      <Box pt={1}>
        <Profile {...{ name, imageUrl, description }} />
      </Box>
    </Card>
  );
}

type Props = {
  name: string;
  imageUrl?: string;
  description?: string;
};
