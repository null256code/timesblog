import { Box, Card, Grid, Typography } from "@mui/joy";
import TagList from "./TagList";
import { ReactNode } from "react";

export default function Post(props: Props) {
  const { children, title, postedTime } = props;
  return (
    <Card>
      <Box py={1}>
        <Grid container spacing={1}>
          <Grid xs={10}>
            <Typography
              level="title-lg"
              fontWeight={"bolder"}
              whiteSpace={"pre-wrap"}
              sx={{ wordBreak: "break-all" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            xs={2}
            display={"inline-flex"}
            justifyContent={"end"}
            alignItems={"baseline"}
          >
            <Typography level="body-xs" textColor={"neutral.500"}>
              {postedTime.toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Box
              typography={"body-sm"}
              whiteSpace={"pre-wrap"}
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
              tags={[{ tagName: "#ほげ" }, { tagName: "#ふが", link: "/fuga" }]}
            />
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

type Props = {
  children: ReactNode;
  title: string;
  postedTime: Date;
};
