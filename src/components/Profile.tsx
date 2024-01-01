import { Avatar, Box, Typography } from "@mui/joy";
import Image from "next/image";

export default function Profile(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <>
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"} pb={2}>
        <Avatar size={"sm"}>
          {imageUrl ? <Image src={imageUrl!!} alt={name} fill /> : name}
        </Avatar>
        <Typography p={2}>{name}</Typography>
      </Box>
      <Typography level="body-sm">{description}</Typography>
    </>
  );
}

type Props = {
  name: string;
  imageUrl?: string;
  description?: string;
};
