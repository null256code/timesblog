import AppSidebar from "@/components/AppSidebar";
import { Meta, StoryObj } from "@storybook/react";
import { MicroCMSDate } from "microcms-js-sdk";

const mockDate = {
  createdAt: "2024-01-01",
  updatedAt: "2024-01-01",
} satisfies MicroCMSDate;

const meta = {
  title: "AppSidebar",
  component: AppSidebar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AppSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    profile: {
      userName: "ユーザー名",
      description:
        "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
      ...mockDate,
    },
    tagListProps: {
      tags: [
        {
          tagName: "サンプル1 (1)",
          link: "https://localhost:3000/",
        },
        {
          tagName: "サンプル2 (999)",
          link: "https://localhost:3000/",
        },
        {
          tagName: "あああああああああ (54)",
          link: "https://localhost:3000/",
        },
      ],
    },
  },
};
