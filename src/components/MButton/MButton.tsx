import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { MButtonProps } from './MButton.types'

export const MButton = ({ label, ...rest }: MButtonProps) => (
  <MuiButton {...rest}>{label}自定义MButton</MuiButton>
)

MButton.defaultProps = {
  variant: 'contained',
  size: 'medium',
  color: 'primary'
}
