import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input
} as Meta

export const Basic: Story<InputProps> = (args) => <Input {...args} />

export const WithError: Story<InputProps> = (args) => <Input {...args} />
WithError.args = {
  ...args,
  error: true
}
