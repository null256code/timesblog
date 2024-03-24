import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Box, IconButton, Sheet } from "@mui/joy";
import ServiceLogo from "./ServiceLogo";

export default function AppHeader(props: Props) {
  const { toggleSidebarFixed } = props;

  return (
    <Sheet
      sx={{
        width: "100%",
        borderBottom: "1px solid",
        borderColor: "background.level1",
        boxShadow: "sm",
      }}
    >
      <Box
        flexDirection="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <IconButton
          onClick={() => toggleSidebarFixed()}
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <MenuRoundedIcon />
        </IconButton>
        <ServiceLogo />
      </Box>
    </Sheet>
  );
}

type Props = {
  toggleSidebarFixed: () => void;
};
