import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Input } from "./Input";

export default {
    title: "shared/Input",
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = useState("Text");
    return (
        <Input
            {...args}
            onChange={(v) => {
                setValue(v);
            }}
            value={value}
        />
    );
};

export const Primary = Template.bind({});

Primary.args = {
    placeholder: "placeholder",
    value: "Text",
};
