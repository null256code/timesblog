import { Text, Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import TagList from "./TagList";

export default function Post(props: Props) {
  const { title, postedTime, body } = props;
  return (
    <Card width={"480px"}>
      <CardBody py={4}>
        <Grid
          templateAreas={`
                  "title timestamp"
                  "contents contents"
                  "footer footer"
                  `}
          gridTemplateColumns={"auto min-content"}
          gridTemplateRows={"auto 1fr auto"}
          p={2}
          gap={4}
        >
          <GridItem area={"title"}>
            <Text
              fontSize={"2xl"}
              whiteSpace={"pre-wrap"}
              wordBreak={"break-all"}
            >
              {title}
            </Text>
          </GridItem>
          <GridItem area={"timestamp"}>
            <Text fontSize={"sm"} color={"gray.500"}>
              {postedTime.toLocaleDateString()}
            </Text>
          </GridItem>
          <GridItem area={"contents"}>
            <Text whiteSpace={"pre-wrap"} wordBreak={"break-all"}>
              {body}
            </Text>
          </GridItem>
          <GridItem area={"footer"}>
            <TagList
              tags={[{ tagName: "#ほげ" }, { tagName: "#ふが", link: "/fuga" }]}
            />
          </GridItem>
        </Grid>
      </CardBody>
    </Card>
  );
}

type Props = {
  title: string;
  postedTime: Date;
  body: string;
};
