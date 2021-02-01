import { useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  isChecked?: boolean
  onCheck?: (status: boolean) => void
  name?: string
}

const Checkbox = ({ isChecked, onCheck, name }: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked || false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { checked }
    } = event

    setChecked(checked)

    if (onCheck) {
      onCheck(checked)
    }
  }

  return (
    <S.Wrapper isChecked={checked}>
      <S.Input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        id="checkbox"
        aria-label="checkBox"
      />
      <S.Label aria-label="Manter login">Manter login</S.Label>
    </S.Wrapper>
  )
}

export default Checkbox
