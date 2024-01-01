import BlogDescription from "@/components/BlogDescription";
import Menu from "@/components/Menu";
import { BlogResponse, getBlogList } from "@/libs/microcms/blogApi";
import { getDefinition } from "@/libs/microcms/definitionApi";
import { getMenuTagList } from "@/libs/microcms/tagApi";
import { Box, Grid } from "@mui/joy";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimesBlog",
  description: "TimesBlogはシンプルなブログです",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile } = await getDefinition();
  const {
    contents: menuTags,
    limit,
    offset,
    totalCount,
  } = await getMenuTagList();

  const keyOfTags: keyof BlogResponse = "tags";
  const menuProps = await Promise.all(
    menuTags.map(async (t) => {
      const postsOfMenuTag = await getBlogList({
        filters: `${keyOfTags}[contains]${t.id}`,
      });
      return {
        tagKey: t.tagKey,
        tagName: t.tagName,
        count: postsOfMenuTag.totalCount,
      };
    })
  );

  return (
    <html lang="ja">
      <body className={inter.className}>
        <Grid
          display={"grid"}
          gridTemplateAreas={`
        "profile body"
        "nav body"
        `}
          gridTemplateRows={"minmax(100px, auto) auto"}
          gridTemplateColumns={"380px 480px"}
          gap={2}
          p={2}
        >
          <Grid gridArea={"profile"}>
            <Box>
              <BlogDescription
                name={profile.userName}
                imageUrl={profile.userImage?.url}
                description={profile.description}
              />
            </Box>
          </Grid>
          <Grid gridArea={"nav"}>
            <Menu tags={menuProps.sort((p1, p2) => p2.count - p1.count)} />
          </Grid>
          <Grid gridArea={"body"}>
            <main>{children}</main>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
