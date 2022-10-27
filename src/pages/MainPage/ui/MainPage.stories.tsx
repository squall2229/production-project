import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;


const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...(args as typeof MainPage)} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]

