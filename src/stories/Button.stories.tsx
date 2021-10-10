import { Meta, Story } from '@storybook/react';
import Button from 'components/Elements/Button';
import { ButtonProps } from 'components/Elements/Button/interface';
import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';
// Button.stories.ts | Button.stories.tsx

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Provider store={store}>
    <Button {...args} />
  </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
