import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

import Input from '.'

describe('<Input />', () => {
  it('should show error', () => {
    renderWithTheme(<Input name="error" error="Um erro ocorreu" />)

    expect(screen.getByText('Um erro ocorreu')).toBeInTheDocument()
  })

  it('should change color with error', () => {
    renderWithTheme(<Input name="error" error="Um erro ocorreu" />)

    expect(screen.getByLabelText('TextField')).toHaveStyle({
      border: '1px solid #FF3232'
    })
  })

  it('should show error', () => {
    renderWithTheme(<Input name="error" error="Um erro ocorreu" />)

    expect(screen.getByText('Um erro ocorreu')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onChange = jest.fn()
    renderWithTheme(<Input onInput={onChange} name="TextField" />)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onChange).toHaveBeenCalledWith(text)
  })
})
