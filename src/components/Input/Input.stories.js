import React from 'react'

import Input from './Input'

const StoryInput = {
  title: 'COMPONENTS/Input',
  component: Input
}

export default StoryInput

const Template = (args) => <Input {...args} />

export const Medium = Template.bind({})

export const Small = Template.bind({})
Small.args = {
  size: 'small',
  placeholder: 'small email input'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  placeholder: 'large email input'
}

export const Email = Template.bind({})
Email.args = {
  type: 'email',
  placeholder: 'Enter your email'
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: 'Enter your contact no'
}

export const WithError = Template.bind({})
WithError.args = {
  error: true,
  placeholder: 'Email input error'
}
