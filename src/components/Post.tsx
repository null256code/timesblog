import { TagResponse } from "@/libs/microcms/tagApi";
import { Box, Card, CardProps, Grid, Typography } from "@mui/joy";
import { FC, ReactComponentElement, ReactNode } from "react";
import TagList from "./TagList";
import { Routes } from "@/constants/routes";
import { WpLink } from "./wrapper/WpLink";

export default function Post(props: PostProps) {
  const { children, contentId, title, postedTime, tags, ...cardProps } = props;
  return (
    <Card {...cardProps}>
      <Box py={1}>
        <Grid container spacing={1}>
          <Grid xs={10}>
            {title && (
              <Typography
                level="title-lg"
                fontWeight="bolder"
                whiteSpace="pre-wrap"
                sx={{ wordBreak: "break-all" }}
              >
                {title}
              </Typography>
            )}
          </Grid>
          <Grid
            xs={2}
            display="inline-flex"
            justifyContent="end"
            alignItems="baseline"
            py={0}
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
          <Grid xs={12} mt={title ? undefined : -1}>
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

export type PostProps = {
  children: ReactNode;
  contentId: string;
  title?: string;
  postedTime: Date;
  tags: TagResponse[];
} & CardProps;

export type PostComponentType = ReactComponentElement<FC<PostProps>, PostProps>;
