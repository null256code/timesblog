import { Link, LinkProps } from "@mui/joy";
import NextLink from "next/link";
export function WpLink(props: LinkProps) {
  const { href, children, ...other } = props;
  return (
    <NextLink href={href!} passHref legacyBehavior>
      <Link {...other}>{children}</Link>
    </NextLink>
  );
}
