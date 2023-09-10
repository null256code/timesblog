import { Box, Card, Grid, Typography } from "@mui/joy";
import TagList from "./TagList";

export default function Post(props: Props) {
  const { title, postedTime, body } = props;
  return (
    <Card sx={{ width: "480px" }}>
      <Box py={1}>
        <Grid container spacing={2}>
          <Grid xs={10}>
            <Typography
              level="title-md"
              whiteSpace={"pre-wrap"}
              sx={{wordBreak: "break-all"}}
            >
              {title}
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Typography level="body-xs" textColor={"neutral.500"}>
              {postedTime.toLocaleDateString()}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <Typography
              level="title-md"
              whiteSpace={"pre-wrap"}
              sx={{wordBreak: "break-all"}}
            >
              {body}
            </Typography>
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
  title: string;
  postedTime: Date;
  body: string;
};
