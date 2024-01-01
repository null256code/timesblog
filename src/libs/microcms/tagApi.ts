import { MicroCMSDate, MicroCMSQueries } from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";

export type TagResponse = {
  tagKey: string;
  tagName: string;
  isVisibleInMenu: boolean;
} & MicroCMSDate;

const getTagList = async (queries?: MicroCMSQueries) => {
  const listData = await microCMSClient.getList<TagResponse>({
    endpoint: "tags",
    queries,
  });

  return listData;
};

const keyOfIsVisibleInMenu: keyof TagResponse = 'isVisibleInMenu'
export const getMenuTagList = async () => {
  return getTagList({
    filters: `${keyOfIsVisibleInMenu}[equals]true`
  })
};