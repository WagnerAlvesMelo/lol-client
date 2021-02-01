import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.4rem;
    width: 100%;
    background-color: ${theme.colors.mainBg};
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`

export const IconWrapper = styled.div`
  height: 1.4rem;
  width: 1.4rem;

  img {
    width: 100%;
    height: 100%;
  }
`
