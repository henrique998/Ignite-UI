import type { StoryObj, Meta } from '@storybook/react'
import { Tooltip, TooltipProps } from '@henrique999-ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    children: <span>21</span>,
    content: '21 de Outubro - Indisponível'
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}