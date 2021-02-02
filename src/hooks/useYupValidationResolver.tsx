import { useCallback } from 'react'
import { AnyObjectSchema, ValidationError } from 'yup'

export const useYupValidationResolver = (validationSchema: AnyObjectSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        })

        return {
          values,
          errors: {}
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors: ValidationError[], currentError: ValidationError) => ({
              ...allErrors,
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              [currentError.path!]: {
                type: currentError.type ?? 'validation',
                message: currentError.message
              }
            }),
            {}
          )
        }
      }
    },
    [validationSchema]
  )
