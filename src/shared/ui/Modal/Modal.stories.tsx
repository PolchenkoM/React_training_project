import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat nemo, quos soluta iusto alias distinctio nihil, nostrum doloribus accusamus, voluptate facere quasi veritatis beatae odit. Id, vero dolor! Accusantium?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut repellat nemo, quos soluta iusto alias distinctio nihil, nostrum doloribus accusamus, voluptate facere quasi veritatis beatae odit. Id, vero dolor! Accusantium?',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
