import Menu from "@/components/Menu";
import Post from "@/components/Post";
import BlogDescription from "./../components/BlogDescription";
import { Box, Grid } from "@mui/joy";

export default function Home() {
  return (
    <main>
      <Grid
        display={"grid"}
        gridTemplateAreas={`
        "profile body"
        "nav body"
        `}
        gridTemplateRows={"minmax(100px, auto) auto"}
        gridTemplateColumns={"380px 1fr"}
        gap={2}
        p={2}
      >
        <Grid gridArea={"profile"}>
          <Box>
            <BlogDescription
              name="null256code"
              description="シンプルなブログです"
            />
          </Box>
        </Grid>
        <Grid gridArea={"nav"}>
          <Menu />
        </Grid>
        <Grid gridArea={"body"}>
          <Post
            title="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
            postedTime={new Date()}
            body="TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText"
          />
        </Grid>
      </Grid>
    </main>
  );
}
