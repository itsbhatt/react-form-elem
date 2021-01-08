function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useState } from 'react';
import Select from './Select';
const StorySelect = {
  title: 'COMPONENTS/Select',
  component: Select
};
export default StorySelect;
const listOptions = [{
  label: 'Item 1',
  value: 'item-1'
}, {
  label: 'Item 2',
  value: 'item-2'
}, {
  label: 'Item 3',
  value: 'item-3'
}];

const Template = args => {
  const [value, setValue] = useState(listOptions[0]);
  return /*#__PURE__*/React.createElement(Select, _extends({}, args, {
    value: value,
    options: listOptions,
    placeholder: "Select option",
    onChange: option => {
      setValue(option);
    }
  }));
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};
export const Small = Template.bind({});
Small.args = {
  size: 'small'
};
export const Large = Template.bind({});
Large.args = {
  size: 'large'
};