import { fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { renderWithTheme } from 'utils/tests/helper'

import Form from '.'

describe('<Form />', () => {
  it('should render the form', () => {
    renderWithTheme(<Form />)
    expect(screen.getByLabelText('login-form')).toBeInTheDocument()
  })

  it('should send values on submit', async () => {
    const mockOnSubmit = jest.fn()
    const { getByPlaceholderText, getByRole } = renderWithTheme(
      <Form onSubmit={mockOnSubmit} />
    )

    await act(async () => {
      fireEvent.change(getByPlaceholderText('username'), {
        target: { value: 'aaa' }
      })
      fireEvent.change(getByPlaceholderText('password'), {
        target: { value: '123' }
      })
    })

    await act(async () => {
      fireEvent.click(getByRole('button'))
    })

    expect(mockOnSubmit).toBeCalled()
  })
})
