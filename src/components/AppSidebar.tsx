import { Profile as ProfileProps } from "@/libs/microcms/definitionApi";
import { Box, ListDivider, Sheet, Stack, Typography } from "@mui/joy";
import Profile from "./Profile";
import ServiceLogo from "./ServiceLogo";
import TagList, { TagListProps } from "./TagList";

export default function AppSidebar(props: Props) {
  const { profile, tagListProps } = props;

  return (
    <Sheet
      sx={{
        width: "240px",
        height: "100dvh",
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="start"
        width="100%"
        p={2}
      >
        <Stack spacing={2} divider={<ListDivider inset="gutter" />}>
          <ServiceLogo />
          <Profile
            name={profile.userName}
            imageUrl={profile.userImage?.url}
            description={profile.description}
          />
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            alignItems="center"
          >
            <Typography level="title-sm" color="neutral" pb={2}>
              タグ検索
            </Typography>
            <TagList tags={tagListProps.tags} />
          </Box>
        </Stack>
      </Box>
    </Sheet>
  );
}

type Props = {
  profile: ProfileProps;
  tagListProps: TagListProps;
};
