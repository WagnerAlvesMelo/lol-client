import { Story, Meta } from '@storybook/react/types-6-0'
import LoginProviders from '.'

export default {
  title: 'LoginProviders',
  component: LoginProviders
} as Meta

export const Default: Story = () => (
  <LoginProviders image="/img/google.svg"></LoginProviders>
)
