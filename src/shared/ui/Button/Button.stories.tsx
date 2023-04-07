import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: 'clear',
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: 'outline',
};

export const OutlineSizeSmall = Template.bind({});
OutlineSizeSmall.args = {
    children: '+',
    theme: 'outline',
    size: 'small'
};

export const OutlineSizeMedium = Template.bind({});
OutlineSizeMedium.args = {
    children: '+',
    theme: 'outline',
    size: 'medium'
};

export const OutlineSizeMaxContent = Template.bind({});
OutlineSizeMaxContent.args = {
    children: 'TestingMaxContent',
    theme: 'outline',
    size: 'maxContent'
};

export const OutlineSizeLarge = Template.bind({});
OutlineSizeLarge.args = {
    children: '+',
    theme: 'outline',
    size: 'large'
};

export const OutlineDark = Template.bind({});
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
OutlineDark.args = {
    children: 'Button',
    theme: 'outline',
};

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button',
    theme: 'background',
};

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Button',
    theme: 'backgroundInverted',
};

export const Square = Template.bind({});
Square.args = {
    children: '+',
    square: true,
    theme: 'backgroundInverted'
};

export const SquareSizeSmall = Template.bind({});
SquareSizeSmall.args = {
    children: '+',
    square: true,
    size: 'small',
    theme: 'backgroundInverted'
};

export const SquareSizeMedium = Template.bind({});
SquareSizeMedium.args = {
    children: '+',
    square: true,
    size: 'medium',
    theme: 'backgroundInverted'
};

export const SquareSizeLarge = Template.bind({});
SquareSizeLarge.args = {
    children: '+',
    square: true,
    size: 'large',
    theme: 'backgroundInverted'
};
