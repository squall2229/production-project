import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import AboutPage from './AboutPage';

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;


const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...(args as typeof AboutPage)} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]

