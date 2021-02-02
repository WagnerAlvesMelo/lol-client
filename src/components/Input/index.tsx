import { FieldError } from 'react-hook-form'

import * as S from './styles'

export interface InputProps {
  value?: string
  name: string
  type?: string
  placeholder?: string
  error?: string | FieldError
  register?: (instance: HTMLInputElement | null) => void
}

const Input = ({
  type = 'text',
  placeholder,
  error,
  name,
  register
}: InputProps) => {
  return (
    <S.Wrapper>
      <S.Input
        aria-label="TextField"
        type={type}
        placeholder={placeholder}
        error={error}
        ref={register}
        name={name}
      />
      {error && <span>{error}</span>}
    </S.Wrapper>
  )
}

export default Input
