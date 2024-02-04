import { Card, Typography } from "@mui/joy";
import ErrorTwoToneIcon from "@mui/icons-material/ErrorTwoTone";

// TODO: AppRouterでのエラーページのMetaDataの変更がまだできないかも https://github.com/vercel/next.js/issues/45620
// export const metadata: Metadata = {
//   title: "TimesBlog|Not Found",
//   robots: "noindex,nofollow",
// };

export default function NotFound() {
  return (
    <Card sx={{ display: "flex", alignItems: "center" }}>
      <ErrorTwoToneIcon fontSize="large" />
      <Typography level="title-lg" fontWeight="bolder" textColor="neutral.700">
        404 Not Found
      </Typography>
      <Typography>
        アクセスしようとしたページは見つかりませんでした。
      </Typography>
    </Card>
  );
}
