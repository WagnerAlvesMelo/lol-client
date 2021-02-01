import * as S from './styles'

export type LoginProvidersProps = {
  image?: string
  onClick?: () => void
}

const LoginProviders = ({ image, onClick }: LoginProvidersProps) => (
  <S.Wrapper onClick={onClick}>
    <S.IconWrapper>
      <img src={image} aria-label="Login provider logo" />
    </S.IconWrapper>
  </S.Wrapper>
)

export default LoginProviders
