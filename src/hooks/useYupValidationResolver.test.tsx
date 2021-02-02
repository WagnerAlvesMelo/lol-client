import { renderHook } from '@testing-library/react-hooks'
import { useYupValidationResolver } from './useYupValidationResolver'
import * as yup from 'yup'

test('should use yup validation resolver', async () => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.number().required()
  })

  const { result } = renderHook(() =>
    useYupValidationResolver(schema)({
      username: 'a'
    })
  )

  expect(await (await result.current).errors.password.message).toEqual(
    'password is a required field'
  )

  expect(await (await result.current).errors.password.type).toEqual('required')
})

test('should use pass if validation is ok', async () => {
  const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.number().required()
  })

  const { result } = renderHook(() =>
    useYupValidationResolver(schema)({
      username: 'a',
      password: 123
    })
  )

  expect(await (await result.current).errors).toEqual({})
})
