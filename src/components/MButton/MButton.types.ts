import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

type MButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>

export interface MButtonProps extends MButtonBaseProps {
  label: string
}
