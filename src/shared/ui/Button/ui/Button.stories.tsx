import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { ButtonTheme } from "..";

import { Button, ButtonSize } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: "Text",
};

export const Clear = Template.bind({});

Clear.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});

ClearInverted.args = {
    children: "Text",
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outlined = Template.bind({});

Outlined.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINED,
};

export const OutlinedDark = Template.bind({});

OutlinedDark.args = {
    children: "Text",
    theme: ButtonTheme.OUTLINED,
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlinedSizeL = Template.bind({});

OutlinedSizeL.args = {
    children: "Text",
    size: ButtonSize.L,
    theme: ButtonTheme.OUTLINED,
};

export const OutlinedSizeXL = Template.bind({});

OutlinedSizeXL.args = {
    children: "Text",
    size: ButtonSize.XL,
    theme: ButtonTheme.OUTLINED,
};

export const Background = Template.bind({});

Background.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND,
};

export const InvertedBackground = Template.bind({});

InvertedBackground.args = {
    children: "Text",
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});

Square.args = {
    children: ">",
    square: true,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeL = Template.bind({});

SquareSizeL.args = {
    children: ">",
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const SquareSizeXL = Template.bind({});

SquareSizeXL.args = {
    children: ">",
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};

export const Disabled = Template.bind({});

Disabled.args = {
    children: "Text",
    disabled: true,
    theme: ButtonTheme.OUTLINED,
};
