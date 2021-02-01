import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.secondary};
    background-color: transparent;
    width: 3.4rem;
    height: 3.4rem;
    outline: none;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.red};
      border-color: ${theme.colors.red};

      svg {
        fill: ${theme.colors.mainBg};
      }
    }

    svg {
      fill: ${theme.colors.secondary};
    }
  `}
`
