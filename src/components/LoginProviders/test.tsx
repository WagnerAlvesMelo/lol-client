import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

import LoginProviders from '.'

describe('<LoginProviders />', () => {
  it('should render the button', () => {
    renderWithTheme(<LoginProviders />)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should apply hover style', () => {
    renderWithTheme(<LoginProviders />)

    expect(screen.getByRole('button')).toHaveStyleRule(
      'background-color',
      '#EDEDED',
      {
        modifier: ':hover'
      }
    )
  })

  it('should trigger an event on click', () => {
    const onClick = jest.fn()
    renderWithTheme(<LoginProviders onClick={onClick} />)

    userEvent.click(screen.getByRole('button'))

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
