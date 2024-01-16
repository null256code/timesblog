import { Routes } from "@/constants/routes";
import { Box } from "@mui/joy";
import Card from "@mui/joy/Card";
import Profile from "./Profile";
import { WpLink } from "./wrapper/WpLink";

export default function BlogDescription(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <Card>
      <Box pb={1}>
        <WpLink
          href={Routes.Index.value}
          level="h2"
          fontWeight={700}
          textColor="neutral.700"
          underline="none"
        >
          TimesBlog
        </WpLink>
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
