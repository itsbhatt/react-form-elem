import React, { useState } from 'react';

import Select from './Select';

const StorySelect = {
  title: 'COMPONENTS/Select',
  component: Select,
};

export default StorySelect;

const listOptions = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' },
];

const Template = (args) => {
  const [value, setValue] = useState(listOptions[0]);
  return (
    <Select
      {...args}
      value={value}
      options={listOptions}
      placeholder="Select option"
      onChange={(option) => {
        setValue(option);
      }}
    />
  );
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
