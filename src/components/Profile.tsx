import { Avatar, Box, Typography } from "@mui/joy";

export default function Profile(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} pb={2}>
        <Avatar alt={name} src={imageUrl} size={"sm"}>
          {name}
        </Avatar>
        <Typography p={2}>{name}</Typography>
      </Box>
      <Typography>{description}</Typography>
    </>
  );
}

type Props = {
  name: string;
  imageUrl?: string;
  description?: string;
};
