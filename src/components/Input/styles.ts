import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const inputModifiers = {
  error: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.red};
  `
}
export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.red};
    }
  `}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Input = styled.input<InputProps>`
  ${({ theme, error }) => css`
    width: min(60rem, 100%);
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
      font-weight: ${theme.font.bold};
    }

    ${error && inputModifiers.error(theme)}
  `}
`
