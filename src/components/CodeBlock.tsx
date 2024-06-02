import { Sheet, Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <Sheet
      component="pre"
      color="neutral"
      variant="soft"
      sx={{
        p: 1,
        border: 1,
        borderColor: "lightgray",
        borderRadius: 4,
        borderStyle: "dotted",
        whiteSpace: "pre",
        overflowX: "scroll",
        scrollbarWidth: "thin",
      }}
    >
      <Typography component="code" level="body-xs">
        {children}
      </Typography>
    </Sheet>
  );
}
