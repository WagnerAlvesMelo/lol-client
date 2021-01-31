import * as S from './styles'

export interface InputProps {
  value: string
  type: string
  placeholder: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  value,
  type = 'text',
  placeholder,
  error,
  onChange
}: InputProps) => (
  <S.Wrapper>
    <S.Input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
    />
    {error && <span>{error}</span>}
  </S.Wrapper>
)

export default Input
