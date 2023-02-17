import React from 'react'
import { Story, Meta } from '@storybook/react'

import MButton from './index'
import { MButtonProps } from './MButton.types'

export default {
  title: 'MButton',
  component: MButton
} as Meta

const Template: Story<MButtonProps> = args => <MButton {...args} />

export const Default = Template.bind({}) as Story<MButtonProps>
Default.args = {
  variant: 'contained',
  size: 'medium',
  color: 'primary',
  label: 'Primary'
}

export const Secondary = Template.bind({}) as Story<MButtonProps>
Secondary.args = {
  variant: 'text',
  size: 'medium',
  color: 'secondary',
  label: 'Success'
}
