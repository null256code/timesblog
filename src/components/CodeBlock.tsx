import { Sheet, Typography } from "@mui/joy";
import { ReactNode } from "react";

export default function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <Sheet
      component="pre"
      color="neutral"
      variant="soft"
      sx={{
        border: 1,
        borderColor: "lightgray",
        borderRadius: 4,
        borderStyle: "dotted",
      }}
    >
      <Typography
        component="code"
        level="body-xs"
        sx={{
          m: 1,
          whiteSpace: "pre",
          overflowX: "scroll",
          scrollbarWidth: "thin",
        }}
      >
        {children}
      </Typography>
    </Sheet>
  );
}
