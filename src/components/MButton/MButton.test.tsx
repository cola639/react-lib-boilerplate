import React from 'react'
import { render, screen } from '@testing-library/react'

import { MButton } from './MButton'

describe('<MButton />', () => {
  it('Should handle label as props', () => {
    render(<MButton label="click me"></MButton>)
    const button = screen.getByRole('mbutton')
    // expect(button).toHaveProperty("label");
  })
})
