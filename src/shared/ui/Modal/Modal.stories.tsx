import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Main = Template.bind({});
Main.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur doloribus exercitationem facilis laboriosam nulla quod ratione reiciendis sunt veritatis voluptates!',
};
