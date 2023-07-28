import NextLink from "next/link";
import { HStack, Link, Text } from "@chakra-ui/react";

export default function TagList(props: Props) {
  const { tags } = props;
  return (
    <HStack spacing={2}>
      {tags.map((t, index) =>
        t.link ? (
          <Link
            key={`TagList-${index}`}
            as={NextLink}
            href={t.link}
            fontSize={"sm"}
            color={"cyan.700"}
          >
            {t.tagName}
          </Link>
        ) : (
          <Text key={`TagList-${index}`} fontSize={"sm"} color={"gray.700"}>
            {t.tagName}
          </Text>
        )
      )}
    </HStack>
  );
}

type Props = {
  tags: {
    tagName: string;
    link?: string;
  }[];
};
