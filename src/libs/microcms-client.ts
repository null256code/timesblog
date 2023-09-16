import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export type Profile = {
  userName: string;
  userImage?: string | undefined;
  description?: string | undefined;
} & MicroCMSDate;

if (!process.env.MICRO_CMS_SERVICE_ID) {
  throw new Error("MICRO_CMS_SERVICE_ID is required");
}

if (!process.env.MICRO_CMS_API_KEY) {
  throw new Error("MICRO_CMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_ID,
  apiKey: process.env.MICRO_CMS_API_KEY,
});

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

export const getProfile = async () => {
  const profileData = await client.getObject<Profile>({
    endpoint: "profile",
  });
  return profileData;
};
