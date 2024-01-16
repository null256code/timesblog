import { TagResponse } from "@/libs/microcms/tagApi";
import { Box, Card, Grid, Typography } from "@mui/joy";
import { ReactNode } from "react";
import TagList from "./TagList";
import { Routes } from "@/constants/routes";
import { WpLink } from "./wrapper/WpLink";

export default function Post(props: Props) {
  const { children, contentId, title, postedTime, tags } = props;
  return (
    <Card>
      <Box py={1}>
        <Grid container spacing={1}>
          <Grid xs={10}>
            <Typography
              level="title-lg"
              fontWeight="bolder"
              whiteSpace="pre-wrap"
              sx={{ wordBreak: "break-all" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            xs={2}
            display="inline-flex"
            justifyContent="end"
            alignItems="baseline"
          >
            <WpLink
              href={Routes.PostsById.value(contentId)}
              level="body-xs"
              color="neutral"
              underline="always"
            >
              {postedTime.toLocaleDateString()}
            </WpLink>
          </Grid>
          <Grid xs={12}>
            <Box
              typography="body-sm"
              whiteSpace="pre-wrap"
              sx={{
                wordBreak: "break-all",
                "& :where(h1, h2, h3, h4, h5, h6)": {
                  typography: "title-md",
                  my: "0.8em",
                  fontWeight: "bold",
                },
                "& h1": {},
                "& h2": {},
                "& h3": {},
                "& h4": {},
                "& img": {
                  width: "100%",
                  height: "auto",
                },
                "& p": {
                  my: "0.4em",
                },
                "& figure": {
                  p: "8px",
                  m: "8px",
                  border: 1,
                  borderRadius: 4,
                  borderColor: "neutral.300",
                },
              }}
            >
              {children}
            </Box>
          </Grid>
          <Grid xs={12}>
            <TagList
              tags={tags.map((t) =>
                t.isVisibleInMenu
                  ? {
                      tagName: t.tagName,
                      link: Routes.PostsByTag.value(t.tagKey),
                    }
                  : { tagName: t.tagName },
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

type Props = {
  children: ReactNode;
  contentId: string;
  title: string;
  postedTime: Date;
  tags: TagResponse[];
};
