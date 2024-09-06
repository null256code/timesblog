import { MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";
import { MQ } from "./microcms-query";

const ENDPOINT = "tags";

export type TagResponse = {
  tagKey: string;
  tagName: string;
  isVisibleInMenu: boolean;
} & MicroCMSDate;

const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await microCMSClient.getList<TagResponse>({
    endpoint: ENDPOINT,
    queries,
  });

  return listData;
};

export const getMenuTagList = async () => {
  return getTagList({
    filters: MQ.equals<TagResponse>("isVisibleInMenu", true),
  });
};

export const getTagDetailByTagKey = async (tagKey: string) => {
  const filterQuery = [
    MQ.equals<TagResponse>("tagKey", tagKey),
    MQ.equals<TagResponse>("isVisibleInMenu", true),
  ].join("[and]"); // TODO: MQに[and]も移したい
  const response = await microCMSClient.getList<TagResponse>({
    endpoint: ENDPOINT,
    queries: {
      filters: filterQuery,
      limit: 1,
    },
  });

  return response.contents[0];
};
