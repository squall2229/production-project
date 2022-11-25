import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import { Text, TextTheme } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    title: "Title",
    text: "text",
};

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
    title: "Title",
};

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: "text",
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    title: "Title",
    text: "text",
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});

OnlyTitleDark.args = {
    title: "Title",
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});

OnlyTextDark.args = {
    text: "text",
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});

Error.args = {
    title: "Title",
    text: "text",
    theme: TextTheme.ERROR,
};
