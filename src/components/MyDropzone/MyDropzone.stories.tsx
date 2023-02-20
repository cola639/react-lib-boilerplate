import React from 'react'
import { Meta } from '@storybook/react'

import MyDropzone from '.'

export default {
  title: 'MyDropzone',
  component: MyDropzone
} as Meta

const Template = args => <MyDropzone {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: 'primary'
}
