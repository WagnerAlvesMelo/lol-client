import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  width: min(60rem, 100%);
  display: flex;
  flex-direction: column;

  button {
    align-self: center;
  }
`

export const ProvidersContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${theme.spacings.xxsmall};
  `}
`
