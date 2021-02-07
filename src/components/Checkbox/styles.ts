import styled, { css, DefaultTheme } from 'styled-components'
import { CheckboxProps } from '.'

const wrapperModifiers = {
  checked: (theme: DefaultTheme) => css`
    ${Label} {
      color: ${theme.colors.primary};
    }
    ${Input}:before {
      background-color: ${theme.colors.red};
    }
  `
}

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.secondary};
    font-weight: ${theme.font.bold};
  `}
`

export const Input = styled.input.attrs({ type: 'checkbox' })`
  ${({ theme }) => css`
    position: relative;
    cursor: pointer;

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      top: -1px;
      left: -2px;
      border-radius: ${theme.border.radius};
      background-color: ${theme.colors.secondary};
    }
    &:checked:after {
      content: '';
      display: block;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 5px;
    }
  `}
`

export const Wrapper = styled.div<CheckboxProps>`
  ${({ theme, isChecked }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
    ${isChecked && wrapperModifiers.checked(theme)}
  `}
`
