"use client";

import Menu from "@/components/Menu";
import Post from "@/components/Post";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import BlogDescription from './../components/BlogDescription';

export default function Home() {
  return (
    <main>
      <Grid
        templateAreas={`
        "profile body"
        "nav body"
        `}
        gridTemplateRows={"minmax(100px, auto) auto"}
        gridTemplateColumns={"380px 1fr"}
        p={4}
        gap={4}
      >
        <GridItem area={"profile"}>
          <Box>
            <BlogDescription
              name="null256code"
              description="シンプルなブログです"
            />
          </Box>
        </GridItem>
        <GridItem area={"nav"}>
            <Menu />
        </GridItem>
        <GridItem area={"body"}>
          <Post
            title="TitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitleTitle"
            postedTime={new Date()}
            body="TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText"
          />
        </GridItem>
      </Grid>
    </main>
  );
}
