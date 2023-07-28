import {
  Avatar,
  Flex,
  Text
} from "@chakra-ui/react";

export default function Profile(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <>
      <Flex flexDirection={"row"} alignItems={"center"} pb={2}>
        <Avatar name={name} src={imageUrl} size={"sm"} />
        <Text padding={2}>{name}</Text>
      </Flex>
      <Text>{description}</Text>
    </>
  );
}

type Props = {
  name: string;
  imageUrl?: string;
  description?: string;
};
