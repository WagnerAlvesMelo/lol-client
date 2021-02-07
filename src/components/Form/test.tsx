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
    const { getByPlaceholderText, getByLabelText } = renderWithTheme(
      <Form onSubmit={mockOnSubmit} />
    )

    await act(async () => {
      fireEvent.change(getByPlaceholderText(/username/i), {
        target: { value: 'aaa' }
      })
      fireEvent.change(getByPlaceholderText(/password/i), {
        target: { value: '123' }
      })
    })

    await act(async () => {
      fireEvent.click(getByLabelText('submit-button'))
    })

    expect(mockOnSubmit).toBeCalled()
  })

  it('should show error on submit', async () => {
    const mockOnSubmit = jest.fn()
    const { getByPlaceholderText, getByLabelText } = renderWithTheme(
      <Form onSubmit={mockOnSubmit} />
    )

    await act(async () => {
      fireEvent.change(getByPlaceholderText(/password/i), {
        target: { value: '123' }
      })
    })

    await act(async () => {
      fireEvent.click(getByLabelText('submit-button'))
    })

    expect(mockOnSubmit).not.toBeCalled()
    expect(
      screen.queryByText(/username is a required field/i)
    ).toBeInTheDocument()
  })
})
