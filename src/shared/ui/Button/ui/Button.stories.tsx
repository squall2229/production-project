import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { ButtonTheme } from '..';

import { Button } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});

Clear.args = {
  children: 'Text',
  theme: ButtonTheme.CLEAR
};


export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED
};

export const OutlinedDark = Template.bind({});

OutlinedDark.args = {
  children: 'Text',
  theme: ButtonTheme.OUTLINED
};

OutlinedDark.decorators = [
  ThemeDecorator(Theme.DARK)
]

