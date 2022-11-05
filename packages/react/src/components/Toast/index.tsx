import * as ToastPrimitive from '@radix-ui/react-toast';
import { X } from 'phosphor-react';
import { ToastClose, ToastContainer, ToastDescription, ToastTitle, ToastViewPort } from './styles';

export interface ToastProps {
    accessibilityLabel?: string
    title: string
    description: string
    isOpen?: boolean
    onOpenChange: (isOpen: boolean) => void 
}

export function Toast({ 
    accessibilityLabel,
    title, 
    description, 
    isOpen = true, 
    onOpenChange 
}: ToastProps) {
    return (
        <ToastPrimitive.Provider 
            swipeDirection="right" 
            label={accessibilityLabel}
        >
            <ToastContainer 
                open={isOpen} 
                onOpenChange={onOpenChange}
            >
                <header>
                    <ToastTitle>
                        {title}
                    </ToastTitle>

                    <ToastClose>
                        <X size={20} />
                    </ToastClose>
                </header>

                <ToastDescription asChild>
                    <time>{description}</time>
                </ToastDescription>
            </ToastContainer>

            <ToastViewPort />
        </ToastPrimitive.Provider>
    )
}