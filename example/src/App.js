import React, { useState } from 'react'

import { Select, Input } from 'react-form-elem'

const listOptions = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' }
]

const SelectTemplate = () => {
  const [value, setValue] = useState(listOptions[0])
  return (
    <Select
      value={value}
      options={listOptions}
      placeholder='Select option'
      onChange={(option) => {
        setValue(option)
      }}
    />
  )
}

const App = () => {
  return (
    <div>
      <h3>Select</h3>
      <div>
        <SelectTemplate />
      </div>
      <br />
      <br />
      <h3>Input</h3>
      <div>
        <Input placeholder='please enter email' />
      </div>
    </div>
  )
}

export default App
