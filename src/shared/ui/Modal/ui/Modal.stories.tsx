import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Modal } from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: "Text",
    isOpen: true,
};

export const Dark = Template.bind({});

Dark.args = {
    children: "Text",
    isOpen: true,
};

Dark.decaorator = [ThemeDecorator(Theme.DARK)];
