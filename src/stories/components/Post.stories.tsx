import Post from "@/components/Post";
import { Meta, StoryObj } from "@storybook/react";
import { MicroCMSDate } from "microcms-js-sdk";

const sampleBody = (
  <>
    <p>ブログを作った。</p>
    <p>
      去年からNext.jsの勉強がてら作ってみるかと、チュートリアルをやりながらズルズル作ったり放置したりして今完成した。
      <br />
      一応コンセプトがあり、Slackのtimesチャンネルのような極力記事の投稿するハードルが下がるようなメモ書きのようなブログにしたいと思っている。
    </p>
    <p>
      普段の自分のtimesチャンネルから、残した方が良さそうだなというものをこっちに転記するというような使い方をする、かも。
    </p>
  </>
);

const mockDate = {
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
} satisfies MicroCMSDate;

const sampleTags = [
  {
    tagKey: "sample1",
    tagName: "サンプル1",
    isVisibleInMenu: true,
    ...mockDate,
  },
  {
    tagKey: "sample2",
    tagName: "サンプル2",
    isVisibleInMenu: false,
    ...mockDate,
  },
];

const meta = {
  title: "Post",
  component: Post,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Post>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    children: sampleBody,
    title: "ブログを作った",
    postedTime: new Date(),
    tags: sampleTags,
    contentId: "TEST",
  },
};

export const NoTitle: Story = {
  args: {
    children: sampleBody,
    postedTime: new Date(),
    tags: sampleTags,
    contentId: "TEST",
  },
};

export const ChildPost: Story = {
  args: {
    children: sampleBody,
    postedTime: new Date(),
    tags: sampleTags,
    contentId: "TEST",
    rootPost: {
      contentId: "TEST",
      title: "親投稿タイトル",
    },
  },
};
