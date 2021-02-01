import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helper'

import LoginButton from '.'

describe('<LoginButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<LoginButton />)

    expect(screen.getByRole('button')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('verify if button action is triggered', async () => {
    const onClick = jest.fn()
    renderWithTheme(<LoginButton onClick={onClick} />)

    expect(onClick).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('button'))
    await waitFor(() => expect(onClick).toHaveBeenCalledTimes(1))
  })
})
