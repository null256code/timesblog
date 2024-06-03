import ResponsiveLayout from "@/components/ResponsiveLayout";
import { Routes } from "@/constants/routes";
import { getDefinition } from "@/libs/microcms/definitionApi";
import { PostResponse, getPostList } from "@/libs/microcms/postApi";
import { getMenuTagList } from "@/libs/microcms/tagApi";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Box, CssBaseline } from "@mui/joy";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimesBlog",
  description: "TimesBlogはシンプルなブログです",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { profile } = await getDefinition();
  const { contents: menuTags } = await getMenuTagList();

  const keyOfTags: keyof PostResponse = "tags";
  const tagsWithPostCount = await Promise.all(
    menuTags.map(async (t) => {
      const postsOfMenuTag = await getPostList({
        filters: `${keyOfTags}[contains]${t.id}`,
      });
      return {
        tagKey: t.tagKey,
        tagName: t.tagName,
        count: postsOfMenuTag.totalCount,
      };
    }),
  );

  const tagListProps = tagsWithPostCount
    .sort((p1, p2) => p2.count - p1.count)
    .map((t) => ({
      tagName: `${t.tagName} (${t.count})`,
      link: Routes.PostsByTag.value(t.tagKey),
    }));

  return (
    <html lang="ja">
      <body className={inter.className}>
        <CssBaseline />
        <ResponsiveLayout
          profile={profile}
          tagListProps={{ tags: tagListProps }}
        ></ResponsiveLayout>
        <Box
          component="main"
          sx={{
            position: "absolute",
            top: { xs: "72px", md: 0 },
            left: { xs: 0, md: "240px" },
            p: 3,
            width: { xs: "100vw", md: "540px" },
          }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
