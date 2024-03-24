import { Routes } from "@/constants/routes";
import { WpLink } from "./wrapper/WpLink";

export default function ServiceLogo() {
  return (
    <WpLink
      href={Routes.Index.value}
      level="h2"
      fontWeight={700}
      textColor="neutral.700"
      underline="none"
    >
      TimesBlog
    </WpLink>
  );
}
