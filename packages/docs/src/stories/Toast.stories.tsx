import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@henrique999-ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    accessibilityLabel: 'Notificação',
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
    isOpen: false,
    onOpenChange: () => console.log('hello world')
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}