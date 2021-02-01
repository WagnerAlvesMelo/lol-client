import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should set checked on click', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox name="checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should set unchecked on click', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox name="checkbox" onCheck={onCheck} isChecked />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(1))
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should not execute onCheck if is not passed', async () => {
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox name="checkbox" />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => expect(onCheck).toHaveBeenCalledTimes(0))
    expect(onCheck).not.toHaveBeenCalled()
  })

  it('should be rendered with label', async () => {
    renderWithTheme(<Checkbox name="Checkbox" />)
    const input = screen.getByLabelText(/manter login/i)

    expect(input).toBeInTheDocument()
  })

  it('should be rendered with gray label', async () => {
    renderWithTheme(<Checkbox name="Checkbox" />)

    const checkboxLabel = screen.getByLabelText(/manter login/i)
    expect(checkboxLabel).toHaveStyle('color: #EDEDED')
  })

  it('should be have black label', async () => {
    renderWithTheme(<Checkbox name="Checkbox" isChecked={true} />)

    const checkboxLabel = screen.getByLabelText(/manter login/i)
    expect(checkboxLabel).toHaveStyle('color: #303233')
  })
})
