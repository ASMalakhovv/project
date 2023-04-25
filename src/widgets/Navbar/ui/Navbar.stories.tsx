import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProviders';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.decorators = [StoreDecorator({})];
Light.args = {};

export const Dark = Template.bind({});
Dark.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            password: '123',
            username: 'admin',
        },
    },
}), ThemeDecorator(Theme.DARK)];

export const AuthNavbar = Template.bind({});
AuthNavbar.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            username: 'admin',
            password: '123',
        },
    },
})];
AuthNavbar.args = {};
