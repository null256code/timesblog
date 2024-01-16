import { MicroCMSDate, MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";
import { TagResponse } from "./tagApi";

const ENDPOINT = "posts";

//ブログの型定義
export type PostResponse = {
  id: string;
  title: string;
  content: string;
  eyecatch?: MicroCMSImage;
  tags: TagResponse[];
} & MicroCMSDate;

// ブログ一覧を取得
export const getPostList = async (queries?: MicroCMSQueries) => {
  const listData = await microCMSClient.getList<PostResponse>({
    endpoint: ENDPOINT,
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getPostDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  const detailData = await microCMSClient.getListDetail<PostResponse>({
    endpoint: ENDPOINT,
    contentId,
    queries,
  });

  return detailData;
};
