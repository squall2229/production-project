import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";

import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...(args as typeof ProfilePage)} />
);

export const Light = Template.bind({});

Light.decorators = [
    StoreDecorator({
        profile: {},
    }),
];

export const Dark = Template.bind({});

Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {},
    }),
];
