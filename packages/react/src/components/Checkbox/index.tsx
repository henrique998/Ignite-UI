import { ComponentProps } from 'react'
import { Check } from 'phosphor-react'
import { CheckBoxContainer, CheckBoxIndicator } from './styles'

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {}

export function CheckBox({ ...rest }: CheckBoxProps) {
  return (
    <CheckBoxContainer {...rest}>
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  )
}

CheckBox.displayName = 'CheckBox'
