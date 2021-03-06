import { Story, Meta } from '@storybook/react/types-6-0'
import Form from '.'

export default {
  title: 'Form',
  component: Form
} as Meta

export const Default: Story = () => (
  <Form
    onSubmit={(data) => {
      console.log(data)
    }}
  />
)
