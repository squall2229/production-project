import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import {NotFoundPage} from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;


const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...(args as typeof NotFoundPage)} />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [
  ThemeDecorator(Theme.DARK),
]

