import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ReactNode } from 'react';

import { TooltipArrow, TooltipContent } from './styles'

export interface TooltipProps {
    children: ReactNode
    content: string
}    

export function Tooltip({ children, content }: TooltipProps) {
    return (
        <TooltipPrimitive.Provider>
            <TooltipPrimitive.Root>
                <TooltipContent>
                    {content}

                    <TooltipArrow />
                </TooltipContent>

                <TooltipPrimitive.Trigger asChild>
                    {children}
                </TooltipPrimitive.Trigger>
            </TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    )
}