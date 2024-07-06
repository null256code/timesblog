import AppHeader from "@/components/AppHeader";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "AppHeader",
  component: AppHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AppHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    toggleSidebarFixed: () => {},
  },
};
