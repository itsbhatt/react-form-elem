import React from 'react';

import Input from './Input';

const StoryInput = {
  title: 'COMPONENTS/Input',
  component: Input,
};

export default StoryInput;

const Template = (args) => (
  <Input {...args} placeholder={args.placeholder || 'Write Something'} />
);

export const Medium = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const TypeEmail = Template.bind({});
TypeEmail.args = {
  type: 'email',
  placeholder: 'Enter your email',
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
};
