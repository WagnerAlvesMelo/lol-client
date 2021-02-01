import { useState } from 'react'
import * as S from './styles'

export interface InputProps {
  value?: string
  name: string
  type?: string
  placeholder?: string
  error?: string
  onInput?: (value: string) => void
}

const Input = ({
  value = '',
  type = 'text',
  placeholder,
  error,
  name,
  onInput
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setInputValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Wrapper>
      <S.Input
        aria-label="TextField"
        type={type}
        value={inputValue}
        placeholder={placeholder}
        onChange={onChange}
        error={error}
        name={name}
      />
      {error && <span>{error}</span>}
    </S.Wrapper>
  )
}

export default Input
