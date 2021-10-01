import { Meta, Story } from '@storybook/react';
import Button from 'components/Elements/Button';
import { ButtonProps } from 'components/Elements/Button/interface';
import React from 'react';
// Button.stories.ts | Button.stories.tsx

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Button',
};
