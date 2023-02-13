import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    display: 'flex',
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    justifyContent: 'space-between',
    position: 'relative',
})

export const InfoDiv = styled('div', {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',

    span: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1rem',
        fontWeight: '400',
        color: '$gray100',
        opacity: '0.8',
        marginBottom: '.5rem'
    },

    strong: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.5rem',
        fontWeight: '700',
        lineHeight: '160%',
        color: '$gray100'
    }
})

export const BagItems = styled('div', {
    display: 'flex',
    flexDirection: 'column'
})

export const Cart = styled('div', {
    width: '30rem',
    backgroundColor: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    position: 'absolute',
    zIndex: 1,
    top: '0%',
    right: '0%',
    transform: 'translateX(200px)',
    padding: '3rem',
    borderRadius: 6,

    h1: {
        margin: '2rem 0'
    },

    footer: {
        marginTop: 'auto',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        button: {
            width: '90%',
            marginTop: '3.75rem',
            backgroundColor: '$green500',
            border: 0,
            color: '$white',
            borderRadius: 8,
            padding: '1.25rem',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '$md',

            '&:disabled': {
                opacity: 0.6,
                cursor: 'not-allowed'
            },

            '&:not(disabled):hover': {
                backgroundColor: '$green300',
            }
        }
    }

})

export const BagButton = styled('button', {
    widith: '100%',
    backgroundColor: '$gray800',
    padding: '.8rem',
    borderRadius: 6,
    border: 0,
    cursor: 'pointer',

    svg: {
        color: '$gray100'
    }
})

export const CloseButton = styled('button', {
    border: 0,
    background: 'transparent',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    
    img: {
        objectFit: 'cover'
    }
})