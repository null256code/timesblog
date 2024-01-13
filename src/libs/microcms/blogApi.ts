import { MicroCMSDate, MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";
import { TagResponse } from "./tagApi";

//ブログの型定義
export type BlogResponse = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  tags: TagResponse[];
} & MicroCMSDate;

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await microCMSClient.getList<BlogResponse>({
    endpoint: "blogs",
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await microCMSClient.getListDetail<BlogResponse>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};
