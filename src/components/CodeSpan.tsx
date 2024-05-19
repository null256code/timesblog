import { Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function CodeSpan({ children }: { children: ReactNode }) {
  return (
    <Typography
      component="code"
      level="body-xs"
      color="neutral"
      variant="soft"
      display="inline-block"
      border={1}
      borderColor="lightgray"
      borderRadius={4}
      sx={{ borderStyle: "dotted" }}
      m={0.25}
    >
      {children}
    </Typography>
  );
}
