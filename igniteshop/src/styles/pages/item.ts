import { styled } from ".."

export const Container = styled('div', {
    display: 'flex',
    gap: '1.2rem',
    width: '100%',
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 94,
    height: 94,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 6,

    img: {
        objectFit: 'cover'
    }
})

export const ProductInfo = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',

    marginBottom: '3rem',

    span: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.25rem',
        fontWeight: 'normal', 
        color: '$gray300',
    },

    strong: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.25rem',
        fontWeight: 'bold', 
        color: '$gray100',
    },

    button: {
        border: 0, 
        backgroundColor: 'transparent',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.125rem',
        fontWeight: 'normal', 
        color: '$green500',
        cursor:'pointer',
        marginTop: '.7rem'
    }
})