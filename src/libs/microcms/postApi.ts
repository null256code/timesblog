import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";
import { TagResponse } from "./tagApi";
import { notFound } from "next/navigation";

const ENDPOINT = "posts";

//ブログの型定義
export type PostContentId = MicroCMSContentId["id"];
export type PostResponse = {
  id: PostContentId;
  title?: string;
  content: string;
  eyecatch?: MicroCMSImage;
  tags: TagResponse[];
  rootPost?: PostResponse;
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
  contentId: PostContentId,
  queries?: MicroCMSQueries,
) => {
  const detailData = await microCMSClient
    .getListDetail<PostResponse>({
      endpoint: ENDPOINT,
      contentId,
      queries,
    })
    .catch(() => notFound());

  return detailData;
};
