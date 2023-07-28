import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import Profile from "./Profile";

export default function BlogDescription(props: Props) {
  const { name, imageUrl, description } = props;
  return (
    <Card>
      <CardHeader pb={1}>
        <Text fontWeight={"bold"}>TimesBlog</Text>
      </CardHeader>
      <CardBody pt={1}>
        <Profile {...{ name, imageUrl, description }} />
      </CardBody>
    </Card>
  );
}

type Props = {
  name: string;
  imageUrl?: string;
  description?: string;
};
