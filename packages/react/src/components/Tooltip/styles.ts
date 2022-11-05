import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { styled } from "../../styles";

export const TooltipContent = styled(TooltipPrimitive.Content, {
    padding: '0.75rem 1rem',
    borderRadius: '$sm',
    backgroundColor: '$gray900',
    color: '$gray100',

    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$medium',
    lineHeight: '$short',

    textAlign: 'center',

    filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',
})

export const TooltipArrow = styled(TooltipPrimitive.Arrow, {
    fill: '$gray900',
})