import * as ToastPrimitive from '@radix-ui/react-toast';

import { styled } from "../../styles";

export const ToastViewPort = styled(ToastPrimitive.Viewport, {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',

    listStyle: 'none',
    zIndex: 100,
    outline: 'none',

    maxWidth: '100vw',
    width: '22.5rem',
    height: '5.125rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
})

export const ToastContainer = styled(ToastPrimitive.Root, {
    backgroundColor: '$gray800',
    border: '1px solid $gray600',
    borderRadius: '$sm',

    padding: '0.75rem 1.25rem',

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export const ToastTitle = styled(ToastPrimitive.Title, {
    fontSize: '$xl',
    fontWeight: '$medium',
    fontFamily: '$default',
    color: '$white',

    lineHeight: '2rem',
})

export const ToastClose = styled(ToastPrimitive.Close, {
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',

    svg: {
        color: '$gray200',
    }
})

export const ToastDescription = styled(ToastPrimitive.Description, {
    fontSize: '$sm',
    fontWeight: '$regular',
    fontFamily: '$default',
    color: '$gray200',

    lineHeight: '1.375rem',
})