import { createClient } from "microcms-js-sdk";

if (!process.env.MICRO_CMS_SERVICE_ID) {
  throw new Error("MICRO_CMS_SERVICE_ID is required");
}

if (!process.env.MICRO_CMS_API_KEY) {
  throw new Error("MICRO_CMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const microCMSClient = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_ID,
  apiKey: process.env.MICRO_CMS_API_KEY,
});
