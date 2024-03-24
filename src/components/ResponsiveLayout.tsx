"use client";

import { Profile } from "@/libs/microcms/definitionApi";
import { Box, useTheme } from "@mui/joy";
import { Backdrop, Collapse, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import { TagListProps } from "./TagList";
import { usePathname } from "next/navigation";

export default function ResponsiveLayout(props: Props) {
  const { profile, tagListProps } = props;

  const theme = useTheme();
  const matchUpMd = useMediaQuery(theme.breakpoints.up("md"), {
    noSsr: true,
    defaultMatches: true,
  });
  const [isSidebarFixed, setIsSidebarFixed] = useState(false);
  const toggleSidebarFixed = () => setIsSidebarFixed(!isSidebarFixed);
  const path = usePathname();
  useEffect(() => {
    setIsSidebarFixed(false);
  }, [path]);

  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          top: 0,
          zIndex: 9998,
          width: "100%",
          height: "72px",
        }}
      >
        <AppHeader toggleSidebarFixed={toggleSidebarFixed} />
      </Box>
      <Backdrop
        open={isSidebarFixed}
        onClick={toggleSidebarFixed}
        sx={{ zIndex: 9999 }}
      />
      <Collapse
        in={isSidebarFixed || matchUpMd}
        orientation="horizontal"
        style={{
          transitionDuration: "500ms",
        }}
        sx={{
          display: isSidebarFixed ? "flex" : { xs: "none", md: "flex" },
          position: "fixed",
          top: 0,
          zIndex: 10000,
        }}
      >
        <AppSidebar profile={profile} tagListProps={tagListProps} />
      </Collapse>
    </>
  );
}

type Props = {
  profile: Profile;
  tagListProps: TagListProps;
};
