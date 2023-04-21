import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Main = Template.bind({});
Main.decorators = [StoreDecorator({
    user: {
        authData: {
            id: '1',
            password: '123',
            username: 'admin',
        },
    },
}),
];
Main.args = {};
