import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
    return <LoginForm {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: {
            username: "123",
            password: "123",
        },
    }),
];

export const Erorr = Template.bind({});

Erorr.args = {};
Erorr.decorators = [
    StoreDecorator({
        loginForm: {
            username: "123",
            password: "123",
            error: "error",
        },
    }),
];

export const Loading = Template.bind({});

Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
