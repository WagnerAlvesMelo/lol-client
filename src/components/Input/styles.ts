import styled, { css } from 'styled-components'
import { InputProps } from '.'

export const Wrapper = styled.div``

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    width: min(30rem, 100%);
    height: 4.8rem;
    border: none;
    outline: none;
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding-left: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family};

    &::placeholder {
      color: ${theme.colors.primary};
    }
  `}
`
