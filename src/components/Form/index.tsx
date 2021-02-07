import Input from 'components/Input'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as S from './styles'
import * as yup from 'yup'
import { useYupValidationResolver } from 'hooks/useYupValidationResolver'
import LoginButton from 'components/LoginButton'
import Checkbox from 'components/Checkbox'
import LoginProviders from 'components/LoginProviders'

type FormData = {
  username: string
  password: string
}

type FormTypes = {
  onSubmit?: SubmitHandler<FormData>
}

export const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.number().required()
})

const Form = ({ onSubmit }: FormTypes) => {
  const resolver = useYupValidationResolver(loginSchema)
  const { register, handleSubmit, errors } = useForm<FormData>({ resolver })

  return (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    <S.Wrapper aria-label="login-form" onSubmit={handleSubmit(onSubmit!)}>
      <Input
        name="username"
        placeholder="USERNAME"
        register={register}
        error={errors.username?.message}
      />
      <Input
        name="password"
        type="password"
        placeholder="PASSWORD"
        register={register}
        error={errors.password?.message}
      />
      <S.ProvidersContainer>
        <LoginProviders image="/img/google.svg" />
        <LoginProviders image="/img/google.svg" />
        <LoginProviders image="/img/google.svg" />
      </S.ProvidersContainer>
      <Checkbox />
      <LoginButton aria-label="submit-button" type="submit" />
    </S.Wrapper>
  )
}

export default Form
