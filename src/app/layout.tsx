import BlogDescription from "@/components/BlogDescription";
import Menu from "@/components/Menu";
import { getDefinition } from "@/libs/microcms/definitionApi";
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
            <Menu />
          </Grid>
          <Grid gridArea={"body"}>
            <main>{children}</main>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
