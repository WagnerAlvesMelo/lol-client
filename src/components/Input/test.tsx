import { screen } from '@testing-library/react'

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

  // it('Changes its value when typing', async () => {
  //   const { register } = useForm()
  //   renderWithTheme(<Input register={register} name="TextField" />)

  //   const input = screen.getByRole('textbox')

  //   const text = 'This is my new text'

  //   userEvent.type(input, text)

  //   await waitFor(() => {
  //     expect(input).toHaveValue(text)
  //   })
  // })
})
