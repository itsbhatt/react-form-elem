function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import Input from './Input';
const StoryInput = {
  title: 'COMPONENTS/Input',
  component: Input
};
export default StoryInput;

const Template = args => /*#__PURE__*/React.createElement(Input, _extends({}, args, {
  placeholder: args.placeholder || 'Write Something'
}));

export const Medium = Template.bind({});
export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
export const Large = Template.bind({});
Large.args = {
  size: 'large'
};
export const TypeEmail = Template.bind({});
TypeEmail.args = {
  type: 'email',
  placeholder: 'Enter your email'
};
export const WithError = Template.bind({});
WithError.args = {
  error: true
};