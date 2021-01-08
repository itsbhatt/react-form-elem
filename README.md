# react-form-elem

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-form-elem.svg)](https://www.npmjs.com/package/react-form-elem) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-form-elem
```

## Usage

```jsx
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

const Index = () => {
  return (
    <div>
      <h3>Select</h3>
      <div>
        <SelectTemplate />
      </div>
      <br />
      <br />
      <h3>Input Email</h3>
      <div>
        <Input placeholder='please enter email' />
      </div> <br />
      <h3>Input Number</h3>
      <div>
        <Input type='number' placeholder='you can only input numbers' />
      </div>
    </div>
  )
}
```

## License

MIT © [ItsBhatt](https://github.com/ItsBhatt)
