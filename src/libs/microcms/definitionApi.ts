import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";
import { microCMSClient } from "./microcms-client";

const ENDPOINT = "definition";

export type DefinitionResponse = {
  profile: Profile;
} & MicroCMSDate;

export type Profile = {
  userName: string;
  userImage?: MicroCMSImage | undefined;
  description?: string | undefined;
} & MicroCMSDate;

export const getDefinition = async () => {
  const data = await microCMSClient.getObject<DefinitionResponse>({
    endpoint: ENDPOINT,
  });
  return data;
};
