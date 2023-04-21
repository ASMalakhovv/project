import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Main = Template.bind({});
Main.args = {
    title: 'Title',
    text: 'Description text',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Description text',
};

export const MainDark = Template.bind({});
MainDark.decorators = [ThemeDecorator(Theme.DARK)];
MainDark.args = {
    title: 'Title',
    text: 'Description text',
};

export const onlyTitleDark = Template.bind({});
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTitleDark.args = {
    title: 'Title',
};

export const onlyTextDark = Template.bind({});
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
onlyTextDark.args = {
    text: 'Description text',
};

export const MainError = Template.bind({});
MainError.args = {
    title: 'Title',
    text: 'Description text',
    theme: 'error',
};

export const onlyTitleError = Template.bind({});
onlyTitleError.args = {
    title: 'Title',
    theme: 'error',
};

export const onlyTextError = Template.bind({});
onlyTextError.args = {
    text: 'Description text',
    theme: 'error',
};

export const MainDarkError = Template.bind({});
MainDarkError.decorators = [ThemeDecorator(Theme.DARK)];
MainDarkError.args = {
    title: 'Title',
    text: 'Description text',
    theme: 'error',
};

export const onlyTitleDarkError = Template.bind({});
onlyTitleDarkError.decorators = [ThemeDecorator(Theme.DARK)];
onlyTitleDarkError.args = {
    title: 'Title',
    theme: 'error',
};

export const onlyTextDarkError = Template.bind({});
onlyTextDarkError.decorators = [ThemeDecorator(Theme.DARK)];
onlyTextDarkError.args = {
    text: 'Description text',
    theme: 'error',
};
